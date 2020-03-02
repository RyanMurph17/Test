<template>

<!--  <div class="flex-box mt-3">-->
<div style="flex:1;">
      <a class="twitter-timeline" data-chrome="nofooter noheader noborders tranparent" data-width="400"
    data-height="700" href="https://twitter.com/RyanMurph17/lists/manchester-united"></a>
    </div>

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
