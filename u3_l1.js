// =================================================================
// 📌 老师配置区 (Teacher Configuration)
// =================================================================
const QUIZ_CONFIG = {
    // 1. 单元标题 (本周新主题)
    title: "Unit 3 Lesson 1 \"It's green\"", 
    
    // 2. Google Script 链接 (您的专属数据库链接)
    scriptUrl: "https://script.google.com/macros/s/AKfycbxc8c4prsZZLY9vp-te4gH5twQNO1A8Ek3yROTNZeNs-7YhL60UojvMsQoceJUZ7LUP/exec"
};

// -----------------------------------------------------------------
// 1. 学生名单 (27人 - 已保留您的班级名单)
// -----------------------------------------------------------------
const studentList = [
    { id: '1', name: '张宇豪' }, { id: '2', name: '张佳寒' }, { id: '3', name: '张睿渊' },
    { id: '4', name: '张羽韬' }, { id: '5', name: '张美茹' }, { id: '6', name: '张嘉钦' },
    { id: '7', name: '卢梦婷' }, { id: '8', name: '张悦萱' }, { id: '9', name: '张语涵' },
    { id: '10', name: '张英豪' }, { id: '11', name: '张志鹏' }, { id: '12', name: '张智杰' },
    { id: '13', name: '张梓婷' }, { id: '14', name: '张品琪' }, { id: '15', name: '张诺依' },
    { id: '16', name: '张雨泽' }, { id: '17', name: '张依彤' }, { id: '18', name: '张艺楠' },
    { id: '19', name: '张思彤' }, { id: '20', name: '张子豪' }, { id: '21', name: '张梓亦' },
    { id: '22', name: '张皓鑫' }, { id: '23', name: '张雨欣' }, { id: '24', name: '张如欣' },
    { id: '25', name: '张柏涵' }, { id: '26', name: '张梓纯' }, { id: '27', name: '张泽鑫' }
];

// -----------------------------------------------------------------
// 2. 题目与资源 (Unit 3 Lesson 1 新资源)
// -----------------------------------------------------------------
const imageUris = {
    // 核心教学图
    'RedLight': 'img/u3_red_light.png',      // 红灯
    'GreenLight': 'img/u3_green_light.png',  // 绿灯
    'StopSign': 'img/u3_stop_sign.png',      // 停止标志
    'Rabbit': 'img/u3_rabbit.png',           // 兔子 (Rr)
    'Question': 'img/u3_question.png',       // 问号 (Qq)
    
    // 干扰项图片
    'YellowLight': 'img/u3_yellow_light.png',// 黄灯
    'TrafficLight': 'img/u3_traffic_lights.png', // 整体红绿灯
    'Dog': 'img/u3_dog.png',                 // 狗
    'Cat': 'img/u3_cat.png'                  // 猫
};

const quizData = [
    // --- Part A: Listening (听力 - 4选项) ---
    { 
        qNum: 1, 
        part: 'A', 
        type: 'select', 
        text: '听录音，选出正确的图片。', 
        audioText: 'The light is red.', 
        options: [imageUris['GreenLight'], imageUris['RedLight'], imageUris['YellowLight'], imageUris['TrafficLight']], 
        correct: imageUris['RedLight'] 
    },
    { 
        qNum: 2, 
        part: 'A', 
        type: 'select', 
        text: '听指令，选出正确的中文意思。', 
        audioText: 'Stop! Wang Tao.', 
        options: ['A. 走', 'B. 停', 'C. 看', 'D. 听'], 
        correct: 'B. 停' 
    },
    { 
        qNum: 3, 
        part: 'A', 
        type: 'select', 
        text: '听录音，选出以该字母开头的单词图片。', 
        audioText: 'R, r, rabbit.', 
        options: [imageUris['Question'], imageUris['Rabbit'], imageUris['Dog'], imageUris['Cat']], 
        correct: imageUris['Rabbit'] 
    },
    { 
        qNum: 4, 
        part: 'A', 
        type: 'select', 
        text: '听录音，选出你听到的单词。', 
        audioText: 'It is green now.', 
        options: ['A. red', 'B. green', 'C. blue', 'D. yellow'], 
        correct: 'B. green' 
    },
    { 
        qNum: 5, 
        part: 'A', 
        type: 'select', 
        text: '听录音，选出正确的句子。', 
        audioText: "Let's go to school.", 
        options: ['A. Let\'s go home.', 'B. Let\'s go to school.', 'C. Let\'s play a game.', 'D. Let\'s stop now.'], 
        correct: 'B. Let\'s go to school.' 
    },

    // --- Part B: Reading (阅读 - 4选项) ---
    { 
        qNum: 6, 
        part: 'B', 
        type: 'select', 
        text: '看图，选出正确的单词。', 
        imageUri: imageUris['GreenLight'], 
        options: ['A. red', 'B. green', 'C. yellow', 'D. blue'], 
        correct: 'B. green' 
    },
    { 
        qNum: 7, 
        part: 'B', 
        type: 'select', 
        text: '读句子，选出正确的中文翻译：Let\'s go to school.', 
        options: ['A. 让我们回家吧。', 'B. 让我们去上学吧。', 'C. 让我们去公园吧。', 'D. 让我们玩游戏吧。'], 
        correct: 'B. 让我们去上学吧。' 
    },
    { 
        qNum: 8, 
        part: 'B', 
        type: 'select', 
        text: '看图，选出描述正确的句子。', 
        imageUri: imageUris['RedLight'], 
        options: ['A. It is green.', 'B. The light is red.', 'C. It represents a dog.', 'D. Let\'s go.'], 
        correct: 'B. The light is red.' 
    },
    { 
        qNum: 9, 
        part: 'B', 
        type: 'select', 
        text: '选出不同类的一项 (Find the odd one out)。', 
        options: ['A. red', 'B. green', 'C. yellow', 'D. light'], 
        correct: 'D. light' 
    },
    { 
        qNum: 10, 
        part: 'B', 
        type: 'select', 
        text: '读句子选词填空：Stop! The light is ______.', 
        options: ['A. go', 'B. red', 'C. now', 'D. book'], 
        correct: 'B. red' 
    },

    // --- Part C: Writing (写作 - 简单版) ---
    { 
        qNum: 11, 
        part: 'C', 
        type: 'select', 
        text: '看图，选出拼写正确的单词 (停止)。', 
        imageUri: imageUris['StopSign'], 
        options: ['A. spot', 'B. stop', 'C. pots', 'D. tops'], 
        correct: 'B. stop' 
    },
    { 
        qNum: 12, 
        part: 'C', 
        type: 'select', 
        text: '看图，补全单词空缺的字母：r _ d (红色)', 
        imageUri: imageUris['RedLight'], 
        options: ['A. a', 'B. e', 'C. i', 'D. o'], 
        correct: 'B. e' 
    },
    { 
        qNum: 13, 
        part: 'C', 
        type: 'select', 
        text: '选出字母 Q 的小写形式。', 
        options: ['A. p', 'B. b', 'C. q', 'D. d'], 
        correct: 'C. q' 
    },
    { 
        qNum: 14, 
        part: 'C', 
        type: 'select', 
        text: '绿灯亮了，我们该怎么做？选出单词“走”。', 
        options: ['A. go', 'B. no', 'C. to', 'D. so'], 
        correct: 'A. go' 
    },
    { 
        qNum: 15, 
        part: 'C', 
        type: 'drag-sort', 
        text: '拖动单词，连词成句。', 
        words: ['The', 'light', 'is', 'red', '.'], 
        correct: 'The light is red.' 
    }
];

// -----------------------------------------------------------------
// 3. 全局状态 (无需修改)
// -----------------------------------------------------------------
let currentQuestionIndex = 1;
const TOTAL_QUESTIONS = quizData.length;
let timerInterval;
let timeLeft = 540; 
let currentAnswers = {};
let allStudentRecords = [];
let quizStartTime = null;

// -----------------------------------------------------------------
// 4. 核心功能 (无需修改)
// -----------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    // 1. 自动填入配置的标题
    const titleEl = document.getElementById('missionTitle');
    if(titleEl) titleEl.textContent = QUIZ_CONFIG.title;
    populateStudents();
});

function populateStudents() {
    const selector = document.getElementById('studentSelector');
    if(!selector) return;
    
    // 清空现有选项，只保留默认提示
    selector.innerHTML = '<option value="" disabled selected>-- 点这里选择姓名 --</option>';
    
    studentList.forEach(student => {
        const option = document.createElement('option');
        const displayId = student.id.toString().padStart(2, '0');
        option.value = student.id;
        option.textContent = `${displayId} ${student.name}`;
        selector.appendChild(option);
    });
}

function enableStartButton() {
    if (document.getElementById('studentSelector').value) {
        document.getElementById('startButton').disabled = false;
    }
}

function startQuiz() {
    const studentId = document.getElementById('studentSelector').value;
    if (!studentId) return;

    renderAllQuestions();

    document.getElementById('coverPage').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'block';
    
    currentAnswers = {};
    timeLeft = 540; 
    currentQuestionIndex = 1;
    
    // 记录开始时间
    quizStartTime = new Date();

    const selectedStudent = studentList.find(s => s.id === studentId);
    document.getElementById('studentDisplay').textContent = selectedStudent.name;
    document.getElementById('fixedHeader').style.display = 'flex';

    startTimer();
    changeQuestion(1);
}

function startTimer() {
    clearInterval(timerInterval);
    const timerDisplay = document.getElementById('timerDisplay');
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerDisplay.textContent = '00:00';
            forceSubmit(); 
            return;
        }
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
}

// 渲染题目
function renderAllQuestions() {
    const container = document.getElementById('quizContainer');
    container.innerHTML = '';

    quizData.forEach(q => {
        const qDiv = document.createElement('div');
        qDiv.id = `question_page_${q.qNum}`;
        qDiv.className = 'question-page';
        
        // 自动生成标题
        let partTitle = "", partIcon = "";
        const indexInPart = (q.qNum - 1) % 5 + 1; 

        if (q.part === 'A') { partTitle = "听力挑战"; partIcon = "👂"; }
        else if (q.part === 'B') { partTitle = "阅读挑战"; partIcon = "👀"; }
        else if (q.part === 'C') { partTitle = "写作挑战"; partIcon = "✍️"; }

        let html = `<div class="section-header">
                        ${partIcon} ${partTitle}：第 ${indexInPart} 题 <small>(共 5 题)</small>
                    </div>`;
        html += `<div class="question-text">${q.text}</div>`;

        if (q.imageUri) html += `<img src="${q.imageUri}" class="question-image-style" onerror="this.style.display='none'">`;
        if (q.audioText) {
            const safeText = q.audioText.replace(/'/g, "\\'");
            html += `<div style="text-align:center"><button class="speaker-button" onclick="speakText('${safeText}')">🔊 点击播放录音</button></div>`;
        }

        // 渲染交互控件
        if (q.type === 'select') {
            html += `<div class="options-container">`; 
            q.options.forEach(option => {
                const isImage = (typeof option === 'string') && (option.indexOf('img/') === 0);
                const displayContent = isImage 
                    ? `<img src="${option}" class="option-image-style">` 
                    : `<span>${option}</span>`;
                const safeValue = option.toString().replace(/'/g, "\\'");
                html += `<div class="answer-option" data-qnum="${q.qNum}" onclick="selectOption(${q.qNum}, '${safeValue}', this)">
                            ${displayContent}
                         </div>`;
            });
            html += `</div>`;
        } else if (q.type === 'fill') {
            html += `<input type="text" id="answer_Q${q.qNum}" class="fill-in-input" placeholder="点击输入答案..." oninput="saveFillAnswer(${q.qNum})">`;
        } else if (q.type === 'drag-sort') {
            html += `<div class="sort-area-label">↓ 点一下单词，它就会飞到横线上 ↓</div>`;
            html += `<div id="target_Q${q.qNum}" class="drag-target"></div>`;
            html += `<div id="source_Q${q.qNum}" class="drag-source">`;
            q.words.forEach((word, idx) => {
                html += `<div class="word-chip" id="word_${q.qNum}_${idx}" onclick="moveWord(${q.qNum}, this)">${word}</div>`;
            });
            html += `</div>`;
        }

        // 导航按钮
        html += `<div class="navigation-buttons">`;
        if (q.qNum > 1) html += `<button class="prev-button" onclick="changeQuestion(${q.qNum - 1})">上一题</button>`;
        if (q.qNum < TOTAL_QUESTIONS) html += `<button class="next-button" onclick="changeQuestion(${q.qNum + 1})">下一题</button>`;
        else html += `<button class="submit-button" onclick="submitAnswers()">交卷啦</button>`;
        html += `</div>`;

        qDiv.innerHTML = html;
        container.appendChild(qDiv);
    });
}

// -----------------------------------------------------------------
// 5. 交互逻辑
// -----------------------------------------------------------------
function changeQuestion(index) {
    document.querySelectorAll('.question-page').forEach(el => el.style.display = 'none');
    currentQuestionIndex = index;
    document.getElementById(`question_page_${index}`).style.display = 'block';
    window.scrollTo(0, 0);
}

function selectOption(qNum, value, element) {
    document.querySelectorAll(`.answer-option[data-qnum="${qNum}"]`).forEach(opt => {
        opt.classList.remove('selected-option');
    });
    element.classList.add('selected-option');
    currentAnswers[`Q${qNum}`] = value;
}

function saveFillAnswer(qNum) {
    const val = document.getElementById(`answer_Q${qNum}`).value.trim().toLowerCase();
    currentAnswers[`Q${qNum}`] = val;
}

function moveWord(qNum, element) {
    const sourceBox = document.getElementById(`source_Q${qNum}`);
    const targetBox = document.getElementById(`target_Q${qNum}`);
    if (element.parentElement === sourceBox) targetBox.appendChild(element);
    else sourceBox.appendChild(element);
    
    let ans = '';
    Array.from(targetBox.children).forEach(chip => ans += chip.textContent + ' ');
    currentAnswers[`Q${qNum}`] = ans.trim();
}

// -----------------------------------------------------------------
// 6. 提交与评分
// -----------------------------------------------------------------
function gradeQuiz() {
    let score = 0, correctness = {};
    let l_score = 0, r_score = 0, w_score = 0;

    quizData.forEach(q => {
        const qKey = `Q${q.qNum}`;
        const studentAns = (currentAnswers[qKey] || '').toLowerCase().replace(/\s+/g, ' ').trim();
        const correctAns = q.correct.toLowerCase().replace(/\s+/g, ' ').trim();
        let isRight = false;
        
        if (q.type === 'drag-sort') isRight = (studentAns.replace(/[.,?!]/g,'') === correctAns.replace(/[.,?!]/g,''));
        else isRight = (studentAns === correctAns);

        if (isRight) {
            score += 5;
            if (q.part === 'A') l_score += 5;
            if (q.part === 'B') r_score += 5;
            if (q.part === 'C') w_score += 5;
        }
        correctness[qKey] = isRight;
    });
    return { score, correctness, l_score, r_score, w_score };
}

function forceSubmit() {
    document.getElementById('loadingOverlay').style.display = 'flex';
    setTimeout(submitAnswers, 2000);
}

function submitAnswers() {
    clearInterval(timerInterval);
    document.getElementById('loadingOverlay').style.display = 'none';

    // 1. 评分
    const result = gradeQuiz();
    const studentId = document.getElementById('studentSelector').value;
    const studentName = studentList.find(s => s.id === studentId).name;
    const totalPercent = Math.round((result.score / 75) * 100);

    // 2. 时间计算
    const now = new Date();
    const timestamp = now.getFullYear() + '/' + (now.getMonth() + 1).toString().padStart(2, '0') + '/' + now.getDate().toString().padStart(2, '0') + ' ' + now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0') + ':' + now.getSeconds().toString().padStart(2, '0');
    const durationSeconds = Math.floor((now - quizStartTime) / 1000);
    const timeTaken = Math.floor(durationSeconds / 60) + "分" + (durationSeconds % 60) + "秒";

    // 3. 构建记录
    const record = {
        timestamp, 
        module: QUIZ_CONFIG.title, 
        timeTaken,
        studentId, name: studentName, score: result.score,
        answers: currentAnswers, correctness: result.correctness
    };
    allStudentRecords.push(record);

    // 4. 发送给 Google Sheet
    const payload = {
        timestamp: timestamp,
        module: QUIZ_CONFIG.title,
        timeTaken: timeTaken,
        studentLabel: `${studentId} ${studentName}`,
        totalScore: result.score,
        totalPercent: totalPercent,
        listeningScore: result.l_score,
        readingScore: result.r_score,
        writingScore: result.w_score
    };
    
    try {
        fetch(QUIZ_CONFIG.scriptUrl, {
            method: 'POST', mode: 'no-cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payload)
        });
    } catch(e) { console.error(e); }

    // 5. 显示结果UI
    document.getElementById('fixedHeader').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('scoreCard').style.display = 'block';
    
    document.getElementById('finalScore').textContent = result.score;
    document.getElementById('timeTakenDisplay').textContent = "本次用时: " + timeTaken;
    
    let feedback = "";
    if (result.score >= 70) feedback = "🎉 太棒了！你是英语小天才！";
    else if (result.score >= 50) feedback = "🌟 做得不错！继续加油哦！";
    else feedback = "💪 别灰心，下次一定能行！";
    document.getElementById('gradeFeedback').textContent = feedback;
}

function resetForNextStudent() {
    location.reload(); 
}

function speakText(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'en-US'; u.rate = 0.8; 
        window.speechSynthesis.speak(u);
    } else {
        alert('抱歉，你的手机不支持朗读功能');
    }
}

// 老师导出
function exportToCSV() {
    if (allStudentRecords.length === 0) { alert('还没有成绩哦'); return; }
    let csv = '提交时间,知识模块,答题用时,学号,姓名,总分\n';
    allStudentRecords.forEach(r => {
        csv += `${r.timestamp},"${r.module}","${r.timeTaken}",${r.studentId},${r.name},${r.score}\n`;
    });
    const blob = new Blob(['\ufeff'+csv], {type: 'text/csv;charset=utf-8'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = '成绩单.csv';
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
}
