import axios from 'axios';

export const getAndRenderServer = () => {
    return axios.get('http://51.75.120.145:3000/todo');
}
 
export const postAndRenderServer = newTask => {
    return axios.post('http://51.75.120.145:3000/todo', newTask)
}

export const deleteAndRenderServer = id => {
    return axios.delete(`http://51.75.120.145:3000/todo/${id}`)
}