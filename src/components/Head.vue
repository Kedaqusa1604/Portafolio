<template>
  <Menu class="menu" :class="{ scroll: stateScroll }" />
  <div class="head">
    <div class="contain">
      <div class="contain__info">
        <h1>Kevin Daniel Quijano S.</h1>
        <h2>Desarrollador web front end</h2>
      </div>
      <div class="contain__imagen">
        <img src="../img/logo.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "./Menu.vue";
import { onMounted, ref } from "vue";
export default {
  name: "Head",
  components: {
    Menu,
  },
  setup() {
    onMounted(() => {
      window.addEventListener("scroll", detectScroll);
    });
    const stateScroll = ref(false);
    const detectScroll = () => {
      if (window.scrollY > 50) {
        stateScroll.value = true;
      } else {
        stateScroll.value = false;
      }
    };
    return {
      detectScroll,
      stateScroll,
    };
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
$amarilloJS: #f7df1e;
$naranjaHTML: #e44d26;
$azulCSS: #006bc0;
$verdeVUE: #41b883;
$naranjaGIT: #f05033;

// azul
$azul_5: #162b42;
$azul_4: #234369;
$azul_3: #386ca8;
$azul_2: #4d95e8;
$azul_1: #1f3c5d;

.scroll {
  background: $azul_1;
}

.menu {
  transition: all 0.7s linear;
}

.contain {
  width: 100%;
  max-width: 1000px;
  height: 100%;
  // height: 1000px;
  // min-height: 400px;
  padding: 20px 20px;
  margin: auto;
  position: relative;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  grid-gap: 10px;
  overflow: visible;

  &__info {
    // background: blue;
    // background: red;
    grid-column: 1/5;
    grid-row: 1/-1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 10px 20px;
    align-items: center;
    h1 {
      color: $blanco_2;
      display: block;
      position: relative;
      padding-bottom: 10px;
      border-bottom: 2px solid $azul_2;
      // background: chartreuse;
      width: fit-content;
      margin-bottom: 0;

      &:before {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 40%;
        height: 2px;
        background: $blanco_2;
      }
      &:after {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 40%;
        width: 30%;
        height: 2px;
        background: $azul_3;
      }
    }
    h2 {
      color: $blanco_3;
      font-size: 20px;
      margin-top: 5px;
    }
  }
  &__imagen {
    // background: red;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: 5/-1;
    grid-row: 1/-1;
    img {
      width: 100%;
      height: auto;
    }
  }
}

.head {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  max-height: 800px;
  background: $azul_5;
  // background: #005c97; /* fallback for old browsers */
  // background: -webkit-linear-gradient(
  //   to bottom,
  //   #363795,
  //   #005c97
  // ); /* Chrome 10-25, Safari 5.1-6 */
  // background: linear-gradient(
  //   to top,
  //   #363795,
  //   #005c97
  // ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  // background-image: linear-gradient(125deg, #30cfd0 0%, #330867 100%);
  background-color: #0cbaba;
  background-image: linear-gradient(210deg, #0cbaba 0%, #380036 74%);

  z-index: -3;

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.2);
    z-index: -1;
  }
}

@media screen and(max-width:992px) {
  .contain {
    &__imagen {
      // background: red;
      grid-column: 6/-1;
    }
    &__info {
      // background: blue;
      grid-column: 1/6;
    }
  }
}
@media screen and(max-width:715px) {
  .contain {
    &__imagen {
      grid-column: 1/-1;
      grid-row: 2/9;
      width: 100%;
      img {
        height: 100%;
        // width: 100%;
        width: auto;
        // background: greenyellow;
      }
    }
    &__info {
      grid-column: 1/-1;
      grid-row: 8/-1;
    }
  }
  .head {
    min-height: 0;
    height: 500px;
  }
}

@media screen and(max-width:372px) {
  .contain {
    &__info {
      padding: 0;
    }
  }
}

@media screen and(max-width:340px) {
  .contain {
    &__info {
      h1 {
        text-align: center;
      }
    }
  }
}
</style>
