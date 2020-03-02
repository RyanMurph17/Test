<template>
  <div class="Articles">
      <a :href="feed.link">  {{feed.title}}</a>
  </div>
</template>

<script>
   export default {
      props: ["feed"]
   }
</script>

<style>

</style>
