<template>
  <div class="quote">
    <slot>

    </slot>
  </div>
</template>

<script>
    export default {
        name: "Quote"
    }
</script>

<style scoped>
  .quote{
    font-family: Aladin;
    display: table;
    font-size: 1.5em;
    padding: 1em;
    border: 1px solid lightgray;
    margin: .2em;
    border-radius: 10px;
    transition: all .3s ease;
    float: left;
  }
</style>
