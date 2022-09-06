<template>
  <input v-model="id" type="text"/>
  <input v-model="nombre" type="text"/>
  <button @click="consultar">Consultar</button>
  <button @click="insertar">Insertar</button>
  <button @click="actualizar">Actualizr</button>
  <button @click="eliminar">Eliminar</button>
</template>

<script>
import {
  obtenerEmpleado,insertarEmpleado,actualizarEmpleado,borrarEmpleado} from "../helpers/procesarEmpleado.js";

export default {
  data() {
    return {
      id: null,
      nombre: null,
    }
  },
  methods: {
    async consultar() {
      const respnse = await obtenerEmpleado(this.id);
      console.log(respnse);
    },
    async eliminar() {
      const respnse = await borrarEmpleado(this.id);
      console.log(respnse);
    },
    async actualizar() {
      const empl = {
        'id': this.id,
        'nombre': this.nombre,
        'apellido': "ape4",
        'fechaNacimiento': "2004-12-01T00:00:00",
        'salario': 350,
      };
      const respnse = await actualizarEmpleado(empl);
      console.log(respnse);
    },
    async insertar() {
      const empl = {
        'id': this.id,
        'nombre': this.nombre,
        'apellido': "ape4",
        'fechaNacimiento': "2004-12-01T00:00:00",
        'salario': 350,
      };
      const respnse = await insertarEmpleado(empl);
      console.log(respnse);
    },
  },
};
</script>

<style>
</style>