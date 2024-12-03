<template>
    <div>
      <!-- Navbar -->
      <header class="bg-dark text-white py-3">
        <nav class="container navbar navbar-expand-lg navbar-dark px-3">
          <!-- Branding -->
          <NuxtLink to="/" class="navbar-brand">Ahmed Gharib</NuxtLink>
          
          <!-- Toggler button for small screens -->
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          
          <!-- Collapsible Menu -->
          <div class="collapse navbar-collapse" id="navbarContent">
            <!-- Navigation Links -->
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="#about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#projects">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
            
            <!-- Social Media Links -->
            <div class="d-flex ms-lg-3">
              <a
                href="https://www.linkedin.com/in/ahmed-mahmoud-026839194/"
                target="_blank"
                class="text-white mx-2"
                aria-label="LinkedIn"
              >
                <i class="fab fa-linkedin fa-lg"></i>
              </a>
              <a
                href="https://github.com/hyperstunt"
                target="_blank"
                class="text-white mx-2"
                aria-label="GitHub"
              >
                <i class="fab fa-github fa-lg"></i>
              </a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  </template>
  

<script setup lang="ts">


</script>

<style scoped>

</style>