import { ChangeProfile } from "../components/ChangeProfile"
import { useContext } from "react"
import { Appcontext } from "../App"


export const Contact = () => {
    const { username } = useContext(Appcontext);
    return (
        <div>
            Profile, User is: {username}
            <ChangeProfile  />
        </div>
    );
}