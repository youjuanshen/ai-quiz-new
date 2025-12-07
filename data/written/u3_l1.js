/**
 * ✍️ 纯净版笔试题库: Unit 3 Lesson 1
 * 特点：不含名单，不含URL，仅含题目数据
 */

window.LOAD_QUIZ({
    title: "Unit 3 Lesson 1: It's green (笔试)",
    mode: "written",
    timeLimit: 540, // 9分钟

    // ✅ 图片资源
    images: {
        'RedLight': 'img/u3_red_light.png',
        'GreenLight': 'img/u3_green_light.png',
        'StopSign': 'img/u3_stop_sign.png',
        'Rabbit': 'img/u3_rabbit.png',
        'Question': 'img/u3_question.png',
        'YellowLight': 'img/u3_yellow_light.png',
        'TrafficLight': 'img/u3_traffic_lights.png',
        'Dog': 'img/u3_dog.png',
        'Cat': 'img/u3_cat.png'
    },

    // ✅ 题目数据 (只关注题)
    questions: [
        // --- Part A: Listening ---
        { qNum: 1, part: 'A', type: 'select', text: '1. 听录音，选出正确的图片。', audioText: 'The light is red.', options: ['image:GreenLight', 'image:RedLight', 'image:YellowLight', 'image:TrafficLight'], correct: 'image:RedLight' },
        { qNum: 2, part: 'A', type: 'select', text: '2. 听指令，选出正确的中文意思。', audioText: 'Stop! Wang Tao.', options: ['A. 走', 'B. 停', 'C. 看', 'D. 听'], correct: 'B. 停' },
        { qNum: 3, part: 'A', type: 'select', text: '3. 听录音，选出以该字母开头的单词图片。', audioText: 'R, r, rabbit.', options: ['image:Question', 'image:Rabbit', 'image:Dog', 'image:Cat'], correct: 'image:Rabbit' },
        { qNum: 4, part: 'A', type: 'select', text: '4. 听录音，选出你听到的单词。', audioText: 'It is green now.', options: ['A. red', 'B. green', 'C. blue', 'D. yellow'], correct: 'B. green' },
        { qNum: 5, part: 'A', type: 'select', text: '5. 听录音，选出正确的句子。', audioText: "Let's go to school.", options: ['A. Let\'s go home.', 'B. Let\'s go to school.', 'C. Let\'s play a game.', 'D. Let\'s stop now.'], correct: 'B. Let\'s go to school.' },

        // --- Part B: Reading ---
        { qNum: 6, part: 'B', type: 'select', text: '6. 看图，选出正确的单词。', imageKey: 'GreenLight', options: ['A. red', 'B. green', 'C. yellow', 'D. blue'], correct: 'B. green' },
        { qNum: 7, part: 'B', type: 'select', text: '7. 读句子，选出正确的中文翻译：Let\'s go to school.', options: ['A. 让我们回家吧。', 'B. 让我们去上学吧。', 'C. 让我们去公园吧。', 'D. 让我们玩游戏吧。'], correct: 'B. 让我们去上学吧。' },
        { qNum: 8, part: 'B', type: 'select', text: '8. 看图，选出描述正确的句子。', imageKey: 'RedLight', options: ['A. It is green.', 'B. The light is red.', 'C. It represents a dog.', 'D. Let\'s go.'], correct: 'B. The light is red.' },
        { qNum: 9, part: 'B', type: 'select', text: '9. 选出不同类的一项 (Find the odd one out)。', options: ['A. red', 'B. green', 'C. yellow', 'D. light'], correct: 'D. light' },
        { qNum: 10, part: 'B', type: 'select', text: '10. 读句子选词填空：Stop! The light is ______.', options: ['A. go', 'B. red', 'C. now', 'D. book'], correct: 'B. red' },

        // --- Part C: Writing ---
        { qNum: 11, part: 'C', type: 'select', text: '11. 看图，选出拼写正确的单词 (停止)。', imageKey: 'StopSign', options: ['A. spot', 'B. stop', 'C. pots', 'D. tops'], correct: 'B. stop' },
        { qNum: 12, part: 'C', type: 'select', text: '12. 看图，补全单词空缺的字母：r _ d (红色)', imageKey: 'RedLight', options: ['A. a', 'B. e', 'C. i', 'D. o'], correct: 'B. e' },
        { qNum: 13, part: 'C', type: 'select', text: '13. 选出字母 Q 的小写形式。', options: ['A. p', 'B. b', 'C. q', 'D. d'], correct: 'C. q' },
        { qNum: 14, part: 'C', type: 'select', text: '14. 绿灯亮了，我们该怎么做？选出单词“走”。', options: ['A. go', 'B. no', 'C. to', 'D. so'], correct: 'A. go' },
        { qNum: 15, part: 'C', type: 'drag-sort', text: '15. 拖动单词，连词成句。', words: ['The', 'light', 'is', 'red', '.'], correct: 'The light is red.' }
    ]
});
