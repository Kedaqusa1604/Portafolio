<template>
  <div class="card">
    <div class="card-image">
      <img :src="proyecto.image" :alt="proyecto.image" />
    </div>
    <h2 class="card-title">{{ titulo }}</h2>
    <p class="card-description">{{ descripcion }}</p>
    <button class="card-button" @click="openDetails">Ver detalle</button>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "Proyecto",
  props: {
    proyecto: Object,
  },
  setup(props) {
    const proyecto = props.proyecto;
    const titulo = proyecto.title;
    const descripcion = proyecto.description;
    const router = useRouter();

    const openDetails = () => {
      router.push({
        name: "Proyecto",
        params: {
          id: proyecto.id,
        },
      });
    };

    return { titulo, proyecto, router, openDetails, descripcion };
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

$azul_5: #162b42;
$azul_4: #234369;
$azul_3: #386ca8;
$azul_2: #4d95e8;
$azul_1: #1f3c5d;

.card {
  width: 250px;
  min-height: 200px;
  background: $blanco_1;
  margin: 10px 20px;
  padding: 20px 10px;
  padding-top: 10px;
  border: 1px solid $gris;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: -10px;
    left: -10px;
    background: $blanco_2;
    z-index: -1;
  }
  &-image {
    width: 100%;
    img {
      width: inherit;
    }
  }
  &-title {
    display: inline-block;
    text-align: center;
    width: 100%;
    padding: 5px 0;
    border-bottom: 1px solid $gris;
    font-size: 17px;
    color: $azulTexto;
    margin: 10px 0;
  }
  &-description {
    text-align: justify;
    margin-bottom: 40px;
  }
  &-button {
    width: 50%;
    height: 35px;
    color: $blanco_2;
    background: $azul_2;
    border: 1px solid $gris;
    border-radius: 5px;
    outline: none;
    position: absolute;
    bottom: 10px;
    align-self: center;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 0;
      background: $gris;
      transition: all 0.2s ease;
      border-radius: inherit;
    }
    &:hover {
      cursor: pointer;
    }
    &:hover::before {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
