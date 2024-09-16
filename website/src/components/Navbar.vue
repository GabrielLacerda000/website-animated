<script setup>
import Link from '../components/Link.vue'
import { ref } from 'vue';

const open = ref(false)

const menuOpen = () => {
    open.value = !open.value
}
</script>

<template>
   <header class="flex justify-between items-center bg-white shadow-md h-[60px] px-5 lg:px-24 relative z-10">
    <div class="text-3xl transition duration-300 ease-in-out bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-500 hover:text-cyan-400 cursor-pointer">
        <RouterLink  to="/"> <i class="bi bi-code-slash"></i> Pro coders</RouterLink>
    </div>
    <nav class="flex flex-col md:flex-row p-5 gap-4 md:gap-8 px-6 md:static absolute bg-white md:bg-transparent shadow-md md:shadow-none md:w-auto my-7 md:my-0 left-0 w-full duration-500 " :class="[open ? 'top-0' : 'top-[-390%]']">
        <Link url="/" text="Home"/>
        <Link url="/about" text="About"/>
        <Link url="/services" text="Services"/>
    </nav>
    <div class="text-4xl text-black cursor-pointer md:hidden z-20" @click="menuOpen">
        <i :class="[open ? 'bi bi-x' :'bi bi-list']"></i>
    </div>
   </header>
</template>