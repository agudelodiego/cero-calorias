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
  return (
    <Calculadora_container className="card">

      {/* Componente carrusel de imagenes automatico */}
      <Carrusel className="card-img-top" />


      <div className="card-body p-5">
        <h5 className="card-title text-center">Cero calorias</h5>
        <p className="card-text"><span className="text-danger">¡Hola {props.nombre}! </span>Queremos mencionarte que para calcular la cantidad de calorias que debes consumir es necesario que ingreses algunos datos</p>

        {/* Formulario */}
          <div className="form-floating mb-3">
            <input type="number" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Edad</label>
          </div>
          <div className="form-floating mb-3">
            <input type="number" className="form-control" id="floatingPassword" placeholder="Password" />
            <label for="floatingPassword">Altura</label>
          </div>
          <div className="form-floating mb-3">
            <input type="number" className="form-control" id="floatingPassword" placeholder="Password" />
            <label for="floatingPassword">Peso</label>
          </div>
          <h3 className="fs-5 mt-4">
            Sexo
          </h3>
          <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            {/* <option selected></option> */}
            <option className="fs-6" value="Masculino">Masculido</option>
            <option className="fs-6" value="Femenino">Femenino</option>
          </select>

          <h3 className="fs-5 mt-4">
            Nivel de actividad fisica
          </h3>
          <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            {/* <option selected></option> */}
            <option className="f-6"value="1.2">Poco o ningún ejercicio</option>
            <option className="f-6"value="1.375">Ejercicio ligero (1-3 días a la semana)</option>
            <option className="f-6"value="1.55">Ejercicio moderado (3-5 días a la semana)</option>
            <option className="f-6"value="1.725">Ejercicio fuerte (6-7 días a la semana)</option>
            <option className="f-6"value="1.9">Ejercicio muy fuerte (dos veces al día, entrenamientos muy duros)</option>
          </select>

        <div className="w-100 mt-5 d-flex justify-content-center">
          <button href="#" className="btn btn-danger">Calcular TBM</button>
        </div>
      </div>
    </Calculadora_container>
  )
}
export default Calculadora;