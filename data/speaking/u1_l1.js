window.LOAD_QUIZ({
    title: "Unit 1 Lesson 1: Nice to meet you (口语)",
    mode: "speaking",
    
    // ✅ 图片资源 (请确保您的 img 文件夹里有这些图)
  images: {
        'Apple': 'img/u1_apple.png',
        'Miss_Gao': 'img/u1_miss_gao.png',
        'Sally': 'img/u1_sally.png'   // 👈 这里改成新上传的文件名
    },

    // ✅ 通用评分标准 (显示在每题答案下方)
    rubric: "----------\n评分标准：\n[5分] 流畅自然，无需提示\n[4分] 基本清晰，偶有提示\n[3分] 需提示才能完成\n[2分] 表达困难，依赖提示\n[1分] 无法作答",

    // ✅ 完整 5 道口语题
    questions: [
        // 【Q1 核心词汇】
        { 
            qNum: 1, 
            type: 'speaking', 
            text: '请看这张图片。用英语大声说出这是什么？', 
            imageKey: 'Apple', 
            guide: '✅ 参考答案：Apple / An apple' 
        },

        // 【Q2 句型表达】
        { 
            qNum: 2, 
            type: 'speaking', 
            text: '角色扮演：假如你是高老师（Miss Gao），上课了，你要怎么跟同学们介绍自己？', 
            imageKey: 'Miss_Gao', 
            guide: '✅ 参考答案：Hello, I\'m Miss Gao. (重点考察 I\'m 的用法)' 
        },

        // 【Q3 情景问答】
        { 
            qNum: 3, 
            type: 'speaking', 
            text: '情景反应：仔细听老师说 "Nice to meet you." (很高兴见到你)。\n请问你应该怎么用英语回答我？', 
            // 此题无需图片
            guide: '✅ 参考答案：Nice to meet you, too. (注意 too 的发音)' 
        },

        // 【Q4 图说任务】
        { 
            qNum: 4, 
            type: 'speaking', 
            text: '这是新同学 Sally。你想跟她交朋友，要怎么用英语跟她打招呼？', 
            imageKey: 'Sally', 
            guide: '✅ 参考答案：Hello, Sally! / Hi, Sally!' 
        },

        // 【Q5 自主表达】
        { 
            qNum: 5, 
            type: 'speaking', 
            text: '现在做真实的自己。老师跟你打招呼：\n"Hello! I\'m [Teacher Name]."\n请你用英语告诉我你的名字。', 
            // 此题无需图片
            guide: '✅ 参考答案：Hello, I\'m [学生真名].' 
        }
    ]
});
