"use strict";

const SECTION_INFO = {
  A: {
    title: "Poznavanje tehnike",
    required: 30,
    pass: 21
  },
  B: {
    title: "Nacionalni i međunarodni pravilnici i postupci",
    required: 15,
    pass: 11
  },
  C: {
    title: "Nacionalni i međunarodni propisi o amaterskoj i amaterskoj satelitskoj službi",
    required: 15,
    pass: 11
  }
};

const STORAGE_KEYS = {
  candidateName: "ra-test-current-candidate",
  profiles: "ra-test-candidate-profiles",
  attempts: "ra-test-exam-attempts",
  activeExam: "ra-test-active-exam"
};

const EXAM_DURATION_SECONDS = 60 * 60;

const state = {
  mode: "home",
  questions: [],
  currentIndex: 0,
  answers: [],
  lastExam: null,
  practiceSection: null,
  selectedCandidate: loadCandidateName(),
  newCandidateName: "",
  homeError: "",
  examStartedAt: null,
  examFinishedAt: null,
  timerId: null,
  timerLastTick: null,
  remainingSeconds: EXAM_DURATION_SECONDS,
  statsCandidate: "all"
};

const app = document.getElementById("app");
const homeBtn = document.getElementById("homeBtn");
const newExamBtn = document.getElementById("newExamBtn");

homeBtn.addEventListener("click", renderHome);
newExamBtn.addEventListener("click", startExam);

window.addEventListener("beforeunload", () => {
  saveActiveExam();
  stopTimer();
});

const activeExam = loadActiveExam();
if (activeExam) {
  renderActiveExamNotice(activeExam);
} else {
  renderHome();
}

function renderHome() {
  stopTimer();
  state.mode = "home";
  const profiles = loadProfiles();
  if (state.selectedCandidate && !profiles.includes(state.selectedCandidate)) {
    state.selectedCandidate = "";
    saveCandidateName("");
  }
  app.innerHTML = `
    <section class="hero">
      <div class="intro-copy">
        <h2>Vežbanje za radio-amatersku licencu</h2>
        <p>Simuliraj ispit po oblastima A, B i C ili vežbaj jednu oblast uz odmah prikazan tačan odgovor i objašnjenje.</p>
        <div class="profile-manager">
          <label class="field">
            <span>Novi kandidat</span>
            <input id="newCandidateName" type="text" autocomplete="name" value="${escapeAttribute(state.newCandidateName)}" placeholder="Unesi ime kandidata">
          </label>
          <button class="ghost" type="button" data-action="add-candidate">Dodaj kandidata</button>
        </div>
        <label class="field">
          <span>Izabrani kandidat</span>
          <select id="candidateProfile">
            <option value="">Izaberi kandidata</option>
            ${profiles.map((profile) => `<option value="${escapeAttribute(profile)}" ${state.selectedCandidate === profile ? "selected" : ""}>${escapeHtml(profile)}</option>`).join("")}
          </select>
        </label>
        ${state.homeError ? `<p class="form-error">${escapeHtml(state.homeError)}</p>` : ""}
        <div class="actions">
          <button class="primary" type="button" data-action="start-exam" ${state.selectedCandidate ? "" : "disabled"}>Novi test</button>
          <button class="secondary" type="button" data-action="practice">Vežbaj oblast</button>
          <button class="ghost" type="button" data-action="review" ${state.lastExam ? "" : "disabled"}>Pregled grešaka</button>
          <button class="ghost" type="button" data-action="stats">Statistika</button>
          <button class="danger-action" type="button" data-action="delete-candidate" ${state.selectedCandidate ? "" : "disabled"}>Obriši kandidata</button>
        </div>
      </div>
      <div class="stats-grid">
        ${Object.entries(SECTION_INFO).map(([key, info]) => `
          <div class="stat">
            <strong>${key}</strong>
            <span>${info.required} pitanja<br>minimum ${info.pass}</span>
          </div>
        `).join("")}
      </div>
    </section>
    <section class="panel">
      <h2>Oblasti</h2>
      <div class="section-picker">
        ${Object.entries(SECTION_INFO).map(([key, info]) => `
          <button class="section-button" type="button" data-practice-section="${key}">
            <strong>Oblast ${key}</strong>
            <span>${info.title}</span>
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function renderActiveExamNotice(activeExam) {
  stopTimer();
  state.mode = "active-notice";
  app.innerHTML = `
    <section class="panel recovery-panel">
      <h2>Nezavršen test</h2>
      <p>Pronađen je nezavršen test za kandidata ${escapeHtml(activeExam.candidateName)}.</p>
      <div class="result-actions">
        <button class="primary" type="button" data-action="continue-active">Nastavi test</button>
        <button class="danger-action" type="button" data-action="discard-active">Odbaci test</button>
      </div>
    </section>
  `;
}

app.addEventListener("input", (event) => {
  if (event.target.id !== "newCandidateName") return;
  state.newCandidateName = event.target.value;
  state.homeError = "";
});

app.addEventListener("change", (event) => {
  if (event.target.id === "statsCandidate") {
    state.statsCandidate = event.target.value;
    renderStatistics();
  }
  if (event.target.id === "candidateProfile") {
    state.selectedCandidate = event.target.value;
    state.homeError = "";
    saveCandidateName(state.selectedCandidate);
    renderHome();
  }
  if (event.target.id === "statsImportFile") {
    importStatistics(event.target.files?.[0]);
    event.target.value = "";
  }
});

app.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  const action = button.dataset.action;
  const section = button.dataset.practiceSection;
  const answer = button.dataset.answerIndex;
  const jumpIndex = button.dataset.jumpIndex;

  if (action === "start-exam") startExam();
  if (action === "practice") renderPracticePicker();
  if (action === "review") renderWrongAnswers();
  if (action === "stats") renderStatistics();
  if (action === "continue-active") continueActiveExam();
  if (action === "discard-active") discardActiveExam();
  if (action === "add-candidate") addCandidateProfile();
  if (action === "delete-candidate") deleteCandidateProfile(state.selectedCandidate, renderHome);
  if (action === "delete-selected-candidate") deleteCandidateProfile(state.statsCandidate, renderStatistics);
  if (action === "export-stats") exportStatistics();
  if (action === "trigger-import") document.getElementById("statsImportFile")?.click();
  if (action === "reset-stats") resetStatistics();
  if (section) startPractice(section);
  if (answer !== undefined) selectAnswer(Number(answer));
  if (jumpIndex !== undefined) goToQuestion(Number(jumpIndex));
  if (action === "prev") goToQuestion(state.currentIndex - 1);
  if (action === "next") goToQuestion(state.currentIndex + 1);
  if (action === "finish") finishExam({ timedOut: false, requireWarning: true });
  if (action === "practice-next") nextPracticeQuestion();
});

function startExam() {
  const candidateName = state.selectedCandidate.trim();
  if (!candidateName) {
    state.homeError = "Izaberi kandidata pre pokretanja testa.";
    renderHome();
    document.getElementById("candidateProfile")?.focus();
    return;
  }

  const validation = validateQuestionCounts();
  if (!validation.ok) {
    renderError(validation.message);
    return;
  }

  saveCandidateName(candidateName);
  saveProfiles([...loadProfiles(), candidateName]);
  state.mode = "exam";
  state.selectedCandidate = candidateName;
  state.questions = buildExamQuestions().map(prepareQuestion);
  state.answers = Array(state.questions.length).fill(null);
  state.currentIndex = 0;
  state.examStartedAt = Date.now();
  state.examFinishedAt = null;
  state.remainingSeconds = EXAM_DURATION_SECONDS;
  saveActiveExam();
  startTimer();
  renderQuestion();
}

function renderPracticePicker() {
  stopTimer();
  state.mode = "practice-picker";
  app.innerHTML = `
    <section class="panel">
      <h2>Vežbaj oblast</h2>
      <p class="muted">Izaberi oblast. Odgovor i objašnjenje se prikazuju odmah posle izbora.</p>
      <div class="section-picker">
        ${Object.entries(SECTION_INFO).map(([key, info]) => `
          <button class="section-button" type="button" data-practice-section="${key}">
            <strong>Oblast ${key}</strong>
            <span>${info.title}</span>
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function startPractice(section) {
  const sectionQuestions = getQuestionsBySection(section);
  if (sectionQuestions.length === 0) {
    renderError(`Nema pitanja za oblast ${section}. Dodaj pitanja u questions.js.`);
    return;
  }

  stopTimer();
  state.mode = "practice";
  state.practiceSection = section;
  state.questions = shuffle(sectionQuestions).map(prepareQuestion);
  state.answers = Array(state.questions.length).fill(null);
  state.currentIndex = 0;
  renderQuestion();
}

function renderQuestion() {
  const question = state.questions[state.currentIndex];
  const selected = state.answers[state.currentIndex];
  const isPractice = state.mode === "practice";
  const answeredPractice = isPractice && selected !== null;
  const progress = Math.round(((state.currentIndex + 1) / state.questions.length) * 100);

  app.innerHTML = `
    <section class="question-panel">
      <div class="exam-header">
        <div class="progress-row">
          <span>${isPractice ? "Vežbanje" : `Test: ${escapeHtml(state.selectedCandidate)}`} · pitanje ${state.currentIndex + 1}/${state.questions.length}</span>
          <span>Oblast ${question.section} · ${escapeHtml(question.topic)}</span>
        </div>
        ${isPractice ? "" : `<div class="timer" id="examTimer" aria-live="off">Preostalo: ${formatTime(state.remainingSeconds)}</div>`}
      </div>
      <div class="progress-track" aria-hidden="true">
        <div class="progress-fill" style="width: ${progress}%"></div>
      </div>
      ${isPractice ? "" : renderQuestionNavigator()}
      <h2 class="question-text">${escapeHtml(question.question)}</h2>
      <p class="meta">${SECTION_INFO[question.section].title}</p>
      <div class="answers">
        ${question.options.map((option, index) => {
          const classes = ["answer-card"];
          if (selected === index) classes.push("selected");
          if (answeredPractice && index === question.correct) classes.push("correct");
          if (answeredPractice && selected === index && index !== question.correct) classes.push("incorrect");
          return `
            <button class="${classes.join(" ")}" type="button" data-answer-index="${index}" ${answeredPractice ? "disabled" : ""}>
              ${escapeHtml(option)}
            </button>
          `;
        }).join("")}
      </div>
      ${answeredPractice ? renderPracticeFeedback(question, selected) : ""}
      ${renderNavigation(isPractice)}
    </section>
  `;
}

function renderQuestionNavigator() {
  return `
    <div class="question-navigator" aria-label="Navigator pitanja">
      ${state.questions.map((question, index) => {
        const classes = ["nav-number"];
        classes.push(state.answers[index] === null ? "unanswered" : "answered");
        classes.push(`section-${question.section.toLowerCase()}`);
        if (index === state.currentIndex) classes.push("current");
        return `
          <button class="${classes.join(" ")}" type="button" data-jump-index="${index}" aria-label="Pitanje ${index + 1}, oblast ${question.section}">
            <span>${index + 1}</span>
            <small>${question.section}</small>
          </button>
        `;
      }).join("")}
    </div>
  `;
}

function renderPracticeFeedback(question, selected) {
  const isCorrect = selected === question.correct;
  return `
    <div class="feedback ${isCorrect ? "success" : "fail"}">
      <strong>${isCorrect ? "Tačno" : "Netačno"}</strong>
      <p>Tačan odgovor: ${escapeHtml(question.options[question.correct])}</p>
      <p>${escapeHtml(question.explanation)}</p>
      ${renderQuestionMeta(question)}
    </div>
  `;
}

function renderQuestionMeta(question) {
  const rows = [];
  if (question.source) rows.push(`Izvor: ${escapeHtml(question.source)}`);
  if (question.difficulty) rows.push(`Težina: ${escapeHtml(question.difficulty)}`);
  if (rows.length === 0) return "";
  return `<p class="meta">${rows.join(" · ")}</p>`;
}

function renderNavigation(isPractice) {
  if (isPractice) {
    return `
      <div class="nav-actions">
        <button class="ghost" type="button" data-action="practice">Izaberi oblast</button>
        <button class="primary" type="button" data-action="practice-next">Sledeće pitanje</button>
      </div>
    `;
  }

  const answeredCount = state.answers.filter((answer) => answer !== null).length;
  const atStart = state.currentIndex === 0;
  const atEnd = state.currentIndex === state.questions.length - 1;
  return `
    <div class="nav-actions">
      <button class="ghost" type="button" data-action="prev" ${atStart ? "disabled" : ""}>Prethodno</button>
      <span class="meta">Odgovoreno ${answeredCount}/${state.questions.length}</span>
      ${atEnd
        ? `<button class="primary" type="button" data-action="finish">Završi test</button>`
        : `<button class="primary" type="button" data-action="next">Sledeće</button>`}
    </div>
  `;
}

function selectAnswer(index) {
  state.answers[state.currentIndex] = index;
  saveActiveExam();
  renderQuestion();
}

function goToQuestion(index) {
  if (index < 0 || index >= state.questions.length) return;
  state.currentIndex = index;
  saveActiveExam();
  renderQuestion();
}

function nextPracticeQuestion() {
  if (state.currentIndex + 1 >= state.questions.length) {
    state.questions = shuffle(getQuestionsBySection(state.practiceSection)).map(prepareQuestion);
    state.answers = Array(state.questions.length).fill(null);
    state.currentIndex = 0;
  } else {
    state.currentIndex += 1;
  }
  renderQuestion();
}

function finishExam({ timedOut, requireWarning }) {
  if (state.mode !== "exam") return;
  updateRemainingTime();

  const unansweredCount = state.answers.filter((answer) => answer === null).length;
  if (requireWarning && unansweredCount > 0) {
    const confirmed = window.confirm(`Imaš ${unansweredCount} neodgovorenih pitanja. Da li želiš da završiš test?`);
    if (!confirmed) return;
  }

  stopTimer();
  state.examFinishedAt = Date.now();
  const result = calculateResult(timedOut);
  state.lastExam = result;
  saveAttempt(result);
  clearActiveExam();
  renderResult(result);
}

function calculateResult(timedOut) {
  const sections = Object.fromEntries(Object.keys(SECTION_INFO).map((key) => [
    key,
    { correct: 0, total: SECTION_INFO[key].required, pass: false }
  ]));

  const wrong = [];
  state.questions.forEach((question, index) => {
    const userAnswer = state.answers[index];
    const isCorrect = userAnswer === question.correct;
    if (isCorrect) {
      sections[question.section].correct += 1;
    } else {
      wrong.push({
        question,
        userAnswer,
        correctAnswer: question.correct
      });
    }
  });

  Object.entries(sections).forEach(([section, score]) => {
    score.pass = score.correct >= SECTION_INFO[section].pass;
  });

  const total = Object.values(sections).reduce((sum, score) => sum + score.correct, 0);
  const failedSections = Object.keys(sections).filter((section) => !sections[section].pass);
  const timeSpentSeconds = Math.min(EXAM_DURATION_SECONDS, Math.max(0, EXAM_DURATION_SECONDS - state.remainingSeconds));

  return {
    candidateName: state.selectedCandidate,
    dateIso: new Date(state.examFinishedAt).toISOString(),
    sections,
    total,
    passed: failedSections.length === 0,
    failedSections,
    wrong,
    timeSpentSeconds,
    timedOut,
    questionSetVersion: getQuestionSetVersion()
  };
}

function renderResult(result) {
  state.mode = "result";
  app.innerHTML = `
    <section class="result-banner ${result.passed ? "pass" : "fail"}">
      <h2>Rezultat testa</h2>
      <p class="status ${result.passed ? "pass" : "fail"}">${result.passed ? "POLOŽENO" : "NIJE POLOŽENO"}</p>
      <p>Kandidat: <strong>${escapeHtml(result.candidateName)}</strong></p>
      <p>Ukupno: <strong>${result.total}/60</strong> · vreme: <strong>${formatDuration(result.timeSpentSeconds)}</strong>${result.timedOut ? " · vreme je isteklo" : ""}</p>
      ${result.failedSections.length
        ? `<p>Nisu položene oblasti:</p><ul class="failed-list">${result.failedSections.map((section) => `<li>Oblast ${section}: ${SECTION_INFO[section].title}</li>`).join("")}</ul>`
        : `<p>Sve oblasti su položene pojedinačno.</p>`}
    </section>
    <section class="panel">
      <div class="score-grid">
        ${Object.entries(result.sections).map(([section, score]) => `
          <div class="score-card ${score.pass ? "pass" : "fail"}">
            <strong>${score.correct}/${score.total}</strong>
            <span>Oblast ${section}<br>${score.pass ? "Položeno" : "Nije položeno"} · minimum ${SECTION_INFO[section].pass}</span>
          </div>
        `).join("")}
      </div>
      <div class="result-actions" style="margin-top: 18px;">
        <button class="primary" type="button" data-action="start-exam">Novi test</button>
        <button class="secondary" type="button" data-action="practice">Vežbaj oblast</button>
        <button class="ghost" type="button" data-action="review" ${result.wrong.length ? "" : "disabled"}>Pregled grešaka</button>
        <button class="ghost" type="button" data-action="stats">Statistika</button>
      </div>
    </section>
  `;
}

function renderWrongAnswers() {
  stopTimer();
  const result = state.lastExam;
  if (!result) {
    renderError("Pregled grešaka je dostupan tek nakon završenog testa.");
    return;
  }

  app.innerHTML = `
    <section class="panel">
      <h2>Pregled grešaka</h2>
      ${result.wrong.length === 0
        ? `<p>Bez grešaka u poslednjem testu.</p>`
        : `<div class="wrong-list">${result.wrong.map(renderWrongItem).join("")}</div>`}
      <div class="result-actions" style="margin-top: 18px;">
        <button class="primary" type="button" data-action="start-exam">Novi test</button>
        <button class="secondary" type="button" data-action="practice">Vežbaj oblast</button>
        <button class="ghost" type="button" data-action="stats">Statistika</button>
      </div>
    </section>
  `;
}

function renderWrongItem(item) {
  const userAnswerText = item.userAnswer === null ? "Nije odgovoreno" : item.question.options[item.userAnswer];
  return `
    <article class="wrong-item">
      <p class="meta">Oblast ${item.question.section} · ${escapeHtml(item.question.topic)}</p>
      <h3>${escapeHtml(item.question.question)}</h3>
      <div class="wrong-grid">
        <div>
          <p class="answer-label">Tvoj odgovor</p>
          <p>${escapeHtml(userAnswerText)}</p>
        </div>
        <div>
          <p class="answer-label">Tačan odgovor</p>
          <p>${escapeHtml(item.question.options[item.correctAnswer])}</p>
        </div>
      </div>
      <p><strong>Objašnjenje:</strong> ${escapeHtml(item.question.explanation)}</p>
      ${renderQuestionMeta(item.question)}
    </article>
  `;
}

function renderStatistics() {
  stopTimer();
  state.mode = "statistics";
  const attempts = loadAttempts();
  const candidates = loadProfiles();
  if (state.statsCandidate !== "all" && !candidates.includes(state.statsCandidate)) {
    state.statsCandidate = "all";
  }

  const selectedAttempts = state.statsCandidate === "all"
    ? attempts
    : attempts.filter((attempt) => attempt.candidateName === state.statsCandidate);
  const stats = calculateStatistics(selectedAttempts);

  app.innerHTML = `
    <section class="panel">
      <div class="stats-title-row">
        <div>
          <h2>Statistika</h2>
          <p class="muted">Podaci se čuvaju samo u lokalnom browseru.</p>
        </div>
        <label class="field compact">
          <span>Kandidat</span>
          <select id="statsCandidate">
            <option value="all" ${state.statsCandidate === "all" ? "selected" : ""}>Svi kandidati</option>
            ${candidates.map((candidate) => `<option value="${escapeAttribute(candidate)}" ${state.statsCandidate === candidate ? "selected" : ""}>${escapeHtml(candidate)}</option>`).join("")}
          </select>
        </label>
      </div>
      ${attempts.length === 0 ? `<p>Nema sačuvanih pokušaja.</p>` : renderStatisticsSummary(stats)}
      <div class="result-actions" style="margin-top: 18px;">
        <button class="ghost" type="button" data-action="export-stats" ${attempts.length ? "" : "disabled"}>Export JSON</button>
        <button class="ghost" type="button" data-action="trigger-import">Import JSON</button>
        <button class="danger-action" type="button" data-action="reset-stats" ${attempts.length ? "" : "disabled"}>Obriši statistiku</button>
        <button class="danger-action" type="button" data-action="delete-selected-candidate" ${state.statsCandidate !== "all" ? "" : "disabled"}>Obriši kandidata</button>
        <input class="visually-hidden" id="statsImportFile" type="file" accept="application/json,.json">
      </div>
      ${candidates.length ? renderCandidateComparison(candidates, attempts) : ""}
      ${selectedAttempts.length ? renderRecentAttempts(selectedAttempts) : ""}
    </section>
  `;
}

function renderCandidateComparison(candidates, attempts) {
  return `
    <div class="comparison-table-wrap">
      <h3>Poređenje kandidata</h3>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Kandidat</th>
            <th>Pokušaji</th>
            <th>Najbolje</th>
            <th>Prosek</th>
            <th>Položeno/Nije</th>
            <th>Prosek A</th>
            <th>Prosek B</th>
            <th>Prosek C</th>
            <th>Poslednji pokušaj</th>
          </tr>
        </thead>
        <tbody>
          ${candidates.map((candidate) => {
            const candidateAttempts = attempts.filter((attempt) => attempt.candidateName === candidate);
            const stats = calculateStatistics(candidateAttempts);
            return `
              <tr>
                <td>${escapeHtml(candidate)}</td>
                <td>${stats.count}</td>
                <td>${stats.count ? `${stats.best}/60` : "-"}</td>
                <td>${stats.count ? `${formatDecimal(stats.averageTotal)}/60` : "-"}</td>
                <td>${stats.passCount}/${stats.failCount}</td>
                <td>${stats.count ? formatDecimal(stats.sectionAverages.A) : "-"}</td>
                <td>${stats.count ? formatDecimal(stats.sectionAverages.B) : "-"}</td>
                <td>${stats.count ? formatDecimal(stats.sectionAverages.C) : "-"}</td>
                <td>${stats.last ? formatDate(stats.last.dateIso) : "-"}</td>
              </tr>
            `;
          }).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderStatisticsSummary(stats) {
  return `
    <div class="score-grid">
      <div class="score-card">
        <strong>${stats.count}</strong>
        <span>Broj pokušaja</span>
      </div>
      <div class="score-card">
        <strong>${stats.best}/60</strong>
        <span>Najbolji rezultat</span>
      </div>
      <div class="score-card">
        <strong>${formatDecimal(stats.averageTotal)}/60</strong>
        <span>Prosek ukupno</span>
      </div>
      <div class="score-card pass">
        <strong>${stats.passCount}</strong>
        <span>Položeno</span>
      </div>
      <div class="score-card fail">
        <strong>${stats.failCount}</strong>
        <span>Nije položeno</span>
      </div>
      <div class="score-card">
        <strong>${stats.last ? `${stats.last.totalScore}/60` : "-"}</strong>
        <span>Poslednji pokušaj: ${stats.last ? (stats.last.passed ? "Položeno" : "Nije položeno") : "-"}</span>
      </div>
    </div>
    <div class="score-grid compact-grid">
      ${Object.keys(SECTION_INFO).map((section) => `
        <div class="score-card">
          <strong>${formatDecimal(stats.sectionAverages[section])}</strong>
          <span>Prosek oblast ${section}</span>
        </div>
      `).join("")}
    </div>
  `;
}

function renderRecentAttempts(attempts) {
  const recent = [...attempts]
    .sort((a, b) => b.dateIso.localeCompare(a.dateIso))
    .slice(0, 12);

  return `
    <div class="attempt-list">
      <h3>Skorašnji pokušaji</h3>
      ${recent.map((attempt) => `
        <article class="attempt-item">
          <div>
            <strong>${escapeHtml(attempt.candidateName)}</strong>
            <p class="meta">${formatDate(attempt.dateIso)} · vreme ${formatDuration(attempt.timeSpentSeconds)} · pitanja ${escapeHtml(attempt.questionSetVersion || "unknown")}</p>
          </div>
          <div>
            <span class="status small ${attempt.passed ? "pass" : "fail"}">${attempt.passed ? "POLOŽENO" : "NIJE POLOŽENO"}</span>
          </div>
          <div class="attempt-score">
            <strong>${attempt.totalScore}/60</strong>
            <span>A ${attempt.sectionAScore}/30 · B ${attempt.sectionBScore}/15 · C ${attempt.sectionCScore}/15</span>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function calculateStatistics(attempts) {
  const count = attempts.length;
  const totals = attempts.map((attempt) => attempt.totalScore);
  const passCount = attempts.filter((attempt) => attempt.passed).length;
  const last = [...attempts].sort((a, b) => b.dateIso.localeCompare(a.dateIso))[0] || null;

  return {
    count,
    best: count ? Math.max(...totals) : 0,
    averageTotal: average(totals),
    passCount,
    failCount: count - passCount,
    sectionAverages: {
      A: average(attempts.map((attempt) => attempt.sectionAScore)),
      B: average(attempts.map((attempt) => attempt.sectionBScore)),
      C: average(attempts.map((attempt) => attempt.sectionCScore))
    },
    last
  };
}

function saveAttempt(result) {
  const attempts = loadAttempts();
  saveProfiles([...loadProfiles(), result.candidateName]);
  attempts.push({
    candidateName: result.candidateName,
    dateIso: result.dateIso,
    totalScore: result.total,
    sectionAScore: result.sections.A.correct,
    sectionBScore: result.sections.B.correct,
    sectionCScore: result.sections.C.correct,
    passed: result.passed,
    failedSections: result.failedSections,
    timeSpentSeconds: result.timeSpentSeconds,
    wrongQuestionIds: result.wrong.map((item) => item.question.id),
    questionSetVersion: result.questionSetVersion
  });
  localStorage.setItem(STORAGE_KEYS.attempts, JSON.stringify(attempts));
}

function loadAttempts() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEYS.attempts) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function continueActiveExam() {
  const activeExam = loadActiveExam();
  if (!activeExam) {
    alert("Nije pronađen ispravan nezavršen test.");
    clearActiveExam();
    renderHome();
    return;
  }

  state.mode = "exam";
  state.selectedCandidate = activeExam.candidateName;
  state.questions = activeExam.questions;
  state.currentIndex = activeExam.currentIndex;
  state.answers = activeExam.answers;
  state.examStartedAt = activeExam.examStartedAt;
  state.examFinishedAt = null;
  state.remainingSeconds = activeExam.remainingSeconds;
  state.timerLastTick = null;
  saveProfiles([...loadProfiles(), activeExam.candidateName]);
  saveCandidateName(activeExam.candidateName);
  startTimer();
  renderQuestion();
}

function discardActiveExam() {
  clearActiveExam();
  renderHome();
}

function saveActiveExam() {
  if (state.mode !== "exam" || state.questions.length === 0) return;
  const activeExam = {
    candidateName: state.selectedCandidate,
    questions: state.questions,
    currentIndex: state.currentIndex,
    answers: state.answers,
    examStartedAt: state.examStartedAt,
    remainingSeconds: state.remainingSeconds
  };
  localStorage.setItem(STORAGE_KEYS.activeExam, JSON.stringify(activeExam));
}

function loadActiveExam() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEYS.activeExam) || "null");
    if (!isValidActiveExam(parsed)) return null;
    return parsed;
  } catch {
    return null;
  }
}

function clearActiveExam() {
  localStorage.removeItem(STORAGE_KEYS.activeExam);
}

function isValidActiveExam(value) {
  if (!value || typeof value !== "object") return false;
  if (!normalizeCandidateName(value.candidateName)) return false;
  if (!Array.isArray(value.questions) || value.questions.length !== 60) return false;
  if (!Array.isArray(value.answers) || value.answers.length !== value.questions.length) return false;
  if (!Number.isInteger(value.currentIndex) || value.currentIndex < 0 || value.currentIndex >= value.questions.length) return false;
  if (!Number.isFinite(value.examStartedAt)) return false;
  if (!Number.isInteger(value.remainingSeconds) || value.remainingSeconds < 0 || value.remainingSeconds > EXAM_DURATION_SECONDS) return false;
  return value.questions.every(isPreparedQuestion) && value.answers.every((answer) => answer === null || Number.isInteger(answer));
}

function isPreparedQuestion(question) {
  return question
    && typeof question === "object"
    && typeof question.id === "string"
    && Object.prototype.hasOwnProperty.call(SECTION_INFO, question.section)
    && typeof question.question === "string"
    && Array.isArray(question.options)
    && question.options.length === 4
    && Number.isInteger(question.correct)
    && question.correct >= 0
    && question.correct < question.options.length;
}

function addCandidateProfile() {
  const name = normalizeCandidateName(state.newCandidateName);
  if (!name) {
    state.homeError = "Unesi ime kandidata za novi profil.";
    renderHome();
    document.getElementById("newCandidateName")?.focus();
    return;
  }

  const profiles = loadProfiles();
  const existing = profiles.find((profile) => profile.toLocaleLowerCase("sr-Latn") === name.toLocaleLowerCase("sr-Latn"));
  state.selectedCandidate = existing || name;
  state.newCandidateName = "";
  state.homeError = "";
  saveProfiles([...profiles, state.selectedCandidate]);
  saveCandidateName(state.selectedCandidate);
  renderHome();
}

function deleteCandidateProfile(candidateName, afterDelete) {
  if (!candidateName || candidateName === "all") return;
  const confirmed = window.confirm(`Da li sigurno želiš da obrišeš profil "${candidateName}" i sve njegove rezultate?`);
  if (!confirmed) return;

  saveProfiles(loadProfiles().filter((profile) => profile !== candidateName));
  const remainingAttempts = loadAttempts().filter((attempt) => attempt.candidateName !== candidateName);
  localStorage.setItem(STORAGE_KEYS.attempts, JSON.stringify(remainingAttempts));

  if (state.selectedCandidate === candidateName) {
    state.selectedCandidate = "";
    saveCandidateName("");
  }
  if (state.statsCandidate === candidateName) {
    state.statsCandidate = "all";
  }
  if (state.lastExam?.candidateName === candidateName) {
    state.lastExam = null;
  }
  afterDelete();
}

function loadProfiles() {
  let profiles = [];
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEYS.profiles) || "[]");
    if (Array.isArray(parsed)) profiles = parsed;
  } catch {
    profiles = [];
  }

  const namesFromAttempts = loadAttempts().map((attempt) => attempt.candidateName);
  const currentName = loadCandidateName();
  return normalizeProfileList([...profiles, ...namesFromAttempts, currentName]);
}

function saveProfiles(profiles) {
  localStorage.setItem(STORAGE_KEYS.profiles, JSON.stringify(normalizeProfileList(profiles)));
}

function normalizeProfileList(profiles) {
  const seen = new Set();
  return profiles
    .map(normalizeCandidateName)
    .filter(Boolean)
    .filter((name) => {
      const key = name.toLocaleLowerCase("sr-Latn");
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .sort((a, b) => a.localeCompare(b, "sr-Latn"));
}

function normalizeCandidateName(name) {
  return String(name || "").trim().replace(/\s+/g, " ");
}

function getQuestionSetVersion() {
  return typeof window.QUESTION_SET_VERSION === "string" && window.QUESTION_SET_VERSION.trim()
    ? window.QUESTION_SET_VERSION.trim()
    : "unknown";
}

function exportStatistics() {
  const data = JSON.stringify({
    profiles: loadProfiles(),
    attempts: loadAttempts()
  }, null, 2);
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "ra-test-statistika.json";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function importStatistics(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const imported = JSON.parse(String(reader.result || ""));
      if (!imported || !Array.isArray(imported.profiles) || !Array.isArray(imported.attempts)) {
        alert("Import nije uspeo: JSON mora da sadrži profiles i attempts nizove.");
        return;
      }

      const importedProfiles = normalizeProfileList(imported.profiles);
      const importedAttempts = imported.attempts
        .map(normalizeImportedAttempt)
        .filter(Boolean);

      saveProfiles([...loadProfiles(), ...importedProfiles, ...importedAttempts.map((attempt) => attempt.candidateName)]);
      localStorage.setItem(STORAGE_KEYS.attempts, JSON.stringify([...loadAttempts(), ...importedAttempts]));
      alert(`Import uspešan. Dodato profila: ${importedProfiles.length}. Dodato pokušaja: ${importedAttempts.length}.`);
      renderStatistics();
    } catch {
      alert("Import nije uspeo: fajl nije ispravan RA-Test JSON.");
    }
  });
  reader.addEventListener("error", () => {
    alert("Import nije uspeo: fajl ne može da se pročita.");
  });
  reader.readAsText(file);
}

function normalizeImportedAttempt(attempt) {
  if (!attempt || typeof attempt !== "object") return null;
  const candidateName = normalizeCandidateName(attempt.candidateName);
  if (!candidateName || typeof attempt.dateIso !== "string") return null;
  const date = new Date(attempt.dateIso);
  if (Number.isNaN(date.getTime())) return null;

  const totalScore = toIntegerInRange(attempt.totalScore, 0, 60);
  const sectionAScore = toIntegerInRange(attempt.sectionAScore, 0, 30);
  const sectionBScore = toIntegerInRange(attempt.sectionBScore, 0, 15);
  const sectionCScore = toIntegerInRange(attempt.sectionCScore, 0, 15);
  const timeSpentSeconds = toIntegerInRange(attempt.timeSpentSeconds, 0, EXAM_DURATION_SECONDS);
  if ([totalScore, sectionAScore, sectionBScore, sectionCScore, timeSpentSeconds].includes(null)) return null;

  return {
    candidateName,
    dateIso: date.toISOString(),
    totalScore,
    sectionAScore,
    sectionBScore,
    sectionCScore,
    passed: Boolean(attempt.passed),
    failedSections: Array.isArray(attempt.failedSections)
      ? attempt.failedSections.filter((section) => Object.prototype.hasOwnProperty.call(SECTION_INFO, section))
      : [],
    timeSpentSeconds,
    wrongQuestionIds: Array.isArray(attempt.wrongQuestionIds)
      ? attempt.wrongQuestionIds.filter((id) => typeof id === "string")
      : [],
    questionSetVersion: typeof attempt.questionSetVersion === "string" ? attempt.questionSetVersion : "unknown"
  };
}

function toIntegerInRange(value, min, max) {
  if (!Number.isInteger(value) || value < min || value > max) return null;
  return value;
}

function resetStatistics() {
  const confirmed = window.confirm("Da li sigurno želiš da obrišeš svu lokalnu statistiku?");
  if (!confirmed) return;
  localStorage.removeItem(STORAGE_KEYS.attempts);
  state.statsCandidate = "all";
  renderStatistics();
}

function validateQuestionCounts() {
  const missing = Object.entries(SECTION_INFO).filter(([section, info]) => {
    return getQuestionsBySection(section).length < info.required;
  });

  if (missing.length === 0) return { ok: true };

  return {
    ok: false,
    message: `Nema dovoljno pitanja za test: ${missing.map(([section, info]) => {
      const current = getQuestionsBySection(section).length;
      return `oblast ${section} ima ${current}/${info.required}`;
    }).join(", ")}. Dodaj pitanja u questions.js.`
  };
}

function renderError(message) {
  stopTimer();
  app.innerHTML = `
    <section class="error-box">
      <h2>Ne može da se pokrene</h2>
      <p>${escapeHtml(message)}</p>
      <button class="ghost" type="button" data-action="practice">Vežbaj oblast</button>
    </section>
  `;
}

function startTimer() {
  stopTimer();
  state.timerLastTick = Date.now();
  saveActiveExam();
  state.timerId = window.setInterval(() => {
    updateRemainingTime();
    const timer = document.getElementById("examTimer");
    if (timer) timer.textContent = `Preostalo: ${formatTime(state.remainingSeconds)}`;
    saveActiveExam();
    if (state.remainingSeconds <= 0) {
      finishExam({ timedOut: true, requireWarning: false });
    }
  }, 1000);
}

function stopTimer() {
  if (state.timerId !== null) {
    window.clearInterval(state.timerId);
    state.timerId = null;
  }
  state.timerLastTick = null;
}

function updateRemainingTime() {
  if (state.mode !== "exam") {
    state.remainingSeconds = EXAM_DURATION_SECONDS;
    return;
  }
  if (!state.timerLastTick) {
    state.timerLastTick = Date.now();
    return;
  }
  const now = Date.now();
  const elapsedSeconds = Math.floor((now - state.timerLastTick) / 1000);
  if (elapsedSeconds <= 0) return;
  state.remainingSeconds = Math.max(0, state.remainingSeconds - elapsedSeconds);
  state.timerLastTick += elapsedSeconds * 1000;
}

function getQuestionsBySection(section) {
  if (!Array.isArray(window.QUESTIONS)) return [];
  return window.QUESTIONS.filter((question) => question.section === section);
}

function buildExamQuestions() {
  return ["A", "B", "C"].flatMap((section) => selectExamSectionQuestions(section));
}

function selectExamSectionQuestions(section) {
  const requiredCount = SECTION_INFO[section].required;
  const sectionQuestions = getQuestionsBySection(section);
  const selected = [];
  const selectedIds = new Set();

  getExamTopicRequirements(section).forEach((requirement) => {
    const candidates = sectionQuestions.filter((question) => {
      return !selectedIds.has(question.id) && requirement.matches(question);
    });
    shuffle(candidates).slice(0, requirement.count).forEach((question) => {
      selected.push(question);
      selectedIds.add(question.id);
    });
  });

  const remaining = sectionQuestions.filter((question) => !selectedIds.has(question.id));
  shuffle(remaining).slice(0, requiredCount - selected.length).forEach((question) => {
    selected.push(question);
    selectedIds.add(question.id);
  });

  return shuffle(selected).slice(0, requiredCount);
}

function getExamTopicRequirements(section) {
  if (section === "A") {
    return [
      { count: 2, matches: isARfBasicsQuestion },
      { count: 1, matches: isACalculatedQuestion }
    ];
  }
  if (section === "B") {
    return [
      { count: 2, matches: isBProcedureBasicsQuestion }
    ];
  }
  if (section === "C") {
    return [
      { count: 2, matches: isCPrefixQuestion },
      { count: 2, matches: isCBandPlanQuestion }
    ];
  }
  return [];
}

function isACalculatedQuestion(question) {
  const numericId = Number(String(question.id || "").slice(1));
  return question.section === "A" && numericId >= 399 && numericId <= 458;
}

function isARfBasicsQuestion(question) {
  return question.section === "A" && hasQuestionKeyword(question, [
    "frekvencija",
    "talasna dužina",
    "hf",
    "vhf",
    "uhf",
    "modulacija",
    "demodulacija",
    "cw",
    "ssb",
    "fm",
    "am",
    "oznaka emisije",
    "radio-talasi",
    "radio talasi",
    "radio-frekvencijski",
    "radio frekvencijski"
  ]);
}

function isBProcedureBasicsQuestion(question) {
  return question.section === "B" && hasQuestionKeyword(question, [
    "q-kod",
    "q kod",
    "qth",
    "rst",
    "qsl",
    "cq",
    "qrz",
    "qrl",
    "raport",
    "dnevnik",
    "utc",
    "opšti poziv",
    "opsti poziv",
    "pile-up",
    "pileup",
    "procedur",
    "ponašanje",
    "ponasanje"
  ]);
}

function isCPrefixQuestion(question) {
  return question.section === "C" && hasQuestionKeyword(question, [
    "prefiks",
    "pozivnog znaka",
    "pripada srbiji",
    "pripada bosni",
    "pripada hrvatskoj",
    "pripada crnoj gori",
    "pripada nemačkoj",
    "pripada nemackoj",
    "pripada austriji",
    "pripada sloveniji",
    "dxcc"
  ]);
}

function isCBandPlanQuestion(question) {
  return question.section === "C" && hasQuestionKeyword(question, [
    "band-plan",
    "band plan",
    "opseg",
    "144 mhz",
    "432 mhz",
    "50 mhz",
    "28.000",
    "29.300",
    "145,",
    "433,",
    "repetitor",
    "radio-far",
    "radio far",
    "simpleks",
    "kanal",
    "cw rad",
    "satelitski deo",
    "frekvencij"
  ]);
}

function hasQuestionKeyword(question, keywords) {
  const searchable = [
    question.topic,
    question.sourceRef,
    question.question,
    question.explanation,
    ...(Array.isArray(question.options) ? question.options : [])
  ].join(" ").toLocaleLowerCase("sr-Latn");
  return keywords.some((keyword) => searchable.includes(keyword.toLocaleLowerCase("sr-Latn")));
}

function prepareQuestion(question) {
  const optionObjects = question.options.map((text, index) => ({
    text,
    wasCorrect: index === question.correct
  }));
  const shuffledOptions = shuffle(optionObjects);
  return {
    ...question,
    options: shuffledOptions.map((option) => option.text),
    correct: shuffledOptions.findIndex((option) => option.wasCorrect)
  };
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function saveCandidateName(name) {
  localStorage.setItem(STORAGE_KEYS.candidateName, name);
}

function loadCandidateName() {
  return localStorage.getItem(STORAGE_KEYS.candidateName) || "";
}

function average(values) {
  if (values.length === 0) return 0;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function formatDecimal(value) {
  return Number.isInteger(value) ? String(value) : value.toFixed(1);
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function formatDuration(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes} min ${String(seconds).padStart(2, "0")} s`;
}

function formatDate(dateIso) {
  return new Date(dateIso).toLocaleString("sr-Latn-RS", {
    dateStyle: "medium",
    timeStyle: "short"
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value);
}
