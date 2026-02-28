# 🧠 QuizApp

QuizApp is an interactive web application designed to challenge your knowledge across a wide range of topics. Built with React, Vite, and Tailwind CSS, it offers a seamless and engaging quiz experience, fetching dynamic questions from the Open Trivia Database API. Users can customize their quizzes by category, difficulty, and the number of questions, track their scores, and review their performance with a detailed history, making learning fun and effective.
Questions are fetched in real time from the [Open Trivia Database](https://opentdb.com) API.

Built as a capstone project for the **ALX Frontend Development Program**.

---

## 🚀 Live Demo


---

## 📸 Screenshots


---

## ✨ Features

* 🎯 20+ quiz categories fetched live from the API
* ⚙️ Configurable difficulty (Easy, Medium, Hard) and question count
* 🔀 Shuffled answer options on every quiz
* ✅ Instant correct/incorrect feedback after each answer
* 📊 Final score summary with percentage and per-question review
* 📜 Quiz history with total quizzes, average score, and best score
* 💾 History persisted across sessions using localStorage
* 📱 Fully responsive on desktop, tablet, and mobile
* 🍔 Hamburger navigation menu on smaller screens

* **Interactive Quiz Interface**: A modern, responsive, and intuitive user interface built with React, ensuring a smooth and engaging quiz-taking experience.
* **Customizable Quiz Settings**: Users can effortlessly select from a diverse range of categories, adjust difficulty levels (Easy, Medium, Hard), and specify the number of questions to create a truly personalized quiz.
* **Dynamic Question Fetching**: Integrates seamlessly with the Open Trivia Database API to provide a vast and up-to-date collection of trivia questions across numerous subjects.
* **Real-time Score Tracking**: Provides immediate feedback on performance by updating the user's score as they advance through the quiz.
* **Detailed Results Review**: Offers a comprehensive summary at the end of each quiz, including the total score, percentage correctness, and an option to review each question with correct and selected answers.
* **Quiz History Management**: Persists past quiz results locally in the browser's storage, allowing users to track their progress, view historical performance data, and identify areas for improvement.
* **Responsive Design**: Crafted with Tailwind CSS, guaranteeing an optimal and consistent user experience across various devices and screen sizes, from desktops to mobile phones.
* **HTML Decoding Utility**: Includes a utility function to correctly decode HTML entities present in questions and answers fetched from the API, ensuring readability.
* **API Session Token Management**: Implements session token handling for the Open Trivia Database API to prevent repeat questions within a single session and enhance question diversity.

---

## Technologies Used

This project leverages a modern web development stack to deliver a robust, efficient, and engaging application experience:

| Technology         | Description                                                          | Link                                                            |
| :----------------- | :------------------------------------------------------------------- | :-------------------------------------------------------------- |
| **React**          | A declarative, component-based JavaScript library for building user interfaces. | [React Website](https://react.dev/)                             |
| **Vite**           | A next-generation frontend tooling that provides an extremely fast development experience. | [Vite Website](https://vitejs.dev/)                             |
| **Tailwind CSS**   | A utility-first CSS framework for rapidly building custom designs.   | [Tailwind CSS Website](https://tailwindcss.com/)                |
| **React Router DOM** | A standard library for routing in React applications, enabling declarative navigation. | [React Router DOM](https://reactrouter.com/en/main)             |
| **Open Trivia DB** | A free-to-use, community-contributed online trivia database API.     | [Open Trivia Database](https://opentdb.com/)                    |
| **ESLint**         | A pluggable linting utility for JavaScript, ensuring code quality and consistency. | [ESLint Website](https://eslint.org/)                           |
| **PostCSS**        | A tool for transforming CSS with JavaScript plugins, used here with Tailwind and Autoprefixer. | [PostCSS Website](https://postcss.org/)                         |
| **Autoprefixer**   | A PostCSS plugin that parses CSS and adds vendor prefixes to CSS rules. | [Autoprefixer on GitHub](https://github.com/postcss/autoprefixer) |

---

## 📁 Project Structure

quiz-app/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── QuizSetup.jsx        # Landing page with topic selection
│   │   ├── QuizPage.jsx        # Quiz interface (one question at a time)
│   │   ├── Results.jsx         # Final score and question review
│   │   ├── QuizHistory.jsx     # Past quiz history from localStorage
│   │   ├── Navbar.jsx          # Responsive navbar with hamburger menu
│   │   └── About.jsx           # About page
│   ├── hooks/
│   │   └── useFetchQuestions.js  # Custom hook for fetching categories
│   ├── services/
│   │   └── triviaApi.js          # All API calls to Open Trivia Database
│   ├── utils/
│   │   ├── shuffleAnswers.js     # Merges and shuffles answer options
│   │   └── decodeHTML.js         # Decodes HTML entities from API responses
│   ├── App.jsx                   # Root component with route definitions
│   ├── main.jsx                  # App entry point with BrowserRouter
│   └── index.css                 # Tailwind CSS directives
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## 📡 API Reference

This project uses the [Open Trivia Database](https://opentdb.com) — a free, public API requiring no authentication.

| Endpoint | Description |
|---|---|
| `/api_category.php` | Fetch all available quiz categories |
| `/api.php?amount=10&category=9&difficulty=medium&type=multiple` | Fetch quiz questions |
| `/api_token.php?command=request` | Request a session token |
| `/api_token.php?command=reset&token=TOKEN` | Reset an exhausted session token |

---

## ⚙️ Getting Started

## Contributing

Contributions are genuinely what make the open-source community an incredible place to learn, inspire, and create. Any contributions you make to this project are **greatly appreciated**.

If you have a suggestion that would make this application even better, please feel free to fork the repository and create a pull request. You can also open an issue with the tag "enhancement" to discuss potential improvements.

Here's how you can contribute:

1. 🍴 Fork the Project
2. 🌟 Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. ✨ Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. ⬆️ Push your changes to the Branch (`git push origin feature/AmazingFeature`)
5. 🚀 Open a Pull Request

### Prerequisites

- Node.js v18+
- npm


### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/SireTallest/quiz-app.git
   cd quiz-app
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the Development Server**:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   This command will launch the application in development mode and typically open it in your default web browser at `http://localhost:5173`.


### Build for Production

```bash
npm run build
```

---

## 🚢 Deployment

This app is deployed on **Vercel**.

To deploy your own:

1. Push the project to GitHub
2. Connect the repo to [Netlify](https://netlify.com) or [Vercel](https://vercel.com)
3. Set build command to `npm run build`
4. Set output directory to `dist`
5. Deploy

---

## 🗺️ Pages & Routes

| Route | Component | Description |
|---|---|---|
| `/` | `QuizSetup` | Topic selection and quiz configuration |
| `/quiz` | `QuizPage` | Active quiz interface |
| `/results` | `Results` | Final score and question review |
| `/history` | `QuizHistory` | Past quiz history and stats |
| `/about` | `About` | Project and developer info |

---

## Usage

Once the application is running, you can immediately dive into testing your knowledge!

1.  **Quiz Setup**: Upon launching the application, you'll land on the quiz setup page. Here, you have full control over your quiz parameters:
    *   **Search Topics**: Utilize the search bar to quickly find specific trivia categories that interest you.
    *   **Select a Category**: Choose from an extensive list of trivia categories, such as General Knowledge, Science & Nature, Sports, History, Film, Music, Video Games, and Television.
    *   **Choose Difficulty**: Tailor the challenge level to your preference by selecting Easy, Medium, or Hard difficulty.
    *   **Number of Questions**: Determine the length of your quiz by opting for 5, 10, 15, or 20 questions.
2.  **Start Quiz**: After configuring your desired quiz settings, click the "Start Quiz" button to begin your trivia challenge.
3.  **Answer Questions**: Progress through each question, selecting your chosen answer from the multiple-choice options. Your score is dynamically updated as you answer.
4.  **Review Results**: Once all questions are completed, the application will display a detailed results page, showcasing your total score, percentage of correct answers, and a question-by-question review of your performance.
5.  **View History**: All your completed quizzes, including scores and dates, are automatically saved in your local history. This allows you to track your progress over time and revisit past quiz results. You also have the option to clear your entire quiz history.

---

## 🔮 Future Improvements

- [ ] Per-question countdown timer
- [ ] Dark mode toggle
- [ ] User authentication and cloud-saved history
- [ ] Social sharing of quiz scores
- [ ] Attractive landing page with different cards and icons

---

## 👨‍💻 Developer

**Oladepo Abdulbaki**
ALX Frontend Development Program

 **LinkedIn**: Oladepo Abdulbaki Opeyemi https://www.linkedin.com/in/abdulbaki-oladepo-4998b6213/

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## Badges

[![React](https://img.shields.io/badge/react-%2320232A.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/tailwind_css-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)