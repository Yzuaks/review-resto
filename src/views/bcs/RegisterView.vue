<script setup>
  import { reactive, ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useAuthRepository } from '@/composables';

  const repository = useAuthRepository();
  const route = useRoute();
  const router = useRouter();

  const credentials = reactive({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    device_name: 'browser',
  });

  const isLoggingIn = ref(false)
  const onSubmit = () => {
    isLoggingIn.value = true
    try {
      repository.register(credentials);
      router.replace({name: 'login'})
  } catch (e) {
      console.error (e);
    }
    isLoggingIn.value = false
  };

</script>

<template>
    <main class="grid grid-cols-12 min-h-screen overflow-hidden">
  
      <section class="col-span-7">
        
        <div class="bg-white shadow-lg shadow-gray-300 relative bg-center flex items-center">
        <div class="absolute inset-0 bg-gray-900 bg-opacity-75 shadow-xl"></div> 
        <p class="text-white absolute text-[51px] font-bold text-center items-center justify-center w-full">BOYO.CASUAL <br> STORE</p>
        <img src="https://s3.bukalapak.com/img/82424538292/large/data.jpeg.webp" alt="gambar" class=" h-screen w-full" >
        </div>  
  
      </section>
  
  
      <section class="col-span-5 bg-black/5 h-full shadow-2xl">
        <div class="flex flex-col items-center px-20 h-full">
      
          <P class="text-center mb-10 mt-36 font-[Poppins] text-green-800 font-bold text-[50px]"><span class="text-green-700">FORM LOGIN</span>  <br> BOYO CASUAL STORE</P>
    
          <form method="post" :action="route.path" 
          class="relative w-full" 
          @submit.prevent="onSubmit">

            <div class="relative w-full">
                <div class="mb-4">
                    <label for="name" class="block mb-2 text-[19px] font-[Poppins]">NAME</label>
                    <input v-model="credentials.name"
                    type="text" required 
                    placeholder="Your Name"
                    class="border border-gray-300 p-3 w-full bg-gray-50 outline-none rounded focus:ring-2 focus:ring-blue-300">
                </div>

                <div class="mb-4">
                    <label for="email" class="block mb-2 text-[19px] font-[Poppins]">EMAIL</label>
                    <input v-model="credentials.email"
                    type="email" required 
                    placeholder="someone@email.com"
                    class="border border-gray-300 p-3 w-full bg-gray-50 outline-none rounded focus:ring-2 focus:ring-blue-300">
                </div>
        
                <div class="mb-4">
                    <label for="password" class="block mb-2 text-[19px] font-[Poppins]">PASSWORD</label>
                    <input v-model="credentials.password"
                    type="password" required 
                    placeholder="Passowrd"
                    class="border border-gray-300 p-3 w-full bg-gray-50 outline-none rounded focus:ring-2 focus:ring-blue-300">
                </div>

                <div class="mb-4">
                    <label for="password" class="block mb-2 text-[19px] font-[Poppins]">CONFIRMATION PASSWORD</label>
                    <input v-model="credentials.password_confirmation" 
                    type="password" required 
                    placeholder="Confirmation Passowrd"
                    class="border border-gray-300 p-3 w-full bg-gray-50 outline-none rounded focus:ring-2 focus:ring-blue-300">
                </div>
        
                <div class="mt- mb-3 text-[19px]">
                <button type="submit" class="bg-blue-600 text-white font-[Poppins] p-3 w-full hover:bg-blue-700 rounded transition-colors divide-fuchsia-200">REGISTER</button>
                </div>

                <div>
                    <p class="font-[Poppins]">You Have Account?<a href="/login" class="text-red-600 font-[Poppins] pl-2">Login</a></p>
                </div>
              </div>

          </form>

        </div>
        
      </section>
  
      
  
    </main>
  </template>