<template>
  <footer class="bg-dark text-white py-4">
    <div class="container">
      <div class="row">
        <!-- Footer Left: Logo or Text -->
        <div class="col-md-6">
          <p class="mb-0">&copy; {{ currentYear }} Ahmed Gharib. All Rights Reserved.</p>
        </div>
        
        <!-- Footer Right: Social Media Links -->
        <div class="col-md-6 d-flex justify-content-md-end">
          <a href="https://www.linkedin.com/in/ahmed-mahmoud-026839194/" target="_blank" class="text-white mx-2" aria-label="LinkedIn">
            <i class="fab fa-linkedin fa-lg"></i>
          </a>
          <a href="https://github.com/hyperstunt" target="_blank" class="text-white mx-2" aria-label="GitHub">
            <i class="fab fa-github fa-lg"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear()); // Automatically gets the current year
</script>

<style scoped>
footer {
  background-color: #343a40; /* Dark background for the footer */
}

footer a {
  transition: color 0.3s ease; /* Smooth transition for hover effect */
  color: white; /* Default text color */
  text-decoration: none; /* Removes underline */
}

footer a i:hover {
  color: #ff5733; /* Highlight color on hover */
}
</style>
