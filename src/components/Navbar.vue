<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAuthRepository } from '@/composables';

  const repository = useAuthRepository();
  const route = useRoute();
  const router = useRouter();
  
  
const isLoggingIn = ref(false)
      const logout = () => {
      isLoggingIn.value = true
      try {
      localStorage.removeItem ('access_token')
      localStorage.removeItem ('user')
      repository.logout;
      router.replace({name: 'login'})
  } catch (e) {
      console.error (e);
    }
    isLoggingIn.value = false
  };
</script>

<template>
<div class="conntainer">
    <nav class="fixed top-0 inset-x-0 z-50 bg-white p-5 shadow-xl flex justify-between items-center">
        <div>
            <span class="text-4xl items-center flex font-[Poppins] font-bold">
                <img class="h-[70px] ml-14 mr-3 inline" src="https://seeklogo.com/images/H/hooligan-logo-E84FA780A6-seeklogo.com.png" alt="Logomu Brand">
                BOYO CASUAL STORE
            </span>
        </div>

        <ul class="flex item-center justify-center my-auto">
            <li class="mx-5">
                <a href="/restos" class="text-2xl font-bold hover:text-green-600 duration-300">RESTOS</a>
            </li>
            <li class="mx-5">
                <router-link class="text-2xl font-bold hover:text-green-600 duration-300" to="create" >CREATE RESTO</router-link>
            </li>
            <li class="mx-5">
                <a href="/home" class="text-2xl font-bold hover:text-green-600 duration-300">HOME</a>
            </li>
            <!-- khusus admin -->
            <li class="mx-5">
                <a href="/input" class="text-2xl font-bold hover:text-green-600 duration-300 text-center">INPUT ITEMS</a> 
            </li>
            <li class="mx-5">
                <a href="/display" class="text-2xl font-bold hover:text-green-600 duration-300 text-center">DISPLAY ITEMS</a>
            </li>
            <!-- <li class="mx-5">
                <a href="/login" class="text-2xl bg-gray-800 text-white py-2 px-6 rounded-lg font-bold hover:text-green-600 duration-300">LOGIN</a>
            </li> -->
            <li>
                <div class="mx-5">
                <button @click="logout" class="bg-gray-800 text-2xl text-white tracking-wider font-bold rounded-lg duration-200 px-6 py-2 mr-12 mt-[-7px] hover:text-green-600 ">
                        LOGOUT
                </button>
                </div>   
            </li>     
        </ul>
    </nav>
</div>
</template>