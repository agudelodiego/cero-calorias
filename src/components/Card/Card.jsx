import React,{useState} from "react";
import Fitness from "../../assets/dieta.png";
import styled,{keyframes} from "styled-components";
import cargando from "../../assets/cargando.png";



//*----------------------------------------------------------------
// Estilos para la card
const CardFitness = styled.div`
  width: 90%;

  @media screen and (min-width: 600px){
    width: 28rem;
  }
`;
//*----------------------------------------------------------------





//*----------------------------------------------------------------
const Img = styled.img`
  width: 50%;
  height: auto;
  margin: auto;
`;
//*----------------------------------------------------------------




//*----------------------------------------------------------------
// Animacion de carga
const animacion_cargar = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;
const Cargando = styled.img`
  width: 2.2rem;
  height: auto;
  transform: rotate(0deg);
  animation: ${animacion_cargar} 1s ease-in-out infinite;

`;
//*----------------------------------------------------------------

const Card = (props)=>{

  // Estados de los inputs del usuario
  const [nombre,setNombre] = useState("");
  const [id,setId] = useState("");
  const [tipo,setTipo] = useState("");
  const [error,setError] = useState("");
  const [mensaje,setMensaje] = useState("");
  const [exitoso,setExitoso] = useState(false);

  // Definimos los metodos que cambiaran el estado de los inputs
  const change_nombre = (event) =>{
    setNombre(event.currentTarget.value);
  }
  const change_id = (event) =>{
    setId(event.currentTarget.value);
  }
  const change_tipo = (event) =>{
    setTipo(event.currentTarget.value);
  }

  // Metodo que se encarga de validar la informacion antes de actualizar el estado de la aplicacion
  const validadar_info = ()=>{
    if(nombre == ""){
      setError("Por favor rellena el campo de nombre");
    }
    else if(id == ""){
      setError("Por favor rellena el campo documento de identidad");
    }
    else if(isNaN(id)){
      setError("El campo documento de identidad solo puede contener numeros");
    }
    else if(tipo == ""){
      setError("Selecciona tu tipo de documento");
    }
    else{
      setError("");
      setMensaje(`¡Que genial ${nombre}, la información fue validada de manera exitosa, puedes acceder al sistema! Por favor espera`);
      setExitoso(true);
      setTimeout(()=>{
        // Forzamos a desaparecer la ventana modal
        document.getElementById("close").click();
        // Actualizamos el estado de la aplicacion
        props.actualizar(nombre,id,tipo);
      }, 4000);
    }
  }


  return (
    <>
      <div className="modal fade" id="informacionUsr" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Informacion del usuario</h5>
              <button type="button" id="close" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="form-floating mb-3">
                <input type="texr" className="form-control" id="floatingInput" placeholder="name@example.com" value={nombre} onChange={change_nombre} />
                <label htmlFor="floatingInput">Introduce tu nombre</label>
              </div>
              <div className="form-floating">
                <input type="text" className="form-control" id="floatingPassword" placeholder="Password" value={id} onChange={change_id} />
                <label htmlFor="floatingPassword">Numero de documento</label>
              </div>

              <h2 className="fs-5 mb-3 mt-4">Selecciona tu tipo de documento</h2>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="TI" onChange={change_tipo} />
                <label className="form-check-label TI" htmlFor="flexRadioDefault1" value="TI">
                  Tarjeta de identidad
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="CC" onChange={change_tipo} />
                <label className="form-check-label CC" htmlFor="flexRadioDefault2">
                  Cedula de ciudadania
                </label>
              </div>
              <div className="w-100 d-flex justify-content-center">
                <p className="text-center text-danger mt-5">
                  {error}
                </p>
                <p className="text-center text-success mt-5">
                  {mensaje}
                </p>
              </div>
              { exitoso &&
                <div className="d-flex justify-content-center">
                  <Cargando src={cargando} alt="Imagen de cargando" />
                </div>
              }
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary"  onClick={validadar_info}>Enviar infromación</button>
            </div>
          </div>
        </div>
      </div>

      <CardFitness className="card">
        <Img src={Fitness} className="card-img-top" alt="imagen de dieta fitness" />
        <div className="card-body p-4">
          <h5 className="card-title">Cero calorias</h5>
          <p className="card-text">
            Hola querido usuario. Te comentamos que cero calorias es una aplicación que sirve para calcular la cantidad de calorias que tu necesitas para mantener tu TBM(Tasa Metabolica Basal), pero antes es necesario que ingreses cierta información personal que es requerida.
          </p>
          <div className="w-100 d-flex justify-content-center">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#informacionUsr">ingresar infromacion</button>
          </div>
        </div>
      </CardFitness>
    </>
  );
};
export default Card;