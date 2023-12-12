export const jsQuizz = {
    questions: [
      {
        question: "Which tool can be used for state management in large React applications?",
        choices: [
          "Redux",
          "Axios",
          "Jest",
          "Webpack"
        ],
        type: "MCQs",
        correctAnswer: "Redux"
      },
      {
        question:
          "Which of the following is used in React.js to increase performance?",
        choices: [
          "Virtual DOM",
          "Original DOM",
          "Both A and B",
          "None of the above",
        ],
        type: "MCQs",
        correctAnswer: "Virtual DOM",
      },
      {
        question: "What is ReactJS?",
        choices: [
          "Server-side framework",
          "User Interface framework",
          "both a and b",
          "None of the above",
        ],
        type: "MCQs",
        correctAnswer: "User Interface framework",
      },
      {
        question:
          "Identify the one which is used to pass data to components from outside",
        choices: ["Render with arguments", "setState", "PropTypes", "props"],
        type: "MCQs",
        correctAnswer: "props",
      },
      {
        question: "In which language is React.js written?",
        choices: ["Python", "Java", "C#", "JavaScript"],
        type: "MCQs",
        correctAnswer: "JavaScript",
      },
      {
        question: "What is Babel?",
        choices: [
          "JavaScript interpreter",
          "JavaScript transpiler",
          "JavaScript compiler",
          "None of the above",
        ],
        type: "MCQs",
        correctAnswer: "JavaScript compiler",
      },
      {
        question: "Which lifecycle method is invoked immediately after a component is inserted into the DOM?",
        choices: [
          "componentWillMount",
          "componentDidMount",
          "componentDidUpdate",
          "componentWillUnmount"
        ],
        type: "MCQs",
        correctAnswer: "componentDidMount"
      },
      {
        question: "What purpose does the 'key' attribute serve in React when rendering a list of elements?",
        choices: [
          "It uniquely identifies elements in the list",
          "It defines the styling for each element",
          "It determines the order of elements in the list",
          "It is not required for rendering lists"
        ],
        type: "MCQs",
        correctAnswer: "It uniquely identifies elements in the list"
      },

      {
        question: "What is the purpose of React Router?",
        choices: [
          "To manage HTTP requests in React applications",
          "To create animations and transitions between components",
          "To manage navigation and routing in React applications",
          "To optimize the performance of React components"
        ],
        type: "MCQs",
        correctAnswer: "To manage navigation and routing in React applications",
      },
      {
        question: "Which method is used to update the state in React components?",
        choices: [
          "this.state()",
          "this.setState()",
          "this.updateState()",
          "this.changeState()"
        ],
        type: "MCQs",
        correctAnswer: "this.setState()"
      }
    ],

  };
  
  export const resultInitalState = {
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  };