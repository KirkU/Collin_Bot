const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', async message => {
    
    if(message.author.bot) return;
    
    //if(message.content.indexOf(config.prefix) !== 0) return;
    
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    
    for (var i = 0; i < args.length; i++) {
        
        if(message.content.includes('aram') || message.content.includes('arams') || message.content.includes('league')) {
            message.
    }
    */

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
