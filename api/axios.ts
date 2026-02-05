import axios from "axios"
import AsyncStore from "@react-native-async-storage/async-storage"


export const api = axios.create({
    baseURL: "https://astro.adkrayons.com/api"
})


api.interceptors.request.use(async (config) => {
    const token = await  AsyncStore.getItem("token")
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config
})