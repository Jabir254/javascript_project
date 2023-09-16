import "../App.css";
import { useState } from "react";

function Customs() {
    const [isVisible, setIsvisible] = useState(false);

    return (
        <div className="Customs">
            <button onClick={() => setIsvisible((prev) => !prev)}>
                {isVisible ? "Hide" : "Show"}
            </button>
            {isVisible && <h1>Hidden Text</h1>}
        </div>
    );
}

export default Customs;