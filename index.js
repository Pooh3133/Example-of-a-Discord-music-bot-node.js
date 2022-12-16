const Discord = require('discord.js');

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

