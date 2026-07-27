import axios from 'axios';

const URL = 'http://localhost:3005/products';


export const getProducts = () => {
    return axios.get(URL);
};


export const getProduct = (id) => {
    return axios.get(`${URL}/${id}`);
};


export const addProduct = (product) => {
    return axios.post(URL, product);
};


export const updateProduct = (id, product) => {
    return axios.put(`${URL}/${id}`, product);
};


export const deleteProduct = (id) => {
    return axios.delete(`${URL}/${id}`);
};