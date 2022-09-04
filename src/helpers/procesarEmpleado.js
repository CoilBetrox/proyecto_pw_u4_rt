import axios from "axios";

//metodos fachada a exportar
const obtenerEmpleado = async(id)=>{
    return await obtenerEmpleadoAxios(id);
}


const insertarEmpleado = async(body) => {
    return await insertarEmpleadoAxios(body)
}


const actualizarEmpleado = async(body) => {
    return await actualizarEmpleadoAxios(body)
}

const borrarEmpleado = async(id) => {
    return await borrarEmpleadoAxios(id)
}
 

//metodos de consumo del API
/*
const obtenerEmpleadoAPI = async(id)=>{
    const data = await fetch(`http://localhost:8085/APINomina/V1/empleados/${id}`).then(r => r.json())
    console.log(data)
    return data
}
*/

//get 
const obtenerEmpleadoAxios = async(id) => {
    const data = axios.get(`http://localhost:8085/APINomina/V1/empleados/${id}`).then(r => r.json())
    console.log(data)
    return data
}

//post
const insertarEmpleadoAxios = async(body1) => {
    //cabeceras
    const data = axios.post(`http://localhost:8085/APINomina/V1/empleados`, body1).then(r => r.data)
    console.log(data)
    return data
}


//put
const actualizarEmpleadoAxios = async(body) => {
    const headers ={
        'Access-Control-Allow-Origin':'*'
    }
    const data = axios.put(`http://localhost:8085/APINomina/V1/empleados`, body, headers).then(r => r.data)
    console.log(data)
    return data
}

//delete
const borrarEmpleadoAxios = async(id) => {
    const data = axios.delete(`http://localhost:8085/APINomina/V1/empleados/${id}`).then(r => r.data())
    console.log(data)
    return data
}

//export default obtenerEmpleado;
/*
export default obtenerEmpleado; 
insertarEmpleado; 
actualizarEmpleado; 
borrarEmpleado
*/

export default {obtenerEmpleado, insertarEmpleado, actualizarEmpleado, borrarEmpleado}