import { callAiJson, json, readJson, type Env } from "../_lib/ai";

interface PrepareRequest {
  lines?: string[];
  targetLanguage?: string;
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  try {
    const body = await readJson<PrepareRequest>(request);
    const lines = Array.isArray(body.lines)
      ? body.lines.map((item) => String(item || "").trim()).filter(Boolean)
      : [];
    const targetLanguage = String(body.targetLanguage || "目标语言").trim();

    if (lines.length === 0) {
      return json({ error: "lines are required" }, { status: 400 });
    }

    const prompt = [
      "你是语言学习材料整理助手。",
      `请把以下${targetLanguage}句子逐句翻译成自然、简洁的中文提示。`,
      "请严格返回 JSON，不要输出 markdown。",
      '返回格式: {"items":[{"source":"原句","translation":"中文提示"}]}',
      "items 的数量和顺序必须与输入完全一致。",
      "",
      ...lines.map((line, index) => `${index + 1}. ${line}`),
    ].join("\n");

    const parsed = await callAiJson(env, [
      {
        role: "system",
        content: "你是一个严谨的翻译助手，只返回 JSON。",
      },
      {
        role: "user",
        content: prompt,
      },
    ]);

    const items = Array.isArray(parsed.items) ? parsed.items : [];
    if (items.length !== lines.length) {
      return json({ error: "AI returned an invalid number of items" }, { status: 502 });
    }

    return json({
      items: items.map((item, index) => ({
        source: String(item?.source || lines[index]),
        translation: String(item?.translation || ""),
      })),
    });
  } catch (error: any) {
    return json(error?.payload || { error: "Internal server error" }, { status: error?.status || 500 });
  }
};
