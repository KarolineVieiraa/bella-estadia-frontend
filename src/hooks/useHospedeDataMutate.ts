import axios, {AxiosPromise} from "axios"
import { HospedeData } from "../interface/HospedeData";
import { useMutation, useQueryClient} from "@tanstack/react-query";

const API_URL="http://localhost:8080";

const postData = async(data:HospedeData):AxiosPromise<any> => {
    const response = axios.post(API_URL + "/hospede", data)
    return response;
}

export function useHospedeDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry:2,
        onSuccess:() => {
            queryClient.invalidateQueries(["hospede-data"])
        }
    })

    return mutate

}