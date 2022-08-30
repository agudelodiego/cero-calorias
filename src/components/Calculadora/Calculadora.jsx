import React,{useState} from "react";
import styled from "styled-components";
import Carrusel from "../Carrusel/Carrusel.jsx";




//*----------------------------------------------------------------
// Contenedro de la calculadora 
const Calculadora_container = styled.div`
  width: 95%;

  @media screen and (min-width: 900px){
    width: 40rem;
  }
`;
//*----------------------------------------------------------------




const Calculadora = (props)=>{

  // Estados de la calculadora 
  const [edad,setEdad] = useState("");
  const [altura,setAltura] = useState("");
  const [peso,setPeso] = useState("");
  const [sexo,setSexo] = useState("");
  const [actividad,setActividad] = useState("");
  const [error,setError] = useState(null);
  const [resultado,setResultado] = useState(null);

  // Metodos que se encargan de mantener actualizado el estado depenedido de las acciones del usuario
  const actualizar_edad = (event)=>{
    setEdad(event.currentTarget.value);
  }
  const actualizar_altura = (event)=>{
    setAltura(event.currentTarget.value);
  }
  const actualizar_peso = (event)=>{
    setPeso(event.currentTarget.value);
  }
  const actualizar_sexo = (event)=>{
    setSexo(event.currentTarget.value);;
  }
  const actualizar_actividad = (event)=>{
    setActividad(event.currentTarget.value);
  }


  // Metodo encargado de validar la informacion del usuario
  const validar_informacion = ()=>{
    if((Number(edad) < 15)||(Number(edad) > 80)){
      setError("La edad ingresada no esta dentro del rango permitido (15-80 años).");
    }
    else if((Number(altura) < 50) || (Number(altura) > 206)){
      setError("La altura ingresa no esta dentro del rango permitido (50-270 centimetros).");
    }
    else if((Number(peso) < 30) || (Number(peso) > 200)){
      setError("El peso introducido no esta dentro del rango establecido (40-200 kg)");
    }
    else if(sexo == ""){
      setError("Por favor seleccione un valor para el sexo");
    }
    else if(actividad == ""){
      setError("Por favor seleccione valor para el nivel de actividad fisica");
    }
    else{
      setError(null);
      if(sexo == "M"){
        //Formula hombres: valor actividad x (10 x peso en kg) + (6,25 × altura en cm) - (5 × edad en años) + 5
        let calorias_necesarias = Number(actividad) * (10*Number(peso)) + (6.25*Number(altura)) - (5*Number(edad)) + 5;
        let poblacion;
        if((Number(edad) < 15) && (Number(edad) > 29)){
          poblacion = "Jovenes";
        }
        else if((Number(edad) >= 30) && (Number(edad) < 59)){
          poblacion = "Adultos";
        }
        else if(Number(edad) >= 60){
          poblacion = "Adultos mayores";
        }
        let mensaje = `
          El paciente ${props.nombre} identificado con ${props.tipo} numero ${props.id}, requiere consumir ${calorias_necesarias} kcal al dia para el sostenimiento de su TBM.

          Grupo poblacional: ${poblacion} 
        `;
        setResultado(mensaje);
      }
      else {
        //Formula mujeres: valor actividad x (10 x peso en kg) + (6,25 × altura en cm) - (5 × edad en años) - 161
        let calorias_necesarias = Number(actividad) * (10*Number(peso)) + (6.25*Number(altura)) - (5*Number(edad)) + 161;
        let poblacion;
        if((Number(edad) < 15) && (Number(edad) > 29)){
          poblacion = "Jovenes";
        }
        else if((Number(edad) >= 30) && (Number(edad) < 59)){
          poblacion = "Adultos";
        }
        else if(Number(edad) >= 60){
          poblacion = "Adultos mayores";
        }
        let mensaje = `
          La paciente ${props.nombre} identificada con ${props.tipo} numero ${props.id}, requiere consumir ${calorias_necesarias} kcal al dia para el sostenimiento de su TBM.

          Grupo poblacional: ${poblacion} 
        `;
        setResultado(mensaje);
      }
    }
  }

  return (
    <Calculadora_container className="card">

      {/* Componente carrusel de imagenes automatico */}
      <Carrusel className="card-img-top" />


      <div className="card-body p-5">
        <h5 className="card-title text-center">Cero calorias</h5>
        <p className="card-text"><span className="text-danger">¡Hola {props.nombre}! </span>Queremos mencionarte que para calcular la cantidad de calorias que debes consumir es necesario que ingreses algunos datos</p>

        {/* Formulario */}
          <div className="form-floating mb-3">
            <input onChange={actualizar_edad} value={edad} type="number" className="form-control" id="floatingInput" placeholder="Introduce tu edad" />
            <label htmlFor="floatingInput">Edad</label>
          </div>
          <div className="form-floating mb-3">
            <input onChange={actualizar_altura} value={altura} type="number" className="form-control" id="floatingPassword" placeholder="Introduce tu estatura en metros" />
            <label htmlFor="floatingPassword">Altura en centimetros</label>
          </div>
          <div className="form-floating mb-3">
            <input onChange={actualizar_peso} value={peso} type="number" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Peso en kg</label>
          </div>
          <h3 className="fs-5 mt-4">
            Sexo
          </h3>
          <select onChange={actualizar_sexo} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option className="fs-6" defaultValue>Seleccione una opción</option>
            <option className="fs-6" value="M">Masculino</option>
            <option className="fs-6" value="F">Femenino</option>
          </select>

          <h3 className="fs-5 mt-4">
            Nivel de actividad fisica
          </h3>
          <select onChange={actualizar_actividad} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option className="fs-6" defaultValue>Seleccione una opción</option>
            <option className="fs-6"value="1.2">Poco o ningún ejercicio</option>
            <option className="fs-6"value="1.375">Ejercicio ligero (1-3 días a la semana)</option>
            <option className="fs-6"value="1.55">Ejercicio moderado (3-5 días a la semana)</option>
            <option className="fs-6"value="1.725">Ejercicio fuerte (6-7 días a la semana)</option>
            <option className="fs-6"value="1.9">Ejercicio muy fuerte (dos veces al día, entrenamientos muy duros)</option>
          </select>
          {error
            ? <h3 className="fs-5 mt-3 text-center text-danger">{error}</h3>
            : <h3 className="fs-5 mt-3 text-center text-success">{resultado}</h3>
          }
        <div className="w-100 mt-5 d-flex justify-content-center">
          <button className="btn btn-danger" onClick={validar_informacion}>Calcular TBM</button>
        </div>
      </div>
    </Calculadora_container>
  )
}
export default Calculadora;