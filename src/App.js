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
    quizTitle: "Sleep Quiz",
    questionTexts: [
      "How many hours of sleep do you get on an average night?",
      "How often do you consume caffeine (coffee, tea, soda)?",
      "How often do you use electronic devices (phone, tablet) within an hour of bedtime?",
      "How consistent are your sleep and wake-up times on weekdays and weekends?",
      "How much do you feel stress affects your sleep?",
      "How many days a week do you get at least 30 minutes of moderate exercise?",
      "Which best describes your sleep environment?",
    ],
    options: [
      ["Less than 6 hours", "6-7 hours", "7-9 hours", "More than 9 hours"],
      ["Several times a day", "Once or twice a day", "Rarely or never"],
      ["Every night", "A few nights a week", "Rarely or never"],
      ["Not consistent at all", "Somewhat consistent", "Very consistent"],
      ["It prevents me from sleeping most nights", "It sometimes makes it hard to sleep", "It rarely or never affects my sleep"],
      ["0-1 days", "2-3 days", "4 or more days"],
      ["It's noisy or has a lot of light", "It's okay, but could be better", "It's dark, quiet, and cool"],
    ],
    diagnosisTitles: {
      healthy: "Healthy Sleeper",
      improvement: "Sleep Improvement Needed",
      struggling: "Struggling Sleeper",
    },
    diagnosisMessages: {
      healthy: "Congratulations! Your sleep habits are excellent. Maintaining this routine is key to long-term health and well-being.",
      improvement: "You're on the right track, but there's room to grow. Small, consistent changes can make a big difference in your sleep quality.",
      struggling: "It looks like you're facing some challenges with your sleep. Don't worry, many people do. Adopting better habits can significantly improve your rest.",
    },
    tips: {
      healthy: [
        "Keep up the great work! Consistency is your best friend.",
        "Consider small enhancements, like a new pillow or an even earlier bedtime.",
        "Share your tips with others to help them improve their sleep.",
      ],
      improvement: [
        "Start by adjusting your bedtime by 15-30 minutes earlier.",
        "Reduce screen time before bed by reading a book or listening to music.",
        "Limit caffeine intake, especially in the afternoon and evening.",
        "Establish a consistent sleep schedule, even on weekends.",
      ],
      struggling: [
        "Create a relaxing bedtime ritual to signal to your body that it's time to sleep.",
        "Evaluate your sleep environment to ensure it's dark, quiet, and at a comfortable temperature.",
        "Avoid caffeine and large meals close to bedtime.",
        "Try light exercise during the day to help improve sleep quality at night.",
      ],
    },
    productSectionTitle: "Recommended Sleep Solutions",
    productBadges: "Tested & Reviewed by The Sleep Experts",
    products: {
      healthy: [
        { name: "Luxury Silk Pillowcase", description: "Reduces friction for healthier hair and skin, ensuring a comfortable night." },
        { name: "Premium Weighted Blanket", description: "Provides gentle pressure to promote relaxation and deeper sleep cycles." },
        { name: "Smart Alarm Clock", description: "Wakes you up with gentle light and sounds, easing you into your day." },
      ],
      improvement: [
        { name: "Blackout Curtains", description: "Blocks all external light for a pitch-black, distraction-free sleeping environment." },
        { name: "White Noise Machine", description: "Masks disruptive noises to help you fall asleep and stay asleep." },
        { name: "Aromatherapy Diffuser", description: "Uses calming essential oils like lavender to create a soothing atmosphere." },
      ],
    },
    disclaimer: "This quiz is a guided self-evaluation to help you reflect on your sleep habits and identify areas for improvement. It is informational only and not a medical diagnosis or treatment tool.",
    buttonText: {
      learnMore: "Learn More",
      retakeQuiz: "Retake Quiz",
      back: "Back",
    },
    chartText: "This chart shows your score (inner shape) relative to the maximum possible score (outer shape) for each factor.",
    scoreSummary: "Your Sleep Score",
    progress: "Question",
    of: "of",
  },
  zh: {
    quizTitle: "睡眠习惯测验",
    questionTexts: [
      "你平均每晚睡几个小时？",
      "你多久喝一次含咖啡因的饮料（咖啡、茶、汽水）？",
      "你在睡前一小时内多久使用一次电子设备？",
      "你工作日和周末的作息时间有多规律？",
      "你觉得压力对你的睡眠影响有多大？",
      "你每周有多少天进行至少30分钟的中等强度运动？",
      "哪一个最能描述你的睡眠环境？",
    ],
    options: [
      ["少于6小时", "6-7小时", "7-9小时", "超过9小时"],
      ["每天数次", "每天一到两次", "很少或从不"],
      ["每晚都用", "每周数晚", "很少或从不"],
      ["完全不规律", "有点规律", "非常规律"],
      ["大部分夜晚会影响我入睡", "有时会影响我入睡", "很少或从不影响我的睡眠"],
      ["0-1天", "2-3天", "4天或更多"],
      ["嘈杂或光线很亮", "还可以，但可以更好", "黑暗、安静、凉爽"],
    ],
    diagnosisTitles: {
      healthy: "健康睡眠者",
      improvement: "睡眠需改善",
      struggling: "睡眠困难者",
    },
    diagnosisMessages: {
      healthy: "恭喜！你的睡眠习惯非常好。保持这个规律是长期健康和幸福的关键。",
      improvement: "你正走在正确的轨道上，但仍有进步空间。微小而持续的改变可以显著提升你的睡眠质量。",
      struggling: "看来你的睡眠正面临一些挑战。别担心，很多人都有这个问题。养成更好的习惯可以显著改善你的休息。",
    },
    tips: {
      healthy: [
        "继续保持！规律性是你最好的朋友。",
        "考虑一些小的改进，比如换一个新枕头或更早一些睡觉。",
        "与他人分享你的秘诀，帮助他们改善睡眠。",
      ],
      improvement: [
        "从将就寝时间提前15-30分钟开始。",
        "通过阅读或听音乐来减少睡前使用电子设备的时间。",
        "限制咖啡因摄入，尤其是在下午和晚上。",
        "建立一个稳定的睡眠时间表，即使在周末也是如此。",
      ],
    },
    productSectionTitle: "推荐睡眠解决方案",
    productBadges: "经睡眠专家测试与评价",
    products: {
      healthy: [
        { name: "奢华真丝枕套", description: "减少摩擦，呵护秀发和皮肤，确保舒适的夜晚。" },
        { name: "高级加重毯", description: "提供轻柔压力，促进放松和更深层次的睡眠周期。" },
        { name: "智能闹钟", description: "用温和的光线和声音叫醒你，让你轻松开启新的一天。" },
      ],
      improvement: [
        { name: "遮光窗帘", description: "阻挡所有外部光线，营造一个漆黑、无干扰的睡眠环境。" },
        { name: "白噪音机", description: "掩盖扰人的噪音，帮助你入睡并保持睡眠。" },
        { name: "香薰加湿器", description: "使用薰衣草等镇静精油，营造舒缓的氛围。" },
      ],
    },
    disclaimer: "本测验是一项指导性自我评估，旨在帮助您反思自己的睡眠习惯并确定需要改进的领域。它仅供参考，并非医疗诊断或治疗工具。",
    buttonText: {
      learnMore: "了解更多",
      retakeQuiz: "重做测验",
      back: "返回",
    },
    chartText: "此图表显示了您在每个方面的得分（内圈）相对于可能最高得分（外圈）的情况。",
    scoreSummary: "你的睡眠分数",
    progress: "问题",
    of: "之",
  },
  ms: {
    quizTitle: "Kuiz Tabiat Tidur",
    questionTexts: [
      "Berapa jam tidur anda setiap malam secara purata?",
      "Berapa kerap anda mengambil kafein (kopi, teh, soda)?",
      "Berapa kerap anda menggunakan peranti elektronik (telefon, tablet) dalam masa sejam sebelum tidur?",
      "Sejauh mana konsistennya waktu tidur dan bangun anda pada hari bekerja dan hujung minggu?",
      "Sejauh mana anda rasa tekanan mempengaruhi tidur anda?",
      "Berapa hari seminggu anda bersenam sederhana sekurang-kurangnya 30 minit?",
      "Manakah yang paling menggambarkan persekitaran tidur anda?",
    ],
    options: [
      ["Kurang daripada 6 jam", "6-7 jam", "7-9 jam", "Lebih daripada 9 jam"],
      ["Beberapa kali sehari", "Sekali atau dua kali sehari", "Jarang atau tidak pernah"],
      ["Setiap malam", "Beberapa malam seminggu", "Jarang atau tidak pernah"],
      ["Tidak konsisten sama sekali", "Agak konsisten", "Sangat konsisten"],
      ["Ia menghalang saya daripada tidur hampir setiap malam", "Ia kadangkala menyukarkan saya untuk tidur", "Ia jarang atau tidak pernah mempengaruhi tidur saya"],
      ["0-1 hari", "2-3 hari", "4 hari atau lebih"],
      ["Bising atau mempunyai banyak cahaya", "Okay, tetapi boleh lebih baik", "Gelap, senyap, dan sejuk"],
    ],
    diagnosisTitles: {
      healthy: "Tidur yang Sihat",
      improvement: "Tidur Perlu Penambahbaikan",
      struggling: "Tidur Bermasalah",
    },
    diagnosisMessages: {
      healthy: "Tahniah! Tabiat tidur anda sangat baik. Mengekalkan rutin ini adalah kunci kepada kesihatan dan kesejahteraan jangka panjang.",
      improvement: "Anda berada di landasan yang betul, tetapi ada ruang untuk penambahbaikan. Perubahan kecil yang konsisten boleh membuat perbezaan besar dalam kualiti tidur anda.",
      struggling: "Nampaknya anda menghadapi beberapa cabaran dengan tidur anda. Jangan risau, ramai orang mengalaminya. Mengamalkan tabiat yang lebih baik boleh meningkatkan rehat anda dengan ketara.",
    },
    tips: {
      healthy: [
        "Teruskan usaha yang cemerlang! Konsistensi adalah kawan baik anda.",
        "Pertimbangkan penambahbaikan kecil, seperti bantal baru atau waktu tidur yang lebih awal.",
        "Kongsi tip anda dengan orang lain untuk membantu mereka meningkatkan tidur mereka.",
      ],
      improvement: [
        "Mulakan dengan melaraskan waktu tidur anda 15-30 minit lebih awal.",
        "Kurangkan masa skrin sebelum tidur dengan membaca buku atau mendengar muzik.",
        "Hadkan pengambilan kafein, terutamanya pada waktu petang dan malam.",
        "Tetapkan jadual tidur yang konsisten, walaupun pada hujung minggu.",
      ],
    },
    productSectionTitle: "Penyelesaian Tidur yang Disyorkan",
    productBadges: "Diuji & Disemak oleh Pakar Tidur",
    products: {
      healthy: [
        { name: "Sarung Bantal Sutera Mewah", description: "Mengurangkan geseran untuk rambut dan kulit yang lebih sihat, memastikan malam yang selesa." },
        { name: "Selimut Pemberat Premium", description: "Menyediakan tekanan lembut untuk menggalakkan kelonggaran dan kitaran tidur yang lebih dalam." },
        { name: "Jam Penggera Pintar", description: "Mengejutkan anda dengan cahaya dan bunyi yang lembut, memudahkan anda memulakan hari anda." },
      ],
      improvement: [
        { name: "Langsir 'Blackout'", description: "Menyekat semua cahaya luaran untuk persekitaran tidur yang gelap gelita dan bebas gangguan." },
        { name: "Mesin 'White Noise'", description: "Menutupi bunyi bising yang mengganggu untuk membantu anda tidur dan kekal tidur." },
        { name: "Penyebar Aroma Terapi", description: "Menggunakan minyak pati yang menenangkan seperti lavender untuk mencipta suasana yang tenteram." },
      ],
    },
    disclaimer: "Kuiz ini adalah penilaian kendiri berpandu untuk membantu anda merenung tabiat tidur anda dan mengenal pasti bidang untuk penambahbaikan. Ia hanya untuk maklumat dan bukan diagnosis perubatan atau alat rawatan.",
    buttonText: {
      learnMore: "Ketahui Lebih Lanjut",
      retakeQuiz: "Ambil Kuiz Semula",
      back: "Kembali",
    },
    chartText: "Carta ini menunjukkan skor anda (bentuk dalaman) berbanding skor maksimum yang mungkin (bentuk luaran) bagi setiap faktor.",
    scoreSummary: "Skor Tidur Anda",
    progress: "Soalan",
    of: "dari",
  },
};

const questions = [
  {
    category: "sleepHours",
    options: [
      { value: 0 },
      { value: 1 },
      { value: 2 },
      { value: 1 }
    ],
  },
  {
    category: "caffeine",
    options: [
      { value: 0 },
      { value: 1 },
      { value: 2 }
    ],
  },
  {
    category: "screenTime",
    options: [
      { value: 0 },
      { value: 1 },
      { value: 2 }
    ],
  },
  {
    category: "consistency",
    options: [
      { value: 0 },
      { value: 1 },
      { value: 2 }
    ],
  },
  {
    category: "stress",
    options: [
      { value: 0 },
      { value: 1 },
      { value: 2 }
    ],
  },
  {
    category: "exercise",
    options: [
      { value: 0 },
      { value: 1 },
      { value: 2 }
    ],
  },
  {
    category: "environment",
    options: [
      { value: 0 },
      { value: 1 },
      { value: 2 }
    ],
  },
];

const ProductCard = ({ product, t }) => (
  <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center">
    <div className="w-full h-32 bg-gray-200 rounded-md mb-3 flex items-center justify-center text-gray-400">
      Product Image Placeholder
    </div>
    <h4 className="text-md font-semibold text-gray-800">{product.name}</h4>
    <p className="text-sm text-gray-600 my-2">{product.description}</p>
    <span className="text-xs text-blue-500 font-bold bg-blue-50 px-2 py-1 rounded-full">{t.productBadges}</span>
    <a href="#" className="mt-4 text-xs font-medium text-indigo-600 hover:text-indigo-800 transition-colors duration-200">
      {t.buttonText.learnMore}
    </a>
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
  const maxPossibleScore = totalQuestions * 2;

  // Recalculate the score whenever answers change
  useEffect(() => {
    const newScore = Object.values(answers).reduce((sum, val) => sum + val, 0);
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
    const percentage = (score / maxPossibleScore) * 100;
    let category = '';

    if (percentage >= 80) {
      category = 'healthy';
    } else if (percentage >= 50) {
      category = 'improvement';
    } else {
      category = 'struggling';
    }

    return {
      title: t.diagnosisTitles[category],
      message: t.diagnosisMessages[category],
      color: category === 'healthy' ? "bg-green-100 border-green-500" : category === 'improvement' ? "bg-yellow-100 border-yellow-500" : "bg-red-100 border-red-500",
      icon: category === 'healthy' ? (
        <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ) : category === 'improvement' ? (
        <svg className="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
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

  // Prepare data for the radar chart
  const radarData = quizQuestions.map(q => ({
    subject: q.category,
    A: answers[q.category] || 0,
    fullMark: 2, // Max possible score for each category
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
                {diagnosis.tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>

            <div className="w-full mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{t.productSectionTitle}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {diagnosis.products.map((product, index) => (
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
