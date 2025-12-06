// ============================================================
//  🎤 小学英语口语测验专用库 (Speaking Quiz Library)
//  📂 文件名：script_oral.js
//  📝 适用单元：Unit 1 Lesson 1 (Hello / I'm... / Apple)
//  🛠️ 功能：教师专用，点击 1-5 分按钮进行评分
// ============================================================

// ✅ 1. 测验配置
const QUIZ_CONFIG = {
    title: "Unit 1 Lesson 1: 口语面试 (Teacher Only)",
    scriptUrl: "script_oral.js" // 指向自己，确保加载正确
};

// ✅ 2. 口语题专用图片库
// 教师请确保 GitHub 的 /img 文件夹中有这些图片
const imageUris = {
    'Apple': 'https://your-repo.github.io/img/apple.png',       // 课本P10
    'Miss_Gao': 'https://your-repo.github.io/img/miss_gao.png',  // 课本P9
    'Sally': 'https://your-repo.github.io/img/sally.png'         // 课本P9
};

[cite_start]// 📌 通用评分标准 (基于 PPT 规则 [cite: 76-86])
const RUBRIC = "----------\n评分标准：\n[5分] 流畅自然，无需提示\n[4分] 基本清晰，偶有提示\n[3分] 需提示才能完成\n[2分] 表达困难，依赖提示\n[1分] 无法作答";

// ✅ 3. 口语题目数据 (Unit 1 Lesson 1)
const quizData = [
    // 【Q1 核心词汇】
    { 
        qNum: 1, 
        part: 'Speaking', 
        type: 'speaking',  // 🟢 激活打分按钮
        text: '请看这张图片。用英语大声说出这是什么？', 
        imageUri: imageUris['Apple'],
        guide: `✅ 参考答案：Apple / An apple\n${RUBRIC}`
    },

    // 【Q2 句型表达】
    { 
        qNum: 2, 
        part: 'Speaking', 
        type: 'speaking', 
        text: '角色扮演：假如你是高老师（Miss Gao），上课了，你要怎么跟同学们介绍自己？', 
        imageUri: imageUris['Miss_Gao'],
        guide: `✅ 参考答案：Hello, I'm Miss Gao.\n${RUBRIC}`
    },

    // 【Q3 情景问答】
    { 
        qNum: 3, 
        part: 'Speaking', 
        type: 'speaking', 
        text: '仔细听老师说："Nice to meet you." (很高兴见到你)。\n请问你应该怎么用英语回答我？', 
        guide: `✅ 参考答案：Nice to meet you, too.\n${RUBRIC}`
    },

    // 【Q4 图说任务】
    { 
        qNum: 4, 
        part: 'Speaking', 
        type: 'speaking', 
        text: '这是新同学 Sally。你想跟她交朋友，要怎么用英语跟她打招呼？', 
        imageUri: imageUris['Sally'],
        guide: `✅ 参考答案：Hello, Sally! / Hi, Sally!\n${RUBRIC}`
    },

    // 【Q5 自主表达】
    { 
        qNum: 5, 
        part: 'Speaking', 
        type: 'speaking', 
        text: '现在做真实的自己。老师跟你打招呼：\n"Hello! I\'m [Teacher Name]."\n请你用英语告诉我你的名字。', 
        guide: `✅ 参考答案：Hello, I'm [学生真名].\n${RUBRIC}`
    }
];
