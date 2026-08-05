import { useState } from 'react';

export default function StarRating() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <section className="w-[600px] space-y-3">
                <h1 className="text-2xl font-bold text-center">Drag & Drop</h1>
                <p className="text-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            className={`text-4xl cursor-pointer ${star <= (hover || rating) ? 'text-gray-500' : 'text-black'}`}
                            key={star}
                            onClick={() => setRating(star)}
                            onMouseEnter={() => setHover(star)}
                            onMouseLeave={() => setHover(0)}
                            style={{
                                cursor: 'pointer',
                                fontSize: '40px',
                            }}
                        >
                            ★
                        </span>
                    ))}
                </p>

                <p className="text-center">Rating: {rating}</p>
            </section>
        </div>
    );
}
