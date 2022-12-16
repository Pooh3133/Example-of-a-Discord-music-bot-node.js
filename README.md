# Example-of-a-Discord-music-bot-node.js
Example-of-a-Discord-music-bot

Sure! Here is an example of a simple Discord music bot that uses the discord.js library and the ytdl-core library to play music from YouTube in a Discord server.

To use this code, you will need to have Node.js and npm (the Node.js package manager) installed on your computer. You will also need to have a Discord account and create a new Discord bot. You can follow the instructions here to learn how to create a Discord bot and get the bot's token:

https://discordjs.guide/preparations/setting-up-a-bot-application.html

Once you have your bot's token, you can use the following code to create the music bot.

``` const Discord = require('discord.js');

const ytdl = require('ytdl-core');

// Replace YOUR_BOT_TOKEN with your bot's token

const client = new Discord.Client();

client.login('YOUR_BOT_TOKEN');

client.on('ready', () => {

  console.log(`Logged in as ${client.user.tag}!`);

});

client.on('message', message => {

  // If the message starts with !play

  if (message.content.startsWith('!play')) {

    // Get the video URL from the message

    const url = message.content.split(' ')[1];

    // Check if the URL is valid

    if (ytdl.validateURL(url)) {

      // If the URL is valid, join the user's voice channel

      const voiceChannel = message.member.voice.channel;

      if (!voiceChannel) {

        message.reply('Please join a voice channel first!');

        return;

      }

      voiceChannel.join().then(connection => {

        // Once we've joined the voice channel, start playing the video

        const stream = ytdl(url, { filter: 'audioonly' });

        const dispatcher = connection.play(stream);

        message.channel.send('Now playing: ' + url);

      });

    } else {

      message.reply('Invalid URL!');

    }

  }

});
```

To use this bot, you can send a message in your Discord server with the following format: !play URL, where URL is the YouTube video URL that you want to play. For example, !play https://www.youtube.com/watch?v=dQw4w9WgXcQ

I hope this helps! Let me know if you have any questions.


❤ https://github.com/Pooh3133 ❤
