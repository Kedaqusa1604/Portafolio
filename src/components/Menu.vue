<template>
  <div class="header">
    <nav class="nav-bar" :class="{ 'nav-bar_Active': isActive }">
      <div class="nav-bar-logo">
        <h2>KevinQuijanoWeb.com (En construcción)</h2>
      </div>
      <button class="nav-bar-button" @click="changeStateMenu()">
        <fa :icon="returnIcon()" size="2x" />
      </button>
      <ul class="nav-bar-list" :class="{ 'nav-bar-list_Active': isActive }">
        <li class="nav-bar-item">
          <template v-if="$route.name === 'Home'">
            <a href="#" @click="changeStateMenu()"><strong>Inicio</strong></a>
          </template>
          <template v-else>
            <router-link :to="{ name: 'Home' }" @click="changeStateMenu()">
              <strong>Inicio</strong>
            </router-link>
          </template>

          <div
            class="nav-bar-submenu"
            :class="{ 'nav-bar-submenu_no-visible': $route.name !== 'Home' }"
          >
            <li class="nav-bar-submenu-item">
              <a href="#sobre_mi" @click="changeStateMenu()">Sobre Mi</a>
            </li>
            <li class="nav-bar-submenu-item">
              <a href="#portafolio" @click="changeStateMenu()">Portafolio</a>
            </li>
            <li class="nav-bar-submenu-item">
              <a href="#contacto" @click="changeStateMenu()">Contacto</a>
            </li>
          </div>
        </li>
        <li class="nav-bar-item">
          <router-link :to="{ name: 'About' }" @click="changeStateMenu()">
            <strong>Acerca de</strong>
          </router-link>
        </li>
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
    const returnIcon = () => {
      if (isActive.value) {
        return ["fas", "times"];
      } else {
        return ["fas", "bars"];
      }
    };
    const changeStateMenu = () => {
      isActive.value = !isActive.value;
      console.log(isActive.value);
    };
    return {
      changeStateMenu,
      isActive,
      returnIcon,
    };
  },
};
</script>

<style lang="scss" scoped>
$azulTexto: #1f3c5d;
$blanco_2: #f5f5f5;
$gris: rgba(0, 0, 0, 0.2);

@mixin enlaces() {
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $blanco_2;
  font-size: 16px;
  padding: 0 10px;
  transition: all 0.7s ease;
  font-weight: bold;
  &:hover {
    background: $gris;
  }
}

.header {
  width: 100%;
  background: transparent;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  // background: red;
}
.nav-bar {
  width: 100%;
  height: 100%;
  max-width: 1000px;
  padding: 0 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
  transition: all 0.7s ease;
}

.nav-bar-logo {
  height: 100%;
  width: max-content;
  margin-right: 20px;
  h2 {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    align-content: center;
    font-size: 18px;
    text-align: center;
    color: $blanco_2;
  }
}

.nav-bar-button {
  background: none;
  border: none;
  width: max-content;
  height: fit-content;
  display: none;
}

.nav-bar-list,
.nav-bar-submenu {
  display: flex;
}

.nav-bar-submenu {
  height: 100%;
  .nav-bar-submenu-item {
    display: flex;
  }
}

.nav-bar-submenu_no-visible {
  display: none;
}

.nav-bar-item,
.nav-bar-submenu-item {
  list-style: none;
}

.nav-bar-item {
  display: flex;
  a {
    @include enlaces();
  }
}

@media screen and (max-width: 900px) {
  @mixin nav-item() {
    color: $azulTexto;
    border-bottom: 1px solid $gris;
  }
  .nav-bar-button {
    display: inline-block;
    margin: auto 0;
    color: $blanco_2;
    &:hover {
      cursor: pointer;
    }
  }
  .nav-bar-list {
    width: 300px;
    position: fixed;
    top: 60px;
    right: -100%;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    transition: all 0.7s ease;
    background: rgba($blanco_2, 0.8);
    overflow: scroll;
  }

  .nav-bar_Active {
    background: $azulTexto;
  }

  .nav-bar-list_Active {
    right: 0px;
  }

  .nav-bar-item {
    flex-direction: column;
    width: 100%;
    a {
      padding: 10px 30px;
      width: 100%;
      justify-content: flex-start;
      margin-bottom: 10px;
      font-weight: normal;
      @include nav-item();
    }

    .nav-bar-submenu {
      flex-direction: column;
      width: 80%;
      align-self: flex-end;
    }
  }
}

@media screen and (max-width: 768px) {
  .nav-bar-list {
    width: 100%;
    height: calc(100% - 60px);
  }
}
</style>
