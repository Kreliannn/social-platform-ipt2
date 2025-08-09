<script setup>
    import CompletedAssignment from "@/components/assignment/completedAssignment.vue"
    const completedAss = [
        {
            title: "Physics Lab Report",
            date: "Physics – Submitted Jul 29, 2025",
            description: "Experiment on projectile motion with detailed data analysis.",
            grade: 95
        },
        {
            title: "Essay on Climate Change",
            date: "Environmental Science – Submitted Jul 22, 2025",
            description: "A persuasive essay discussing current climate challenges and solutions.",
            grade: 88
        },
        {
            title: "Programming Assignment #2",
            date: "Programming 101 – Submitted Jul 18, 2025",
            description: "Implement a basic CRUD application using Python.",
            grade: 92
        }
    ]

</script>
<template>
    <main class="flex-1 px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        <h1 class="text-2xl font-bold mb-6">Your Assignments</h1>
        <!-- Upcoming assignments -->
        <section class="bg-white rounded-lg shadow p-6">
          <h2 class="text-lg font-semibold mb-4">Upcoming Assignments</h2>
          <div class="space-y-4">
            <!-- Assignment card -->
            <div class="flex items-start justify-between bg-gray-50 p-4 rounded-md">
              <div>
                <h3 class="font-medium text-gray-800">Calculus Homework #3</h3>
                <p class="text-sm text-gray-500">Mathematics – Due Aug 5, 2025</p>
                <p class="text-sm text-gray-600 mt-1">Complete exercises 7–12 on page 143 of the textbook.</p>
              </div>
              <div class="flex flex-col items-end space-y-2">
                <span class="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">In Progress</span>
                <button class="bg-indigo-600 text-white text-sm px-3 py-1 rounded-md hover:bg-indigo-700">Submit</button>
              </div>
            </div>
            <div class="flex items-start justify-between bg-gray-50 p-4 rounded-md">
              <div>
                <h3 class="font-medium text-gray-800">Group Project Proposal</h3>
                <p class="text-sm text-gray-500">Computer Science – Due Aug 10, 2025</p>
                <p class="text-sm text-gray-600 mt-1">Draft the proposal for your final group project including objectives and timeline.</p>
              </div>
              <div class="flex flex-col items-end space-y-2">
                <span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Not Started</span>
                <button class="bg-indigo-600 text-white text-sm px-3 py-1 rounded-md hover:bg-indigo-700">Start</button>
              </div>
            </div>
            <div class="flex items-start justify-between bg-gray-50 p-4 rounded-md">
              <div>
                <h3 class="font-medium text-gray-800">Reading Response</h3>
                <p class="text-sm text-gray-500">English Literature – Due Aug 12, 2025</p>
                <p class="text-sm text-gray-600 mt-1">Write a 500‑word reflection on the assigned short story.</p>
              </div>
              <div class="flex flex-col items-end space-y-2">
                <span class="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">Overdue</span>
                <button class="bg-indigo-600 text-white text-sm px-3 py-1 rounded-md hover:bg-indigo-700">Submit Late</button>
              </div>
            </div>
          </div>
        </section>
        <!-- Completed assignments -->
        <section class="bg-white rounded-lg shadow p-6">
          <h2 class="text-lg font-semibold mb-4">Completed Assignments</h2>
          <div class="space-y-4">
                <CompletedAssignment v-for="(assignment, index) in completedAss" :key="index" :assignment="assignment"/>
          </div>
        </section>
      </main>
</template>
