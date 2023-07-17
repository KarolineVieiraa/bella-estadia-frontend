import { useEffect, useState } from "react"
import { useHospedeDataMutate } from "../hooks/useHospedeDataMutate"
import { HospedeData } from "../interface/HospedeData"
import "./modal.css"

interface InputProps{
    label:string,
    value: string|number,
    updateValue(value:any):void

}

interface ModalProps{
    closeModal():void
}

const Input = ({label, value, updateValue}:InputProps) => {
    return(
        <>
            <label>{label}</label> 
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )

}

export function CreateModal({closeModal}:ModalProps){
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState("");
    const [comanda, setComanda] = useState(0);
    const {mutate, isSuccess, isLoading}= useHospedeDataMutate();

    const submit =() =>{
        const hospedeData: HospedeData = {
            nome,
            email,
            image,
            comanda
        }

        mutate(hospedeData)
    }
    useEffect(() =>{
        if(!isSuccess) return
        closeModal
    }, [isSuccess])
    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo hospede</h2>
                <form className="input-container">
                    <Input label="Nome do hospede:" value={nome} updateValue={setNome}/>
                    <Input label="Email:" value={email} updateValue={setEmail}/>
                    <Input label="Foto de identificação:" value={image} updateValue={setImage}/>
                    <Input label="Quarto:" value={comanda} updateValue={setComanda}/>

                </form>
                <button onClick={submit} className="btn-secondary">
                    {isLoading ? "Adicionando..." : "Adicionar"}
                </button>
            </div>
        
        </div>
    )
}