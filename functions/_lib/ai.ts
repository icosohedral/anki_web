export interface Env {
  AI_API_KEY: string;
  AI_BASE_URL?: string;
  AI_MODEL?: string;
}

interface ChatMessage {
  role: "system" | "user";
  content: string;
}

export function json(data: unknown, init: ResponseInit = {}): Response {
  return new Response(JSON.stringify(data), {
    ...init,
    headers: {
      "content-type": "application/json; charset=utf-8",
      ...init.headers,
    },
  });
}

export async function readJson<T>(request: Request): Promise<T> {
  return request.json() as Promise<T>;
}

export async function callAiJson(env: Env, messages: ChatMessage[]) {
  if (!env.AI_API_KEY) {
    throw withStatus(500, "Missing AI_API_KEY.");
  }

  const baseUrl = String(env.AI_BASE_URL || "https://api.deepseek.com/v1").replace(/\/$/, "");
  const model = env.AI_MODEL || "deepseek-chat";

  const response = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${env.AI_API_KEY}`,
    },
    body: JSON.stringify({
      model,
      temperature: 0.2,
      response_format: { type: "json_object" },
      messages,
    }),
  });

  if (!response.ok) {
    throw withStatus(response.status, "AI API request failed", await response.text());
  }

  const data = (await response.json()) as any;
  const raw = data?.choices?.[0]?.message?.content;

  if (!raw) {
    throw withStatus(502, "AI API returned empty content");
  }

  try {
    return JSON.parse(raw);
  } catch {
    throw withStatus(502, "AI API returned invalid JSON", raw);
  }
}

export function withStatus(status: number, error: string, details?: string) {
  const payload = details ? { error, details } : { error };
  return Object.assign(new Error(error), { status, payload });
}
