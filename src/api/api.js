import Axios from "axios";

export const getApiUrl = () => {
    return Axios.create({
        baseUrl: "http://localhost:3002/",
    })
}