import { useState } from 'react';
import './App.css'
import { Card } from './components/card/card'
import { useHospedeData } from './hooks/useHospedeData';
import { CreateModal } from './create-modal/create-modal';

function App() {
  const {data} = useHospedeData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () =>{
    setIsModalOpen(prev => !prev)
  }
  return (
    <div className = "container">
      <h1>Bella Estadia</h1>
      <div className="card-grid">
        {data?.map(hospedeData => 
          <Card 
          comanda={hospedeData.comanda} 
          nome={hospedeData.nome} 
          email={hospedeData.email} 
          image={hospedeData.image}
          />
        )}
        
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
      <button onClick={handleOpenModal}>Novo Hospede</button>

    </div>
  )
}

export default App
