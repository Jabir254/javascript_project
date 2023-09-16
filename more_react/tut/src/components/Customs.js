import "../App.css";
import { useToggle } from "./useToggle";

function Customs() {
    const [isVisible, toggle] = useToggle()

    return (
        <div className="Customs">
            <button onClick={toggle}>
                {isVisible ? "Hide" : "Show"}
            </button>
            {isVisible && <h1>Hidden Text</h1>}
        </div>
    );
}

export default Customs;