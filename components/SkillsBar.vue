<template>
    <div class="skills-container">
      <div v-for="(skill, index) in skills" :key="index" class="skill">
        <div class="skill-name">
          {{ skill.name }} 
        </div>
        <div class="skill-bar">
          <div
            class="skill-fill"
            :data-skill-name="skill.name"
            :style="{ width: skill.isVisible ? skill.level + '%' : '0%' }"
          >
            <span class="skill-percentage" v-if="skill.isVisible">
              {{ skill.description }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
import { ref, onMounted } from "vue";

const skills = ref([
  { name: "Coffee", level: 100, description: "Master", isVisible: false },
  { name: "HTML", level: 95, description: "Pro", isVisible: false },
  { name: "CSS", level: 95, description: "Pro", isVisible: false },
  { name: "JavaScript", level: 90, description: "Confident", isVisible: false },
  { name: "Vue", level: 90, description: "Confident", isVisible: false },
  { name: "React", level: 87, description: "Confident", isVisible: false },
]);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const skillIndex = skills.value.findIndex(
            (skill) =>
              skill.name === entry.target.getAttribute("data-skill-name")
          );
          if (skillIndex !== -1) {
            skills.value[skillIndex].isVisible = true;
          }
        }
      });
    },
    { threshold: 0.1 } // Trigger when 10% of the element is visible
  );

  const skillElements = document.querySelectorAll(".skill-fill");
  skillElements.forEach((el) => {
    observer.observe(el);
  });
});
</script>

  
<style scoped>
.skills-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.skill {
  margin-bottom: 20px;
}

.skill-name {
  font-size: 16px;
  margin-bottom: 8px;
}

.skill-bar {
  background-color: #f0f0f0;
  height: 20px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.skill-fill {
  height: 100%;
  width: 0; /* Initial width for animation */
  background-color: #FFD580;
  border-radius: 10px;
  transition: width 1.5s ease-in-out; /* Smooth animation */
  position: relative;
}

.skill-percentage {
  position: absolute;
  right: 10px;
  top: 0;
  bottom: 0;
  margin: auto;
  color: white;
  font-size: 12px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none; /* Avoid blocking interactions */
}
</style>
