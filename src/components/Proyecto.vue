<template>
  <h1>{{ titulo }}</h1>
</template>

<script>
export default {
  name: "Proyecto",
  props: {
    proyecto: Object,
  },
  setup(props) {
    const titulo = props.proyecto.titulo;
    return { titulo };
  },
};
</script>

<style></style>
