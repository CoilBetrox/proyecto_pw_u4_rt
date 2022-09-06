<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>

/*
import obtenerEmpleado from '@/helpers/procesarEmpleado'
import borrarEmpleado from '@/helpers/procesarEmpleado'
import insertarEmpleado from '@/helpers/procesarEmpleado'
import actualizarEmpleado from '@/helpers/procesarEmpleado'
*/

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    /*
    async buscar(id){
      await obtenerEmpleado(id)
    },
    async borrar(id){
      await borrarEmpleado(id)
    },
    async actualizar(body){
      await actualizarEmpleado(body)
    },
    async insertar(body){
      await insertarEmpleado(body)
    }
    */
  },
  mounted(){
    /*
    this.buscar(2);
    const empl =
    {
      'id': 4,
      'nombre': 'name4',
      'apellido': 'ape4',
      'fechaNacimiento': '2004-12-01T00:00:00',
      'salario': 350
    }
    this.insertar(empl);

    const empl2 =
    {
      'id': 2,
      'nombre': 'namee2',
      'apellido': 'apee2',
      'fechaNacimiento': '2004-12-01T00:00:00',
      'salario': 3502
    }
    this.actualizar(empl2);

    this.borrar();
    */
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
