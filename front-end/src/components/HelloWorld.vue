<template>
    <div>
      <h1>{{ message }}</h1>
    </div>
  </template>
  
  <script>
  import { fetchHello } from '../services/api';
  
  export default {
    data() {
      return {
        message: '',
      };
    },
    async mounted() {
      this.message = await fetchHello();
    },
  };
  </script>
  