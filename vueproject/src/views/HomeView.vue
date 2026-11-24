
<template>
    <div class="HomeView">
        <div class="side"></div>

        <div class="posts">
            <PostItem
                v-for="post in postList"
                :key="post.id"
                :post="post"
            />

            <button
                class="reset-button"
                type="button"
                @click="resetLikes"
            >
                Reset likes
            </button>
        </div>

        <div class="side"></div>
    </div>
</template>

<script>
import PostItem from '@/components/PostItem.vue'

export default {
    name: "HomeView",
    components: {
        PostItem
    },
    computed: {
        postList() {
            return this.$store.state.postList
        }
    },
    methods: {
        resetLikes() {
            this.$store.commit('resetLikes');
        }
    }
}
</script>

<style scoped>
.HomeView {
    display: flex;
    gap: 12px;
}

.side {
    flex: 1;
    background-color: #d1d1d1;
    border-radius: 12px;
}

.posts {
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.reset-button {
    align-self: center;
    background-color: #8db5e8;
    color: black;
    border: none;
    border-radius: 20px;
    padding: 6px 18px;
    cursor: pointer;
    font-size: 14px;
}

.reset-button:hover {
    background-color: #70a2e0;
}
</style>
