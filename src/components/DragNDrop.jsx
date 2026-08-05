import { useState } from 'react';

function DragNDrop() {
    const [items, setItems] = useState(['HTML', 'CSS', 'JavaScript', 'React']);

    const [dragIndex, setDragIndex] = useState(null);

    const handleDragStart = (index) => {
        setDragIndex(index);
    };

    const handleDrop = (dropIndex) => {
        const updatedItems = [...items];

        const draggedItem = updatedItems[dragIndex];
        updatedItems.splice(dragIndex, 1);
        updatedItems.splice(dropIndex, 0, draggedItem);

        setItems(updatedItems);
        setDragIndex(null);
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <section className="w-[600px] space-y-3">
                <h1 className="text-2xl font-bold text-center">Drag & Drop</h1>
                {items.map((item, index) => (
                    <div
                        key={item}
                        draggable
                        onDragStart={() => handleDragStart(index)}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={() => handleDrop(index)}
                        style={{
                            padding: '10px',
                            margin: '10px 0',
                            border: '1px solid black',
                            cursor: 'grab',
                        }}
                    >
                        {item}
                    </div>
                ))}
            </section>
        </div>
    );
}

export default DragNDrop;
