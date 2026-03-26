const UI_STORAGE_KEY = "anki-web-ui-language";

const UI_TEXT = {
  zh: {
    locale: "zh-CN",
    intro: "自动生成记忆卡片，使用AI帮助你记忆",
    setupTitle: "练习设置",
    setupStep: "Step 1",
    targetLanguage: "目标语言",
    customLanguage: "手动输入语言",
    customLanguagePlaceholder: "例如 德语",
    materialsLabel: "学习材料（每行一句目标语言原句）",
    start: "生成提示并开始",
    startLoading: "正在生成提示...",
    practiceTitle: "练习中",
    promptLabel: "提示",
    promptLabelWithLanguage: "{language}提示",
    answerPlaceholder: "在这里输入原句",
    check: "提交并检查",
    checking: "检查中...",
    retry: "再试一次",
    next: "下一句",
    perfectDone: "已满分",
    correct: "回答正确",
    incorrect: "回答不够准确",
    expectedAnswer: "参考答案",
    summaryTitle: "练习完成",
    summaryStep: "Summary",
    summaryTotal: "总题数",
    summaryAverage: "平均分",
    summaryPerfect: "满分题数",
    retryWrong: "练习错题",
    restart: "重新开始",
    settings: "设置",
    uiLanguage: "界面语言",
    showSource: "显示原文",
    hideSource: "隐藏原文",
    alerts: {
      materialsRequired: "请先输入学习材料，每行一句。",
      targetLanguageRequired: "请先选择或输入目标语言。",
      answerRequired: "请先输入你的答案。",
      prepareFailed: "生成提示失败，请稍后再试。",
      checkFailed: "检查失败，请稍后再试。",
    },
    summaryMessages: {
      perfect: "这一轮全部满分，可以直接进入下一组材料。",
      strong: "整体已经很稳了，建议重点回看还没满分的句子。",
      good: "这一轮完成得不错，再练一遍会更稳。",
      retry: "这一轮还有提升空间，建议立刻重练一次。",
    },
    targetOptions: {
      zh: "中文",
      ja: "日语",
      en: "英语",
      fr: "法语",
      es: "西班牙语",
      custom: "手动输入",
    },
  },
  en: {
    locale: "en",
    intro: "Generate memory cards automatically and use AI to help you memorize.",
    setupTitle: "Practice Setup",
    setupStep: "Step 1",
    targetLanguage: "Target Language",
    customLanguage: "Custom Language",
    customLanguagePlaceholder: "For example, German",
    materialsLabel: "Study Material (one target-language sentence per line)",
    start: "Generate Prompts",
    startLoading: "Generating prompts...",
    practiceTitle: "Practice",
    promptLabel: "Prompt",
    promptLabelWithLanguage: "{language} Prompt",
    answerPlaceholder: "Type the original sentence here",
    check: "Submit and Check",
    checking: "Checking...",
    retry: "Try Again",
    next: "Next",
    perfectDone: "Perfect",
    correct: "Correct",
    incorrect: "Not Accurate Enough",
    expectedAnswer: "Reference Answer",
    summaryTitle: "Session Complete",
    summaryStep: "Summary",
    summaryTotal: "Total Items",
    summaryAverage: "Average Score",
    summaryPerfect: "Perfect Scores",
    retryWrong: "Retry Mistakes",
    restart: "Start Over",
    settings: "Settings",
    uiLanguage: "Interface Language",
    showSource: "Show original",
    hideSource: "Hide original",
    alerts: {
      materialsRequired: "Enter your study material first, one sentence per line.",
      targetLanguageRequired: "Choose or enter a target language first.",
      answerRequired: "Enter your answer first.",
      prepareFailed: "Failed to generate prompts. Please try again.",
      checkFailed: "Failed to check the answer. Please try again.",
    },
    summaryMessages: {
      perfect: "Everything scored 100. You can move on to a new set.",
      strong: "This round is already strong. Focus on the items that are not perfect yet.",
      good: "Good progress. One more round should make it more stable.",
      retry: "There is still room to improve. Try another round right away.",
    },
    targetOptions: {
      zh: "Chinese",
      ja: "Japanese",
      en: "English",
      fr: "French",
      es: "Spanish",
      custom: "Custom",
    },
  },
  ja: {
    locale: "ja",
    intro: "AIで記憶カードを自動生成し、暗記を助けます。",
    setupTitle: "練習設定",
    setupStep: "Step 1",
    targetLanguage: "対象言語",
    customLanguage: "言語を手入力",
    customLanguagePlaceholder: "例: ドイツ語",
    materialsLabel: "学習素材（1行に対象言語の文を1つ）",
    start: "ヒントを生成して開始",
    startLoading: "ヒントを生成中...",
    practiceTitle: "練習中",
    promptLabel: "ヒント",
    promptLabelWithLanguage: "{language}ヒント",
    answerPlaceholder: "ここに元の文を入力",
    check: "送信してチェック",
    checking: "チェック中...",
    retry: "もう一度",
    next: "次へ",
    perfectDone: "満点",
    correct: "正解",
    incorrect: "まだ不十分",
    expectedAnswer: "参考答案",
    summaryTitle: "練習完了",
    summaryStep: "Summary",
    summaryTotal: "問題数",
    summaryAverage: "平均点",
    summaryPerfect: "満点数",
    retryWrong: "間違いだけ再練習",
    restart: "最初から",
    settings: "設定",
    uiLanguage: "表示言語",
    showSource: "原文を表示",
    hideSource: "原文を非表示",
    alerts: {
      materialsRequired: "学習素材を入力してください。1行に1文です。",
      targetLanguageRequired: "対象言語を選択または入力してください。",
      answerRequired: "答えを入力してください。",
      prepareFailed: "ヒントの生成に失敗しました。もう一度試してください。",
      checkFailed: "答えのチェックに失敗しました。もう一度試してください。",
    },
    summaryMessages: {
      perfect: "このラウンドはすべて満点です。次の教材に進めます。",
      strong: "かなり安定しています。満点でない文だけ見直すと良いです。",
      good: "よくできています。もう1周するとさらに安定します。",
      retry: "まだ伸ばせます。すぐにもう1周してみましょう。",
    },
    targetOptions: {
      zh: "中国語",
      ja: "日本語",
      en: "英語",
      fr: "フランス語",
      es: "スペイン語",
      custom: "手入力",
    },
  },
  fr: {
    locale: "fr",
    intro: "Generez des cartes memoire automatiquement et utilisez l'IA pour mieux memoriser.",
    setupTitle: "Configuration",
    setupStep: "Etape 1",
    targetLanguage: "Langue cible",
    customLanguage: "Langue personnalisee",
    customLanguagePlaceholder: "Par exemple, allemand",
    materialsLabel: "Materiel d'etude (une phrase de la langue cible par ligne)",
    start: "Generer les indices",
    startLoading: "Generation des indices...",
    practiceTitle: "Entrainement",
    promptLabel: "Indice",
    promptLabelWithLanguage: "Indice en {language}",
    answerPlaceholder: "Saisissez ici la phrase originale",
    check: "Envoyer et verifier",
    checking: "Verification...",
    retry: "Reessayer",
    next: "Suivant",
    perfectDone: "Parfait",
    correct: "Correct",
    incorrect: "Pas assez precis",
    expectedAnswer: "Reponse de reference",
    summaryTitle: "Session terminee",
    summaryStep: "Resume",
    summaryTotal: "Nombre total",
    summaryAverage: "Score moyen",
    summaryPerfect: "Scores parfaits",
    retryWrong: "Reprendre les erreurs",
    restart: "Recommencer",
    settings: "Parametres",
    uiLanguage: "Langue de l'interface",
    showSource: "Afficher l'original",
    hideSource: "Masquer l'original",
    alerts: {
      materialsRequired: "Saisissez d'abord le materiel d'etude, une phrase par ligne.",
      targetLanguageRequired: "Choisissez ou saisissez une langue cible.",
      answerRequired: "Saisissez d'abord votre reponse.",
      prepareFailed: "Impossible de generer les indices. Reessayez.",
      checkFailed: "Impossible de verifier la reponse. Reessayez.",
    },
    summaryMessages: {
      perfect: "Tout est a 100. Vous pouvez passer a un autre jeu.",
      strong: "Cette serie est deja solide. Revisez surtout les phrases pas encore parfaites.",
      good: "Bonne progression. Un autre tour devrait bien stabiliser l'ensemble.",
      retry: "Il reste de la marge. Refaites un tour tout de suite.",
    },
    targetOptions: {
      zh: "Chinois",
      ja: "Japonais",
      en: "Anglais",
      fr: "Francais",
      es: "Espagnol",
      custom: "Personnalise",
    },
  },
  es: {
    locale: "es",
    intro: "Genera tarjetas de memoria automaticamente y usa IA para ayudarte a memorizar.",
    setupTitle: "Configuracion",
    setupStep: "Paso 1",
    targetLanguage: "Idioma objetivo",
    customLanguage: "Idioma personalizado",
    customLanguagePlaceholder: "Por ejemplo, aleman",
    materialsLabel: "Material de estudio (una frase del idioma objetivo por linea)",
    start: "Generar pistas",
    startLoading: "Generando pistas...",
    practiceTitle: "Practica",
    promptLabel: "Pista",
    promptLabelWithLanguage: "Pista en {language}",
    answerPlaceholder: "Escribe aqui la frase original",
    check: "Enviar y revisar",
    checking: "Revisando...",
    retry: "Intentar de nuevo",
    next: "Siguiente",
    perfectDone: "Perfecto",
    correct: "Correcto",
    incorrect: "No es suficiente",
    expectedAnswer: "Respuesta de referencia",
    summaryTitle: "Sesion completada",
    summaryStep: "Resumen",
    summaryTotal: "Total",
    summaryAverage: "Promedio",
    summaryPerfect: "Puntuaciones perfectas",
    retryWrong: "Practicar errores",
    restart: "Empezar de nuevo",
    settings: "Configuracion",
    uiLanguage: "Idioma de la interfaz",
    showSource: "Mostrar original",
    hideSource: "Ocultar original",
    alerts: {
      materialsRequired: "Primero introduce el material de estudio, una frase por linea.",
      targetLanguageRequired: "Primero elige o escribe un idioma objetivo.",
      answerRequired: "Primero introduce tu respuesta.",
      prepareFailed: "No se pudieron generar las pistas. Intentalo de nuevo.",
      checkFailed: "No se pudo revisar la respuesta. Intentalo de nuevo.",
    },
    summaryMessages: {
      perfect: "Todo obtuvo 100. Ya puedes pasar a otro grupo.",
      strong: "Esta ronda ya esta bastante solida. Revisa solo lo que no este perfecto.",
      good: "Buen avance. Otra ronda lo dejara mas estable.",
      retry: "Todavia hay margen de mejora. Haz otra ronda ahora mismo.",
    },
    targetOptions: {
      zh: "Chino",
      ja: "Japones",
      en: "Ingles",
      fr: "Frances",
      es: "Espanol",
      custom: "Personalizado",
    },
  },
};

const MATERIAL_PLACEHOLDERS = {
  zh: "你好。\n今天天气很好。\n我昨天去了图书馆。",
  ja: "こんにちは。\n今日は天気がいいです。\n昨日、図書館に行きました。",
  en: "Hello.\nThe weather is nice today.\nI went to the library yesterday.",
  fr: "Bonjour.\nIl fait beau aujourd'hui.\nJe suis alle a la bibliotheque hier.",
  es: "Hola.\nHoy hace buen tiempo.\nAyer fui a la biblioteca.",
  custom: "Guten Tag.\nHeute ist das Wetter schoen.\nIch bin gestern in die Bibliothek gegangen.",
};

const state = {
  items: [],
  currentIndex: 0,
  targetLanguage: "Japanese",
  checkedCurrent: false,
  showSource: false,
  lastScore: null,
  scores: [],
  uiLanguage: loadUiLanguage(),
  isSettingsOpen: false,
  lastResult: null,
  checkButtonMode: "check",
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
const settingsToggleButton = document.getElementById("settings-toggle-button");
const settingsPanel = document.getElementById("settings-panel");
const settingsCloseButton = document.getElementById("settings-close-button");
const uiLanguageSelect = document.getElementById("ui-language-select");

startButton.addEventListener("click", startPractice);
checkButton.addEventListener("click", handleCheckButtonClick);
nextButton.addEventListener("click", goNext);
toggleSourceButton.addEventListener("click", toggleSource);
targetLanguageSelect.addEventListener("change", syncLanguageField);
retryWrongButton.addEventListener("click", retryWrongItems);
restartButton.addEventListener("click", restartApp);
settingsToggleButton.addEventListener("click", toggleSettingsPanel);
settingsCloseButton.addEventListener("click", closeSettingsPanel);
uiLanguageSelect.addEventListener("change", changeUiLanguage);

renderUi();

async function startPractice() {
  const lines = materialsInput.value
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length === 0) {
    alert(t().alerts.materialsRequired);
    return;
  }

  state.targetLanguage = getSelectedLanguage();
  if (!state.targetLanguage) {
    alert(t().alerts.targetLanguageRequired);
    return;
  }

  startButton.disabled = true;
  setButtonLoading(startButton, t().startLoading);

  try {
    const response = await fetch("/api/prepare", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        lines,
        targetLanguage: state.targetLanguage,
        promptLanguage: getPromptLanguageName(state.uiLanguage),
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || "Request failed");
    }

    state.items = Array.isArray(data.items) ? data.items : [];
    state.currentIndex = 0;
    state.checkedCurrent = false;
    state.scores = new Array(state.items.length).fill(null);
    state.lastResult = null;

    setupPanel.classList.add("hidden");
    summaryPanel.classList.add("hidden");
    practicePanel.classList.remove("hidden");
    renderCurrentLine();
  } catch (error) {
    alert(error.message || t().alerts.prepareFailed);
  } finally {
    startButton.disabled = false;
    clearButtonLoading(startButton, t().start);
  }
}

function renderCurrentLine() {
  const currentItem = state.items[state.currentIndex];
  progressText.textContent = `${state.currentIndex + 1} / ${state.items.length}`;
  translationText.textContent = currentItem.translation;
  state.showSource = false;
  state.lastResult = null;
  renderSourceVisibility();
  answerInput.value = "";
  answerInput.placeholder = t().answerPlaceholder;
  resultCard.className = "result-card hidden";
  resultCard.innerHTML = "";
  nextButton.classList.add("hidden");
  nextButton.disabled = true;
  checkButton.disabled = false;
  checkButton.classList.remove("button-loading");
  state.checkedCurrent = false;
  state.lastScore = null;
  state.checkButtonMode = "check";
  syncCheckButtonText();
  syncNextButtonText();
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
    alert(t().alerts.answerRequired);
    return;
  }

  if (state.checkedCurrent) {
    return;
  }

  checkButton.disabled = true;
  setButtonLoading(checkButton, t().checking);

  try {
    const currentItem = state.items[state.currentIndex];
    const response = await fetch("/api/check", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        translation: currentItem.translation,
        expectedAnswer: currentItem.source,
        userAnswer,
        targetLanguage: state.targetLanguage,
        promptLanguage: getPromptLanguageName(state.uiLanguage),
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || "Request failed");
    }

    state.checkedCurrent = true;
    state.lastScore = Number(data.score || 0);
    state.scores[state.currentIndex] = state.lastScore;
    state.lastResult = data;
    renderResult(data);
    nextButton.disabled = false;
    nextButton.classList.remove("hidden");

    if (state.lastScore === 100) {
      state.checkButtonMode = "perfect";
      clearButtonLoading(checkButton, t().perfectDone);
      checkButton.disabled = true;
    } else {
      state.checkButtonMode = "retry";
      clearButtonLoading(checkButton, t().retry);
      checkButton.disabled = false;
    }
  } catch (error) {
    alert(error.message || t().alerts.checkFailed);
    checkButton.disabled = false;
  } finally {
    if (!state.checkedCurrent) {
      state.checkButtonMode = "check";
      clearButtonLoading(checkButton, t().check);
    }
  }
}

function renderResult(data) {
  const statusTitle = data.isCorrect ? t().correct : t().incorrect;
  const diffItems = (data.differences || [])
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");

  resultCard.className = `result-card ${data.isCorrect ? "correct" : "incorrect"}`;
  resultCard.innerHTML = `
    <h3>${statusTitle} · ${Number(data.score || 0)}</h3>
    <p>${escapeHtml(data.feedback || "")}</p>
    <p><strong>${escapeHtml(t().expectedAnswer)}：</strong>${escapeHtml(data.expectedAnswer || "")}</p>
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
  state.lastResult = null;
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
  state.lastResult = null;
  state.checkButtonMode = "check";

  summaryPanel.classList.add("hidden");
  practicePanel.classList.add("hidden");
  setupPanel.classList.remove("hidden");
  renderUi();
}

function toggleSource() {
  state.showSource = !state.showSource;
  renderSourceVisibility();
}

function syncLanguageField() {
  const isCustom = targetLanguageSelect.value === "custom";
  customLanguageField.classList.toggle("hidden", !isCustom);
  materialsInput.placeholder = MATERIAL_PLACEHOLDERS[targetLanguageSelect.value] || MATERIAL_PLACEHOLDERS.custom;
  customLanguageInput.placeholder = t().customLanguagePlaceholder;
}

function getSelectedLanguage() {
  if (targetLanguageSelect.value === "custom") {
    return customLanguageInput.value.trim();
  }

  return getCanonicalTargetLanguage(targetLanguageSelect.value);
}

function renderSourceVisibility() {
  const currentItem = state.items[state.currentIndex];
  if (!currentItem) {
    sourceText.textContent = "";
    sourceText.classList.add("hidden");
    setSourceButtonState(false);
    return;
  }

  if (state.showSource) {
    sourceText.textContent = currentItem.source;
    sourceText.classList.remove("hidden");
    setSourceButtonState(true);
  } else {
    sourceText.textContent = "";
    sourceText.classList.add("hidden");
    setSourceButtonState(false);
  }
}

function getSummaryMessage(average, perfect, total) {
  if (perfect === total) {
    return t().summaryMessages.perfect;
  }

  if (average >= 90) {
    return t().summaryMessages.strong;
  }

  if (average >= 70) {
    return t().summaryMessages.good;
  }

  return t().summaryMessages.retry;
}

function setButtonLoading(button, text) {
  button.classList.add("button-loading");
  button.textContent = text;
}

function clearButtonLoading(button, text) {
  button.classList.remove("button-loading");
  button.textContent = text;
}

function toggleSettingsPanel() {
  state.isSettingsOpen ? closeSettingsPanel() : openSettingsPanel();
}

function openSettingsPanel() {
  state.isSettingsOpen = true;
  document.body.classList.add("settings-open");
  settingsPanel.classList.remove("hidden");
  requestAnimationFrame(() => {
    settingsPanel.classList.add("settings-visible");
  });
  settingsPanel.setAttribute("aria-hidden", "false");
  settingsToggleButton.setAttribute("aria-expanded", "true");
}

function closeSettingsPanel() {
  closeSettingsPanelWithMode("animated");
}

function closeSettingsPanelImmediately() {
  closeSettingsPanelWithMode("instant");
}

function closeSettingsPanelWithMode(mode) {
  state.isSettingsOpen = false;
  document.body.classList.remove("settings-open");
  settingsPanel.classList.remove("settings-visible");
  settingsPanel.setAttribute("aria-hidden", "true");
  settingsToggleButton.setAttribute("aria-expanded", "false");

  if (mode === "instant") {
    settingsPanel.classList.add("hidden");
    return;
  }

  window.setTimeout(() => {
    if (!state.isSettingsOpen) {
      settingsPanel.classList.add("hidden");
    }
  }, 180);
}

function changeUiLanguage() {
  state.uiLanguage = uiLanguageSelect.value;
  localStorage.setItem(UI_STORAGE_KEY, state.uiLanguage);
  renderUi();
  closeSettingsPanelImmediately();
}

function renderUi() {
  document.documentElement.lang = t().locale;
  uiLanguageSelect.value = state.uiLanguage;

  document.getElementById("hero-intro").textContent = t().intro;
  document.getElementById("setup-title").textContent = t().setupTitle;
  document.getElementById("setup-step").textContent = t().setupStep;
  document.getElementById("target-language-label").textContent = t().targetLanguage;
  document.getElementById("custom-language-label").textContent = t().customLanguage;
  document.getElementById("materials-label").textContent = t().materialsLabel;
  document.getElementById("practice-title").textContent = t().practiceTitle;
  document.getElementById("prompt-label").textContent = getPromptLabel();
  document.getElementById("summary-title").textContent = t().summaryTitle;
  document.getElementById("summary-step").textContent = t().summaryStep;
  document.getElementById("summary-total-label").textContent = t().summaryTotal;
  document.getElementById("summary-average-label").textContent = t().summaryAverage;
  document.getElementById("summary-perfect-label").textContent = t().summaryPerfect;
  retryWrongButton.textContent = t().retryWrong;
  restartButton.textContent = t().restart;
  document.getElementById("settings-title").textContent = t().settings;
  document.getElementById("ui-language-label").textContent = t().uiLanguage;
  settingsToggleButton.setAttribute("aria-label", t().settings);
  settingsCloseButton.setAttribute("aria-label", t().settings);
  startButton.textContent = t().start;
  nextButton.textContent = t().next;
  answerInput.placeholder = t().answerPlaceholder;

  rebuildTargetLanguageOptions();
  syncLanguageField();
  syncCheckButtonText();
  syncNextButtonText();
  renderSourceVisibility();

  if (!summaryPanel.classList.contains("hidden")) {
    const scores = state.scores.filter((score) => typeof score === "number");
    const total = state.items.length;
    const average = scores.length
      ? Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length)
      : 0;
    const perfect = scores.filter((score) => score === 100).length;
    summaryMessage.textContent = getSummaryMessage(average, perfect, total);
  }

  if (state.lastResult && !resultCard.classList.contains("hidden")) {
    renderResult(state.lastResult);
  }
}

function rebuildTargetLanguageOptions() {
  const previousValue = targetLanguageSelect.value || getOptionKeyFromCanonical(state.targetLanguage) || "ja";
  const fragment = document.createDocumentFragment();
  const excludedKey = state.uiLanguage;
  const optionOrder = ["zh", "ja", "en", "fr", "es", "custom"];

  for (const key of optionOrder) {
    if (key === excludedKey) {
      continue;
    }

    const option = document.createElement("option");
    option.value = key;
    option.textContent = t().targetOptions[key];
    fragment.appendChild(option);
  }

  targetLanguageSelect.innerHTML = "";
  targetLanguageSelect.appendChild(fragment);

  const nextValue = Array.from(targetLanguageSelect.options).some((option) => option.value === previousValue)
    ? previousValue
    : targetLanguageSelect.options[0]?.value || "custom";

  targetLanguageSelect.value = nextValue;
}

function syncCheckButtonText() {
  if (checkButton.classList.contains("button-loading")) {
    return;
  }

  if (state.checkButtonMode === "perfect") {
    checkButton.textContent = t().perfectDone;
    return;
  }

  if (state.checkButtonMode === "retry") {
    checkButton.textContent = t().retry;
    return;
  }

  checkButton.textContent = t().check;
}

function syncNextButtonText() {
  nextButton.textContent = t().next;
}

function setSourceButtonState(isOpen) {
  toggleSourceButton.setAttribute("aria-label", isOpen ? t().hideSource : t().showSource);
  toggleSourceButton.setAttribute("aria-pressed", String(isOpen));
  closedEyeIcon.classList.toggle("hidden", isOpen);
  openEyeIcon.classList.toggle("hidden", !isOpen);
}

function getCanonicalTargetLanguage(key) {
  const map = {
    zh: "Chinese",
    ja: "Japanese",
    en: "English",
    fr: "French",
    es: "Spanish",
  };

  return map[key] || key;
}

function getPromptLanguageName(uiLanguage) {
  const map = {
    zh: "Chinese",
    en: "English",
    ja: "Japanese",
    fr: "French",
    es: "Spanish",
  };

  return map[uiLanguage] || "Chinese";
}

function getOptionKeyFromCanonical(value) {
  const normalized = String(value || "").toLowerCase();
  if (normalized === "chinese") return "zh";
  if (normalized === "japanese") return "ja";
  if (normalized === "english") return "en";
  if (normalized === "french") return "fr";
  if (normalized === "spanish") return "es";
  return "custom";
}

function loadUiLanguage() {
  const value = localStorage.getItem(UI_STORAGE_KEY);
  if (value && UI_TEXT[value]) {
    return value;
  }

  return "zh";
}

function t() {
  return UI_TEXT[state.uiLanguage];
}

function getPromptLabel() {
  const label = t().promptLabelWithLanguage || t().promptLabel;
  return label.replace("{language}", getPromptLanguageDisplayName(state.uiLanguage));
}

function getPromptLanguageDisplayName(uiLanguage) {
  const names = {
    zh: { zh: "中文", en: "Chinese", ja: "中国語", fr: "chinois", es: "chino" },
    en: { zh: "英语", en: "English", ja: "英語", fr: "anglais", es: "ingles" },
    ja: { zh: "日语", en: "Japanese", ja: "日本語", fr: "japonais", es: "japones" },
    fr: { zh: "法语", en: "French", ja: "フランス語", fr: "francais", es: "frances" },
    es: { zh: "西班牙语", en: "Spanish", ja: "スペイン語", fr: "espagnol", es: "espanol" },
  };

  return names[uiLanguage]?.[state.uiLanguage] || t().promptLabel;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
