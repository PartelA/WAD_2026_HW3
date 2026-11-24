<template>
  <HeaderComponent />
  <router-view/>
  <FooterComponent />
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: "Courier New", Courier, monospace;
  background-color: white;
}

#app {
  max-width: 900px;
  margin: 0 auto;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
