<script setup>
    import CommunityCard from "@/components/communities/CommunityCard.vue"
    const communities = [
        {
            icon: "CS",
            iconColor: "bg-indigo-100 text-indigo-600",
            title: "Computer Science Society",
            members: "1.2K members",
            description: "A community for computer science enthusiasts to discuss coding, algorithms, and emerging technologies. Share resources, ask questions, and collaborate on projects."
        },
        {
            icon: "Bio",
            iconColor: "bg-green-100 text-green-600",
            title: "Biology Club",
            members: "850 members",
            description: "Join us to explore the wonders of life science. From genetics to ecology, our members collaborate on research, share articles, and organize lab sessions."
        },
        {
            icon: "Art",
            iconColor: "bg-pink-100 text-pink-600",
            title: "Arts Society",
            members: "620 members",
            description: "A haven for painters, sculptors, and creators of all kinds. Share your work, join art challenges, and organize exhibitions on campus."
        },
        {
            icon: "Math",
            iconColor: "bg-yellow-100 text-yellow-600",
            title: "Mathematics Club",
            members: "950 members",
            description: "Delve into the world of numbers and theories. Participate in problem-solving sessions, math competitions, and collaborative study groups."
        },
        {
            icon: "Eco",
            iconColor: "bg-blue-100 text-blue-600",
            title: "Environmental Club",
            members: "540 members",
            description: "Passionate about sustainability and conservation? Join us to participate in cleanup drives, awareness campaigns, and green initiatives around campus."
        },
        {
            icon: "Lit",
            iconColor: "bg-purple-100 text-purple-600",
            title: "Literature Circle",
            members: "430 members",
            description: "For lovers of books, poetry, and creative writing. Share recommendations, host readings, and collaborate on writing projects."
        }
    ];
</script>
<template>
    <h1 class="text-2xl font-bold mb-4">Explore Communities</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       <CommunityCard
            v-for="(community, index) in communities"
            :key="index"
            :community = "community"
        />
    </div>

    <!-- Create Community CTA -->
    <div class="mt-8 bg-white rounded-lg shadow p-6 text-center">
        <h2 class="text-lg font-semibold mb-2">Want to start your own community?</h2>
        <p class="text-sm text-gray-600 mb-4">
            If you can’t find what you’re looking for, create a new community for your interest or
            study group.
        </p>
        <button class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
            Create Community
        </button>
    </div>
</template>
