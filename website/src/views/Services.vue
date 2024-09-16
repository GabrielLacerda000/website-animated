<script setup>
import ImgData from '../helpers/ImgData'
import Card from '../components/Card.vue'
</script>

<template>
    <div class="container mx-auto px-5 xl:px-24 my-10">
        <div class="text">
            <h1 class="text-purple-700 text-4xl font-bold text-center">Services</h1>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            <div v-for="data in ImgData" :key="data.id">
                <Card :img="data.img"  :title="data.title"/>
            </div>
        </div>
    </div>
</template>