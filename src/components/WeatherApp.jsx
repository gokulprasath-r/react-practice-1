import { useState } from "react";

function WeatherApp() {
    const [city, setCity] = useState("");
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    // to get weather of current location take lat & lon from coords and pass it in query params
    // use navigator.geolocation.getCurrentPosition
    const getWeather = (city) => {
        if (!city) return;
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bf909b4a90c47e810fc156dc73c0ed75&units=metric`
        )
            .then((res) => res.json())
            .then((result) => {
                if (result.cod === 200) {
                    setData(result);
                    setError(null);
                } else {
                    setError(result.message);
                    setData(null);
                }
            })
            .catch((err) => {
                setError("Something went wrong");
                setData(null);
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-[400px] p-6 bg-white rounded-xl shadow-lg space-y-4">
                <div className="flex">
                    <input
                        type="text"
                        placeholder="Enter city"
                        className="flex-1 px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                    />
                    <button
                        className="px-4 py-2 bg-gray-500 text-white font-medium rounded-r-md hover:bg-gray-600 transition cursor-pointer"
                        onClick={() => getWeather(city)}
                    >
                        Search
                    </button>
                </div>

                {data && (
                    <div className="text-center p-4 bg-gray-50 rounded-md shadow-inner space-y-2">
                        <h2 className="text-xl font-bold">{data.name}</h2>
                        <p className="text-3xl font-extrabold">{data.main.temp}°C</p>
                        <p className="text-gray-700">{data.weather[0].description}</p>
                    </div>
                )}

                {error && <p className="text-red-500 text-center">{error}</p>}
            </div>
        </div>
    );
}

export default WeatherApp;
