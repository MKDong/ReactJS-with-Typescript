import "./App.css";
import { Greet } from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
    const personName = {
        first: "John",
        last: "Doe",
    };

    const nameList = [
        {
            name: "John",
            age: 20,
        },
        {
            name: "John",
            age: 20,
        },
        {
            name: "John",
            age: 20,
        },
        {
            name: "John",
            age: 20,
        },
        {
            name: "John",
            age: 20,
        },
    ];

    return (
        <div className="App">
            <Greet name="Test Name" messageCount={10} isLoading={true} />
            <Person name={personName} />
            <PersonList people = {nameList}/> 
        </div>
    );
}

export default App;
