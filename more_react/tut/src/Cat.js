import { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";

function Cat() {
    const [catFacts, setCatfacts] = useState("");

    const fetchCatFact = () => {
         Axios.get("https://catfact.ninja/fact").then((res) => {
            setCatfacts(res.data.fact);
        });
    };
    

    useEffect(() => {
        fetchCatFact();
    }, []);
       

    return (
        <div className="Cat">
            <button onClick={fetchCatFact}>Generate Cat Fact</button>
            <p>{catFacts}</p>
        </div>
    );
}

export default Cat;