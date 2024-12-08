<template>
  <div class="email-form">
    <form @submit.prevent="sendEmail">
      <div class="row">
        <div class="col-md-6">
          <div class="mb-3">
            <input
              type="text"
              v-model="formData.name"
              class="form-control"
              placeholder="Your name"
              required
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <input
              type="email"
              v-model="formData.email"
              class="form-control"
              placeholder="Your email"
              required
            />
          </div>
        </div>
      </div>
      <div class="mb-3">
        <textarea
          v-model="formData.message"
          class="form-control"
          placeholder="Your message"
          rows="4"
          required
        ></textarea>
      </div>
      <div class="d-flex justify-content-center">
        <button type="submit" class="btn btn-primary sendButton">Send</button>
      </div>
    </form>
    <div v-if="responseMessage" class="alert mt-3" :class="responseClass">
      {{ responseMessage }}
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import emailjs from "emailjs-com";

const formData = ref({
  name: "",
  email: "",
  message: "",
});

const responseMessage = ref("");
const responseClass = ref("");

const sendEmail = () => {
  if (!formData.value.name || !formData.value.email || !formData.value.message) {
    responseMessage.value = "Please fill out all fields.";
    responseClass.value = "alert-warning";
    return;
  }

  const templateParams = {
    from_name: formData.value.name,
    email: formData.value.email,
    message: formData.value.message,
  };

  emailjs
    .send(
      "service_mqr3at5", // Replace with your EmailJS Service ID
      "template_b4wq5f6", // Replace with your EmailJS Template ID
      templateParams,
      "BgAtsImPY8UQbnHK7" // Replace with your EmailJS Public Key
    )
    .then(
      (result) => {
        console.log("Success:", result.text);
        responseMessage.value = "Email sent successfully!";
        responseClass.value = "alert-success";
      },
      (error) => {
        console.error("Error:", error.text);
        responseMessage.value = "Failed to send email. Please try again.";
        responseClass.value = "alert-danger";
      }
    );
};
</script>

<style scoped>
.email-form {
  max-width: 600px;
  margin: auto;
}

.sendButton {
  background-color: #FF5733;
  border: none;
  width: 50%;
  border-radius: 20px;
}
</style>
