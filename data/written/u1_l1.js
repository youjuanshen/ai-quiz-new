/**
 * ✍️ 笔试题库: Unit 1 Lesson 1 (修复版)
 * 适配：新版 written.html
 */

window.LOAD_QUIZ({
    title: "Unit 1 Lesson 1: Nice to meet you (笔试)",
    mode: "written",
    timeLimit: 540, // 9分钟

    // 1. 图片资源
    images: {
        'Apple': 'img/u1_apple.png',
        'Banana': 'img/u1_banana.png',
        'Boy': 'img/u1_boy.png',
        'Girl': 'img/u1_girl.png',
        'MissGao': 'img/u1_miss_gao.png'
    },

    // 2. 题目数据
    questions: [
        // --- Part A: Listening (听力) ---
        { 
            qNum: 1, part: 'A', type: 'select', 
            text: '1. 听录音，选出正确的图片。', 
            audioText: 'Apple. It is an apple.', 
            options: ['img/u1_banana.png', 'img/u1_apple.png', 'img/u1_boy.png', 'img/u1_girl.png'], 
            correct: 'img/u1_apple.png' 
        },
        { 
            qNum: 2, part: 'A', type: 'select', 
            text: '2. 听录音，选出这句话的中文意思。', 
            audioText: 'Nice to meet you.', 
            options: ['A. 你好。', 'B. 再见。', 'C. 很高兴见到你。', 'D. 我是高老师。'], 
            correct: 'C. 很高兴见到你。' 
        },
        { 
            qNum: 3, part: 'A', type: 'select', 
            text: '3. 听录音选词填空：Hello, ______ and girls!', 
            audioText: 'Hello, boys and girls!', 
            options: ['A. boys', 'B. banana', 'C. bag', 'D. book'], 
            correct: 'A. boys' 
        },
        { 
            qNum: 4, part: 'A', type: 'select', 
            text: '4. 听录音，选出你听到的人物。', 
            audioText: 'Hello, I am Miss Gao.', 
            options: ['img/u1_boy.png', 'img/u1_girl.png', 'img/u1_miss_gao.png', 'img/u1_apple.png'], 
            correct: 'img/u1_miss_gao.png' 
        },
        { 
            qNum: 5, part: 'A', type: 'select', 
            text: '5. 听录音，选出你听到的单词。', 
            audioText: 'Girl. I am a girl.', 
            options: ['A. boy', 'B. banana', 'C. cat', 'D. girl'], 
            correct: 'D. girl' 
        },

        // --- Part B: Reading (阅读) ---
        { 
            qNum: 6, part: 'B', type: 'select', 
            text: '6. 看图，选择正确的单词。', 
            imageKey: 'Banana', 
            options: ['A. apple', 'B. banana', 'C. boy', 'D. girl'], 
            correct: 'B. banana' 
        },
        { 
            qNum: 7, part: 'B', type: 'select', 
            text: '7. 选出 "I am Miss Gao." 的中文意思。', 
            options: ['A. 我是高老师。', 'B. 你好，高老师。', 'C. 高老师再见。', 'D. 这是高老师。'], 
            correct: 'A. 我是高老师。' 
        },
        { 
            qNum: 8, part: 'B', type: 'select', 
            text: '8. 找出不同类的一项 (Find the odd one out)。', 
            options: ['A. boy', 'B. girl', 'C. Miss', 'D. apple'], 
            correct: 'D. apple' 
        },
        { 
            qNum: 9, part: 'B', type: 'select', 
            text: '9. 看图，选择正确的单词。', 
            imageKey: 'Boy', 
            options: ['A. girl', 'B. apple', 'C. boy', 'D. banana'], 
            correct: 'C. boy' 
        },
        { 
            qNum: 10, part: 'B', type: 'select', 
            text: '10. "Hi" 的中文意思是什么？', 
            options: ['A. 再见', 'B. 你好/嗨', 'C. 苹果', 'D. 名字'], 
            correct: 'B. 你好/嗨' 
        },

        // --- Part C: Writing (写作) ---
        { 
            qNum: 11, part: 'C', type: 'select', 
            text: '11. 看图，补全单词：g _ r l (女孩)', 
            imageKey: 'Girl', 
            options: ['A. a', 'B. e', 'C. i', 'D. o'], 
            correct: 'C. i' 
        },
        { 
            qNum: 12, part: 'C', type: 'drag-sort', 
            text: '12. 拖拽单词，连词成句。', 
            words: ['Nice', 'to', 'meet', 'you', '.'], 
            correct: 'Nice to meet you.' 
        },
        { 
            qNum: 13, part: 'C', type: 'select', 
            text: '13. 选出字母 B 的小写形式。', 
            options: ['A. d', 'B. p', 'C. q', 'D. b'], 
            correct: 'D. b' 
        },
        { 
            qNum: 14, part: 'C', type: 'select', 
            text: '14. 选出字母 a 的大写形式。', 
            options: ['A. A', 'B. B', 'C. C', 'D. D'], 
            correct: 'A. A' 
        },
        { 
            qNum: 15, part: 'C', type: 'select', 
            text: '15. 看图，补全单词：_ p p l e (苹果)', 
            imageKey: 'Apple', 
            options: ['A. a', 'B. e', 'C. i', 'D. o'], 
            correct: 'A. a' 
        }
    ]
});
