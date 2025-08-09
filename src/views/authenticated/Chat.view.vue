<script setup>

</script>
<template>
    <main class="flex-1 flex flex-col md:flex-row overflow-hidden px-4 sm:px-6 lg:px-8 py-6 space-y-6 md:space-y-0 md:space-x-6">
        <!-- Conversations list -->
        <section class="md:w-1/3 bg-white rounded-lg shadow overflow-hidden flex flex-col">
          <div class="px-4 py-3 border-b flex justify-between items-center">
            <h2 class="font-semibold text-gray-800">Conversations</h2>
            <button class="text-indigo-600 text-sm hover:underline">New Chat</button>
          </div>
          <div class="flex-1 overflow-y-auto divide-y">
            <!-- Conversation item active -->
            <div class="px-4 py-3 bg-gray-100 cursor-pointer flex items-center">
              <img
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=facearea&facepad=3&w=64&h=64&q=80"
                alt="Contact"
                class="w-10 h-10 rounded-full mr-3"
              />
              <div class="flex-1 min-w-0">
                <div class="flex justify-between items-center">
                  <span class="font-medium text-gray-800">John Smith</span>
                  <span class="text-xs text-gray-500">3m</span>
                </div>
                <p class="text-sm text-gray-600 truncate">Sure, let's meet at 2 PM.</p>
              </div>
            </div>
            <!-- Conversation item -->
            <div class="px-4 py-3 hover:bg-gray-100 cursor-pointer flex items-center">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=3&w=64&h=64&q=80"
                alt="Contact"
                class="w-10 h-10 rounded-full mr-3"
              />
              <div class="flex-1 min-w-0">
                <div class="flex justify-between items-center">
                  <span class="font-medium text-gray-800">Emily Chen</span>
                  <span class="text-xs text-gray-500">1h</span>
                </div>
                <p class="text-sm text-gray-600 truncate">Don't forget our meeting tomorrow.</p>
              </div>
            </div>
            <div class="px-4 py-3 hover:bg-gray-100 cursor-pointer flex items-center">
              <img
                src="https://images.unsplash.com/photo-1500522144261-ea64433bbe27?auto=format&fit=facearea&facepad=3&w=64&h=64&q=80"
                alt="Contact"
                class="w-10 h-10 rounded-full mr-3"
              />
              <div class="flex-1 min-w-0">
                <div class="flex justify-between items-center">
                  <span class="font-medium text-gray-800">Sophia Lee</span>
                  <span class="text-xs text-gray-500">2h</span>
                </div>
                <p class="text-sm text-gray-600 truncate">Thanks for sharing the notes!</p>
              </div>
            </div>
            <!-- More conversation items can go here -->
          </div>
        </section>
        <!-- Chat Window -->
        <section class="flex-1 bg-white rounded-lg shadow overflow-hidden flex flex-col">
          <div class="px-4 py-3 border-b flex justify-between items-center">
            <div class="flex items-center space-x-3">
              <img
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=facearea&facepad=3&w=64&h=64&q=80"
                alt="Contact"
                class="w-8 h-8 rounded-full"
              />
              <span class="font-medium text-gray-800">John Smith</span>
            </div>
            <button class="text-gray-400 hover:text-gray-600">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="flex-1 p-4 overflow-y-auto space-y-3">
            <div class="flex">
              <img
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=facearea&facepad=3&w=64&h=64&q=80"
                alt="Avatar"
                class="w-6 h-6 rounded-full mr-2"
              />
              <div class="bg-gray-100 rounded-md p-2 max-w-xs text-sm">
                Hey Alex! Are you joining the study session later?
              </div>
            </div>
            <div class="flex justify-end">
              <div class="bg-indigo-600 text-white rounded-md p-2 max-w-xs text-sm">
                Yes, I'll be there! See you at 5 PM.
              </div>
            </div>
            <div class="flex">
              <img
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=facearea&facepad=3&w=64&h=64&q=80"
                alt="Avatar"
                class="w-6 h-6 rounded-full mr-2"
              />
              <div class="bg-gray-100 rounded-md p-2 max-w-xs text-sm">
                Great! Don't forget to bring the notes.
              </div>
            </div>
          </div>
          <div class="p-3 border-t">
            <form class="flex items-center">
              <input
                type="text"
                placeholder="Type a message…"
                class="flex-1 bg-gray-100 border border-gray-300 rounded-full py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button type="submit" class="ml-2 text-indigo-600 hover:text-indigo-800 focus:outline-none">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
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
        </section>
      </main>
</template>
