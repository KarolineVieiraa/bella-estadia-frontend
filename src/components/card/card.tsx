import "./card.css"

interface CardProps{
comanda:number,
nome:string,
image:string,
email: string
}

export function Card({comanda, nome,image,email}: CardProps){
    return(
        <div className = "card">
            <img src={image}/>
            <h2>{nome}</h2>
            <p><b>Email:</b>{email}</p>
            <p><b>Comanda:</b>{comanda}</p> 
        </div>
    )
}