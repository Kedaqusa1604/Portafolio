<template>
  <div class="nav" :class="{ 'no-Overflow': isActive }">
    <nav>
      <h2>KevinQuijanoWeb.com</h2>
      <button @click="activeMenu">
        <fa :icon="changeIcon()" size="2x" />
      </button>
      <ul :class="{ 'is-Visible': isActive }">
        <li><a href="#sobre_mi" @click="activeMenu">Sobre mí</a></li>
        <li>
          <router-link to="/" @click="activeMenu">Portafolio</router-link>
        </li>
        <li><a href="#contacto" @click="activeMenu">Contacto</a></li>
        <li><router-link to="/" @click="activeMenu">Acerca de</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Menu",
  setup() {
    const isActive = ref(false);
    const activeMenu = () => {
      isActive.value = !isActive.value;
      console.log(isActive.value);
    };
    const changeIcon = () => {
      if (isActive.value) {
        return ["fas", "times"];
      } else {
        return ["fas", "bars"];
      }
    };
    return {
      isActive,
      activeMenu,
      changeIcon,
    };
  },
};
</script>

<style lang="scss" scoped>
$azulTexto: #1f3c5d;
$beige: #f5dabb;
$blanco_2: #f5f5f5;
$blanco_1: #fff;
$gris: rgba(0, 0, 0, 0.2);

.nav {
  background: $azulTexto;
  width: 100%;
  height: 50px;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  &.no-Overflow {
    overflow: inherit;
  }
  nav {
    width: 100%;
    max-width: 1000px;
    margin: auto;
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding: 5px 20px;
    position: relative;
    h2 {
      // background: chartreuse;
      color: $blanco_2;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      font-size: 17px;
      text-align: center;
    }
    button {
      margin: 0;
      align-self: center;
    }
    ul {
      // width: 300px;
      border: 1px solid $gris;
      width: 100%;
      background: $blanco_2;
      position: absolute;
      top: 100%;
      right: -100%;
      z-index: 10;
      padding: 0 10px;
      padding-bottom: 10px;
      height: auto;
      overflow: hidden;
      transition: all ease 1s;
      visibility: hidden;
      &.is-Visible {
        visibility: visible;
        right: 0;
        transition: all ease 1s;
      }
      li {
        list-style: none;
        a {
          display: inline-block;
          width: 100%;
          padding: 10px 20px;
          border-bottom: 1px solid $gris;
          color: $azulTexto;
          font-weight: bold;
          &:hover {
            background: $gris;
          }
        }
      }
    }

    // ul {
    //   width: 0;
    //   overflow: hidden;
    //   transition: all 0.5 ease;
    //   display: flex;

    //   li {
    //     width: 100px;
    //     background: rosybrown;
    //     list-style: none;

    //     a {
    //       display: inline-block;
    //       padding: 10px 5px;
    //       text-align: center;
    //       height: 100%;
    //       width: 100%;
    //       color: $blanco_2;
    //       font-weight: bold;
    //       &:hover {
    //         color: $blanco_2;
    //         background: $gris;
    //       }
    //     }
    //   }
    //   &.is-Visible {
    //     width: auto;
    //   }
    // }
  }
}

button {
  height: fit-content;
  margin: auto;
  border-style: none;
  outline: none;
  background: none;
  color: $blanco_2;
  &:hover {
    cursor: pointer;
  }
}

@media screen and (max-width: 800px) {
  .is-Visible {
    width: 100%;
  }
}

// $azulFondo: #202f4e;
// $fondo: #202f4e;
// $texto: #fff;
// $texto_hover: #f5dabb;

// .nav {
//   width: 100%;
//   height: 50px;
//   background: $fondo;
//   nav,
//   ul,
//   li,
//   a {
//     height: 100%;
//   }
//   nav {
//     width: 100%;
//     max-width: 1000px;
//     margin: auto;
//     ul {
//       display: flex;
//       float: right;
//       li {
//         list-style: none;
//         a {
//           font-size: 15px;
//           display: flex;
//           width: 125px;
//           justify-content: center;
//           align-items: center;
//           text-align: center;
//           text-decoration: none;
//           color: $texto;
//           &:hover {
//             color: $texto_hover;
//             border-bottom: 2px solid $texto_hover;
//           }
//         }
//       }
//     }
//   }
// }
</style>
