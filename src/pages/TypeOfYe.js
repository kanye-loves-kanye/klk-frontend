import React, { useState } from "react";

const questions = [
    {
      question: "What is Kanye West's birth name?",
      options: ["Kanye Omari West", "Kanye Lamar West", "Kanye Robert West", "Kanye David West"],
      answer: "Kanye Omari West"
    },
    {
      question: "Where was Kanye West born?",
      options: ["Atlanta", "Detroit", "Chicago", "Los Angeles"],
      answer: "Atlanta"
    },
    {
      question: "How many Grammys has Kanye West won?",
      options: ["23", "19", "21", "24"],
      answer: "24"
    },
    {
      question: "When was Kanye's album My Beautiful Dark Twisted Fantasy Made?",
      options: ["2006", "2011", "2010", "2007"],
      answer: "2010"
    },
    {
      question: "How old is Kanye West?",
      options: ["38", "40", "46", "48"],
      answer: "46"
    },
    {
      question: "How many albums has Kanye West (God) Made?",
      options: ["6", "9", "10", "12"],
      answer: "10"
    },
    {
      question: "What is the name of Kanye West's fashion label?",
      options: ["West Coast", "Yeezy", "Nike Yeezy", "Adidas Originals"],
      answer: "Yeezy"
    },
    {
      question: "Who did Kanye West collaborate with on the 2011 album \"Watch the Throne\"?",
      options: ["Lil Wayne", "Jay-Z", "Eminem", "Dr. Dre"],
      answer: "Jay-Z"
    },
    {
      question: "Which year did Kanye West release his first album?",
      options: ["2001", "2003", "2005", "2007"],
      answer: "2003"
    },
    {
      question: "Who did Kanye West marry in 2014?",
      options: ["Kim Kardashian", "Rihanna", "Beyoncé", "Taylor Swift"],
      answer: "Kim Kardashian"
    },
    
    
];

const TypeOfYe = () => {
    const [answers, setAnswers] = useState(Array(questions.length).fill(""));

    const handleAnswerChange = (index, selectedOption) => {
        const updatedAnswers = [...answers];
        updatedAnswers[index] = selectedOption;
        setAnswers(updatedAnswers);
    };

    const categorizeUser = (answers) => {
      const correctAnswers = questions.map(question => question.answer);
      let correctCount = answers.filter((answer, index) => answer === correctAnswers[index]).length;
      
      let group = '';
      
      if (correctCount >7) {
          group = 'Chop up the soul Kanye';
      } else if (correctCount > 5) {
          group = 'Pink Polo Kanye';
      } else if (correctCount > 2) {
          group = 'Red Hat Ye';
      } else {
          group = 'DONDA DONDA DONDA';
      }
      return group;
    };

    const handleSubmit = () => {
      
      const userGroup = categorizeUser(answers);
      alert(`Your Type: ' ${userGroup}'`);
    };

    return (
        <div>
            <h2>Kanye West Survey</h2>
            <h5>You will be placed into four different types of Ye based on the number of correct answers.</h5>
            {questions.map((questionData, index) => (
                <div key={index}>
                    <p>{questionData.question}</p>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {questionData.options.map((option, optionIndex) => (
                            <li key={optionIndex}>
                                <label>
                                    <input
                                        type="radio"
                                        name={`question${index}`}
                                        value={option}
                                        checked={answers[index] === option}
                                        onChange={() => handleAnswerChange(index, option)}
                                    />
                                    {option}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default TypeOfYe