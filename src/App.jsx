import './App.css'
import Accordion from "./components/Accordion.jsx"
import ToDoList from './components/ToDoList.jsx'
import WeatherApp from './components/WeatherApp.jsx'
function App() {
    return (
        <>
            <ToDoList />
            <Accordion />
            <WeatherApp />
        </>
    )
}

export default App
