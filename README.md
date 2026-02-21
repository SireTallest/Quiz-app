# Dynamic Quiz Application Foundation



## Overview
This project provides a robust and modern frontend foundation for an interactive quiz application, built with React, Vite, and Tailwind CSS. The application will allow users to take quizzes on various topics, display questions one by one, and show the final score at the end.

## Features
- **React 19:** Leverages the latest features of React for building dynamic and responsive user interfaces.
- **Vite:** Utilizes a lightning-fast development server and an optimized build process for a superior developer experience.
- **Tailwind CSS:** Enables rapid and consistent UI development with a utility-first CSS framework, promoting efficient styling.
- **ESLint:** Ensures high code quality and consistency across the project, helping maintain best practices.
- **Modular Component Structure:** Organized for scalability and maintainability, making it easy to add new features or modify existing ones.
- **Responsive Design Foundation:** Ready for building user-friendly interfaces that adapt seamlessly across various devices and screen sizes.

## Project Structure
quiz-app/
├── public/
│   └── favicon.ico
├── src/
|   ├── assets/
|   |   ├──
|   |   ├──
|   |   ├──
│   ├── components/
│   │   ├── QuizSetup.jsx
│   │   ├── QuestionCard.jsx
│   │   ├── ScoreSummary.jsx
│   │   ├── QuizHistory.jsx
│   │   ├── SearchBar.jsx
│   │   ├── Timer.jsx
│   │   └── ErrorMessage.jsx
│   ├── hooks/
│   │   ├── useFetchQuestions.js
│   │   └── useQuizHistory.js
│   ├── utils/
│   │   ├── shuffleAnswers.js
│   │   └── decodeHTML.js
│   ├── services/
│   │   └── triviaAPI.js
|   ├── App.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── README.md
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js

## Getting Started

### Installation
To get this project up and running on your local machine, follow these steps:

1.  **Clone the Repository:**
    ```bash
    git clone https://gitub.com/SireTallest/quiz-app.io.git
    cd quiz-app # Navigate into the project directory
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

### Usage
Once you have installed the dependencies, you can start the development server:

```bash
npm run dev
```

This command will launch the application in development mode. Open your web browser and navigate to `http://localhost:5173` (or the URL displayed in your terminal after running `npm run dev`). You will see a welcoming message: "Hello, this is just the beginning", demonstrating the basic setup of React, Vite, and Tailwind CSS.

From here, you can begin building out your quiz features, adding questions, logic, and further enhancing the user interface.

## Technologies Used
| Technology        | Description                                       | Link                                                                  |
| :---------------- | :------------------------------------------------ | :-------------------------------------------------------------------- |
| **React**         | A JavaScript library for building user interfaces | [React.js](https://react.dev/)                                        |
| **Vite**          | Next Generation Frontend Tooling                  | [Vite.js](https://vitejs.dev/)                                        |
| **Tailwind CSS**  | A utility-first CSS framework                     | [Tailwind CSS](https://tailwindcss.com/)                              |
| **ESLint**        | Pluggable JavaScript linter                       | [ESLint](https://eslint.org/)                                         |
| **Autoprefixer**  | Parse CSS and add vendor prefixes                 | [Autoprefixer](https://github.com/postcss/autoprefixer)             |
| **PostCSS**       | A tool for transforming CSS with JavaScript       | [PostCSS](https://postcss.org/)                                       |


## Contributing
We welcome contributions to enhance this project! If you'd like to contribute, please follow these guidelines:

*   🌟 Fork the repository to your GitHub account.
*   💡 Create a new branch for your feature or bug fix (`git checkout -b feature/AmazingFeature`).
*   📝 Commit your changes with clear and descriptive messages (`git commit -m 'Add some AmazingFeature'`).
*   🚀 Push your changes to your forked repository (`git push origin feature/AmazingFeature`).
*   📬 Open a Pull Request to the main repository, detailing your changes and their benefits.

## Author Info
**Oladepo Abdulbaki Opeyemi - abdoladepo@gmail.com**
*   LinkedIn: https://www.linkedin.com/in/abdulbaki-oladepo-4998b6213/


---

![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
