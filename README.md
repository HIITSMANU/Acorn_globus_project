# StackOverflow

This project involves developing the frontend of a website inspired by Stack Overflow, with a key focus on the dynamic question section. The objective is to replicate a functional interface where users can interact with real-time questions fetched from an external API, such as the Stack Exchange API. The frontend will enable seamless filtering, searching, and categorizing of questions based on criteria like activity, votes, creation date, and more. 


**Frontend** - Reactjs 

**Styling** - Tailwind css for responsive & react-icons for icons

**API Integration**: Axios for fetching dynamic data.


## Run Locally

To create react-vite projects

```bash
  npm create vite@latest
```

Go to the project directory

```bash
  cd project-name
```
Install dependencies

```bash
  npm install
```

To run server

```bash
  npm run dev
```

To add Tailwind-css into the project

```bash
  npm install -D tailwindcss
  npx tailwindcss init
```

```javascript
/** @type {import('tailwindcss').Config} */
tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
```javascript
src/index.js
@tailwind base;
@tailwind components;
@tailwind utilities;
```

To clone the project

```bash
  git clone https://github.com/HIITSMANU/Acorn_globus_project.git
```


## Screenshots

**Laptop Screen(Light mode)**
![image](https://github.com/user-attachments/assets/a2a24d69-b912-4c59-9a8a-bb4752592c22)



**Mobile Screen(Light mode)**
![image](https://github.com/user-attachments/assets/29e8c167-5162-48f3-adfe-b377b76a3534)



## Features

1. Dynamic Question Section:

- Fetches questions from an API.
- Filters and displays questions based on parameters like activity, votes, and date.

2. Search Functionality:

- Users can search for questions using keywords.
- Real-time filtering ensures relevant results are shown dynamically.
- User-Friendly UI/UX

3. Responsive Design:

- Ensures a consistent user experience across various devices.

4. Scalable Architecture:

- Modular components for easy maintenance and extension.





