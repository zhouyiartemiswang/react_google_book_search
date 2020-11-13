import axios from "axios";

export default {
    searchBooks: function (query) {
        // console.log(query);
        return axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${query}`
        );
    }
};