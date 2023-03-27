<script setup>
import { RouterView, useRouter } from 'vue-router';
import Navbar from './components/Navbar.vue'
const router = useRouter()
</script>

<template>
  <div class="box-border antialiased">
    <Navbar v-if="router.currentRoute.value.name !== 'login' &&
                  router.currentRoute.value.name !== 'register'"/>   
    <RouterView />
  </div>
</template>
  