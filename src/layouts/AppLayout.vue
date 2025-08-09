<script setup>
import Header from '@/components/appLayout/Header.vue'
import Sidebar from '@/components/appLayout/Sidebar.vue'
import RightSidebar from '@/components/appLayout/RightSidebar.vue'
import Drawer from '@/components/appLayout/Drawer.vue'
</script>
<template>
    <div class="bg-gray-100 text-gray-800 antialiased">
        <!-- Top Navigation Bar -->
        <Header />

        <!-- Layout wrapper -->
        <div class="pt-16 max-w-7xl mx-auto flex flex-col lg:flex-row">
            <!-- Left Sidebar -->
            <Sidebar />
            <!-- Main Content Area -->
            <main class="flex-1 px-4 sm:px-6 lg:px-8 py-6 space-y-8">
                <!-- All contents must go here -->
                <RouterView />
            </main>
            <!-- Right Sidebar -->
            <RightSidebar />
        </div>
        <!-- Mobile chat drawer -->
        <Drawer />
    </div>
</template>
