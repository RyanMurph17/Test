const feedparser = require('feedparser-promised');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const fs = require('fs');

server.listen(8081);


let url = 'https://www.google.ie/alerts/feeds/10663948362751557705/4511034072220974544';

// Declare a variable for the feed content
let feed = [];

// Parse the feed
feedparser.parse(url).then(items => {
  // Update the variable with the new data
  for (const [i, item] of items.entries()) {
    // Retrieve the ten first elements, with their title and description
    // And add them to the feed array
    if (i < 9) {
      feed.push({
        title: item.title,
        link: item.link
      });
    }
  }

  // Write it to a file so you can know how to parse it better
  // The callback is mandatory, but it's useless here
  fs.writeFile('feed.json', JSON.stringify(items, null, 2), 'utf-8', () => {});
});

// This should be outside of any routes, because it needs to start listening as soon as the file is executed
io.on('connection', io => {
  io.emit('feed', {
    feed: feed
  });
});
