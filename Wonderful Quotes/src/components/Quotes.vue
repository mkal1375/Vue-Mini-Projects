<template>
  <div class="component">
    <mkal-quote v-for="(quote, index) in quotesList" @click.native="deleteQuoteFn(index)">
      {{ quote }}
    </mkal-quote>
  </div>
</template>

<script>
  import Quote from './Quote'
  export default {
    props: {
      quotesList: Array,
      deleteQuoteFn: Function
    },
    components:{
      mkalQuote: Quote
    }
  }
</script>

<style scoped>

  .quote:hover {
    background-color: rgb(255, 193, 190);
    cursor: pointer;
  }

  .component {
    margin-top: 2em;
  }
</style>
