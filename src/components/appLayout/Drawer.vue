<script setup></script>

<template>
     <div
        id="mobile-chat"
            class="fixed inset-y-0 right-0 w-80 bg-white shadow-lg transform translate-x-full transition-transform duration-300 ease-in-out flex flex-col z-50"
        >
            <div class="bg-gray-100 px-4 py-3 flex items-center justify-between border-b">
                <h3 class="text-lg font-semibold">Chats</h3>
                <button id="close-mobile-chat" class="text-gray-500 hover:text-gray-700">
                    <svg
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
            <div class="flex-1 overflow-y-auto p-4 space-y-3">
                <!-- Chat items replicates list -->
                <div class="flex items-center p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                    <img
                        src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=facearea&facepad=3&w=64&h=64&q=80"
                        alt="Contact avatar"
                        class="w-8 h-8 rounded-full mr-3"
                    />
                    <div class="flex-1">
                        <div class="flex justify-between text-sm">
                            <span class="font-medium">John Smith</span>
                            <span class="text-gray-500">3m</span>
                        </div>
                        <p class="text-xs text-gray-600 truncate">Sure, let's meet at 2 PM.</p>
                    </div>
                </div>
                <!-- Additional items can be added -->
            </div>
        </div>
</template>
