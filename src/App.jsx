import React,{useState} from "react";
import Card from "./components/Card/Card.jsx";
import Calculadora from "./components/Calculadora/Calculadora.jsx";



//*----------------------------------------------------------------
function App() {

  // Estado de las variables de la aplicacion
  const [nombre,setNombre] = useState(null);
  const [id,setId] = useState(null);
  const [tipo,setTipo] = useState(null);
  const [validado,setValidado] = useState(false);

  // Evento que ejecutara el componente card cuando valide la informacion del usuario con el fin de actualizar el estado de la aplicacion
  const actualizar = (nombre,id,tipo) =>{
    setNombre(nombre);
    setId(id);
    setTipo(tipo);
    setValidado(true);
  }

  return (
    <div className="container-fluid px-2 py-4 d-flex justify-content-center align-items-center">
      {validado 
        ? <Calculadora nombre={nombre} id={id} tipo={tipo} />
        : <Card actualizar={actualizar} />
      }
    </div>
  )
}

export default App;
//*----------------------------------------------------------------