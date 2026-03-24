let availableQuestions = [];
let totalQuestions = 0;
let score = 0;
let currentQuestionIndex = 0;
let currentChapter = "";

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Theme setup
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark-theme');
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
        });
    }

    renderChapterSelection();
});

function renderChapterSelection() {
    const container = document.getElementById('quiz-container');
    let buttonsHtml = '';
    
    // Draw dedicated chapter cards
    for (const chapter in window.questionBank) {
        buttonsHtml += `
            <button class="feature-card" style="width:100%; text-align:left; margin-bottom:1.5rem; cursor:pointer;" onclick="startQuiz('${chapter}')">
                <h3 style="margin-bottom:0.5rem; color:var(--accent); font-size:1.4rem;">${chapter}</h3>
                <p style="color:var(--text-muted); font-size:0.95rem; font-weight:500;">${window.questionBank[chapter].length} Questions Available</p>
            </button>
        `;
    }
    
    // Draw the comprehensive card
    let totalQs = 0;
    for (const ch in window.questionBank) totalQs += window.questionBank[ch].length;

    buttonsHtml += `
        <button class="feature-card" style="width:100%; text-align:left; margin-bottom:2rem; cursor:pointer; border-color:var(--accent);" onclick="startQuiz('All Chapters')">
            <h3 style="margin-bottom:0.5rem; color:var(--text-main); font-size:1.4rem;">Comprehensive Exam</h3>
            <p style="color:var(--text-muted); font-size:0.95rem; font-weight:500;">Mixed Array (${totalQs} Questions)</p>
        </button>
    `;

    container.innerHTML = `
        <div style="max-width: 800px; width:100%;">
            <h1 style="margin-bottom:2.5rem; font-size:2.4rem;">Select a <span class="gradient-text">Quiz Topic</span></h1>
            ${buttonsHtml}
        </div>
    `;
}

window.startQuiz = function(chapterKey) {
    currentChapter = chapterKey;
    availableQuestions = [];

    if (chapterKey === 'All Chapters') {
        for (const key in window.questionBank) {
            availableQuestions.push(...window.questionBank[key]);
        }
    } else {
        availableQuestions = [...window.questionBank[chapterKey]];
    }

    totalQuestions = availableQuestions.length;
    score = 0;
    currentQuestionIndex = 0;
    shuffleArray(availableQuestions);
    renderQuestion();
};

window.renderQuestion = function() {
    const container = document.getElementById('quiz-container');

    if (availableQuestions.length === 0) {
        container.innerHTML = `
            <div class="hero-section">
                <h1 class="hero-title">${currentChapter} <span class="gradient-text">Completed!</span></h1>
                <p class="hero-subtitle" style="margin-bottom:2rem;">You answered exactly every question in this module without repetitions.</p>
                <div class="feature-card" style="display:inline-block; font-size: 2.2rem; margin-bottom:2.5rem; font-weight:bold; color:var(--accent);">
                    Score: ${score} / ${totalQuestions}
                </div>
                <br>
                <div style="display:flex; gap:1rem; flex-wrap:wrap; justify-content:center;">
                    <button onclick="startQuiz('${currentChapter}')" class="btn-primary">Restart ${currentChapter}</button>
                    <button onclick="renderChapterSelection()" class="btn-primary" style="background:#4b5563;">Back to Chapters</button>
                </div>
            </div>
        `;
        return;
    }

    const qData = availableQuestions.pop(); 
    let optionsHtml = '';
    
    // Safe binding of correct truthiness prior to physical index shuffle
    let optionsMapped = qData.options.map((opt, index) => ({ text: opt, isCorrect: index === qData.correct }));
    shuffleArray(optionsMapped);

    optionsMapped.forEach((opt) => {
        optionsHtml += `
            <label class="quiz-option-label" style="display:block; background:var(--pre-bg); margin:0.8rem 0; padding:1.2rem; border-radius:8px; cursor:pointer; border:1px solid var(--border); transition:all 0.2s;">
                <input type="radio" name="quiz_opt" value="${opt.isCorrect}" style="transform:scale(1.2); margin-right:1rem;">
                <span style="font-size:1.1rem; color:var(--text-main);">${opt.text}</span>
            </label>
        `;
    });

    container.innerHTML = `
        <div class="feature-card" style="max-width: 800px; width:100%; text-align:left;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
                <p style="color:var(--text-muted); font-size: 0.85rem; letter-spacing:1px; text-transform:uppercase; font-weight:700;">Question ${currentQuestionIndex + 1} of ${totalQuestions}</p>
                <button onclick="renderChapterSelection()" style="background:none; border:none; color:var(--accent); cursor:pointer; font-weight:600; text-decoration:underline;">Back to Chapter Select</button>
            </div>
            <h2 style="margin-top:0.5rem; color:var(--text-main); font-size: 1.6rem; margin-bottom: 2rem;">${qData.q}</h2>
            <div id="options-container">
                ${optionsHtml}
            </div>
            <div style="margin-top:2.5rem; display:flex; justify-content:space-between; align-items:center;">
                <span id="feedback" style="font-weight:bold; font-size:1.1rem;"></span>
                <button id="submitBtn" class="btn-primary" onclick="submitAnswer()">Submit Answer ➔</button>
            </div>
        </div>
    `;
    
    // Auto-select aesthetics
    document.querySelectorAll('.quiz-option-label').forEach(lbl => {
        lbl.addEventListener('click', () => {
            if (document.getElementById('submitBtn').textContent !== 'Submit Answer ➔') return;
            document.querySelectorAll('.quiz-option-label').forEach(l => l.style.borderColor = 'var(--border)');
            lbl.style.borderColor = 'var(--accent)';
        });
    });
};

window.submitAnswer = function() {
    const selected = document.querySelector('input[name="quiz_opt"]:checked');
    const feedback = document.getElementById('feedback');
    const btn = document.getElementById('submitBtn');

    if (btn.textContent !== 'Submit Answer ➔') {
        renderQuestion();
        return;
    }

    if (!selected) {
        feedback.textContent = "Please pick an option first.";
        feedback.style.color = "#ef4444";
        return;
    }

    const isCorrect = selected.value === "true";
    document.querySelectorAll('.quiz-option-label').forEach(lbl => {
        const inp = lbl.querySelector('input');
        inp.disabled = true;
        if (inp.value === "true") {
            lbl.style.borderColor = "#10b981";
            lbl.style.backgroundColor = "rgba(16, 185, 129, 0.1)";
        } else if (inp.checked && inp.value === "false") {
            lbl.style.borderColor = "#ef4444";
            lbl.style.backgroundColor = "rgba(239, 68, 68, 0.1)";
        }
    });

    if (isCorrect) {
        feedback.textContent = "✅ Correct!";
        feedback.style.color = "#10b981";
        score++;
    } else {
        feedback.textContent = "❌ Incorrect. The correct answer was highlighted strictly in green.";
        feedback.style.color = "#ef4444";
    }

    currentQuestionIndex++;
    btn.textContent = "Next Question ➔";
};
