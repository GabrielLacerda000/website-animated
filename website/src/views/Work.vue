<script setup>
import graphic from '../assets/graphic.svg'
import Form from '../components/Form.vue'
</script>

<template>
    <div class="container mx-auto px-5 xl:px-24 my-10">
        <h1 class="text-3xl text-center text-purple-700 font-bold">Wanna join us?</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 place-items-center gap-8 mt-14 text-lg">
            <p class="text-2xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur fuga cumque porro perspiciatis dolor recusandae repellendus omnis provident, nostrum minus deserunt expedita soluta, ex nobis aperiam incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus laborum quod eum eos inventore, molestiae et soluta fugiat id ducimus animi dolorem voluptate itaque iusto quis accusantium pariatur! Modi, ipsum.</p>
            <img :src="graphic" alt="graphic" class="w-full object-cover h-80">
        </div>
        <h1 class="text-3xl text-center text-purple-700 font-bold mt-14">Let us get to know you</h1>
        <Form />
    </div>
</template>