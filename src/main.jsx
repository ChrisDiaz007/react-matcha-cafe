import './index.css';
import { createRoot } from 'react-dom/client';
import App from "./App";

// console.log("hi")

const rootContainer = document.getElementById("root");
const root = createRoot(rootContainer);

// const Hello = ({ name, age}) => {
//     // const name = props.name;
//     // const age = props.age;

//     // props ==> {name: "remy", age: "21"}
//     // const {name, age} = props;

//     return <h1>Hi I am {name}, {age} yrs-old!</h1>
// }
// root.render(<Hello name="Remy" age="21"/>);

root.render( <App /> );