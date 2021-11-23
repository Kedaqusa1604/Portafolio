<template>
  <BasicLayout2>
    <div class="about">
      <div class="head">
        <h2 class="head__title">Acerca de este proyecto:</h2>
      </div>
      <div class="description">
        <div class="content">
          <h3 class="content__title">Descripción</h3>
          <p class="content__text">
            Sitio web desarrollado para fines profesionales con el objetivo de
            dar a conocer mi forma de trabajo y algunos datos relevantes que
            permitan a los interesados conocer acerca de mis habilidades y
            conocimientos.
          </p>
        </div>
      </div>
      <div class="tools">
        <div class="content">
          <span class="content__title">Herramientas utilizadas:</span>
          <ul class="content__list">
            <li class="content__list-item">
              <strong>Diseño: </strong>Adobe XD
            </li>
            <li class="content__list-item">
              <strong>Desarrollo: </strong> VueJS, Vue-Router, VueX
            </li>
            <li class="content__list-item">
              <strong>Estilos: </strong> CSS/ SASS
            </li>
            <li class="content__list-item">
              <strong>Recursos Adicionales: </strong>FontAwesome, Git
            </li>
          </ul>
        </div>
      </div>
      <div class="extra">
        <div class="content">
          <span class="content__title">Información adicional</span>
          <p class="content__text">
            Encuentra el repositorio de este proyecto en
            <a href="https://github.com/Kedaqusa1604/Portafolio" target="blank"
              >GitHub<fa :icon="['fab', 'github']" />
            </a>
          </p>
          <p class="content__text">
            <strong>Diseñado y desarrollado por: </strong> Kevin Daniel Quijano
            Sabogal © 2021
          </p>
        </div>
      </div>
      <div class="footer">
        <div class="content"></div>
      </div>
    </div>
  </BasicLayout2>
</template>

<script>
import BasicLayout2 from "../layouts/BasicLayout2.vue";
export default {
  name: "About",
  components: {
    BasicLayout2,
  },
};
</script>

<style lang="scss" scoped>
$azulTexto: #1f3c5d;
$beige: #f5dabb;
$blanco_2: #f5f5f5;
$blanco_1: #fff;
$gris: rgba(0, 0, 0, 0.2);
$blanco_3: #e6e9ed;

$azul_5: #162b42;
$azul_4: #234369;
$azul_3: #386ca8;
$azul_2: #4d95e8;
$azul_1: #1f3c5d;

strong {
  color: $azul_3;
}

a {
  color: $azul_2;
  &:hover {
    text-decoration: underline;
  }
}

li {
  list-style: none;
}

.about {
  width: 100%;
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
    &__title {
      height: 100%;
      color: $azulTexto;
      display: block;
      padding: 10px 20px;
    }
  }
}
.content {
  width: 100%;
  max-width: 1000px;
  margin: auto;
  padding: 20px;
  &__title {
    color: $azul_3;
    font-weight: bold;
    font-size: 25px;
    display: inline-block;
    // background: red;
    width: 100%;
    // text-align: center;
    padding: 10px;
    border-bottom: 1px solid $gris;
    margin-bottom: 10px;
  }
  &__text {
    width: 100%;
    // background: red;
    text-align: justify;
  }
}
</style>
