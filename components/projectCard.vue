<template>
  <div class="row">
    <div
      v-for="project in projects"
      :key="project.id"
      class="col-md-6 mb-4 d-flex align-items-stretch"
    >
      <div
        class="card project-card text-white card-image"
        :style="{ backgroundImage: `url(${project.image})` }"
      >
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">{{ project.name }}</h5>
          <p class="card-text">{{ project.description }}</p>
          <a
            :href="project.link"
            target="_blank"
            class="btn btn-primary mt-auto align-self-start"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Reactive data using the Composition API
const projects = ref([
  {
    id: 1,
    name: 'Mulaaa',
    description: 'My first Project that I worked on individually.',
    link: 'https://mulaaa.com/',
    image: 'img/mulaaa.png', 
  },
  {
    id: 2,
    name: 'Brandripe',
    description: 'Another amazing project that I worked on.',
    link: 'https://brandripe.com/',
    image: 'img/brandripe.png',
  }, 
  {
    id: 3,
    name: 'Sintari',
    description: 'Another amazing project that I worked on.',
    link: 'https://www.sintarib.com/',
    image: 'img/sintari.png',
  },
  {
    id: 4,
    name: 'Greenpine',
    description: 'Another amazing project that I worked on.',
    link: 'https://greenpine.com.my',
    image: 'img/greenpine.png',
  },
]);
</script>

<style scoped>
.project-card {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
  min-height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden; 
  position: relative; 
}

.project-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: inherit; 
  transition: transform 0.3s ease; 
  z-index: -1; 
}

.project-card:hover .card-image {
  transform: scale(1.1); 
}

.project-card .card-body {
  background: rgba(0, 0, 0, 0.6); 
  padding: 20px;
  color: white;
  z-index: 1;
  border-radius: 10px;
}
.project-card .card-body:hover {
  background: rgba(0, 0, 0, 0.2); 
  transition: background 0.5s ease;
}

.project-card:hover {
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2); 
}

.project-card .btn {
  background-color: rgb(255, 87, 51); 
  border: none;
  color: white;
  transition: background-color 0.3s ease;
}

.project-card .btn:hover {
  background-color: rgb(255, 50, 30); 
}

</style>
