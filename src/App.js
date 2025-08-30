import React, { useState, useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

// Sleep quiz questions and weighted scores
const questions = [
  {
    questionText: "How many hours of sleep do you get on an average night?",
    category: "Sleep Duration",
    options: [
      { text: "Less than 6 hours", value: 0 },
      { text: "6-7 hours", value: 1 },
      { text: "7-9 hours", value: 2 },
      { text: "More than 9 hours", value: 1 },
    ],
  },
  {
    questionText: "How often do you consume caffeine (coffee, tea, soda)?",
    category: "Caffeine Use",
    options: [
      { text: "Several times a day", value: 0 },
      { text: "Once or twice a day", value: 1 },
      { text: "Rarely or never", value: 2 },
    ],
  },
  {
    questionText: "How often do you use electronic devices (phone, tablet) within an hour of bedtime?",
    category: "Screen Time",
    options: [
      { text: "Every night", value: 0 },
      { text: "A few nights a week", value: 1 },
      { text: "Rarely or never", value: 2 },
    ],
  },
  {
    questionText: "How consistent are your sleep and wake-up times on weekdays and weekends?",
    category: "Consistency",
    options: [
      { text: "Not consistent at all", value: 0 },
      { text: "Somewhat consistent", value: 1 },
      { text: "Very consistent", value: 2 },
    ],
  },
  {
    questionText: "How much do you feel stress affects your sleep?",
    category: "Stress Impact",
    options: [
      { text: "It prevents me from sleeping most nights", value: 0 },
      { text: "It sometimes makes it hard to sleep", value: 1 },
      { text: "It rarely or never affects my sleep", value: 2 },
    ],
  },
  {
    questionText: "How many days a week do you get at least 30 minutes of moderate exercise?",
    category: "Exercise",
    options: [
      { text: "0-1 days", value: 0 },
      { text: "2-3 days", value: 1 },
      { text: "4 or more days", value: 2 },
    ],
  },
  {
    questionText: "Which best describes your sleep environment?",
    category: "Environment",
    options: [
      { text: "It's noisy or has a lot of light", value: 0 },
      { text: "It's okay, but could be better", value: 1 },
      { text: "It's dark, quiet, and cool", value: 2 },
    ],
  },
];

// Product data based on diagnosis category
const recommendedProducts = {
  healthy: [
    { name: "Luxury Silk Pillowcase", description: "Reduces friction for healthier hair and skin, ensuring a comfortable night.", badge: "Tested & Reviewed by The Sleep Experts" },
    { name: "Premium Weighted Blanket", description: "Provides gentle pressure to promote relaxation and deeper sleep cycles.", badge: "Tested & Reviewed by The Sleep Experts" },
    { name: "Smart Alarm Clock", description: "Wakes you up with gentle light and sounds, easing you into your day.", badge: "Tested & Reviewed by The Sleep Experts" },
  ],
  improvement: [
    { name: "Blackout Curtains", description: "Blocks all external light for a pitch-black, distraction-free sleeping environment.", badge: "Tested & Reviewed by The Sleep Experts" },
    { name: "White Noise Machine", description: "Masks disruptive noises to help you fall asleep and stay asleep.", badge: "Tested & Reviewed by The Sleep Experts" },
    { name: "Aromatherapy Diffuser", description: "Uses calming essential oils like lavender to create a soothing atmosphere.", badge: "Tested & Reviewed by The Sleep Experts" },
  ],
  struggling: [
    { name: "Ergonomic Memory Foam Pillow", description: "Supports head and neck alignment to reduce discomfort and improve sleep quality.", badge: "Tested & Reviewed by The Sleep Experts" },
    { name: "Firmness-Adjustable Mattress", description: "Customizable support to find your perfect comfort level and reduce tossing and turning.", badge: "Tested & Reviewed by The Sleep Experts" },
    { name: "Sleep Mask with Eye Contours", description: "Blocks light without putting pressure on your eyes for total darkness.", badge: "Tested & Reviewed by The Sleep Experts" },
    { name: "Chamomile Sleep Tea", description: "A natural, non-caffeinated tea to calm the mind before bed.", badge: "Tested & Reviewed by The Sleep Experts" },
  ],
};

const ProductCard = ({ product }) => (
  <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center">
    <div className="w-full h-32 bg-gray-200 rounded-md mb-3 flex items-center justify-center text-gray-400">
      Product Image Placeholder
    </div>
    <h4 className="text-md font-semibold text-gray-800">{product.name}</h4>
    <p className="text-sm text-gray-600 my-2">{product.description}</p>
    <span className="text-xs text-blue-500 font-bold bg-blue-50 px-2 py-1 rounded-full">{product.badge}</span>
    <a href="#" className="mt-4 text-xs font-medium text-indigo-600 hover:text-indigo-800 transition-colors duration-200">
      Learn More
    </a>
  </div>
);

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [progress, setProgress] = useState(0);

  const totalQuestions = questions.length;
  const maxPossibleScore = totalQuestions * 2;

  useEffect(() => {
    setProgress((currentQuestionIndex / totalQuestions) * 100);
  }, [currentQuestionIndex, totalQuestions]);

  const handleAnswer = (value, category) => {
    setScore(score + value);
    setAnswers({ ...answers, [category]: value });

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
      setProgress(100);
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
    if (percentage >= 80) {
      return {
        title: "Healthy Sleeper",
        message: "Congratulations! Your sleep habits are excellent. Maintaining this routine is key to long-term health and well-being.",
        color: "bg-green-100 border-green-500",
        icon: (
          <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        tips: [
          "Keep up the great work! Consistency is your best friend.",
          "Consider small enhancements, like a new pillow or an even earlier bedtime.",
          "Share your tips with others to help them improve their sleep.",
        ],
        products: recommendedProducts.healthy,
      };
    } else if (percentage >= 50) {
      return {
        title: "Sleep Improvement Needed",
        message: "You're on the right track, but there's room to grow. Small, consistent changes can make a big difference in your sleep quality.",
        color: "bg-yellow-100 border-yellow-500",
        icon: (
          <svg className="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        ),
        tips: [
          "Start by adjusting your bedtime by 15-30 minutes earlier.",
          "Reduce screen time before bed by reading a book or listening to music.",
          "Limit caffeine intake, especially in the afternoon and evening.",
          "Establish a consistent sleep schedule, even on weekends.",
        ],
        products: recommendedProducts.improvement,
      };
    } else {
      return {
        title: "Struggling Sleeper",
        message: "It looks like you're facing some challenges with your sleep. Don't worry, many people do. Adopting better habits can significantly improve your rest.",
        color: "bg-red-100 border-red-500",
        icon: (
          <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        tips: [
          "Create a relaxing bedtime ritual to signal to your body that it's time to sleep.",
          "Evaluate your sleep environment to ensure it's dark, quiet, and at a comfortable temperature.",
          "Avoid caffeine and large meals close to bedtime.",
          "Try light exercise during the day to help improve sleep quality at night.",
        ],
        products: recommendedProducts.struggling,
      };
    }
  };

  const diagnosis = quizCompleted ? getDiagnosis() : null;

  // Prepare data for the radar chart
  const radarData = questions.map(q => ({
    subject: q.category,
    A: answers[q.category] || 0,
    fullMark: 2, // Max possible score for each category
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 p-4 font-sans flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-2xl text-center">
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
                Question {currentQuestionIndex + 1} of {totalQuestions}
              </p>
            </div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              {questions[currentQuestionIndex].questionText}
            </h2>
            <div className="space-y-4">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  className="w-full text-left p-4 rounded-lg bg-gray-100 hover:bg-indigo-50 transition-colors duration-200 text-gray-700 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={() =>
                    handleAnswer(option.value, questions[currentQuestionIndex].category)
                  }
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Your Sleep Score</h2>
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
                This chart shows your score (inner shape) relative to the maximum possible score (outer shape) for each factor.
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
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Recommended Sleep Solutions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {diagnosis.products.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
              </div>
            </div>

            <button
              className="mt-4 px-6 py-3 bg-indigo-600 text-white font-bold rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={handleRetake}
            >
              Retake Quiz
            </button>
            <p className="mt-8 text-xs text-gray-400 max-w-md">
              <span className="font-bold text-gray-500">Disclaimer:</span> This quiz is a guided self-evaluation to help you reflect on your sleep habits and identify areas for improvement. It is informational only and not a medical diagnosis or treatment tool.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
