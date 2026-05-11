import axios from "axios";

const axiosConfig = async (method, url, data) => {
    try {
        let configObj = {method, url, data};
        let result = await axios(configObj)
        return result;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export default axiosConfig