<template>
  <BasicLayout>
    <div class="head">
      <div class="contain">
        <div class="info">
          <div class="imagen">
            <div class="logo uno">
              <fa class="js" :icon="['fab', 'js-square']" size="2x" />
            </div>
            <div class="logo dos">
              <fa class="html" :icon="['fab', 'html5']" size="2x" />
            </div>
            <div class="logo tres">
              <fa class="css" :icon="['fab', 'css3-alt']" size="2x" />
            </div>
            <div class="logo cuatro">
              <fa class="vue" :icon="['fab', 'vuejs']" size="2x" />
            </div>
            <div class="logo cinco">
              <fa class="git" :icon="['fab', 'git-alt']" size="2x" />
            </div>
          </div>
          <h1>Kevin Daniel Quijano S.</h1>
          <h2>Desarrollador web front end</h2>
        </div>
      </div>
    </div>
    <div id="sobre_mi"></div>
    <SobreMi />
    <a name="portafolio"></a>
    <Portafolio />
    <a name="contacto"></a>
    <Contacto />
  </BasicLayout>
</template>

<script>
import BasicLayout from "../layouts/BasicLayout.vue";
import SobreMi from "../components/sections/SobreMi.vue";
import Contacto from "../components/sections/Contacto.vue";
import Portafolio from "../components/sections/Portafolio.vue";
export default {
  name: "Home",
  components: {
    BasicLayout,
    SobreMi,
    Contacto,
    Portafolio,
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

.contain {
  width: 100%;
  max-width: 1000px;
  height: 100%;
  padding: 20px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
  position: relative;
  .info {
    align-self: flex-end;
    h1 {
      color: $blanco_2;
      display: block;
      position: relative;
      padding-bottom: 10px;
      border-bottom: 2px solid $azul_2;

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
      color: $azul_2;
      font-size: 20px;
    }
    // width: fit-content;
    // text-align: center;
    // color: $azulTexto;
    // border: 1px solid $azulTexto;
    // padding: 10px 20px;
  }
}

.head {
  position: relative;
  width: 100%;
  // height: 100vh;
  height: 400px;
  background: $azul_5;
  background: linear-gradient($azul_4 0%, $azul_5 100%);

  z-index: -3;

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: #122235;
    clip-path: polygon(0% 15%, 100% 100%, 100% 100%, 0% 100%);
    z-index: -1;
  }
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: rgba($blanco_2, 0.2);
    clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 100%);
    z-index: -2;
  }
}

.imagen {
  // margin: 20px;
  width: 100%;
  // max-width: 600px;
  align-self: center;
  height: 100%;
  max-height: 300px;
  // padding: 50px 0;
  display: flex;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  // background: cyan;
  // position: relative;
  // right: 0;
  // bottom: 0px;
}

.logo {
  width: 50px;
  height: 50px;
  background: $azul_4;
  margin: 5px;
  padding: 5px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.js {
  color: $amarilloJS;
}

.html {
  color: $naranjaHTML;
}
.css {
  color: $azulCSS;
}
.vue {
  color: $verdeVUE;
}
.git {
  color: $naranjaGIT;
}
// .uno {
//   width: 150px;
//   height: 150px;
//   position: absolute;
//   top: 0;
//   left: 0;
// }
// .dos {
//   width: 100px;
//   height: 100px;
//   position: absolute;
//   top: 15%;
//   left: 37%;
// }
// .tres {
//   width: 75px;
//   height: 75px;
//   position: absolute;
//   top: 35%;
//   left: 60%;
// }
// .cuatro {
//   width: 65px;
//   height: 65px;
//   position: absolute;
//   top: 55%;
//   left: 75%;
// }
// .cinco {
//   width: 50px;
//   height: 50px;
//   position: absolute;
//   bottom: 0;
//   right: 0;
// }

@media screen and (max-width: 720px) {
  .head {
    height: 400px;
  }
  // .info {
  //   width: 100%;
  //   justify-content: center;
  //   align-items: center;
  //   h1 {
  //     width: fit-content;
  //     align-self: center;
  //   }
  // }
}
@media screen and (max-width: 690px) {
  .info {
    width: 100%;
    justify-content: center;
    align-items: center;
    h1 {
      width: fit-content;
      align-self: center;
    }
  }
}
</style>
