# Anki web

这个项目现在已经改成适合部署到 Cloudflare Pages 的结构：

- 静态前端放在 [public/index.html](/Users/icosohedral/Desktop/projects/anki_web/public/index.html)、[public/app.js](/Users/icosohedral/Desktop/projects/anki_web/public/app.js)、[public/style.css](/Users/icosohedral/Desktop/projects/anki_web/public/style.css)
- 后端 API 改成 Cloudflare Pages Functions TypeScript：
  - [functions/api/prepare.ts](/Users/icosohedral/Desktop/projects/anki_web/functions/api/prepare.ts)
  - [functions/api/check.ts](/Users/icosohedral/Desktop/projects/anki_web/functions/api/check.ts)
- 公共 AI 调用逻辑在 [functions/_lib/ai.ts](/Users/icosohedral/Desktop/projects/anki_web/functions/_lib/ai.ts)

## 本地开发

1. 安装依赖

```bash
npm install
```

2. 新建本地环境变量文件

```bash
cp .dev.vars.example .dev.vars
```

3. 编辑 `.dev.vars`

```env
AI_API_KEY=your_deepseek_key_here
AI_BASE_URL=https://api.deepseek.com/v1
AI_MODEL=deepseek-chat
```

4. 启动本地开发

```bash
npm run dev
```

## 部署到 Cloudflare Pages

1. 把仓库推到 GitHub
2. 在 Cloudflare Pages 创建项目并连接这个仓库
3. Build output directory 设为 `public`
4. 在 Pages 项目里配置环境变量：

```text
AI_API_KEY
AI_BASE_URL
AI_MODEL
```

推荐值：

```text
AI_BASE_URL=https://api.deepseek.com/v1
AI_MODEL=deepseek-chat
```

## 安全

- 不要把真实 API key 放进 `config.json`
- 不要把 `.dev.vars` 提交到仓库
- 你之前那个 key 已经暴露过，发布前应该先旋转
