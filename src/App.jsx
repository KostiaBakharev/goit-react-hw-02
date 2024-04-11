import { useState, useEffect } from "react";
import "./App.css";
import { Description } from "./components/Description/Description";
import { Options } from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

const App = () => {
  // Використання функції у визначенні початкового стану за допомогою useState
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return {
      Good: 0,
      Bad: 0,
      Neutral: 0,
    };
  });

  // Обробка відгуків
  const handleFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
    // console.log("Feedback after updating:", feedback);
  };

  // Хбереження даних в локальному сховищі при зміні стану feedback
  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);
  // console.log("Feedback after updating:", feedback);

  // Скидання відгуків
  const handleReset = () => {
    setFeedback({
      Good: 0,
      Bad: 0,
      Neutral: 0,
    });
  };
  const { Good, Bad, Neutral } = feedback;
  // Обчислення загальної кількості відгуків
  const totalFeedback = Good + Bad + Neutral;

  // Обчислення відсотка позитивних відгуків
  const positivePercentage =
    totalFeedback === 0 ? 0 : ((Good / totalFeedback) * 100).toFixed(2);

  return (
    <div className="container">
      <Description />
      <Options
        options={Object.keys(feedback)}
        onLeaveFeedback={handleFeedback}
        totalFeedback={totalFeedback}
        onReset={handleReset}
      />
      {totalFeedback === 0 ? (
        <Notification message="There is no feedback yet." />
      ) : (
        <Feedback
          good={Good}
          bad={Bad}
          neutral={Neutral}
          total={totalFeedback}
          positivePercentage={positivePercentage}
        />
      )}
    </div>
  );
};

export default App;
