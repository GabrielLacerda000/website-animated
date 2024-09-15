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
    <div class="container mx-auto lg:px-20 md:h-[80] grid grid-cols-2 place-items-center py-32">
        <div class="flex items-center flex-col md:items-start">
            <h1 class="text-2xl md:text-4xl text-slate-700">{{ name }} 
                <br>
                <strong class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-500 text-5xl lg:text-6xl font-bold">Pro Coders
                </strong> 
            </h1>
            <p class="text-2xl md:text-4xl text-slate-700">IT solutions for your business</p>
            <button class="bg-violet-500 rounded-md p-2 w-1/4">Click me!</button>
        </div>
        <div class="img">
            <img :src="imgsrc" alt="team-tag" class="w-full h-full mt-5">
        </div>
    </div>
</template>