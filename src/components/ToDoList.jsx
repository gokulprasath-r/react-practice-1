import { useState } from "react";

function ToDoList() {
    const [todo, setTodo] = useState([]);
    const [value, setValue] = useState("");
    const handleDelete = (index) => {
        const updatedTodo = todo.filter((item, i) => i !== index);
        setTodo(updatedTodo);
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-[400px] bg-white p-6 rounded-xl shadow-lg space-y-4">
                <h1 className="text-2xl font-bold text-center">Todo List</h1>

                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Add a new task"
                        className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <button className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition cursor-pointer" onClick={() => { setTodo([value, ...todo]); setValue(""); console.log(todo) }}>
                        Add
                    </button>
                </div>

                <ul className="space-y-2">
                    {todo.length > 0 ?
                        todo.map((item, index) => {
                            return <li key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                                <span>{item}</span>
                                <button className="text-red-500 hover:text-red-600 cursor-pointer" onClick={() => handleDelete(index)}>✕</button>
                            </li>
                        }) : <li className="flex items-center justify-center p-3 bg-gray-50 rounded-md">
                            <span>No Tasks Found</span>
                        </li>


                    }

                </ul>
            </div>
        </div>
    );
}

export default ToDoList;
