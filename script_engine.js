 * 🚀 英语测验系统核心引擎
 */

// 1. 课程菜单配置
const MENU_CONFIG = {
    "speaking": {
        label: "🗣️ 口语面试 (Speaking)",
        lessons: [
            // 注意：这里的路径 data/speaking/u1_l1.js 必须和您刚创建的文件一模一样
            { id: "u1_l1", name: "Unit 1 Lesson 1: Nice to meet you", file: "data/speaking/u1_l1.js" }
        ]
    },
    "written": {
        label: "✍️ 笔试练习 (Written)",
        lessons: [
            // 暂时留空，以后加
        ]
    }
};

// 2. 全局变量
let currentQuizData = null;
let totalScore = 0;

// 启动：加载菜单
window.onload = initMenu;

// 初始化菜单
function initMenu() {
    const app = document.getElementById('app');
    let html = `
        <div class="header-banner">
            <h1>👩‍🏫 英语智能测验系统</h1>
            <p>请选择测验模式与课程</p>
        </div>
        <div class="menu-container">
    `;

    for (const [modeKey, modeData] of Object.entries(MENU_CONFIG)) {
        html += `
            <div class="mode-card ${modeKey}-card">
                <h3>${modeData.label}</h3>
                <div class="lesson-list">
        `;
        if (modeData.lessons.length === 0) {
            html += `<p class="empty-tip">暂无课程</p>`;
        } else {
            modeData.lessons.forEach(lesson => {
                html += `<button onclick="loadLesson('${lesson.file}')" class="lesson-btn">📄 ${lesson.name}</button>`;
            });
        }
        html += `</div></div>`;
    }
    html += `</div>`;
    app.innerHTML = html;
}

// 加载课程文件
window.loadLesson = function(filePath) {
    document.getElementById('app').innerHTML = `<div class="loading">正在加载题目...<br>${filePath}</div>`;
    const script = document.createElement('script');
    script.src = filePath;
    script.onload = () => console.log("题目加载成功");
    script.onerror = () => alert("❌ 找不到文件，请检查路径：" + filePath);
    document.body.appendChild(script);
};

// 接收数据并渲染
window.LOAD_QUIZ = function(data) {
    currentQuizData = data;
    totalScore = 0;
    renderQuiz();
};

// 渲染界面
function renderQuiz() {
    const app = document.getElementById('app');
    const isSpeaking = currentQuizData.mode === 'speaking';
    
    let html = `
        <div class="quiz-header">
            <button onclick="initMenu()" class="back-btn">⬅ 返回主菜单</button>
            <h2>${currentQuizData.title}</h2>
        </div>
        <div class="quiz-body">
    `;

    currentQuizData.questions.forEach((q, index) => {
        let imgHtml = '';
        if (q.imageKey && currentQuizData.images && currentQuizData.images[q.imageKey]) {
            imgHtml = `<div class="img-box"><img src="${currentQuizData.images[q.imageKey]}" alt="Image"></div>`;
        }
        
        html += `
            <div class="question-card">
                <div class="q-tag">Q${q.qNum}</div>
                <div class="q-text">${q.text}</div>
                ${imgHtml}
        `;

        if (isSpeaking) {
            html += `
                <div class="guide-box"><p>👨‍🏫 参考答案：</p><div>${q.guide}</div></div>
                <div class="action-area" id="action-${index}">
                    <div class="score-buttons">
                        ${[5,4,3,2,1].map(s => `<button onclick="rateSpeaking(${index}, ${s})" class="score-btn score-${s}">${s}分</button>`).join('')}
                    </div>
                </div>
                <div class="result-feedback" id="feedback-${index}" style="display:none;"></div>
            `;
        }
        html += `</div>`;
    });

    if (isSpeaking) {
        html += `<div class="footer-bar"><span id="total-score-display">总分: 0</span></div>`;
    }
    html += `</div>`;
    app.innerHTML = html;
}

// 打分逻辑
window.rateSpeaking = function(index, score) {
    document.getElementById(`action-${index}`).style.display = 'none';
    const fb = document.getElementById(`feedback-${index}`);
    fb.style.display = 'block';
    fb.innerHTML = `✅ 得分：<b>${score}</b>`;
    totalScore += score;
    document.getElementById('total-score-display').innerText = `总分: ${totalScore}`;
}
