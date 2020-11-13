import axios from "axios";

const APIKey = "AIzaSyAfnZNQjMuqhG2brM6Br7x7erllBmCZ7k8";

export default {
    searchBooks: function (query) {
        return axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${APIKey}`
        );
    }
};