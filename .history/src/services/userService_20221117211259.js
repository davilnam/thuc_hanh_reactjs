import axios from "../axios";

const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login', { email: userEmail, password: userPassword });
}

const getAllUsers = (inputId) => {
    return axios.get(`/api/get-all-users?id=${inputId}`);
}

const createNewUser = (data) => {
    return axios.post('/api/create-new-user', data);
}

const deleteUser = (userId) => {
    return axios.delete('/api/delete-user', {
        data: {
            id: userId
        }
    });
}

const updateUser = (userId) => {
    return axios.put('/api/edit-user', { id: userId });
}

export { handleLoginApi, getAllUsers, createNewUser, deleteUser }