<script setup>

</script>

<template>
    <div class="flex justify-center items-center">
        <div class="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
            <h2 class="text-2xl text-center mb-4">Send us your resume</h2>
            <form action="">
                <div class="mb-4 flex items-center">
                    <i class="bi bi-person text-3xl mr-3"></i>
                    <input type="text" id="name" class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-700 focus:outline-none" placeholder="Enter your full name">
                </div>

                <div class="mb-4 flex items-center">
                    <i class="bi bi-envelope-at text-3xl mr-3"></i>
                    <input type="email" id="email" class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-700 focus:outline-none" placeholder="Enter your email">
                </div>

                <div class="mb-4 flex items-center">
                    <i class="bi bi-cloud-arrow-down text-3xl mr-3"></i>
                    <input type="file" class="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:focus:outline-none cursor-pointer file:cursor-pointer">
                </div>

                <button type="submit" class="w-full bg-purple-700 text-white py-3 rounded-md hover:bg-purple-800 duration-300">Send</button>
            </form>
        </div>
    </div>
</template>