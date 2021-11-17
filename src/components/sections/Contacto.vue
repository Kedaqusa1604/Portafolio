<template>
  <div class="container azul">
    <div class="contents">
      <h2>Contáctame por</h2>
      <div class="description">
        <a href="mailto:kevind.quijanos@gmail.com" target="blank"
          ><fa class="icono" :icon="['fas', 'envelope']" size="2x" /> E-mail</a
        >
        <a href="https://github.com/Kedaqusa1604" target="blank"
          ><fa class="icono" :icon="['fab', 'github']" size="2x" />
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/kevindquijanos1604/" target="blank"
          ><fa
            class="icono"
            :icon="['fab', 'linkedin-in']"
            size="2x"
          />LinkedIn</a
        >
        <a
          href="https://api.whatsapp.com/send?phone=573144399846"
          target="blank"
          ><fa class="icono" :icon="['fab', 'whatsapp']" size="2x" />WhatsApp</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contacto",
};
</script>

<style lang="scss" scoped>
$azulTexto: #1f3c5d;
$beige: #f5dabb;
$blanco_2: #f5f5f5;
$blanco_1: #fff;
$gris: rgba(0, 0, 0, 0.2);
$azulFondo: #202f4e;
.container {
  width: 100%;
  padding: 50px 20px;
}
.azul {
  background: $azulTexto;
}
.contents {
  width: 100%;
  max-width: 1000px;
  margin: auto;
  border: 1px solid $gris;
}
.description {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  z-index: 0;
}
h2 {
  display: inline-block;
  text-align: center;
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
  //   border-bottom: 1px solid $blanco_1;
  color: $blanco_2;
}
a {
  display: flex;
  width: 200px;
  color: $blanco_2;
  //   background: red;
  margin: 20px 10px;
  padding: 5px;
  //   border-bottom: 1px solid $gris;
  align-items: center;
  justify-content: space-around;
  position: relative;

  &:hover {
    color: $blanco_2;
    background: $gris;
  }
}
@media screen and (max-width: 480px) {
  .description {
    justify-content: center;
  }
  a {
    align-self: center;
    width: 60%;
    justify-content: center;
    padding: 5px 20px;
    .icono {
      // background: chartreuse;
      margin-right: 50px;
    }
  }
}
</style>
