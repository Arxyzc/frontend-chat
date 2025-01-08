import axios from "axios";
import { HOST } from "@/utils/constants";

export const apiClient = axios.create({
    baseURL: HOST,
    withCredentials: true, // Esto asegura que las cookies se incluyan automáticamente
});

console.log("HOST:", HOST);

// import axios from "axios";
// import { HOST } from "@/utils/constants";

// export const apiClient = axios.create({
//     baseURL: HOST,
// });
// console.log("HOST:", HOST);