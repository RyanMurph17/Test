
<template>
  <div style="display: flex;">
<TwitterList> </TwitterList>
<div style="flex:1;">
<TweetButton> </TweetButton>
</div>
<div style="flex:1;">
<ul>
      <feed v-for="feed in feeds" :feed="feed" :key="feed.title"></feed>
     </ul>
   </div>
  </div>
</template>

<script>

import TwitterList from './TwitterList.vue'
import TweetButton from './TweetButton.vue'
import io from 'socket.io-client'
   import Feed from './Feed.vue'
   export default {
      components: {
         Feed,
          TwitterList,
          TweetButton
      },
      data () {
         return {
            feeds: []
         }
      },
      mounted() {
         this.subscribeToFeed();
      },
      methods: {
         subscribeToFeed() {
            const socket = io('http://localhost:8081');
            socket.on('feed', data => {
               this.feeds = [...data.feed]
            });
         }
      }
   }
</script>

<style>

</style>
