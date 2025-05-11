import axios from "axios";
import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css"

axios.defaults.baseURL = "https://pixabay.com/api/";

const API_KEY = "50190409-57f653f3b13017a76580224dc";

export function getImagesByQuery(query) {
    return axios("", {
        params: {
            key: API_KEY,
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: "true",
        }
    })
        .then(res => res.data)
        .catch(error => {
            console.log(error);
            throw error;
        });

    // .catch(error => {
    //     console.log(error);
    //     iziToast.error({
    //         title: 'Error',
    //     });
};


