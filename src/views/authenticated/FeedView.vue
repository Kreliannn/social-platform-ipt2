<script setup></script>
<template>
    <div class="bg-white rounded-lg shadow p-4">
        <div class="flex space-x-4">
            <img
                src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?auto=format&fit=facearea&facepad=3&w=64&h=64&q=80"
                alt="Avatar"
                class="w-10 h-10 rounded-full"
            />
            <textarea
                rows="2"
                placeholder="Share something with your classmates…"
                class="flex-1 resize-none bg-gray-100 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
        </div>
        <div class="mt-3 flex justify-end space-x-3">
            <button class="flex items-center text-gray-600 hover:text-indigo-600">
                <svg
                    class="w-5 h-5 mr-1"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 15a4 4 0 018 0h6a4 4 0 018 0m-9-4V2m0 0h4m-4 0H7"
                    />
                </svg>
                Photo/Video
            </button>
            <button class="flex items-center text-gray-600 hover:text-indigo-600">
                <svg
                    class="w-5 h-5 mr-1"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                Poll
            </button>
            <button
                class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
            >
                Post
            </button>
        </div>
    </div>
    <!-- Sample Post (reused) -->
    <div class="bg-white rounded-lg shadow overflow-hidden">
        <div class="p-4 flex items-start space-x-3">
            <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=facearea&facepad=3&w=64&h=64&q=80"
                alt="User avatar"
                class="w-10 h-10 rounded-full"
            />
            <div class="flex-1">
                <div class="flex items-center justify-between">
                    <div>
                        <h4 class="font-semibold text-gray-800">Jane Doe</h4>
                        <span class="text-sm text-gray-500">Posted 2 hours ago</span>
                    </div>
                    <button class="text-gray-400 hover:text-gray-600">
                        <svg
                            class="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                        >
                            <circle cx="12" cy="12" r="1" />
                            <circle cx="19" cy="12" r="1" />
                            <circle cx="5" cy="12" r="1" />
                        </svg>
                    </button>
                </div>
                <p class="mt-2 text-gray-700">
                    Does anyone have resources on linear algebra? I’m struggling with eigenvalues
                    and eigenvectors. Any help is appreciated!
                </p>
                <div class="mt-4 flex items-center space-x-6 text-gray-600">
                    <button class="flex items-center hover:text-indigo-600">
                        <svg
                            class="w-5 h-5 mr-1"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M14 9l3-3 3 3m0 6l-3 3-3-3M3 12h12"
                            />
                        </svg>
                        Like (12)
                    </button>
                    <button class="flex items-center hover:text-indigo-600">
                        <svg
                            class="w-5 h-5 mr-1"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M8 10h.01M12 10h.01M16 10h.01M21 16v-5a2 2 0 00-2-2H5a2 2 0 00-2 2v5a2 2 0 002 2h3l4 4 4-4h3a2 2 0 002-2z"
                            />
                        </svg>
                        Comment (4)
                    </button>
                    <button class="flex items-center hover:text-indigo-600">
                        <svg
                            class="w-5 h-5 mr-1"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M4 4v5h.582c3.592 0 5.444 1.13 5.444 4.618V20h4.289V13.618c0-3.488 1.852-4.618 5.444-4.618H20V4H4z"
                            />
                        </svg>
                        Share
                    </button>
                </div>
            </div>
        </div>
        <!-- Comments preview-->
        <div class="bg-gray-50 border-t px-4 py-3 space-y-2">
            <div class="flex space-x-3">
                <img
                    src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=facearea&facepad=3&w=64&h=64&q=80"
                    alt="User avatar"
                    class="w-8 h-8 rounded-full"
                />
                <div class="flex-1 bg-white p-2 rounded-md shadow">
                    <div class="flex justify-between items-center">
                        <span class="text-sm font-semibold">John Smith</span>
                        <span class="text-xs text-gray-500">1 h</span>
                    </div>
                    <p class="text-sm text-gray-700">
                        Check out 3Blue1Brown’s videos on YouTube—great explanation!
                    </p>
                </div>
            </div>
            <div class="flex space-x-3">
                <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=3&w=64&h=64&q=80"
                    alt="User avatar"
                    class="w-8 h-8 rounded-full"
                />
                <div class="flex-1 bg-white p-2 rounded-md shadow">
                    <div class="flex justify-between items-center">
                        <span class="text-sm font-semibold">Emily Chen</span>
                        <span class="text-xs text-gray-500">30 m</span>
                    </div>
                    <p class="text-sm text-gray-700">
                        I recommend Gilbert Strang’s MIT open courseware lectures.
                    </p>
                </div>
            </div>
            <button class="text-sm text-indigo-600 hover:underline">View more comments</button>
        </div>
    </div>
    <!-- Assignments -->
    <section class="bg-white rounded-lg shadow p-4">
        <h3 class="text-lg font-semibold mb-4">Assignments</h3>
        <ul class="space-y-3">
            <li class="flex items-center justify-between">
                <div>
                    <h4 class="font-medium text-gray-800">Calculus Homework #3</h4>
                    <p class="text-sm text-gray-500">Due Aug 5, 2025</p>
                </div>
                <button
                    class="bg-green-500 text-white text-sm px-3 py-1 rounded-md hover:bg-green-600"
                >
                    Submit
                </button>
            </li>
            <li class="flex items-center justify-between">
                <div>
                    <h4 class="font-medium text-gray-800">Group Project Proposal</h4>
                    <p class="text-sm text-gray-500">Due Aug 10, 2025</p>
                </div>
                <button
                    class="bg-green-500 text-white text-sm px-3 py-1 rounded-md hover:bg-green-600"
                >
                    Submit
                </button>
            </li>
            <li class="flex items-center justify-between">
                <div>
                    <h4 class="font-medium text-gray-800">Reading Response</h4>
                    <p class="text-sm text-gray-500">Due Aug 12, 2025</p>
                </div>
                <button
                    class="bg-green-500 text-white text-sm px-3 py-1 rounded-md hover:bg-green-600"
                >
                    Submit
                </button>
            </li>
        </ul>
    </section>
    <!-- Events -->
    <section class="bg-white rounded-lg shadow p-4">
        <h3 class="text-lg font-semibold mb-4">Upcoming Events</h3>
        <ul class="space-y-3">
            <li class="flex items-center justify-between">
                <div>
                    <h4 class="font-medium text-gray-800">Webinar: Career in AI</h4>
                    <p class="text-sm text-gray-500">Aug 3, 2025 – 3:00 PM</p>
                </div>
                <button
                    class="bg-indigo-600 text-white text-sm px-3 py-1 rounded-md hover:bg-indigo-700"
                >
                    Join
                </button>
            </li>
            <li class="flex items-center justify-between">
                <div>
                    <h4 class="font-medium text-gray-800">Study Group Session</h4>
                    <p class="text-sm text-gray-500">Aug 6, 2025 – 10:00 AM</p>
                </div>
                <button
                    class="bg-indigo-600 text-white text-sm px-3 py-1 rounded-md hover:bg-indigo-700"
                >
                    Join
                </button>
            </li>
            <li class="flex items-center justify-between">
                <div>
                    <h4 class="font-medium text-gray-800">Hackathon Kickoff</h4>
                    <p class="text-sm text-gray-500">Aug 15, 2025 – 9:00 AM</p>
                </div>
                <button
                    class="bg-indigo-600 text-white text-sm px-3 py-1 rounded-md hover:bg-indigo-700"
                >
                    Join
                </button>
            </li>
        </ul>
    </section>
</template>
