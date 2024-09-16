<script setup>
import ValueCard from './ValueCard.vue';
</script>

<template>
    <div class="container mx-auto px-5 xl:px-24 my-10">
        <div class="text">
            <h1 class="text-purple-700 text-4xl font-bold text-center">Our Core Values</h1>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            <ValueCard icon='<i class="bi bi-gear"></i>' title="Innovation" />
            <ValueCard icon='<i class="bi bi-check-lg"></i>' title="Integrity" />
            <ValueCard icon='<i class="bi bi-bar-chart-line"></i>' title="Adaptability" />
            <ValueCard icon='<i class="bi bi-stopwatch"></i>' title="Excellence" />
            <ValueCard icon='<i class="bi bi-hand-thumbs-up"></i>' title="Collaboration" />
            <ValueCard icon='<i class="bi bi-graph-up-arrow"></i>' title="Continuous Improvement" />
        </div>
    </div>
</template>