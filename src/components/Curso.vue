<template>
  <div class="card">
    <h2>
      <a :href="link" target="blank" class="header">{{ nombre }}</a>
    </h2>

    <p><strong>Plataforma: </strong>{{ plataforma }}</p>
    <p><strong>Duración: </strong>{{ duracion + " horas" }}</p>
    <p v-if="finalizado"><strong>Estado: </strong>Finalizado</p>
    <p v-else><strong>Estado: </strong>En curso</p>
    <p><strong>Inicio: </strong>{{ inicio }}</p>
    <template v-if="finalizado">
      <p><strong>Fin: </strong>{{ fin }}</p>
    </template>
  </div>
</template>

<script>
export default {
  name: "Curso",
  props: {
    curso: Object,
  },
  setup(props) {
    const imagen = props.curso.imagen;
    const link = props.curso.link;
    const nombre = props.curso.nombre;
    const plataforma = props.curso.plataforma;
    const duracion = props.curso.duracion;
    const finalizado = props.curso.finalizado;
    const inicio = props.curso.inicio;
    const fin = props.curso.fin;
    return {
      imagen,
      link,
      nombre,
      plataforma,
      duracion,
      finalizado,
      inicio,
      fin,
    };
  },
};
</script>

<style lang="scss" scoped>
$azulFondo: #202f4e;
$azulTexto: #1f3c5d;
$beige: #f5dabb;
$blanco_2: #f5f5f5;
$blanco_1: #fff;
$gris: rgba(0, 0, 0, 0.2);
$gris_Oscuro: rgba(0, 0, 0, 0.5);
$amarillo: #f7df1e;
$verde: #41b883;
$rojo: #c3002f;
.card {
  width: 250px;
  min-height: 200px;
  background: $blanco_1;
  margin: 10px 20px;
  padding: 20px 10px;
  border: 1px solid $gris;
  h2 {
    display: inline-block;
    text-align: center;
    width: 100%;
    padding: 5px 0;
    border-bottom: 1px solid $gris;
    font-size: 17px;
    a {
      color: $azulTexto;
      &:hover {
        color: $gris_Oscuro;
      }
    }
  }
  p {
    strong {
      color: $azulTexto;
    }
  }
}
</style>
