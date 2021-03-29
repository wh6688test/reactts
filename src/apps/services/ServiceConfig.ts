import axios from "axios";

const axiosInstance1=axios.create(
    {
        baseURL:"http://localhost:8000",
    }
);

export default axiosInstance1;
