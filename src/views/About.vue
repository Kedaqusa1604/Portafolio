<template>
  <BasicLayout2>
    <div class="about">
      <div class="head">
        <h2>Acerca de este proyecto:</h2>
      </div>
      <div class="description">
        <div class="content">
            <p>
            <strong>Descripción: </strong>Página web desarrollada para fines
            profesionales con el objetivo de dar a conocer mi trabajo, mis estudios,
            mis conocimientos, mis habilidades y mis cursos realizados.
            </p>
        </div>
      </div>
      <div class="tools">
        <div class="content">
           <p><strong>Herramientas usadas: </strong>
              <ul>
                <li><strong>Diseño: </strong>Adobe XD </li>
                <li><strong>Framework: </strong>  Proyecto construido en su
                    totalidad con VueJS, haciendo uso de algunos de sus recursos: VueX y Vue Router.</li>
                <li><strong>Estilos: </strong> Se codificó el código CSS haciendo uso del preprocesador SASS</li>
                <li><strong>Recursos Adicionales: </strong>
                      <ul>
                        <li>Font-Awesome</li>
                        <li>Git</li>
                      </ul>
                </li>
              </ul>
            </p>
        </div>
      </div>
      <div class="extra">
        <div class="content">
            <p><strong>Diseñado y desarrollado por: </strong> Kevin Daniel Quijano Sabogal © 2021 </p>
        </div>
      </div>
      <div class="footer">
          <div class="content">

          </div>
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

  .about{
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
  h2 {
    height: 100%;
    color: $azulTexto;
    display: block;
    padding: 10px 20px;
  }
}
  }
  .content{
    width: 100%;
    max-width: 1000px;
    margin: auto;
  }

</style>
