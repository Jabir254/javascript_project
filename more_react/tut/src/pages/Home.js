import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
export const Home = () => {
    const { data, isLoading, refetch } = useQuery(["cat"], () => {
        return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    });

    return <h1>This is the homepage <p>{data?.fact}</p></h1>
}