/**
 * ✍️ Unit 1 Lesson 1 笔试题库 (最终修复版)
 * 路径必须是: data/written/u1_l1.js
 */
window.LOAD_QUIZ({
    title: "Unit 1 Lesson 1: Nice to meet you (笔试)",
    mode: "written",
    timeLimit: 540,

    // 图片资源 (这里用了您之前确认过的正确路径)
    images: {
        'Apple': 'img/u1_apple.png',
        'Banana': 'img/u1_banana.png',
        'Boy': 'img/u1_boy.png',
        'Girl': 'img/u1_girl.png',
        'MissGao': 'img/u1_miss_gao.png'
    },

    questions: [
        { 
            qNum: 1, part: 'A', type: 'select', 
            text: '1. 听录音，选出正确的图片。', 
            audioText: 'Apple. It is an apple.', 
            // 注意：这里必须用 image:Key 的格式，或者直接写路径
            options: ['image:Banana', 'image:Apple', 'image:Boy', 'image:Girl'], 
            correct: 'image:Apple' 
        },
        { 
            qNum: 2, part: 'A', type: 'select', 
            text: '2. 听录音，选出这句话的中文意思。', 
            audioText: 'Nice to meet you.', 
            options: ['A. 你好。', 'B. 再见。', 'C. 很高兴见到你。', 'D. 我是高老师。'], 
            correct: 'C. 很高兴见到你。' 
        },
        { 
            qNum: 3, part: 'B', type: 'select', 
            text: '3. 看图，选出正确的单词。', 
            imageKey: 'Banana', 
            options: ['A. apple', 'B. banana', 'C. boy', 'D. girl'], 
            correct: 'B. banana' 
        },
        { 
            qNum: 4, part: 'C', type: 'select', 
            text: '4. 选出字母 B 的小写形式。', 
            options: ['A. d', 'B. p', 'C. q', 'D. b'], 
            correct: 'D. b' 
        },
        { 
            qNum: 5, part: 'C', type: 'drag-sort', 
            text: '5. 拖拽单词，连词成句。', 
            words: ['Nice', 'to', 'meet', 'you', '.'], 
            correct: 'Nice to meet you.' 
        }
    ]
});
