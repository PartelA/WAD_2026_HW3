<template>
    <div class="HeaderComponent">
        <h1>Welcome to University blog</h1>
        <h3>Look what fellow students are doing this semester</h3>
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/register">Register Account</router-link>
        </nav>
    </div>
</template>

<script>

</script>

<style scoped>
.HeaderComponent {
    background-color: #d1d1d1;
    border-radius: 12px;
    padding: 12px;
    text-align: center;
}

h1, h3 {
    margin: 4px 0;
}

nav {
    margin-top: 8px;
}

nav a {
    color: black;
    margin: 0 6px;
}

nav a.router-link-exact-active {
    font-weight: bold;
}
</style>