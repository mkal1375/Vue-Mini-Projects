<template>
  <div class="container">
    <div class="innerWrapper">
      <mkal-main></mkal-main>
    </div>
  </div>
</template>

<script>
  import Main from './components/main.vue'

  export default {
    name: 'app',
    components: {
      'mkal-main': Main
    },
  }
</script>

<style>
  .container {
    max-width: 900px;
  }
</style>
