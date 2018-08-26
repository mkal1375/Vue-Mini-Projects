<template>
  <div class="component">
    <textarea cols="40" rows="5" placeholder="write your quote . . " v-model="quoteText"
              @keyup.enter="saveQuote()"></textarea>
    <button @clik="saveQuote()">Save Quote</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        quoteText: '',
      }
    },
    props: {
      saveQuoteFn: Function,
    },
    methods: {
      saveQuote() {
        this.saveQuoteFn(this.quoteText);
        this.quoteText = ''
      }
    }
  }
</script>

<style scoped>
  .component {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  textarea {
    padding: 1em;
    border: 1px solid grey;
    border-radius: 10px;
    resize: none;
    margin-bottom: 1em;
    transition: all .2s ease;
  }

  textarea:focus {
    box-shadow: 0 1px 5px #aaaaaa;
  }

  button {
    padding: .3em 1em;
    border: 3px solid #94e233;
    border-radius: 20px;
    background-color: white;
    transition: all .2s ease;
  }

  button:hover {
    background-color: #94e233;
    cursor: pointer;
  }
</style>
