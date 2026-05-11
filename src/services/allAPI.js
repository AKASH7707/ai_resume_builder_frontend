
import axiosConfig from "./axiosConfig";
import { BaseURL } from "./BaseURL";

export const getResumeData = async () => {
    return await axiosConfig('get', BaseURL + '/resumeDatas', '');
}

export const addResumeData = async (reqBody) => {
    return await axiosConfig('post', BaseURL + '/resumeDatas', reqBody);
}

export const deleteResume = async (id) => {
    return await axiosConfig('delete', `${BaseURL}/resumeDatas/${id}`, {});
}
