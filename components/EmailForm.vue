<template>
  <div class="email-form">
    <form @submit.prevent="sendEmail">
      <div class="row">
        <div class="col-md-6">
          <div class="mb-3">
            <input type="text" id="name" v-model="formData.name" class="form-control" placeholder="Your name" required>
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <input type="email" id="email" v-model="formData.email" class="form-control" placeholder="Your email"
              required>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <textarea id="message" v-model="formData.message" class="form-control" placeholder="Your message" rows="4"
          required></textarea>
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

const formData = ref({
  name: "",
  email: "",
  message: "",
});

const responseMessage = ref("");
const responseClass = ref("");

const sendEmail = async () => {
  try {
    const response = await fetch('/.netlify/functions/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName: name.value,
        email: email.value,
        message: message.value,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      alert('Email sent successfully!');
    } else {
      alert(data.message || 'Something went wrong');
    }
  } catch (error) {
    responseMessage.value = "An error occurred. Please try again.";
    responseClass.value = "alert-danger";
  }
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
