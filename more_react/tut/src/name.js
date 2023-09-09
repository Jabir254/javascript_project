import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";

function Name() {
    const [name, setName] = useState("");
    const fetchData = () => {
        Axios.get(`https://api.agify.io/?name=${name}`).then((res) =>{
            console.log(res.data);
        });
    };

    return (
        <div className="Name">
            <input
            placeholder="Ex. Pedro..."
            onChange={(event) => {
                setName(event.target.value);
            }}
            />
            <button onClick={fetchData}>Predict Age</button>
        </div>
    )
}

export default Name;
