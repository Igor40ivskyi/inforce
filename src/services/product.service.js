import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

export const productService = {
    getProducts: () => axiosService.get(urls.products),
    getProductById: (id) => axiosService.get(`${urls.products}/${id}`),
};


