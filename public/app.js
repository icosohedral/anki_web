const state = {
  items: [],
  currentIndex: 0,
  targetLanguage: "日语",
  checkedCurrent: false,
  showSource: false,
  lastScore: null,
  scores: [],
};

const MATERIAL_PLACEHOLDERS = {
  "日语": "こんにちは。\n今日は天気がいいです。\n昨日、図書館に行きました。",
  "英语": "Hello.\nThe weather is nice today.\nI went to the library yesterday.",
  "法语": "Bonjour.\nIl fait beau aujourd'hui.\nJe suis alle a la bibliotheque hier.",
  "西班牙语": "Hola.\nHoy hace buen tiempo.\nAyer fui a la biblioteca.",
  "custom": "Guten Tag.\nHeute ist das Wetter schoen.\nIch bin gestern in die Bibliothek gegangen.",
};

const setupPanel = document.getElementById("setup-panel");
const practicePanel = document.getElementById("practice-panel");
const summaryPanel = document.getElementById("summary-panel");
const materialsInput = document.getElementById("materials-input");
const targetLanguageSelect = document.getElementById("target-language-select");
const customLanguageField = document.getElementById("custom-language-field");
const customLanguageInput = document.getElementById("custom-language-input");
const startButton = document.getElementById("start-button");
const progressText = document.getElementById("progress-text");
const translationText = document.getElementById("translation-text");
const sourceText = document.getElementById("source-text");
const toggleSourceButton = document.getElementById("toggle-source-button");
const closedEyeIcon = toggleSourceButton.querySelector(".eye-icon-closed");
const openEyeIcon = toggleSourceButton.querySelector(".eye-icon-open");
const answerInput = document.getElementById("answer-input");
const checkButton = document.getElementById("check-button");
const nextButton = document.getElementById("next-button");
const resultCard = document.getElementById("result-card");
const summaryTotal = document.getElementById("summary-total");
const summaryAverage = document.getElementById("summary-average");
const summaryPerfect = document.getElementById("summary-perfect");
const summaryMessage = document.getElementById("summary-message");
const retryWrongButton = document.getElementById("retry-wrong-button");
const restartButton = document.getElementById("restart-button");

startButton.addEventListener("click", startPractice);
checkButton.addEventListener("click", handleCheckButtonClick);
nextButton.addEventListener("click", goNext);
toggleSourceButton.addEventListener("click", toggleSource);
targetLanguageSelect.addEventListener("change", syncLanguageField);
retryWrongButton.addEventListener("click", retryWrongItems);
restartButton.addEventListener("click", restartApp);

syncLanguageField();

async function startPractice() {
  const lines = materialsInput.value
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length === 0) {
    alert("请先输入学习材料，每行一句。");
    return;
  }

  state.targetLanguage = getSelectedLanguage();
  if (!state.targetLanguage) {
    alert("请先选择或输入目标语言。");
    return;
  }
  startButton.disabled = true;
  setButtonLoading(startButton, "正在生成中文提示...");

  try {
    const response = await fetch("/api/prepare", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lines,
        targetLanguage: state.targetLanguage,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || "请求失败");
    }

    state.items = Array.isArray(data.items) ? data.items : [];
    state.currentIndex = 0;
    state.checkedCurrent = false;
    state.scores = new Array(state.items.length).fill(null);

    setupPanel.classList.add("hidden");
    summaryPanel.classList.add("hidden");
    practicePanel.classList.remove("hidden");
    renderCurrentLine();
  } catch (error) {
    alert(error.message || "生成中文提示失败，请稍后再试。");
  } finally {
    startButton.disabled = false;
    clearButtonLoading(startButton, "生成中文提示并开始");
  }
}

function renderCurrentLine() {
  const currentItem = state.items[state.currentIndex];
  progressText.textContent = `${state.currentIndex + 1} / ${state.items.length}`;
  translationText.textContent = currentItem.translation;
  state.showSource = false;
  renderSourceVisibility();
  answerInput.value = "";
  resultCard.className = "result-card hidden";
  resultCard.innerHTML = "";
  nextButton.classList.add("hidden");
  nextButton.disabled = true;
  checkButton.disabled = false;
  checkButton.classList.remove("button-loading");
  checkButton.textContent = "提交并检查";
  state.checkedCurrent = false;
  state.lastScore = null;
  answerInput.focus();
}

function handleCheckButtonClick() {
  if (state.checkedCurrent && state.lastScore !== 100) {
    state.checkedCurrent = false;
    checkAnswer();
    return;
  }

  if (state.checkedCurrent) {
    return;
  }

  checkAnswer();
}

async function checkAnswer() {
  const userAnswer = answerInput.value.trim();
  if (!userAnswer) {
    alert("请先输入你的答案。");
    return;
  }

  if (state.checkedCurrent) {
    return;
  }

  checkButton.disabled = true;
  setButtonLoading(checkButton, "检查中...");

  try {
    const currentItem = state.items[state.currentIndex];
    const response = await fetch("/api/check", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        translation: currentItem.translation,
        expectedAnswer: currentItem.source,
        userAnswer,
        targetLanguage: state.targetLanguage,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || "请求失败");
    }

    state.checkedCurrent = true;
    state.lastScore = Number(data.score || 0);
    state.scores[state.currentIndex] = state.lastScore;
    renderResult(data);
    nextButton.disabled = false;
    nextButton.classList.remove("hidden");

    if (state.lastScore === 100) {
      clearButtonLoading(checkButton, "已满分");
      checkButton.disabled = true;
    } else {
      clearButtonLoading(checkButton, "再试一次");
      checkButton.disabled = false;
    }
  } catch (error) {
    alert(error.message || "检查失败，请稍后再试。");
    checkButton.disabled = false;
  } finally {
    if (!state.checkedCurrent) {
      clearButtonLoading(checkButton, "提交并检查");
    }
  }
}

function renderResult(data) {
  const statusTitle = data.isCorrect ? "回答正确" : "回答不够准确";
  const diffItems = (data.differences || [])
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");

  resultCard.className = `result-card ${data.isCorrect ? "correct" : "incorrect"}`;
  resultCard.innerHTML = `
    <h3>${statusTitle} · ${Number(data.score || 0)} 分</h3>
    <p>${escapeHtml(data.feedback || "")}</p>
    <p><strong>参考答案：</strong>${escapeHtml(data.expectedAnswer || "AI 未返回")}</p>
    ${diffItems ? `<ul>${diffItems}</ul>` : ""}
  `;
}

function goNext() {
  if (state.currentIndex >= state.items.length - 1) {
    showSummary();
    return;
  }

  state.currentIndex += 1;
  renderCurrentLine();
}

function showSummary() {
  const scores = state.scores.filter((score) => typeof score === "number");
  const total = state.items.length;
  const average = scores.length
    ? Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length)
    : 0;
  const perfect = scores.filter((score) => score === 100).length;

  summaryTotal.textContent = String(total);
  summaryAverage.textContent = String(average);
  summaryPerfect.textContent = String(perfect);
  summaryMessage.textContent = getSummaryMessage(average, perfect, total);
  retryWrongButton.classList.toggle("hidden", perfect === total);

  practicePanel.classList.add("hidden");
  summaryPanel.classList.remove("hidden");
}

function retryWrongItems() {
  const wrongItems = state.items.filter((_, index) => state.scores[index] !== 100);
  if (wrongItems.length === 0) {
    return;
  }

  state.items = wrongItems;
  state.currentIndex = 0;
  state.checkedCurrent = false;
  state.showSource = false;
  state.lastScore = null;
  state.scores = new Array(wrongItems.length).fill(null);

  summaryPanel.classList.add("hidden");
  practicePanel.classList.remove("hidden");
  renderCurrentLine();
}

function restartApp() {
  state.items = [];
  state.currentIndex = 0;
  state.checkedCurrent = false;
  state.showSource = false;
  state.lastScore = null;
  state.scores = [];

  summaryPanel.classList.add("hidden");
  practicePanel.classList.add("hidden");
  setupPanel.classList.remove("hidden");
}

function toggleSource() {
  state.showSource = !state.showSource;
  renderSourceVisibility();
}

function syncLanguageField() {
  const isCustom = targetLanguageSelect.value === "custom";
  customLanguageField.classList.toggle("hidden", !isCustom);
  materialsInput.placeholder = MATERIAL_PLACEHOLDERS[targetLanguageSelect.value] || MATERIAL_PLACEHOLDERS.custom;
  if (isCustom) {
    customLanguageInput.focus();
  } else {
    customLanguageInput.value = "";
  }
}

function getSelectedLanguage() {
  if (targetLanguageSelect.value === "custom") {
    return customLanguageInput.value.trim();
  }

  return targetLanguageSelect.value;
}

function renderSourceVisibility() {
  const currentItem = state.items[state.currentIndex];
  if (!currentItem) {
    sourceText.textContent = "";
    sourceText.classList.add("hidden");
    toggleSourceButton.setAttribute("aria-label", "显示原文");
    toggleSourceButton.setAttribute("aria-pressed", "false");
    closedEyeIcon.classList.remove("hidden");
    openEyeIcon.classList.add("hidden");
    return;
  }

  if (state.showSource) {
    sourceText.textContent = currentItem.source;
    sourceText.classList.remove("hidden");
    toggleSourceButton.setAttribute("aria-label", "隐藏原文");
    toggleSourceButton.setAttribute("aria-pressed", "true");
    closedEyeIcon.classList.add("hidden");
    openEyeIcon.classList.remove("hidden");
  } else {
    sourceText.textContent = "";
    sourceText.classList.add("hidden");
    toggleSourceButton.setAttribute("aria-label", "显示原文");
    toggleSourceButton.setAttribute("aria-pressed", "false");
    closedEyeIcon.classList.remove("hidden");
    openEyeIcon.classList.add("hidden");
  }
}

function getSummaryMessage(average, perfect, total) {
  if (perfect === total) {
    return "这一轮全部满分，可以直接进入下一组材料。";
  }

  if (average >= 90) {
    return "整体已经很稳了，建议重点回看还没满分的句子。";
  }

  if (average >= 70) {
    return "这一轮完成得不错，再练一遍会更稳。";
  }

  return "这一轮还有提升空间，建议立刻重练一次。";
}

function setButtonLoading(button, text) {
  button.classList.add("button-loading");
  button.textContent = text;
}

function clearButtonLoading(button, text) {
  button.classList.remove("button-loading");
  button.textContent = text;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
