<script setup>
defineProps({
    text: {
        type: String,
        required: true
  },
  url: {
        type: String,
        required: true
  }
})
</script>

<template>
    <RouterLink :to='url' class="text-purple-500 py-5 text-xl font-medium cursor-pointer transition duration-300 ease-in-out rounded-md p-2 hover:bg-gray-300/25">{{ text }}</RouterLink>
</template>