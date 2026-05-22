import axios from "axios";

const instance = axios.create({
    baseURL: "https://team-task-manager-production-224c.up.railway.app/api"
});

export default instance;