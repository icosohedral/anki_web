import { callAiJson, json, readJson, type Env } from "../_lib/ai";

interface CheckRequest {
  translation?: string;
  expectedAnswer?: string;
  userAnswer?: string;
  targetLanguage?: string;
  promptLanguage?: string;
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  try {
    const body = await readJson<CheckRequest>(request);
    const translation = String(body.translation || "").trim();
    const expectedAnswer = String(body.expectedAnswer || "").trim();
    const userAnswer = String(body.userAnswer || "").trim();
    const targetLanguage = String(body.targetLanguage || "目标语言").trim();
    const promptLanguage = String(body.promptLanguage || "Chinese").trim();

    if (!translation || !expectedAnswer || !userAnswer) {
      return json(
        { error: "translation, expectedAnswer and userAnswer are required" },
        { status: 400 },
      );
    }

    const prompt = [
      "你是语言学习纠错助手。",
      `用户看到的是${promptLanguage}提示，目标是回忆${targetLanguage}原句。`,
      "请以标准原句为主要依据，判断用户输入是否正确或足够接近。",
      "评分时优先考虑语义是否一致，其次再看拼写、时态、助词、冠词、单复数、标点。",
      `feedback 和 differences 必须严格使用 ${promptLanguage}。`,
      `除非 ${promptLanguage} 本身就是 Chinese，否则不要用中文解释。`,
      "请严格返回 JSON，不要输出 markdown。",
      '返回格式: {"isCorrect": boolean, "score": number, "expectedAnswer": string, "feedback": string, "differences": string[]}',
      "其中 score 范围 0 到 100。",
      "",
      `提示: ${translation}`,
      `标准原句: ${expectedAnswer}`,
      `用户答案: ${userAnswer}`,
    ].join("\n");

    const parsed = await callAiJson(env, [
      {
        role: "system",
        content: "你是一个严谨但实用的语言学习评分助手，只返回 JSON。",
      },
      {
        role: "user",
        content: prompt,
      },
    ]);

    return json({
      isCorrect: Boolean(parsed.isCorrect),
      score: Number(parsed.score || 0),
      expectedAnswer: String(parsed.expectedAnswer || expectedAnswer),
      feedback: String(parsed.feedback || ""),
      differences: Array.isArray(parsed.differences) ? parsed.differences.map(String) : [],
    });
  } catch (error: any) {
    return json(error?.payload || { error: "Internal server error" }, { status: error?.status || 500 });
  }
};
