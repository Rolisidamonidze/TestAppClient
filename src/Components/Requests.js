import axios from "axios";


const API_URL = "http://localhost:3005/api/";

export const getUsers = () => {
    return axios
        .get(`${API_URL}users`)
        .then((res) => res.data)
        .catch((err) => err.response.data.message);
};

