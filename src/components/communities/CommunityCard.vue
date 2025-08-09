<script setup>
   const { community } = defineProps(['community'])
</script>

<template>
    <div class="bg-white rounded-lg shadow p-5 flex flex-col">
            <div class="flex items-center space-x-3 mb-3">
                <span
                    class="w-10 h-10  rounded-full flex items-center justify-center font-semibold"
                    :class="[community.iconColor]"
                    >{{ community.icon }}</span
                >
                <div>
                    <h3 class="font-semibold text-gray-800">{{ community.title }}</h3>
                    <p class="text-xs text-gray-500">{{  community.members  }}</p>
                </div>
            </div>
            <p class="text-sm text-gray-600 flex-1">
               {{ community.description }}
            </p>
            <div class="mt-4 flex justify-between items-center">
                <a href="#" class="text-indigo-600 hover:underline text-sm">View</a>
                <button
                    class="bg-indigo-600 text-white px-3 py-1 rounded-md text-sm hover:bg-indigo-700"
                >
                    Join
                </button>
            </div>
        </div>
</template>