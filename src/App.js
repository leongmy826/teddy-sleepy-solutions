import React, { useState, useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

// A simple analytics component that logs to the console on mount.
// This simulates sending a page view event to an analytics service.
const Analytics = () => {
  useEffect(() => {
    console.log("Analytics: App loaded. A 'page_view' event has been sent.");
  }, []);
  return null; // This component does not render any visible content
};

// Translations for all languages
const translations = {
  en: {
    quizTitle: "Sleep Health Self-Assessment",
    questionTexts: [
      "How long does it usually take you to fall asleep after going to bed?",
      "How often do you wake up during the night?",
      "Do you wake up earlier than desired and cannot fall back asleep?",
      "How do you feel when you wake up in the morning?",
      "Have you been told or do you experience any abnormal behaviors during sleep? (e.g., snoring, breathing pauses, teeth grinding, sleep talking)",
      "How often do you feel sleepy or doze off during the daytime?",
      "How is your mood during the day?",
      "How is your concentration and memory during the day?",
      "What is your energy level for daily activities?",
      "How consistent is your sleep schedule on weekdays and weekends?",
      "What are your habits within 1 hour before bedtime?",
      "How are your diet and exercise habits related to sleep?"
    ],
    options: [
      ["Less than 30 minutes", "Sometimes more than 30 minutes", "Often more than 30 minutes", "Almost always more than 60 minutes"],
      ["0-1 times, and fall back asleep quickly", "Wake up 1-2 times and need some time to fall back asleep", "Wake up 3 or more times, or stay awake for a long time", "Frequently wake up, sleep is fragmented"],
      ["Never or rarely", "Sometimes (1-2 times a week)", "Often (3-5 times a week)", "Almost every day"],
      ["Feel refreshed and energetic", "Feel okay, but could be better", "Feel somewhat tired", "Feel very tired, like didn't sleep at all"],
      ["Never", "Mild teeth grinding or sleep talking", "Loud snoring", "Breathing pauses or gasping"],
      ["Never", "Occasionally", "Often", "Almost every day"],
      ["Generally good, rarely irritable or anxious", "Occasionally irritable or anxious, but not affecting life", "Often irritable or anxious, somewhat affecting life", "Almost daily irritable or anxious, severely affecting life"],
      ["Good, no issues", "Occasionally have difficulty, but not affecting work", "Often have difficulty, somewhat affecting work", "Almost daily have difficulty, severely affecting work"],
      ["Sufficient energy", "Generally enough energy", "Often lack energy", "Very fatigued, barely complete daily activities"],
      ["Very consistent, difference less than 1 hour", "Slightly consistent, difference 1-2 hours", "Fairly consistent, difference more than 2 hours", "Not consistent at all, no fixed time"],
      ["Relaxing activities like reading or listening to music", "Sometimes use electronic devices or think about work", "Often use electronic devices or think about stressful things", "Almost always use electronic devices or have heavy thoughts"],
      ["Avoid caffeine and heavy meals before bed, and exercise regularly", "Occasionally have caffeine or heavy meals, or lack exercise", "Often have caffeine or heavy meals, or lack exercise", "Almost always have caffeine or heavy meals before bed, and sedentary"]
    ],
    chartSubjects: {
      sleepOnsetLatency: "Falling Asleep",
      sleepMaintenance: "Staying Asleep",
      earlyAwakening: "Waking Up Early",
      sleepQuality: "Waking Quality",
      abnormalBehavior: "Abnormal Behavior",
      daytimeSleepiness: "Daytime Sleepiness",
      moodState: "Daytime Mood",
      cognitiveFunction: "Cognitive Function",
      energyLevel: "Energy Level",
      sleepConsistency: "Schedule Consistency",
      bedtimeHabits: "Bedtime Habits",
      dietExercise: "Diet & Exercise",
    },

    diagnosisTitles: {
      healthy: "Excellent Sleep Health",
      improvement: "Mild Sleep Issues",
      struggling: "Moderate Sleep Issues",
      severe: "Severe Sleep Issues"
    },
    diagnosisMessages: {
      healthy: "Excellent! Your score (0-25) indicates no significant issues. Maintain these healthy practices for long-term well-being.",
      improvement: "Your score (26-50) suggests some mild sleep difficulties, often related to habits or temporary stress. This is a great opportunity to refine your routine with consistent, small changes to prevent problems from worsening.",
      struggling: "Your score (51-75) indicates that sleep problems are moderately affecting your quality of life. This is a key moment to take proactive steps to improve your sleep hygiene and consider tracking your habits more closely.",
      severe: "Your score (76-100) shows that sleep issues are significantly impacting your physical and mental health. We strongly recommend seeking guidance from a healthcare professional, such as a sleep specialist or your doctor, to address these concerns."
    },
    tips: {
      healthy: [
        "Maintain Consistency: Stick to your current sleep schedule, even on weekends. This is the cornerstone of good sleep health.",
        "Optimize Your Environment: Ensure your bedroom remains dark, quiet, and cool. Consider advanced tools like a sleep tracker to monitor your excellent patterns.",
        "Preventative Habits: Continue avoiding caffeine/alcohol before bed and manage stress effectively to sustain your high-quality sleep."
      ],
      improvement: [
        "Stimulus Control: If you can't sleep, get out of bed and do something relaxing until you feel sleepy. Strengthen the mental link between bed and sleep.",
        "Sleep Restriction: Try to go to bed only when you are truly sleepy and avoid spending excessive time in bed awake.",
        "Wind-Down Routine: Develop a consistent 30-minute pre-sleep ritual (e.g., reading, light stretching) without screens.",
        "Review Habits: Limit caffeine after noon and avoid heavy meals/alcohol close to bedtime."
      ],
      struggling: [
        "Prioritize Sleep Diary: Keep a detailed record for 2 weeks to identify specific patterns and triggers. This is crucial data if you see a doctor.",
        "Formal Sleep Hygiene: Strictly enforce a fixed wake-up time, a screen-free bedroom, and a cool, dark sleep environment.",
        "Cognitive Reframing: Write down worries earlier in the evening to avoid overthinking in bed. Challenge the anxiety of 'I must fall asleep'.",
        "Consult a Professional: Consider seeking help from a therapist trained in CBT-I (Cognitive Behavioral Therapy for Insomnia), the gold standard treatment."
      ],
      severe: [
        "Immediate Action: Prioritize consulting a healthcare professional. This is the most important step. Your sleep diary will be invaluable for diagnosis.",
        "Medical Evaluation: A doctor can rule out or treat underlying conditions like Sleep Apnea, Restless Legs Syndrome, or other medical issues.",
        "Follow Professional Advice: Treatment may involve CBT-I, medication (short-term), or other therapies tailored to your specific diagnosis.",
        "Focus on Safety: If you experience extreme daytime sleepiness, avoid driving or operating dangerous machinery until you get help."
      ]
    },
    products: {
      healthy: [
        { name: "Sleep Tracking Device", description: "Monitor your healthy sleep patterns and get data-driven insights to maintain your excellent sleep quality." },
        { name: "Temperature Regulating Mattress Pad", description: "Maintains an ideal sleeping temperature throughout the night for optimal comfort." },
        { name: "Advanced Light Therapy Lamp", description: "Helps reinforce your natural circadian rhythm, especially useful in winter months." }
      ],
      improvement: [
        { name: "Sleep Diary Notebook", description: "A structured journal to help you track sleep habits, mood, and identify patterns for improvement." },
        { name: "Blue Light Blocking Glasses", description: "Worn in the evening to mitigate the sleep-disrupting effects of screens and indoor lighting." },
        { name: "Relaxation App Subscription", description: "Guided meditations, sleep stories, and soundscapes to facilitate your new wind-down routine." }
      ],
      struggling: [
        { name: "CBT-I App or Online Program", description: "Provides structured guidance based on the gold-standard therapeutic method for chronic insomnia." },
        { name: "Weighted Blanket", description: "Provides deep pressure stimulation (DPS) to help reduce nighttime anxiety and improve sleep maintenance." },
        { name: "White Noise Machine", description: "Effectively masks disruptive environmental noises that can fragment sleep and cause awakenings." }
      ],
      severe: [
        { name: "Medical Consultation", description: "The most recommended 'product'. Use our sleep diary tool to prepare for your appointment with a sleep specialist." },
        { name: "At-Home Sleep Test Kit (if recommended)", description: "Some doctors may prescribe these to screen for sleep apnea from the comfort of your home." }
      ]
    },

    // ... disclaimer, buttonText 等保持不变 ...

    disclaimer: "This quiz is a guided self-evaluation to help you reflect on your sleep habits and identify areas for improvement. It is informational only and not a medical diagnosis or treatment tool.",
    buttonText: {
      learnMore: "Learn More",
      retakeQuiz: "Retake Quiz",
      back: "Back",
    },
    chartText: "The inner shape is your sleep issue score. The chart shows how each factor affects your sleep.",
    scoreSummary: "Your Sleeping Issue Score",
    progress: "Question",
    of: "of",
  },
  zh: {
    quizTitle: "睡眠健康自评测验",
    questionTexts: [
      "躺下后，您通常需要多长时间才能入睡？",
      "您夜间醒来的频率如何？",
      "您是否会比期望的时间早醒并且无法再次入睡？",
      "早上醒来时您感觉如何？",
      "您是否被告知或在睡眠中经历任何异常行为？（例如：打鼾、呼吸暂停、磨牙、说梦话）",
      "白天您感到困倦或打瞌睡的频率如何？",
      "您白天的情绪状态如何？",
      "您白天的注意力和记忆力如何？",
      "您进行日常活动的精力水平如何？",
      "您工作日和周末的睡眠时间表有多一致？",
      "睡前一小时内您的习惯是什么？",
      "您的饮食和运动习惯与睡眠的关系如何？"
    ],
    options: [
      ["少于30分钟", "有时超过30分钟", "经常超过30分钟", "几乎总是超过60分钟"],
      ["0-1次，并且很快再次入睡", "醒来1-2次，需要一些时间才能再次入睡", "醒来3次或更多，或长时间清醒", "频繁醒来，睡眠支离破碎"],
      ["从未或很少", "有时（每周1-2次）", "经常（每周3-5次）", "几乎每天"],
      ["感觉精神焕发、精力充沛", "感觉还可以，但可以更好", "感觉有点疲惫", "感觉非常疲惫，像没睡一样"],
      ["从未", "轻微磨牙或说梦话", "大声打鼾", "呼吸暂停或喘气"],
      ["从未", "偶尔", "经常", "几乎每天"],
      ["总体良好，很少烦躁或焦虑", "偶尔烦躁或焦虑，但不影响生活", "经常烦躁或焦虑，有些影响生活", "几乎每天烦躁或焦虑，严重影响生活"],
      ["良好，没有问题", "偶尔有困难，但不影响工作", "经常有困难，有些影响工作", "几乎每天有困难，严重影响工作"],
      ["精力充足", "精力一般", "经常缺乏精力", "非常疲劳，勉强完成日常活动"],
      ["非常一致，差异小于1小时", "稍微一致，差异1-2小时", "相当一致，差异超过2小时", "完全不一致，没有固定时间"],
      ["阅读或听音乐等放松活动", "有时使用电子设备或思考工作", "经常使用电子设备或思考压力事情", "几乎总是使用电子设备或思考沉重事情"],
      ["睡前避免咖啡因和大餐，并定期运动", "偶尔摄入咖啡因或大餐，或缺乏运动", "经常摄入咖啡因或大餐，或缺乏运动", "几乎总是在睡前摄入咖啡因或大餐，且久坐"]
    ],
    chartSubjects: {
      sleepOnsetLatency: "入睡时间",
      sleepMaintenance: "睡眠维持",
      earlyAwakening: "早醒",
      sleepQuality: "醒后质量",
      abnormalBehavior: "异常行为",
      daytimeSleepiness: "日间嗜睡",
      moodState: "日间情绪",
      cognitiveFunction: "认知功能",
      energyLevel: "精力水平",
      sleepConsistency: "作息规律",
      bedtimeHabits: "睡前习惯",
      dietExercise: "饮食运动",
    },

    diagnosisTitles: {
      healthy: "睡眠健康",
      improvement: "轻度睡眠问题",
      struggling: "中度睡眠问题",
      severe: "重度睡眠问题"
    },
    diagnosisMessages: {
      healthy: "恭喜！您的分数（0-25分）表明没有显著的睡眠问题。请保持这些健康习惯以获得长期的健康。",
      improvement: "您的分数（26-50分）表明存在一些轻度睡眠困难，通常与习惯或短期压力有关。这是一个通过持续、微小的改变来优化作息、防止问题恶化的好机会。",
      struggling: "您的分数（51-75分）表明睡眠问题正在中度影响您的生活质量。现在是采取积极措施改善睡眠卫生、并更仔细追踪习惯的关键时刻。",
      severe: "您的分数（76-100分）表明睡眠问题正严重影响着您的身心健康。我们强烈建议寻求医疗专业人士（如睡眠专科医生或您的医生）的指导来解决这些问题。"
    },
    tips: {
      healthy: [
        "保持规律：坚持您目前的睡眠时间表，即使在周末也是如此。这是良好睡眠健康的基石。",
        "优化环境：确保您的卧室保持黑暗、安静和凉爽。可以考虑使用睡眠追踪器等高级工具来监测您的良好模式。",
        "预防性习惯：继续避免睡前摄入咖啡因/酒精，并有效管理压力，以维持您的高质量睡眠。"
      ],
      improvement: [
        "刺激控制：如果睡不着，就起床做些放松的事情，直到感到困倦再回到床上。强化‘床只用于睡眠’的心理联系。",
        "睡眠限制：只在真正困倦时才上床，避免醒着时在床上待过长时间。",
        "放松仪式：培养一个固定的30分钟睡前仪式（如阅读、轻度拉伸），且不使用电子屏幕。",
        "检查习惯：中午后限制咖啡因摄入，睡前避免大餐和酒精。"
      ],
      struggling: [
        "优先记录睡眠日记：详细记录2周，以识别具体模式和诱因。如果您去看医生，这些数据至关重要。",
        "严格执行睡眠卫生：固定起床时间，保持卧室无屏幕，确保睡眠环境凉爽、黑暗。",
        "认知重构：在傍晚早些时候写下担忧，避免在床上过度思考。摆脱‘我必须睡着’的焦虑。",
        "咨询专业人士：考虑寻求接受过CBT-I（失眠的认知行为疗法，黄金标准疗法）治疗师的专业帮助。"
      ],
      severe: [
        "立即行动：优先咨询医疗保健专业人士。这是最重要的一步。您的睡眠日记将对诊断具有无可估量的价值。",
        "医学评估：医生可以排除或治疗潜在疾病，如睡眠呼吸暂停、不宁腿综合征或其他医疗问题。",
        "遵循专业建议：治疗可能包括CBT-I、药物（短期）、或其他针对您具体诊断的疗法。",
        "注意安全：如果您白天极度困倦，在获得帮助前请避免驾驶或操作危险机械。"
      ]
    },
    products: {
      healthy: [
        { name: "睡眠追踪设备", description: "监测您健康的睡眠模式，获取数据驱动的见解，以保持优异的睡眠质量。" },
        { name: "温控床垫垫", description: "整夜维持理想的睡眠温度，实现最佳舒适度。" },
        { name: "高级光疗灯", description: "有助于强化您的自然昼夜节律，在冬季尤其有用。" }
      ],
      improvement: [
        { name: "睡眠日记本", description: "一个结构化的日志本，帮助您追踪睡眠习惯、情绪，并识别需要改进的模式。" },
        { name: "防蓝光眼镜", description: "晚上佩戴，以减少屏幕和室内灯光对睡眠的干扰影响。" },
        { name: "放松应用订阅", description: "提供引导冥想、睡眠故事和白噪音，助您建立新的睡前放松程序。" }
      ],
      struggling: [
        { name: "CBT-I 应用或在线课程", description: "基于治疗慢性失眠的黄金标准方法提供结构化指导。" },
        { name: "加重毯", description: "提供深度压力刺激（DPS），有助于减轻夜间焦虑，改善睡眠维持。" },
        { name: "白噪音机器", description: "有效屏蔽环境中会打断睡眠、导致醒来的破坏性噪音。" }
      ],
      severe: [
        { name: "医生问诊", description: "最推荐的‘产品’。使用我们的睡眠日记工具为您预约睡眠专家做准备。" },
        { name: "家用睡眠测试套件（若医生推荐）", description: "一些医生可能会开具此类套件，让您在家舒适地筛查睡眠呼吸暂停。" }
      ]
    },

    // ... disclaimer, buttonText 等保持不变 ...


    disclaimer: "本测验是一项指导性自我评估，旨在帮助您反思自己的睡眠习惯并确定需要改进的领域。它仅供参考，并非医疗诊断或治疗工具。",
    buttonText: {
      learnMore: "了解更多",
      retakeQuiz: "重做测验",
      back: "返回",
    },
    chartText: "内层图形表示你的睡眠问题分数。图表显示了每个因素如何影响你的睡眠。",
    scoreSummary: "你的睡眠障碍分数",
    progress: "问题",
    of: "之",
  },
  ms: {
    quizTitle: "Penilaian Kendiri Kesihatan Tidur",
    questionTexts: [
      "Berapa lama biasanya anda mengambil masa untuk tidur setelah naik ke katil?",
      "Berapa kerap anda terjaga pada waktu malam?",
      "Adakah anda terjaga lebih awal daripada yang diinginkan dan tidak dapat tidur semula?",
      "Bagaimana perasaan anda apabila bangun pada waktu pagi?",
      "Pernahkah anda diberitahu atau mengalami sebarang tingkah laku tidak normal semasa tidur? (e.g., berdengkur, jeda pernafasan, mengisar gigi, bercakap semasa tidur)",
      "Berapa kerap anda mengantuk atau tertidur pada waktu siang?",
      "Bagaimana mood anda pada waktu siang?",
      "Bagaimana tumpuan dan ingatan anda pada waktu siang?",
      "Apakah tahap tenaga anda untuk aktiviti harian?",
      "Berapa konsisten jadual tidur anda pada hari bekerja dan hujung minggu?",
      "Apakah tabiat anda dalam masa 1 jam sebelum tidur?",
      "Bagaimana tabiat pemakanan dan senaman anda berkaitan dengan tidur?"
    ],
    options: [
      ["Kurang daripada 30 minit", "Kadang-kadang lebih daripada 30 minit", "Sering lebih daripada 30 minit", "Hampir selalu lebih daripada 60 minit"],
      ["0-1 kali, dan tidur semula dengan cepat", "Terjaga 1-2 kali dan perlukan masa untuk tidur semula", "Terjaga 3 kali atau lebih, atau berjaga untuk masa yang lama", "Kerap terjaga, tidur tidak lena"],
      ["Tidak pernah atau jarang", "Kadang-kadang (1-2 kali seminggu)", "Sering (3-5 kali seminggu)", "Hampir setiap hari"],
      ["Berasa segar dan bertenaga", "Berasa okay, tetapi boleh lebih baik", "Berasa agak letih", "Berasa sangat letih, seperti tidak tidur langsung"],
      ["Tidak pernah", "Mengisar gigi ringan atau bercakap semasa tidur", "Berdengkur kuat", "Jeda pernafasan atau tercungap-cungap"],
      ["Tidak pernah", "Kadang-kadang", "Sering", "Hampir setiap hari"],
      ["Secara amnya baik, jarang mudah marah atau cemas", "Kadang-kadang mudah marah atau cemas, tetapi tidak menjejaskan hidup", "Sering mudah marah atau cemas, agak menjejaskan hidup", "Hampir setiap hari mudah marah atau cemas, sangat menjejaskan hidup"],
      ["Baik, tiada masalah", "Kadang-kadang ada kesukaran, tetapi tidak menjejaskan kerja", "Sering ada kesukaran, agak menjejaskan kerja", "Hampir setiap hari ada kesukaran, sangat menjejaskan kerja"],
      ["Tenaga mencukupi", "Secara amnya tenaga cukup", "Sering kekurangan tenaga", "Sangat letih, hampir tidak dapat menamatkan aktiviti harian"],
      ["Sangat konsisten, perbezaan kurang daripada 1 jam", "Agak konsisten, perbezaan 1-2 jam", "Cukup konsisten, perbezaan lebih daripada 2 jam", "Tidak konsisten langsung, tiada masa tetap"],
      ["Aktiviti santai seperti membaca atau mendengar muzik", "Kadang-kadang menggunakan peranti elektronik atau memikirkan kerja", "Sering menggunakan peranti elektronik atau memikirkan perkara tertekan", "Hampir selalu menggunakan peranti elektronik atau mempunyai pemikiran berat"],
      ["Elakkan kafein dan makanan berat sebelum tidur, dan bersenam secara berkala", "Kadang-kadang mengambil kafein atau makanan berat, atau kurang bersenam", "Sering mengambil kafein atau makanan berat, atau kurang bersenam", "Hampir selalu mengambil kafein atau makanan berat sebelum tidur, dan tidak aktif"]
    ],
    chartSubjects: {
      sleepOnsetLatency: "Masa Tidur",
      sleepMaintenance: "Mengekalkan Tidur",
      earlyAwakening: "Terjaga Awal",
      sleepQuality: "Kualiti Bangun",
      abnormalBehavior: "Tingkah Laku Abnormal",
      daytimeSleepiness: "Mengantuk Siang",
      moodState: "Mood Siang",
      cognitiveFunction: "Fungsi Kognitif",
      energyLevel: "Tahap Tenaga",
      sleepConsistency: "Jadual Konsisten",
      bedtimeHabits: "Tabiat Tidur",
      dietExercise: "Diet & Senaman",
    },

    diagnosisTitles: {
      healthy: "Tidur Sihat Cemerlang",
      improvement: "Masalah Tidur Ringan",
      struggling: "Masalah Tidur Sederhana",
      severe: "Masalah Tidur Teruk"
    },
    diagnosisMessages: {
      healthy: "Cemerlang! Skor anda (0-25) menunjukkan tiada isu tidur yang signifikan. Kekalkan amalan sihat ini untuk kesejahteraan jangka panjang.",
      improvement: "Skor anda (26-50) mencadangkan beberapa kesukaran tidur ringan, selalunya berkaitan dengan tabiat atau tekanan sementara. Ini adalah peluang terbaik untuk memperhalusi rutin anda dengan perubahan kecil yang konsisten untuk mengelakkan masalah menjadi lebih teruk.",
      struggling: "Skor anda (51-75) menunjukkan bahawa masalah tidur sedang memberi kesan sederhana kepada kualiti hidup anda. Ini adalah detik penting untuk mengambil langkah proaktif untuk meningkatkan kebersihan tidur dan mempertimbangkan untuk menjejaki tabiat dengan lebih teliti.",
      severe: "Skor anda (76-100) menunjukkan bahawa isu tidur memberi kesan signifikan kepada kesihatan fizikal dan mental anda. Kami amat mengesyorkan untuk mendapatkan pandangan profesional penjagaan kesihatan, seperti pakar tidur atau doktor anda, untuk menangani kebimbangan ini."
    },
    // 在马来语 (ms) 版本的 tips 部分，替换为以下内容：
    tips: {
      healthy: [
        "Kekalkan Konsistensi: Berpegang pada jadual tidur anda sekarang, walaupun pada hujung minggu. Ini adalah asas kepada kesihatan tidur yang baik.",
        "Optimumkan Persekitaran: Pastikan bilik tidur anda kekal gelap, senyap dan sejuk. Pertimbangkan alat seperti penjejak tidur untuk memantau corak tidur cemerlang anda.",
        "Amalan Pencegahan: Terus elakkan kafein/alkohol sebelum tidur dan urus tekanan dengan berkesan untuk mengekalkan tidur berkualiti tinggi."
      ],
      improvement: [
        "Kawalan Rangsangan: Jika anda tidak boleh tidur, bangun dari katil dan lakukan sesuatu yang menenangkan sehingga anda mengantuk. Perkukuh hubungan mental antara katil dan tidur.",
        "Sekatan Tidur: Cuba tidur hanya apabila anda benar-benar mengantuk dan elakkan menghabiskan terlalu banyak masa di atas katil dalam keadaan jaga.",
        "Rutin Tenang: Bangunkan ritual 30 minit sebelum tidur yang konsisten (seperti membaca, regangan ringan) tanpa skrin.",
        "Semak Semula Tabiat: Hadkan kafein selepas tengah hari dan elakkan makanan berat/alkohol menjelang waktu tidur."
      ],
      struggling: [
        "Prioritikan Diary Tidur: Simpan rekod terperinci selama 2 minggu untuk mengenal pasti corak dan pencetus tertentu. Data ini amat penting jika anda berjumpa doktor.",
        "Kebersihan Tidur Formal: Teguh menguatkuasakan waktu bangun yang tetap, bilik tidur bebas skrin, dan persekitaran tidur yang sejuk dan gelap.",
        "Pembingkaian Semula Kognitif: Tuliskan kebimbangan awal pada waktu petang untuk mengelakkan terlebih memikirkan di atas katil. Cabar kebimbangan 'Saya mesti tidur'.",
        "Rujuk Profesional: Pertimbangkan untuk mendapatkan bantuan daripada ahli terapi yang terlatih dalam CBT-I (Terapi Tingkah Laku Kognitif untuk Insomnia), rawatan standard emas."
      ],
      severe: [
        "Tindakan Segera: Prioritikan untuk berunding dengan profesional penjagaan kesihatan. Ini adalah langkah paling penting. Diary tidur anda akan sangat berharga untuk diagnosis.",
        "Penilaian Perubatan: Doktor boleh menolak atau merawat keadaan asas seperti Sleep Apnea, Sindrom Kaki Gelisah, atau isu perubatan lain.",
        "Ikut Nasihat Profesional: Rawatan mungkin melibatkan CBT-I, ubat-ubatan (jangka pendek), atau terapi lain yang disesuaikan dengan diagnosis khusus anda.",
        "Fokus pada Keselamatan: Jika anda mengalami mengantuk siang yang melampau, elakkan memandu atau mengendalikan jentera berbahaya sehingga anda mendapat bantuan."
      ]
    },

    // 在马来语 (ms) 版本的 products 部分，确保所有描述都是马来语：
    products: {
      healthy: [
        { name: "Peranti Penjejak Tidur", description: "Pantau corak tidur sihat anda dan dapatkan pandangan berasaskan data untuk mengekalkan kualiti tidur cemerlang anda." },
        { name: "Alas Tilam Pengawal Suhu", description: "Mengekalkan suhu tidur yang ideal sepanjang malam untuk keselesaan optimum." },
        { name: "Lampu Terapi Cahaya Maju", description: "Membantu mengukuhkan irama sirkadian semula jadi anda, terutamanya berguna pada bulan-bulan musim sejuk." }
      ],
      improvement: [
        { name: "Buku Diary Tidur", description: "Jurnal berstruktur untuk membantu anda menjejaki tabiat tidur, mood dan mengenal pasti corak untuk penambahbaikan." },
        { name: "Cermin Mata Penghalang Cahaya Biru", description: "Digunakan pada waktu petang untuk mengurangkan kesan gangguan tidur dari skrin dan pencahayaan dalaman." },
        { name: "Langganan Aplikasi Relaksasi", description: "Meditasi berpandu, cerita tidur dan soundskap untuk memudahkan rutin tenang baru anda." }
      ],
      struggling: [
        { name: "Aplikasi atau Program Dalam Talian CBT-I", description: "Memberi panduan berstruktur berdasarkan kaedah terapeutik standard emas untuk insomnia kronik." },
        { name: "Selimut Pemberat", description: "Memberi rangsangan tekanan dalam (DPS) untuk membantu mengurangkan kebimbangan malam dan meningkatkan pengekalan tidur." },
        { name: "Mesin White Noise", description: "Berkesan menutupi bunyi persekitaran yang mengganggu yang boleh memecahkan tidur dan menyebabkan terjaga." }
      ],
      severe: [
        { name: "Konsultasi Perubatan", description: "'Produk' yang paling disyorkan. Gunakan alat diary tidur kami untuk bersiap sedia untuk temu janji dengan pakar tidur." },
        { name: "Kit Ujian Tidur Di-Rumah (jika disyorkan)", description: "Sesetengah doktor mungkin menetapkan ini untuk menyaring sleep apnea dari keselesaan rumah anda." }
      ]
    },
    // ... disclaimer, buttonText 等保持不变 ...

    disclaimer: "Kuiz ini adalah penilaian kendiri berpandu untuk membantu anda merenung tabiat tidur anda dan mengenal pasti bidang untuk penambahbaikan. Ia hanya untuk maklumat dan bukan diagnosis perubatan atau alat rawatan.",
    buttonText: {
      learnMore: "Ketahui Lebih Lanjut",
      retakeQuiz: "Ambil Kuiz Semula",
      back: "Kembali",
    },
    chartText: "Bentuk dalaman menunjukkan skor masalah tidur anda. Carta ini menunjukkan bagaimana setiap faktor mempengaruhi tidur anda. ",
    scoreSummary: "Skor Insomnia Anda",
    progress: "Soalan",
    of: "daripada",
  },
};

const questions = [
  {
    category: "sleepOnsetLatency",
    options: [
      { value: 0 },
      { value: 1 },
      { value: 2 },
      { value: 3 }
    ],
  },
  {
    category: "sleepMaintenance",
    options: [
      { value: 0 },
      { value: 1 },
      { value: 2 },
      { value: 3 }
    ],
  },
  {
    category: "earlyAwakening",
    options: [
      { value: 0 },
      { value: 1 },
      { value: 2 },
      { value: 3 }
    ],
  },
  {
    category: "sleepQuality",
    options: [
      { value: 0 },
      { value: 1 },
      { value: 2 },
      { value: 3 }
    ],
  },
  {
    category: "abnormalBehavior",
    options: [
      { value: 0 },
      { value: 1 },
      { value: 2 },
      { value: 3 }
    ],
  },
  {
    category: "daytimeSleepiness",
    options: [
      { value: 0 },
      { value: 1 },
      { value: 2 },
      { value: 3 }
    ],
  },
  {
    category: "moodState",
    options: [
      { value: 0 },
      { value: 1 },
      { value: 2 },
      { value: 3 }
    ],
  },
  {
    category: "cognitiveFunction",
    options: [
      { value: 0 },
      { value: 1 },
      { value: 2 },
      { value: 3 }
    ],
  },
  {
    category: "energyLevel",
    options: [
      { value: 0 },
      { value: 1 },
      { value: 2 },
      { value: 3 }
    ],
  },
  {
    category: "sleepConsistency",
    options: [
      { value: 0 },
      { value: 1 },
      { value: 2 },
      { value: 3 }
    ],
  },
  {
    category: "bedtimeHabits",
    options: [
      { value: 0 },
      { value: 1 },
      { value: 2 },
      { value: 3 }
    ],
  },
  {
    category: "dietExercise",
    options: [
      { value: 0 },
      { value: 1 },
      { value: 2 },
      { value: 3 }
    ],
  }
];

const ProductCard = ({ product, t }) => (
  <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center">
    <div className="w-full h-32 bg-gray-200 rounded-md mb-3 flex items-center justify-center text-gray-400">
      Product Image Placeholder
    </div>
    <h4 className="text-md font-semibold text-gray-800">{product.name}</h4>
    <p className="text-sm text-gray-600 my-2">{product.description}</p>
    {/* <span className="text-xs text-blue-500 font-bold bg-blue-50 px-2 py-1 rounded-full">{t.productBadges}</span> */}
    {/* <a href="#" className="mt-4 text-xs font-medium text-indigo-600 hover:text-indigo-800 transition-colors duration-200">
      {t.buttonText.learnMore}
    </a> */}
  </div>
);

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [language, setLanguage] = useState('en');

  const t = translations[language];

  // Map quiz questions with translated text
  const quizQuestions = questions.map((q, qIndex) => ({
    ...q,
    questionText: t.questionTexts[qIndex],
    options: q.options.map((opt, oIndex) => ({
      ...opt,
      text: t.options[qIndex][oIndex],
    })),
  }));

  const totalQuestions = quizQuestions.length;
  const maxPossibleScore = 100;

  // Recalculate the score whenever answers change
  useEffect(() => {
    const total = Object.values(answers).reduce((sum, val) => sum + val, 0) * 2.8;
    const newScore = Math.min(Math.max(Math.round(total), 0), 100);
    setScore(newScore);
  }, [answers]);


  // Update progress bar
  useEffect(() => {
    setProgress((currentQuestionIndex / totalQuestions) * 100);
  }, [currentQuestionIndex, totalQuestions]);

  const handleSelectAnswer = (value, category) => {
    // Update answers for the current question
    setAnswers({ ...answers, [category]: value });

    // Move to the next question or complete the quiz
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
      setProgress(100);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleRetake = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnswers({});
    setQuizCompleted(false);
  };

  const getDiagnosis = () => {
    const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
    const maxPossibleScore = 36; // 12个问题，每个最高3分 = 36分

    let category = '';

    if (totalScore <= 9) { // 0-9分: 健康 (0-25%)
      category = 'healthy';
    } else if (totalScore <= 18) { // 10-18分: 轻度问题 (26-50%)
      category = 'improvement';
    } else if (totalScore <= 27) { // 19-27分: 中度问题 (51-75%)
      category = 'struggling';
    } else { // 28-36分: 重度问题 (76-100%)
      category = 'severe';
    }

    return {
      title: t.diagnosisTitles[category],
      message: t.diagnosisMessages[category],
      color: category === 'healthy'
        ? "bg-green-100 border-green-500"
        : category === 'improvement'
          ? "bg-yellow-100 border-yellow-500"
          : category === 'struggling'
            ? "bg-orange-100 border-orange-500"
            : "bg-red-100 border-red-500",
      icon: category === 'healthy' ? (
        <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ) : category === 'improvement' ? (
        <svg className="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ) : category === 'struggling' ? (
        <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ) : (
        <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      tips: t.tips[category],
      products: t.products[category],
    };
  };

  const diagnosis = quizCompleted ? getDiagnosis() : null;

  // 准备雷达图数据
  const radarData = quizQuestions.map(q => ({
    subject: t.chartSubjects[q.category],
    A: answers[q.category] || 0,
    fullMark: 3, // 每个类别的最高可能得分
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 p-4 font-sans flex items-center justify-center">
      <Analytics />
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-2xl text-center">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            {currentQuestionIndex > 0 && (
              <button
                onClick={handleBack}
                className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-200 mr-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
                aria-label="Go back to previous question"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            <h1 className="text-xl font-bold text-gray-800">{t.quizTitle}</h1>
          </div>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="en">English</option>
            <option value="zh">中文</option>
            <option value="ms">Bahasa Melayu</option>
          </select>
        </div>

        {!quizCompleted ? (
          <div>
            <div className="mb-6">
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 transition-all duration-500 ease-out rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                {t.progress} {currentQuestionIndex + 1} {t.of} {totalQuestions}
              </p>
            </div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              {quizQuestions[currentQuestionIndex].questionText}
            </h2>
            <div className="space-y-4">
              {quizQuestions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  className="w-full text-left p-4 rounded-lg bg-gray-100 hover:bg-indigo-50 transition-colors duration-200 text-gray-700 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={() =>
                    handleSelectAnswer(option.value, quizQuestions[currentQuestionIndex].category)
                  }
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">{t.scoreSummary}</h2>
            <div className="relative mb-6">
              <span className="text-6xl font-extrabold text-blue-600 drop-shadow-md">
                {score}
              </span>
              <span className="text-2xl font-semibold text-gray-500">
                /{maxPossibleScore}
              </span>
            </div>

            <div className={`w-full max-w-sm rounded-xl shadow-xl border-4 p-6 mb-8 flex items-center space-x-4 transition-all duration-300 ${diagnosis.color}`}>
              <div className="flex-shrink-0">{diagnosis.icon}</div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-800">{diagnosis.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{diagnosis.message}</p>
              </div>
            </div>

            <div className="w-full mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Visual Report Card</h3>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart outerRadius={90} width={400} height={300} data={radarData}>
                  <PolarGrid stroke="#e5e7eb" />
                  <PolarAngleAxis dataKey="subject" stroke="#6b7280" tickLine={false} />
                  <PolarRadiusAxis angle={90} domain={[0, 2]} stroke="#d1d5db" />
                  <Radar name="Your Score" dataKey="A" stroke="#4f46e5" fill="#4f46e5" fillOpacity={0.6} />
                </RadarChart>
              </ResponsiveContainer>
              <p className="mt-4 text-sm text-gray-500">
                {t.chartText}
              </p>
            </div>

            <div className="w-full text-left mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Tips for Improvement</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {(diagnosis?.tips ?? []).map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>

            <div className="w-full mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{t.productSectionTitle}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {(diagnosis?.products ?? []).map((product, index) => (
                  <ProductCard key={index} product={product} t={t} />
                ))}
              </div>
            </div>

            <button
              className="mt-4 px-6 py-3 bg-indigo-600 text-white font-bold rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={handleRetake}
            >
              {t.buttonText.retakeQuiz}
            </button>
            <p className="mt-8 text-xs text-gray-400 max-w-md">
              <span className="font-bold text-gray-500">Disclaimer:</span> {t.disclaimer}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
