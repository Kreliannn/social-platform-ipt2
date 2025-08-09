<script setup>
    import { ref } from 'vue';


    const isOpen = ref(false)

    const toggle = () => isOpen.value = !isOpen.value 
</script>

<template>
    <header class="bg-white border-b shadow-sm fixed top-0 inset-x-0 z-50">
        <div class="max-w-7xl mx-auto h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8">
            <div class="flex items-center space-x-4">
                <a href="feed.html" class="text-2xl font-bold text-indigo-600">EduConnect</a>
                <div class="hidden md:block">
                    <input
                        type="text"
                        placeholder="Search for courses, people, or communities…"
                        class="w-64 bg-gray-100 border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
            </div>
            <div class="flex items-center space-x-4">
                <button class="relative text-gray-600 hover:text-indigo-600 focus:outline-none">
                    <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                    </svg>
                    <span
                        class="absolute -top-1 -right-1 bg-red-500 text-xs text-white rounded-full w-4 h-4 flex items-center justify-center"
                        >3</span
                    >
                </button>
                <button
                    class="relative text-gray-600 hover:text-indigo-600 focus:outline-none md:hidden"
                    id="toggle-chat-mobile"
                >
                    <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17 8h2a2 2 0 012 2v7a2 2 0 01-2 2H7l-4 4V10a2 2 0 012-2h2"
                        />
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 3h2a2 2 0 012 2v7a2 2 0 01-2 2H9l-4 4V5a2 2 0 012-2h2"
                        />
                    </svg>
                    <span
                        class="absolute -top-1 -right-1 bg-red-500 text-xs text-white rounded-full w-4 h-4 flex items-center justify-center"
                        >2</span
                    >
                </button>
                <div class="relative">
                    <button id="profile-button" class="flex items-center focus:outline-none"  @click="toggle">
                        <img
                            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?auto=format&fit=facearea&facepad=3&w=64&h=64&q=80"
                            alt="User avatar"
                            class="w-8 h-8 rounded-full"
                        />
                    </button>
                    <div
                        id="profile-dropdown"
                        class=" absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-10"
                        :class="isOpen ? 'block' : 'hidden'"
                    >
                        <router-link 
                            to="/profile"
                            class="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                        >
                            View Profile
                        </router-link >
                        <router-link 
                            to="/guest/login"
                            class="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                        >
                            Logout
                        </router-link >
                    
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
