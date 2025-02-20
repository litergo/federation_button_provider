import { useState } from "react";

export default function Button() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }
    return (
        <button 
            onClick={handleClick}
            className="bg-blue-500 hover:bg-blue-700 rounded py-2 px-4 text-white font-bold"
        >
            Button has been clicked {count} times
        </button>
    );
}