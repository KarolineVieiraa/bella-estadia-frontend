import axios, {AxiosPromise} from "axios"
import { HospedeData } from "../interface/HospedeData";
import { useQuery } from "@tanstack/react-query";

const API_URL="http://localhost:8080";

const fetchData = async():AxiosPromise<HospedeData[]> => {
    const response = axios.get(API_URL + "/hospede")
    return response;
}

export function useHospedeData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey:["hospede-data"],
        retry:2
    })
    return {
        ...query,
        data:query.data?.data
    }

}