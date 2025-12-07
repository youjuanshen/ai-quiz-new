/**
 * 🚀 英语测验系统核心引擎 (v6.0 最终架构版)
 * 特点：名单全局管理，测验文件只需关注题目
 */

// ============================================================
// 1. 全局配置 (Global Config)
// ============================================================

// 📋 学生名单 (全校唯一的名单维护处)
const STUDENTS = [
    "1. 张宇豪", "2. 张佳寒", "3. 张睿渊", "4. 张羽韬", "5. 张美茹",
    "6. 张嘉钦", "7. 卢梦婷", "8. 张悦萱", "9. 张语涵", "10. 张英豪",
    "11. 张志鹏", "12. 张智杰", "13. 张梓婷", "14. 张品琪", "15. 张诺依",
    "16. 张雨泽", "17. 张依彤", "18. 张艺楠", "19. 张思彤", "20. 张子豪",
    "21. 张梓亦", "22. 张皓鑫", "23. 张雨欣", "24. 张如欣", "25. 张柏涵",
    "26. 张梓纯", "27. 张泽鑫"
];

// 📋 Google Script URL
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxc8c4prsZZLY9vp-te4gH5twQNO1A8Ek3yROTNZeNs-7YhL60UojvMsQoceJUZ7LUP/exec";

// 📋 课程菜单
const MENU_CONFIG = {
    "speaking": {
        label: "🗣️ 口语面试 (Speaking)",
        lessons: [
            { id: "u1_l1", name: "Unit 1 Lesson 1: Nice to meet you", file: "data/speaking/u1_l1.js" }
        ]
    },
    "written": {
        label: "✍️ 笔试练习 (Written)",
        lessons: [
            { id: "u3_l1_w", name: "Unit 3 Lesson 1: It's green (笔试)", file: "data/written/u3_l1.js" }
        ]
    }
};

// ============================================================
// 2. 引擎核心逻辑 (Engine Core)
// ============================================================
let currentQuizData = null;
let currentStudent = "";
let totalScore = 0;
let writtenAnswers = {};
let timerInterval, timeLeft;

window.onload = initMenu;

// --- 菜单与加载 ---
function initMenu() {
    stopTimer();
    const app = document.getElementById('app');
    let html = `
        <div class="header-banner">
            <h1>三年级英语闯关赛</h1>
            <p>请选择挑战模式</p>
        </div>
        <div class="menu-container">
    `;

    for (const [modeKey, modeData] of Object.entries(MENU_CONFIG)) {
        const borderStyle = modeKey === 'speaking' ? 'border-top: 5px solid #42a5f5;' : 'border-top: 5px solid #ffa726;';
        html += `
            <div class="mode-card" style="${borderStyle}">
                <h3>${modeData.label}</h3>
                <div class="lesson-list">
        `;
        if (modeData.lessons.length === 0) {
            html += `<p class="empty-tip">🚧 施工中...</p>`;
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

window.loadLesson = function(filePath) {
    const app = document.getElementById('app');
    app.innerHTML = `<div class="loading">⏳ 正在读取试卷...<br><small>${filePath}</small></div>`;
    
    const script = document.createElement('script');
    script.src = filePath;
    script.onload = () => console.log("Loaded: " + filePath);
    script.onerror = () => app.innerHTML = `<div class="loading" style="color:red">❌ 加载失败，请检查文件路径</div>`;
    document.body.appendChild(script);
};

window.LOAD_QUIZ = function(data) {
    currentQuizData = data;
    renderStudentSelector();
};

// --- 学生选择 (统一使用全局 STUDENTS) ---
function renderStudentSelector() {
    const app = document.getElementById('app');
    // 直接使用全局 STUDENTS 常量
    const optionsHtml = STUDENTS.map(s => `<option value="${s}">${s}</option>`).join('');

    app.innerHTML = `
        <div class="quiz-header"><button onclick="initMenu()" class="back-btn">⬅ 返回菜单</button></div>
        <div class="welcome-card" style="text-align:center; padding:40px 20px; background:white; border-radius:20px; box-shadow:0 8px 20px rgba(0,0,0,0.08); max-width:500px; margin:0 auto;">
            <div style="font-size:60px; margin-bottom:10px; animation: bounce 2s infinite;">🎓</div>
            <h2 style="color:#333; margin-bottom:5px;">${currentQuizData.title}</h2>
            <p style="color:#666; font-size:14px; margin-bottom:30px;">请确认考生身份</p>
            <div style="text-align:left; margin-bottom:20px;">
                <label style="font-weight:bold; color:#555; display:block; margin-bottom:8px;">👤 选择姓名：</label>
                <select id="student-select" style="width:100%; padding:12px; font-size:16px; border:2px solid #e0e0e0; border-radius:10px; background:#fafafa; outline:none;">
                    <option value="" disabled selected>-- 点击选择 --</option>
                    ${optionsHtml}
                </select>
            </div>
            <button onclick="startQuiz()" class="lesson-btn" style="text-align:center; background:#4caf50; color:white; border:none; margin-top:20px;">🚀 准备好了，开始！</button>
        </div>
    `;
}

function startQuiz() {
    const select = document.getElementById('student-select');
    if (!select.value) { alert("请先选择一个名字！"); return; }
    currentStudent = select.value;
    totalScore = 0;
    writtenAnswers = {};
    
    if (currentQuizData.mode === 'written') {
        timeLeft = currentQuizData.timeLimit || 600;
        startTimer();
    }
    renderQuizBody();
}

// --- 渲染题目界面 ---
function renderQuizBody() {
    const app = document.getElementById('app');
    const isSpeaking = currentQuizData.mode === 'speaking';
    const timerHtml = isSpeaking ? '' : `<div style="background:#fff3e0; padding:5px 15px; border-radius:15px; color:#e65100; font-weight:bold;">⏳ <span id="timer-display">--:--</span></div>`;
    
    let html = `
        <div style="background:white; padding:10px 20px; display:flex; justify-content:space-between; align-items:center; position:sticky; top:0; z-index:99; box-shadow:0 2px 10px rgba(0,0,0,0.05);">
            <span style="font-weight:bold; color:#333;">👤 考生: <span style="color:#2196f3">${currentStudent}</span></span>
            ${timerHtml}
            <button onclick="initMenu()" style="background:#cfd8dc; border:none; color:#455a64; border-radius:15px; padding:5px 12px; cursor:pointer; font-size:12px;">退出</button>
        </div>
        <div class="quiz-body" style="margin-top:20px; max-width:800px; margin-left:auto; margin-right:auto;">
    `;

    currentQuizData.questions.forEach((q, index) => {
        let imgHtml = '';
        const imgSrc = q.imageKey ? currentQuizData.images[q.imageKey] : q.imageUri;
        if (imgSrc) {
            imgHtml = `<div class="img-box"><img src="${imgSrc}" alt="Image" style="max-height:200px; max-width:100%;"></div>`;
        }
        
        let audioHtml = '';
        if (q.audioText) {
            const safeText = q.audioText.replace(/'/g, "\\'");
            audioHtml = `<button onclick="speakText('${safeText}')" style="background:#e1f5fe; color:#0288d1; border:none; padding:8px 15px; border-radius:20px; cursor:pointer; font-weight:bold; margin-bottom:10px;">🔊 点击播放录音</button>`;
        }

        html += `
            <div class="question-card" id="card-${index}" style="background:white; border-radius:16px; padding:20px; margin-bottom:25px; box-shadow:0 4px 15px rgba(0,0,0,0.05); border-left:5px solid ${isSpeaking ? '#42a5f5' : '#ffa726'};">
                <div style="font-weight:bold; color:#999; font-size:12px; margin-bottom:5px;">Q${q.qNum} (${q.part || 'Part'})</div>
                <div class="q-text" style="font-size:18px; font-weight:bold; color:#333; margin-bottom:15px;">${q.text}</div>
                ${audioHtml}
                ${imgHtml}
        `;

        if (isSpeaking) { // 口语题
            html += `
                <div class="guide-box" style="background:#fff8e1; padding:12px; border-radius:8px; color:#e65100; font-size:14px; margin-top:15px;">
                    <strong>💡 参考答案：</strong><br>${q.guide.replace(/\n/g, '<br>')}
                </div>
                <div id="action-${index}" style="margin-top:15px; display:grid; grid-template-columns:repeat(5, 1fr); gap:5px;">
                    ${[5,4,3,2,1].map(s => `<button onclick="rateSpeaking(${index}, ${s})" class="score-btn score-${s}" style="padding:10px; border:none; border-radius:6px; color:white; font-weight:bold; cursor:pointer; background:${getScoreColor(s)}">${s}分</button>`).join('')}
                </div>
                <div id="feedback-${index}" style="display:none; margin-top:15px; padding:10px; background:#e8f5e9; color:#2e7d32; text-align:center; border-radius:6px; font-weight:bold;"></div>
            `;
        } else { // 笔试题
            if (q.type === 'select') {
                html += `<div class="options-grid" style="display:grid; gap:10px;">`;
                q.options.forEach(opt => {
                    let optContent = opt;
                    let optVal = opt;
                    if (opt.startsWith('image:')) {
                        const key = opt.split(':')[1];
                        const src = currentQuizData.images[key];
                        optContent = `<img src="${src}" style="height:50px; vertical-align:middle;">`;
                        optVal = 'image:'+key;
                    }
                    // ID必须唯一，否则点击会乱
                    const safeId = `opt-${q.qNum}-${index}-${optVal.replace(/[^a-zA-Z0-9]/g, '')}`;
                    html += `<button class="option-btn" id="${safeId}" onclick="selectOption(${q.qNum}, '${optVal}', this)" style="text-align:left; padding:12px; border:2px solid #eee; background:white; border-radius:8px; cursor:pointer;">${optContent}</button>`;
                });
                html += `</div>`;
            } else if (q.type === 'drag-sort') {
                html += `<div style="border:2px dashed #ddd; padding:15px; min-height:50px; margin-bottom:10px; border-radius:8px; display:flex; gap:5px; flex-wrap:wrap; background:#fafafa;" id="target-${q.qNum}"></div>`;
                html += `<div style="display:flex; gap:5px; flex-wrap:wrap;" id="source-${q.qNum}">`;
                q.words.forEach(word => {
                    html += `<button onclick="moveWord(this, 'source-${q.qNum}', 'target-${q.qNum}', ${q.qNum})" style="padding:8px 15px; background:#e3f2fd; border:1px solid #90caf9; border-radius:20px; cursor:pointer;">${word}</button>`;
                });
                html += `</div>`;
            }
        }
        html += `</div>`;
    });

    if (isSpeaking) {
        html += `<div class="footer-bar"><span id="total-score-display">🌟 ${currentStudent} 总分: 0</span></div>`;
    } else {
        html += `<button onclick="submitWrittenQuiz()" style="display:block; width:100%; padding:15px; background:#4caf50; color:white; font-size:18px; font-weight:bold; border:none; border-radius:12px; margin-bottom:50px; cursor:pointer;">交卷 (Submit)</button>`;
    }
    html += `</div>`;
    app.innerHTML = html;
}

function getScoreColor(s) {
    if(s==5) return '#4caf50'; if(s==4) return '#8bc34a'; if(s==3) return '#ffc107'; if(s==2) return '#ff9800'; return '#f44336';
}

// ============================================================
// 3. 口语交互逻辑
// ============================================================
window.rateSpeaking = function(index, score) {
    document.getElementById(`action-${index}`).style.display = 'none';
    const fb = document.getElementById(`feedback-${index}`);
    fb.style.display = 'block';
    fb.innerHTML = `✅ 得分：<b>${score}</b>`;
    totalScore += score;
    document.getElementById('total-score-display').innerText = `🌟 ${currentStudent} 总分: ${totalScore}`;
    
    // 如果是最后一题，自动上传
    if (index === currentQuizData.questions.length - 1) {
        submitDataToGoogle('Speaking', totalScore, "Teacher Rated");
        alert("🎉 考试结束！成绩已上传！");
    }
    
    const nextCard = document.getElementById(`card-${index + 1}`);
    if (nextCard) setTimeout(() => nextCard.scrollIntoView({ behavior: 'smooth', block: 'center' }), 400);
}

// ============================================================
// 4. 笔试交互逻辑
// ============================================================
function startTimer() {
    clearInterval(timerInterval);
    const display = document.getElementById('timer-display');
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            submitWrittenQuiz();
            return;
        }
        timeLeft--;
        const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
        const s = (timeLeft % 60).toString().padStart(2, '0');
        if(display) display.innerText = `${m}:${s}`;
    }, 1000);
}

function stopTimer() { clearInterval(timerInterval); }

window.speakText = function(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'en-US'; u.rate = 0.8;
        window.speechSynthesis.speak(u);
    } else { alert("不支持朗读"); }
}

window.selectOption = function(qNum, value, btnElement) {
    writtenAnswers[`Q${qNum}`] = value;
    const parent = btnElement.parentElement;
    Array.from(parent.children).forEach(b => {
        b.style.borderColor = '#eee';
        b.style.backgroundColor = 'white';
    });
    btnElement.style.borderColor = '#2196f3';
    btnElement.style.backgroundColor = '#e3f2fd';
}

window.moveWord = function(btn, sourceId, targetId, qNum) {
    const target = document.getElementById(targetId);
    const source = document.getElementById(sourceId);
    if (btn.parentElement.id === sourceId) target.appendChild(btn);
    else source.appendChild(btn);
    
    const words = Array.from(target.children).map(b => b.innerText).join(' ');
    writtenAnswers[`Q${qNum}`] = words;
}

window.submitWrittenQuiz = function() {
    stopTimer();
    let score = 0;
    
    currentQuizData.questions.forEach((q, idx) => {
        const userAns = writtenAnswers[`Q${q.qNum}`];
        let correctAns = q.correct;
        let isCorrect = false;

        if (userAns === correctAns) {
            isCorrect = true;
        } else if (q.type === 'drag-sort') {
             if (userAns && userAns.trim() === correctAns.trim()) isCorrect = true;
        }

        if (isCorrect) score += 5;
        
        const card = document.getElementById(`card-${idx}`);
        const fbDiv = document.createElement('div');
        fbDiv.style.marginTop = '10px';
        fbDiv.style.padding = '10px';
        fbDiv.style.borderRadius = '5px';
        if (isCorrect) {
            fbDiv.style.background = '#e8f5e9';
            fbDiv.style.color = '#2e7d32';
            fbDiv.innerText = "✅ 正确 (+5)";
        } else {
            fbDiv.style.background = '#ffebee';
            fbDiv.style.color = '#c62828';
            fbDiv.innerText = `❌ 错误 (正确: ${correctAns.replace('image:', '')})`;
        }
        card.appendChild(fbDiv);
    });
    
    // 上传数据
    submitDataToGoogle('Written', score, writtenAnswers);
    alert(`考试结束！\n考生：${currentStudent}\n得分：${score}`);
    
    // 滚回顶部看结果
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================================
// 5. 数据上传逻辑 (通用)
// ============================================================
function submitDataToGoogle(type, score, details) {
    const payload = {
        studentName: currentStudent,
        examType: type,
        lessonTitle: currentQuizData.title,
        score: score,
        duration: type === 'Written' ? `${Math.floor((currentQuizData.timeLimit - timeLeft)/60)}m` : 'N/A',
        details: details
    };
    
    // 发送请求 (no-cors 模式)
    fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    }).then(() => console.log("Data sent to Google Sheet!"));
}
