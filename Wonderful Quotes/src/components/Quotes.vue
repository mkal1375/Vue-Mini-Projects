<template>
  <div class="component">
      <div class="quote" v-for="(quote, index) in quotesList" @click="deleteQuoteFn(index)">
        {{ quote }}
      </div>
    </div>
</template>

<script>
  export default {
    props: {
      quotesList: Array,
      deleteQuoteFn: Function
    },
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
  .quote:hover{
    background-color: rgb(255, 193, 190);
    cursor: pointer;
  }
  .component{
    margin-top: 2em;
  }
</style>
