const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', async message => {
    
    if(message.author.bot) return;
    
    //if(message.content.indexOf(config.prefix) !== 0) return;
    
    if(message.content.indexOf('!overwatch ' === 0) {
       message.channel.send('test');
    }
    
    if(message.author.username === 'temp') {
      message.reply('Stay in Plat Bud!');
    }

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
