import './App.css'
import Accordion from "./components/Accordion.jsx"
import Debounce from './components/Debounce.jsx'
import ToDoList from './components/ToDoList.jsx'
import TypeAHead from './components/TypeAHead.jsx'
import WeatherApp from './components/WeatherApp.jsx'
function App() {
    return (
        <>
            <Debounce />
            <TypeAHead />
            <ToDoList />
            <Accordion />
            <WeatherApp />
        </>
    )
}

export default App
