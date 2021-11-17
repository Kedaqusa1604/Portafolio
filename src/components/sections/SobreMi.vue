<template>
  <div class="contenido">
    <div class="head" id="Sobre_Mi">
      <h2>Sobre mí</h2>
    </div>
    <!-- Perfil profesional -->
    <div class="container blanco1">
      <div class="contents">
        <div class="description">
          <h2>¿Quién soy?</h2>
          <p>
            Soy un joven ingeniero y autodidacta, en busca de oportunidades
            enfocadas al desarrollo web que le permitan crecer a nivel
            profesional y personal mediante la resolución de desafíos y la
            creación de proyectos.
            <br />
            <!-- Ingeniero en automatización con experiencia en el área de la
            arquitectura de software, el diseño y desarrollo web, con
            habilidades para la comunicación, el trabajo en equipo, la
            identificación de problemas y estudio de soluciones. Con interés en
            desempeñarse profesionalmente en el área del desarrollo web
            correspondiente al frontend. -->
          </p>
        </div>
      </div>
    </div>
    <!-- Conocimientos -->
    <div class="container blanco2">
      <div class="contents">
        <h2>Mis conocimientos</h2>
        <ListaConocimientos :conocimientos="conocimientos" />
      </div>
    </div>

    <!-- Mis estudios -->

    <!-- <div class="container blanco1">
      <div class="contents flex">
        <div class="description">
          <h2>Mis estudios</h2>
          <p>
            <strong>Pregrado en Ingeniería en Automatización.</strong> <br />
            <strong>Institución: </strong>Universidad Jorge Tadeo Lozano <br />
            <strong>Inicio: </strong>Enero 2016 <br />
            <strong>Fin: </strong>Octubre 2021
          </p>
        </div>
        <div class="description">
          <h2>Mi experiencia laboral</h2>

          <p>
            <strong>Practicante universitario</strong>
            <br />
            <strong>Empresa: </strong>Colvatel S.A <br />
            <span> Enero 2021 - Julio 2021</span>
          </p>
          <p>Labores realizadas</p>
          <ul>
            <li>
              Levantamiento de información y requerimientos para nuevos
              desarrollos dentro de la compañía
            </li>
            <li>
              Elaboración de diagramas de flujo para la organización de la
              información.
            </li>
            <li>Diseño de mock-ups</li>
            <li>
              Apoyo en la construcción inicial del front-end del aplicativo
              usando HTML, CSS y JavaScript.
            </li>
          </ul>
        </div>
      </div>
    </div> -->
    <div class="container blanco1">
      <div class="contents">
        <h2>Mis cursos realizados</h2>
        <ListaCursos :cursos="cursos" />
      </div>
    </div>
  </div>
</template>

<script>
import ListaConocimientos from "../ListaConocimientos.vue";
import ListaCursos from "../ListaCursos.vue";
export default {
  name: "SobreMi",
  components: {
    ListaCursos,
    ListaConocimientos,
  },
  setup() {
    const conocimientos = [
      {
        logo: ["fab", "js-square"],
        color: "yellow",
        nombre: "Lenguajes de programación, marcado y estilos (nivel)",
        lista: [
          "HTML (Intermedio)",
          "CSS (Intermedio)",
          "JavaScript (Intermedio)",
          "Java (Básico)",
          "C# (Básico)",
        ],
      },
      {
        logo: ["fab", "vuejs"],
        color: "green",
        nombre: "Preprocesadores, librerías y frameworks",
        lista: [
          "Vue JS (JavaScript)",
          "SASS (CSS)",
          "Bootstrap (CSS)",
          "Semantic UI (CSS)",
        ],
      },
      {
        logo: ["fab", "git-alt"],
        color: "orange",
        nombre: "Otros conocimientos",
        lista: [
          "Git (Básico)",
          "Adobe XD (Básico)",
          "Adobe Illustrator (Básico)",
        ],
      },
    ];
    const cursos = [
      {
        link: "https://www.udemy.com/course/diseno-web/",
        nombre: "Diseño web profesional, el curso completo, práctico y desde 0",
        plataforma: "Udemy",
        duracion: 42,
        finalizado: true,
        inicio: "Abril 2021",
        fin: "Agosto 2021",
      },
      {
        link: "https://www.udemy.com/course/vue-3-js-de-cero-a-experto-creando-aplicaciones-reales/",
        nombre: "Vue 3 JS: De cero a experto creando aplicaciones reales",
        plataforma: "Udemy",
        duracion: 16,
        finalizado: true,
        inicio: "Octubre 2021",
        fin: "Noviembre 2021",
      },
      {
        link: "https://www.udemy.com/course/master-en-typescript-javascript-moderno-ecmascript-es12-apis-html5/",
        nombre: "Master en TypeScript, JavaScript Moderno, ES2021, APIs HTML5",
        plataforma: "Udemy",
        duracion: 12,
        finalizado: false,
        inicio: "Octubre 2021",
        fin: "",
      },
    ];
    return {
      cursos,
      conocimientos,
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

// azul
$azul_5: #162b42;
$azul_4: #234369;
$azul_3: #386ca8;
$azul_2: #4d95e8;
$azul_1: #1f3c5d;

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
.blanco1 {
  background: $blanco_1;
}

.blanco2 {
  background: $blanco_2;
}

.container {
  width: 100%;
  padding: 50px 20px;
}

p {
  strong {
    color: $azulTexto;
  }
}
ul {
  position: relative;
  li {
    list-style: none;
    &:before {
      content: "- ";
    }
  }
  &:after {
    display: inline-block;
    content: "";
    width: 20%;
    height: 1px;
    position: relative;
    border: none;
    background: $azulTexto;
    bottom: 0;
    left: 0;
    z-index: 2;
  }
}

.contents {
  width: 100%;
  max-width: 1000px;
  margin: auto;
  position: relative;
  z-index: 1;
  h2 {
    color: $azulTexto;
    display: block;
    text-align: center;
    border-bottom: 1px solid $gris;
    padding-bottom: 10px;
  }
  &.flex {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-wrap: wrap;
    .description {
      margin: 20px 20px;
      max-width: 40%;
      min-width: 400px;
    }
  }
}

.description {
  width: 100%;
  max-width: 700px;
  margin: auto;
  text-align: justify;
  padding: 20px;
  border: 1px solid $gris;
  position: relative;
  background: $blanco_1;
  &:before {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    width: 100%;
    height: 100%;
    background: $blanco_2;
    z-index: -1;
  }
  h2 {
    display: inline-block;
    text-align: center;
    width: 100%;
    padding: 5px 0;
    border-bottom: 1px solid $gris;
    color: $azulTexto;
  }
}

@media screen and (max-width: 920px) {
  .contents {
    &.flex {
      .description {
        margin: 20px 0px;
        width: 100%;
        max-width: 700px;
        min-width: 0;
        padding: 20px;
      }
    }
  }
}
</style>
