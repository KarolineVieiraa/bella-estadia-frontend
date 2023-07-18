import { useState } from 'react';
import './App.css';
import { Card } from './components/card/card';
import { useHospedeData } from './hooks/useHospedeData';
import { CreateModal } from './create-modal/create-modal';
import pesquisa from "./imagens/icons8-barra-de-pesquisa-80 (1).png";
import email from "./imagens/icons8-nova-mensagem-50.png";
import user from "./imagens/icons8-usuário-homem-com-círculo-50.png";
import principal from "./imagens/Cobre_Casa_novo.png"

function App() {
  const {data} = useHospedeData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () =>{
    setIsModalOpen(prev => !prev)
  }
  
  return (
  <div  className="titulo">
    <div className='icones'>
    <img src={pesquisa} alt="logohotel" className='pesquisa' />
    <img src={principal} alt="logohotel" className='principal'/>
    <img src={user} alt="logohotel" className='user' />
    </div>
      <div className = "container">
      <div className="card-grid">
        {data?.map(hospedeData => 
          <Card 
          nome={hospedeData.nome} 
          email={hospedeData.email} 
          image={hospedeData.image}  
          comanda={hospedeData.comanda}
          />
        )}
        
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
      <button onClick={handleOpenModal}>Novo Hospede</button>

    </div>
    <footer>
      <img src={email} className='email'/>
      <p>CONTATO: bella_estadia@gmail.com</p>
    </footer>
  </div>
  )
}

export default App
