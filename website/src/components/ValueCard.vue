<script setup>
defineProps({
    icon: {
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
    <div class="bg-white shadow-xl text-center hover:scale-105 duration-300">
        <div class="text-4xl mt-4" v-html="icon"></div>
        <div class="text p-9">
            <h2 class="text-slate-950 py-1 font-medium text-lg">{{ title }}</h2>
            <p class="text-slate-700 py-1 font-medium text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
    </div>
</template>