
import axios from "axios";

const axiosInstance1=axios.create(
    {
        baseURL:"http://localhost:3000",
    }
);

export default axiosInstance1;