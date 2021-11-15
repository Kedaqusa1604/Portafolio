<template>
  <BasicLayout>
    <div class="head">
      <div class="info">
        <h1>Kevin Daniel Quijano S.</h1>
        <p>Desarrollador web front end</p>
      </div>
    </div>
    <a name="sobre_mi"></a>
    <SobreMi />
    <a name="contacto"></a>
    <Contacto />
  </BasicLayout>
</template>

<script>
import BasicLayout from "../layouts/BasicLayout.vue";
import SobreMi from "../components/sections/SobreMi.vue";
import Contacto from "../components/sections/Contacto.vue";
export default {
  name: "Home",
  components: {
    BasicLayout,
    SobreMi,
    Contacto,
  },
};
</script>

<style lang="scss" scoped>
$texto: #f5dabb;
.head {
  position: relative;
  width: 100%;
  height: 300px;
  background: rgba(#202f4e, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  .info {
    width: fit-content;
    color: $texto;
    text-align: center;
  }
}
.head:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("../img/fondo.jpg");
  background-size: cover;
  opacity: 0.5;
  z-index: -1;
}
</style>
