<template>
    <div class="HomeView">
        <h1>This is the home view</h1>
          <PostItem
            v-for="post in postList"
            :key="post.id"
            :post="post"
          />
    </div>
</template>

<script>
import PostItem from '@/components/PostItem.vue'
export default {
    name:"HomeView",
    components: {
        PostItem
    },
    computed: {
        postList() {
            return this.$store.state.postList
        }
    }
}

</script>

<style scoped>

</style>