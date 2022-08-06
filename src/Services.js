import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});
export const api = {
  get() {
    return axiosInstance.get();
  },
};
