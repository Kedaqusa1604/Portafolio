<template>
  <div class="contenido">
    <div class="head" id="Portafolio">
      <h2>Portafolio</h2>
    </div>
    <div class="container blanco1">
      <div class="contents">
        <h2>Mis proyectos realizados</h2>
        <template v-if="proyectos.length === 0">
          <div class="message">
            <div class="icons">
              <fa :icon="['fas', 'cat']" size="5x" class="cat" />
              <fa :icon="['fas', 'comment-dots']" size="3x" />
            </div>
            <span>Vaya... al parecer no hay proyectos... por ahora</span>
          </div>
        </template>
        <template v-else>
          <ListaProyectos :proyectos="proyectos" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import ListaProyectos from "../ListaProyectos.vue";
export default {
  name: "Portafolio",
  setup() {
    const proyectos = [
      //   {
      //     titulo: "Lorem Ipsum",
      //     descripcion: "Lorem Ipsum",
      //     fecha: new Date(),
      //   },
      //   {
      //     titulo: "Lorem Ipsum 2",
      //     descripcion: "Lorem Ipsum",
      //     fecha: new Date(),
      //   },
    ];
    return {
      proyectos,
    };
  },
  components: {
    ListaProyectos,
  },
};
</script>

<style lang="scss" scoped>
$azulTexto: #1f3c5d;
$beige: #f5dabb;
$blanco_2: #f5f5f5;
$blanco_1: #fff;
$blanco_3: #e6e9ed;
$gris: rgba(0, 0, 0, 0.2);
$azulFondo: #202f4e;

// azul
$azul_5: #162b42;
$azul_4: #234369;
$azul_3: #386ca8;
$azul_2: #4d95e8;
$azul_1: #1f3c5d;

.head {
  width: 100%;
  background: $blanco_3;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  border-bottom: 3px solid $azul_4;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 30%;
    width: 35%;
    height: 3px;
    background: $azul_3;
  }
  &:after {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 65%;
    width: 35%;
    height: 3px;
    background: $azul_2;
  }
  h2 {
    height: 100%;
    color: $azulTexto;
    display: block;
    padding: 10px 20px;
  }
}
.blanco1 {
  background: $blanco_1;
}
.container {
  width: 100%;
  padding: 50px 20px;
}

.contents {
  width: 100%;
  max-width: 1000px;
  margin: auto;
  position: relative;
  z-index: 1;
  h2 {
    color: $azulTexto;
    display: block;
    text-align: center;
    border-bottom: 1px solid $gris;
    padding-bottom: 10px;
  }
  &.flex {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-wrap: wrap;
    .description {
      margin: 20px 20px;
      max-width: 40%;
      min-width: 400px;
    }
  }
}

.message {
  width: 100%;
  //   background: $beige;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ccc;
  span {
    font-size: 17px;
    font-weight: bold;
    text-align: center;
  }
  .icons {
    display: flex;
    margin-bottom: 10px;
    .cat {
      margin-right: 7px;
    }
  }
}
</style>
