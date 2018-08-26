<template>
  <div class="container">
  <div>
    <mkal-header :quoteCounter="quoteCounter" :maxQuoteCount="maxQuoteCount"></mkal-header>
    <mkal-new-quote @newQuoteCreated="saveQuote"></mkal-new-quote>
    <mkal-quotes :quotesList="quotesList" :deleteQuoteFn="deleteQuote" v-if=""></mkal-quotes>
  </div>
  </div>
</template>

<script>
  import Header from './components/header'
  import NewQuote from './components/NewQuote'
  import Quotes from './components/Quotes'

  export default {
    components: {
      mkalHeader: Header,
      mkalNewQuote: NewQuote,
      mkalQuotes: Quotes,
    },
    data() {
      return {
        maxQuoteCount: 10,
        quotesList: [],
      }
    },
    computed:{
      quoteCounter(){
        return this.quotesList.length
      }
    },
    methods: {
      saveQuote(quote) {
        if (quote !== '') {
          if (this.quoteCounter < 10) {
            this.quotesList.push(quote);
          }
          else
            alert("You can't add new quote anymore. please delete some of theme first.")
        }
      },
      deleteQuote(quoteIndex) {
        this.quotesList.splice(quoteIndex, 1);
      }
    },
  }
</script>
