<script setup>
import TwoInOne from '../components/TwoinOne.vue';
import code from '../assets/code.svg';
import Values from '../components/Values.vue'
import AboutUs from '../components/AboutUs.vue';
</script>

<template>
    <div>
        <TwoInOne name="Welcome to the about page" :imgsrc="code" visit="/about" btnName="Who are we"/>

        <AboutUs />

        <Values/>
    </div>
</template>