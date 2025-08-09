<script setup>

</script>
<template>
 <main class="flex-1 px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        <!-- Cover & Basic Info -->
        <div class="bg-white rounded-lg shadow overflow-hidden">
          <div class="h-40 bg-indigo-600 relative">
            <!-- Cover image overlay with gradient for readability -->
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80"
              alt="Cover"
              class="w-full h-full object-cover opacity-80"
            />
            <div class="absolute inset-0 bg-indigo-600 opacity-50"></div>
            <!-- Avatar and name overlay -->
            <div class="absolute bottom-0 left-0 ml-6 mb-6 flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?auto=format&fit=facearea&facepad=3&w=64&h=64&q=80"
                alt="Avatar"
                class="w-20 h-20 rounded-full border-4 border-white"
              />
              <div class="text-white">
                <h2 class="text-2xl font-bold">Alex Johnson</h2>
                <p class="text-sm">Computer Science – Class of 2026</p>
              </div>
            </div>
          </div>
          <!-- Profile actions -->
          <div class="p-4 flex justify-between items-center">
            <div>
              <span class="text-sm text-gray-600">Manila, Philippines</span>
            </div>
            <button class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 text-sm">Edit Profile</button>
          </div>
        </div>
        <!-- About Section -->
        <section class="bg-white rounded-lg shadow p-6">
          <h3 class="text-lg font-semibold mb-4">About</h3>
          <p class="text-gray-700 mb-4">
            I’m a third‑year computer science student passionate about artificial
            intelligence and machine learning.  In my spare time I enjoy
            participating in hackathons, building open‑source projects, and
            teaching coding to younger students.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <span class="font-medium">Major:</span> Computer Science
            </div>
            <div>
              <span class="font-medium">Year:</span> Junior (Class of 2026)
            </div>
            <div>
              <span class="font-medium">Email:</span> alex.johnson@example.edu
            </div>
            <div>
              <span class="font-medium">Interests:</span> AI, Robotics, Music
            </div>
            <div>
              <span class="font-medium">Skills:</span> Python, C++, React
            </div>
          </div>
        </section>
        <!-- Recent Posts -->
        <section class="bg-white rounded-lg shadow p-6 space-y-6">
          <h3 class="text-lg font-semibold">Recent Posts</h3>
          <!-- Post item -->
          <div class="border-t pt-4 first:border-t-0 first:pt-0">
            <div class="flex items-start space-x-3">
              <img
                src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?auto=format&fit=facearea&facepad=3&w=64&h=64&q=80"
                alt="Avatar"
                class="w-10 h-10 rounded-full"
              />
              <div class="flex-1">
                <div class="flex items-center justify-between">
                  <div>
                    <h4 class="font-semibold text-gray-800">Alex Johnson</h4>
                    <span class="text-sm text-gray-500">Posted 3 days ago</span>
                  </div>
                  <button class="text-gray-400 hover:text-gray-600">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="1" />
                      <circle cx="19" cy="12" r="1" />
                      <circle cx="5" cy="12" r="1" />
                    </svg>
                  </button>
                </div>
                <p class="mt-2 text-gray-700">
                  Just completed building a chatbot using natural language
                  processing!  Excited to integrate it into our study group
                  platform.
                </p>
                <div class="mt-3 flex space-x-6 text-sm text-gray-600">
                  <button class="flex items-center hover:text-indigo-600">
                    <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14 9l3-3 3 3m0 6l-3 3-3-3M3 12h12" />
                    </svg>
                    24 Likes
                  </button>
                  <button class="flex items-center hover:text-indigo-600">
                    <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8 10h.01M12 10h.01M16 10h.01M21 16v-5a2 2 0 00-2-2H5a2 2 0 00-2 2v5a2 2 0 002 2h3l4 4 4-4h3a2 2 0 002-2z"
                      />
                    </svg>
                    8 Comments
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- Another Post -->
          <div class="border-t pt-4">
            <div class="flex items-start space-x-3">
              <img
                src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?auto=format&fit=facearea&facepad=3&w=64&h=64&q=80"
                alt="Avatar"
                class="w-10 h-10 rounded-full"
              />
              <div class="flex-1">
                <div class="flex items-center justify-between">
                  <div>
                    <h4 class="font-semibold text-gray-800">Alex Johnson</h4>
                    <span class="text-sm text-gray-500">Posted 1 week ago</span>
                  </div>
                  <button class="text-gray-400 hover:text-gray-600">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="1" />
                      <circle cx="19" cy="12" r="1" />
                      <circle cx="5" cy="12" r="1" />
                    </svg>
                  </button>
                </div>
                <p class="mt-2 text-gray-700">
                  Thanks to everyone who came to my workshop on deep learning!  It
                  was a great turnout and I hope you all found it useful.
                </p>
                <div class="mt-3 flex space-x-6 text-sm text-gray-600">
                  <button class="flex items-center hover:text-indigo-600">
                    <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14 9l3-3 3 3m0 6l-3 3-3-3M3 12h12" />
                    </svg>
                    43 Likes
                  </button>
                  <button class="flex items-center hover:text-indigo-600">
                    <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8 10h.01M12 10h.01M16 10h.01M21 16v-5a2 2 0 00-2-2H5a2 2 0 00-2 2v5a2 2 0 002 2h3l4 4 4-4h3a2 2 0 002-2z"
                      />
                    </svg>
                    12 Comments
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Friends Section -->
        <section class="bg-white rounded-lg shadow p-6">
          <h3 class="text-lg font-semibold mb-4">Friends</h3>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <!-- Friend card -->
            <div class="flex flex-col items-center text-center">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=facearea&facepad=3&w=64&h=64&q=80"
                alt="Friend avatar"
                class="w-16 h-16 rounded-full mb-2"
              />
              <span class="font-medium text-gray-800">Jane Doe</span>
              <span class="text-xs text-gray-500">Biology</span>
            </div>
            <div class="flex flex-col items-center text-center">
              <img
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=facearea&facepad=3&w=64&h=64&q=80"
                alt="Friend avatar"
                class="w-16 h-16 rounded-full mb-2"
              />
              <span class="font-medium text-gray-800">John Smith</span>
              <span class="text-xs text-gray-500">Physics</span>
            </div>
            <div class="flex flex-col items-center text-center">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=3&w=64&h=64&q=80"
                alt="Friend avatar"
                class="w-16 h-16 rounded-full mb-2"
              />
              <span class="font-medium text-gray-800">Emily Chen</span>
              <span class="text-xs text-gray-500">Mathematics</span>
            </div>
            <div class="flex flex-col items-center text-center">
              <img
                src="https://images.unsplash.com/photo-1500522144261-ea64433bbe27?auto=format&fit=facearea&facepad=3&w=64&h=64&q=80"
                alt="Friend avatar"
                class="w-16 h-16 rounded-full mb-2"
              />
              <span class="font-medium text-gray-800">Sophia Lee</span>
              <span class="text-xs text-gray-500">Economics</span>
            </div>
          </div>
        </section>
      </main>
</template>
