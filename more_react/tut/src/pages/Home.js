import { useContext } from "react"
import { Appcontext } from "../App"
export const Home = () => {
    const {username} = useContext(Appcontext);
    return <h1>This is the home page and the user is: {username}</h1>
}