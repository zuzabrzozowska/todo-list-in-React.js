import axios from 'axios';

export const getFromServer = () => {
    return axios.get('http://51.75.120.145:3000/todo');
}
 
export const postToServer = newTask => {
    return axios.post('http://51.75.120.145:3000/todo', newTask)
}

export const deleteFromServer = id => {
    return axios.delete(`http://51.75.120.145:3000/todo/${id}`)
}

export const editOnServer = id => {
    return axios.put(`http://51.75.120.145:3000/todo/${id}`)
}
