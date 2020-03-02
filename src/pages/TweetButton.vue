<template>
<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-show-count="false">Tweet</a>
</template>

<script>
export default {
  data() {
    return { //returning data
    }
},

mounted(){

  let twitterScript = document.createElement('script')
  twitterScript.setAttribute('src', 'https://platform.twitter.com/widgets.js')
  document.head.appendChild(twitterScript)
}

}
</script>

<style>

</style>
