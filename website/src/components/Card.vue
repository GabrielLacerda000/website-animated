<script setup>
defineProps({
    img: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="bg-white shadow-xl">
        <img :src="img" :alt="title" class="w-full object-cover h-52">
        <div class="text p-9">
            <h2 class="text-slate-950 py-1 font-medium text-lg">{{ title }}</h2>
            <div class="border-b-2 border-cyan-500 w-full my-2"></div>
            <p class="text-slate-700 py-1 font-medium text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <button class="bg-gradient-to-r from-cyan-500 to-purple-500 hover:text-slate-700 transition duration-300 rounded-full mt-3 px-10 py-3 text-white text-lg font-medium outline-none ">ACCESS</button>
        </div>
    </div>
</template>