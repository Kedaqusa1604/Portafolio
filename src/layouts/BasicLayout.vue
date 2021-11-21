<template>
  <div class="basicLayout">
    <Head />
    <!-- <Menu :class="{ 'change-color': scroll }" /> -->
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
import Head from "../components/Head.vue";
import { onMounted, ref } from "vue";
export default {
  name: "BasicLayout",
  components: {
    Menu,
    Head,
  },
  // setup() {
  //   onMounted(() => {
  //     window.addEventListener("scroll", changeStateScroll);
  //   });
  //   let scroll = ref(false);
  //   const changeStateScroll = () => {
  //     if (window.scrollY > 0) {
  //       scroll.value = true;
  //     } else {
  //       scroll.value = false;
  //     }
  //   };
  //   return {
  //     scroll,
  //     changeStateScroll,
  //   };
  // },
};
</script>

<style lang="scss" scoped></style>
