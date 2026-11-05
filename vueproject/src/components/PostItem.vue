<template>
    <div class="PostItem">
        <article class="post">
        <header>
          <div class="post-author">
            <span class="avatar"></span>
            <span class="author-name">{{ post.author }}</span>
          </div>
          <time :datetime="post.date">{{ post.date }}</time>
        </header>
        <h2>{{ post.title }}</h2>
        <img :src="post.picture_source">
        <p class="post-content">{{ post.content }}</p>
        <button class="like" type="button" aria-label="Like">👍</button>
        </article>
    </div>
</template>


<script>
export default {
  name: 'PostItem',
  props: {
    post: Object
  }
}
</script>

<style scoped>
/* ---------- Posts ---------- */
.post {
  background: #d5dbe3;
  border-radius: 8px;
  padding: 12px;
}

/* Top row of a post: avatar left, date right */
.post header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.post-author {
  display: flex;
  align-items: center;
  gap: 8px;
}

.author-name {
  font-weight: bold;
}

.post h2 {
  margin: 0 0 8px;
  font-size: 20px;
}

.post time {
  font-size: 14px;
  font-weight: bold;
}

.post img {
  display: block;
  width: 100%;          /* image always fits the post, also on a phone */
  height: auto;
  border-radius: 6px;
}

.post p {
  margin: 10px 0;
}
</style>