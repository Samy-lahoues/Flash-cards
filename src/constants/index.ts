
const messages : string[]  = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];
interface cardTypes {
    id : number,
    front : string,
    back : string
}
const cards : cardTypes []  = [
    { "id": 1, "front": "What is React.js?", "back": "React.js is a JavaScript library for building user interfaces, developed by Facebook." },
    { "id": 2, "front": "What is JSX in React?", "back": "JSX (JavaScript XML) is a syntax extension that allows writing HTML elements inside JavaScript and placing them in the DOM without using `createElement` or `appendChild`." },
    { "id": 3, "front": "What is a component in React?", "back": "A component in React is a reusable piece of UI that can be a function or a class." },
    { "id": 4, "front": "What are the types of components in React?", "back": "React components can be functional (stateless) or class-based (stateful)." },
    { "id": 5, "front": "What is the purpose of props in React?", "back": "Props (short for properties) are used to pass data from a parent component to a child component." },
    { "id": 6, "front": "What is the useState hook in React?", "back": "useState is a React Hook that lets you add state to functional components." },
    { "id": 7, "front": "What is the useEffect hook used for?", "back": "useEffect is a React Hook used to handle side effects in functional components, such as fetching data or updating the DOM." },
    { "id": 8, "front": "What is the Virtual DOM?", "back": "The Virtual DOM is a lightweight copy of the real DOM that React uses to improve performance by minimizing direct updates." },
    { "id": 9, "front": "What is the purpose of the key prop in React lists?", "back": "The key prop helps React identify which items have changed, are added, or removed, improving rendering efficiency." },
    { "id": 10, "front": "What is the difference between state and props?", "back": "State is managed within a component and can change, while props are passed from parent to child and cannot be modified by the child." },
    { "id": 11, "front": "What is the context API in React?", "back": "The Context API allows data to be shared across components without having to pass props manually at every level." },
    { "id": 12, "front": "What is React Router?", "back": "React Router is a library for handling navigation in React applications, allowing for single-page app (SPA) routing." },
    { "id": 13, "front": "What is lazy loading in React?", "back": "Lazy loading is a technique that defers the loading of components until they are needed, improving performance." },
    { "id": 14, "front": "What is Redux used for in React?", "back": "Redux is a state management library that helps manage global state in large-scale React applications." },
    { "id": 15, "front": "What is a custom hook in React?", "back": "A custom hook is a JavaScript function that starts with 'use' and allows you to reuse stateful logic across components." },
    { "id": 16, "front": "What is the difference between controlled and uncontrolled components?", "back": "A controlled component is managed by React state, while an uncontrolled component uses the DOM directly." },
    { "id": 17, "front": "What is the Strict Mode in React?", "back": "Strict Mode is a tool that helps identify potential problems in an application by enabling additional checks and warnings." },
    { "id": 18, "front": "What is Server-Side Rendering (SSR) in React?", "back": "SSR is a technique where React pages are rendered on the server before being sent to the client, improving SEO and performance." },
    { "id": 19, "front": "What is the difference between React and React Native?", "back": "React is for building web applications, while React Native is for building mobile applications using native components." },
    { "id": 20, "front": "What are Fragments in React?", "back": "Fragments allow grouping multiple elements without adding an extra node to the DOM." }
]
export {
    messages,
    cards
}