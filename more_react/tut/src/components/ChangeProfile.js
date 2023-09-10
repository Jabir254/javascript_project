import { useState } from "react";
import { useContext } from "react";
import { Appcontext } from "../App";


export const ChangeProfile = () => {
    const { setUsername } = useContext(Appcontext);

    const [newUsername, setNewUsername] = useState("");
    return (
        <div>
            <input
                onChange={(event) => {
                    setNewUsername(event.target.value);
                }}
            />
            <button
                onClick={() => {
                    setUsername(newUsername);
                }}
            >Change userName</button>
        </div>
    )
};