<template>
  <div class="card">
    <div class="logo">
      <fa :icon="logo" size="3x" :class="color" />
    </div>
    <h2>{{ nombre }}</h2>
    <ul v-for="item in lista" :key="item.id">
      <li>{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Conocimiento",
  props: {
    conocimiento: Object,
  },
  setup(props) {
    const logo = props.conocimiento.logo;
    const nombre = props.conocimiento.nombre;
    const lista = props.conocimiento.lista;
    const color = props.conocimiento.color;
    return {
      nombre,
      lista,
      logo,
      color,
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
$amarillo: #f7df1e;
$verde: #41b883;
$rojo: #c3002f;
.yellow {
  color: $amarillo;
}

.green {
  color: $verde;
}

.orange {
  color: #f05033;
}

.card {
  width: 250px;
  min-height: 200px;
  background: $blanco_1;
  margin: 10px 20px;
  padding: 20px 10px;
  border: 1px solid $gris;
  .logo {
    width: 70px;
    height: 70px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    background: $blanco_2;
    fa {
      width: 100%;
    }
  }
  h2 {
    display: inline-block;
    text-align: center;
    width: 100%;
    padding: 5px 0;
    border-bottom: 1px solid $gris;
    color: $azulTexto;
    font-size: 17px;
  }
  ul {
    li {
      list-style: none;
      &::before {
        content: "-  ";
      }
    }
  }
}
</style>
