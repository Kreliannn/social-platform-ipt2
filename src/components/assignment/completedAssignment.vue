<script setup>
   const { assignment } = defineProps(['assignment'])
</script>

<template>
     <div class="flex items-start justify-between bg-gray-50 p-4 rounded-md">
          <div>
            <h3 class="font-medium text-gray-800">{{ assignment.title }}</h3>
            <p class="text-sm text-gray-500">{{ assignment.date }}</p>
            <p class="text-sm text-gray-600 mt-1">{{ assignment.description }}</p>
          </div>
          <div class="flex flex-col items-end space-y-2">
            <span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Graded: {{ assignment.grade }}%</span>
            <button class="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-md cursor-not-allowed" disabled>View</button>
          </div>
    </div>
</template>