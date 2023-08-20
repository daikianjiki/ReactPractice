import axios from "axios";
import { SetStateAction, useState } from "react";

export default function useHttp():any {
    let [errorMessage, setErrorMessage] = useState(null)

    function sendHttpRequest(url: string, method: string, body: any | null, action: (data:any)=>void):any {
        const axiosInstance = axios.create()

        const methods: any = {
            get: axiosInstance.get,
            post: axiosInstance.post,
            delete: axiosInstance.delete
        }

        methods[method.toLowerCase()](url, body)
        .then((res: { data: any; }) => {
            console.log(res.data)
            action(res.data)
        })
        .catch((error: { message: SetStateAction<null>; }) => {
            setErrorMessage(error.message)
        })
    }

    return [errorMessage, sendHttpRequest]
}