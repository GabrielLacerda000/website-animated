<script setup>
defineProps({
   name: {
        type: String,
        required: true
  },
  imgsrc: {
        type: String,
        required: true
  },
  visit: {
        type: String,
        required: true
  },
  btnName: {
        type: String,
        required: true
  },
})

</script>

<template>
    <div class="container mx-auto lg:px-20 md:h-[80] grid grid-cols-1 place-items-center py-32 md:grid-cols-2">
        <div class="flex items-center flex-col md:items-start">
            <h1 class="text-2xl md:text-4xl text-slate-700">{{ name }} 
                <br>
                <strong class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-500 text-5xl lg:text-6xl font-bold">Pro Coders
                </strong> 
            </h1>
            <p class="text-2xl md:text-4xl text-slate-700">IT solutions for your business</p>
            <button class="bg-violet-500 hover:bg-violet-700 rounded-full mt-3 px-12 py-4 outline-none duration-300 text-white text-xl font-medium">{{ btnName }}</button>
        </div>
        <div class="img">
            <img :src="imgsrc" alt="team-tag" class="w-full h-full mt-5">
        </div>
    </div>
</template>

<style scoped>
@keyframes bounce-custom {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px); 
  }
}

.img {
  animation: bounce-custom 2.8s ease-in-out infinite;
}

</style>