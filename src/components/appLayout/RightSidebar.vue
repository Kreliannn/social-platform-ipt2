<script setup></script>
<template>
    <aside class="hidden xl:flex xl:flex-col xl:w-72 border-l bg-white px-4 py-6 space-y-8">
        <!-- Profile card -->
        <div class="bg-gray-50 p-4 rounded-lg shadow-sm">
            <div class="flex items-center space-x-3">
                <img
                    src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?auto=format&fit=facearea&facepad=3&w=64&h=64&q=80"
                    alt="User avatar"
                    class="w-12 h-12 rounded-full"
                />
                <div>
                    <h4 class="font-semibold text-gray-800">Alex Johnson</h4>
                    <p class="text-sm text-gray-500">Computer Science, Class of 2026</p>
                </div>
            </div>
            <div class="mt-4 text-gray-600 text-sm leading-snug">
                Welcome back! Here’s your quick overview: 3 new messages, 2 upcoming deadlines, and
                1 event today.
            </div>
            <div class="mt-4 flex space-x-2">
                <router-link 
                    to="/profile"
                    class="flex-1 bg-indigo-600 text-white text-sm text-center py-1 rounded-md hover:bg-indigo-700"
                    >View Profile</router-link 
                >
                <a
                    href="#settings"
                    class="flex-1 bg-gray-200 text-gray-700 text-sm text-center py-1 rounded-md hover:bg-gray-300"
                    >Settings</a
                >
            </div>
        </div>
        <!-- Chat section: list & conversation (similar to main template) -->
        <div class="flex-1 flex flex-col">
            <h3 class="text-lg font-semibold mb-4">Chats</h3>
            <div class="flex-1 overflow-y-auto space-y-3">
                <div class="flex items-center p-2 rounded-md bg-gray-100 cursor-pointer">
                    <img
                        src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=facearea&facepad=3&w=64&h=64&q=80"
                        alt="Contact"
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
                <div class="flex items-center p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                    <img
                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=3&w=64&h=64&q=80"
                        alt="Contact"
                        class="w-8 h-8 rounded-full mr-3"
                    />
                    <div class="flex-1">
                        <div class="flex justify-between text-sm">
                            <span class="font-medium">Emily Chen</span>
                            <span class="text-gray-500">1h</span>
                        </div>
                        <p class="text-xs text-gray-600 truncate">
                            Don't forget our meeting tomorrow.
                        </p>
                    </div>
                </div>
                <div class="flex items-center p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                    <img
                        src="https://images.unsplash.com/photo-1500522144261-ea64433bbe27?auto=format&fit=facearea&facepad=3&w=64&h=64&q=80"
                        alt="Contact"
                        class="w-8 h-8 rounded-full mr-3"
                    />
                    <div class="flex-1">
                        <div class="flex justify-between text-sm">
                            <span class="font-medium">Sophia Lee</span>
                            <span class="text-gray-500">2h</span>
                        </div>
                        <p class="text-xs text-gray-600 truncate">Thanks for sharing the notes!</p>
                    </div>
                </div>
            </div>

            
            <div class="mt-4 bg-gray-50 border rounded-md flex flex-col h-64">
                <div
                    class="bg-gray-100 px-3 py-2 border-b text-sm font-medium flex justify-between items-center"
                >
                    <span>John Smith</span>
                    <svg
                        class="w-4 h-4 text-gray-400"
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
                </div>
                <div class="flex-1 p-3 space-y-2 overflow-y-auto">
                    <div class="flex">
                        <img
                            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=facearea&facepad=3&w=64&h=64&q=80"
                            alt="Avatar"
                            class="w-6 h-6 rounded-full mr-2"
                        />
                        <div class="bg-white rounded-md p-2 max-w-xs shadow text-sm">
                            Hey Alex! Are you joining the study session later?
                        </div>
                    </div>
                    <div class="flex justify-end">
                        <div
                            class="bg-indigo-600 text-white rounded-md p-2 max-w-xs shadow text-sm"
                        >
                            Yes, I'll be there! See you at 5 PM.
                        </div>
                    </div>
                    <div class="flex">
                        <img
                            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=facearea&facepad=3&w=64&h=64&q=80"
                            alt="Avatar"
                            class="w-6 h-6 rounded-full mr-2"
                        />
                        <div class="bg-white rounded-md p-2 max-w-xs shadow text-sm">
                            Great! Don't forget to bring the notes.
                        </div>
                    </div>
                </div>
                <div class="p-2 border-t">
                    <form class="flex items-center">
                        <input
                            type="text"
                            class="flex-1 bg-gray-100 border border-gray-300 rounded-full py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Type a message…"
                        />
                        <button
                            type="submit"
                            class="ml-2 text-indigo-600 hover:text-indigo-800 focus:outline-none"
                        >
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
                                    d="M2 12l1.82 1.275c.213.149.213.5 0 .65L2 15.2m20-6v6m0 0l-1.82-1.275c-.213-.149-.213-.5 0-.65L22 12"
                                />
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M15 12H4m16 0h-7"
                                />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </aside>
</template>
