<template>
  <div CLASS="component">
    <h1 class="headerTitle">Wonderful Quotes</h1>
    <div class="progressBar">
      <div class="innerBar" :style="{width: barWidth}">
        {{ barInfo }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      quoteCounter: Number,
      maxQuoteCount: Number
    },
    computed:{
      barInfo(){
        if(this.quoteCounter == 0)
          return;
        else
          return this.quoteCounter + ' / ' + this.maxQuoteCount;
      },
      barWidth(){
        return (this.quoteCounter / this.maxQuoteCount) * 100 + '%'
      }

    }
  }
</script>

<style scoped>
  *{
    box-sizing: border-box;
  }
  .component{
    margin-top: 2em;
  }
  .headerTitle {
    font-family: Aladin;
  }
  .progressBar{
    height: 25px;
    width: 100%;
    border: 1px solid grey;
    border-radius: 20px;
    background-color: #e9e9e9;
    margin: 2em 0;
  }
  .innerBar{
    border-radius: 20px;
    background-color: #94e233;
    width: 80%;
    height: 100%;
    text-align: center;
    color: darkslategray;
    transition: all .2s ease;
  }
</style>
