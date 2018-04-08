const Discord = require('discord.js');
const client = new Discord.Client();

var isReady = true;
var clip;

// function to return random number 1-3
function randomWholeNum() {
  return Math.floor(Math.random() * 3);
}

//Testing audio
//var forniteSucks = new Audio('480.mp4');

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', async message => {
    
    if(message.author.bot) return;
    
    //if(message.content.indexOf(config.prefix) !== 0) return;
    
    /*const args = message.content.slice(prefix.length).trim().split(/ +/g);
    
    for (var i = 0; i < args.length; i++) {
        
        if(message.content.includes('aram') || message.content.includes('arams') || message.content.includes('league')) {
            message.channel.send("League of Tanks, Game Never Changes!", {files: ["./assets/league_of_tanks.png"]});
        }
        
        if(message.content.includes('fortnite')) {
            message.channel.send({files: ["./assets/fortnite_sucks.jpg"]});
            //Testing audio
            message.channel.play({files: ["./assets/480.mp4"]});
        }
        
    }*/
    
    if (message.content.includes('fortnite')) {
        message.channel.send({files: ["./assets/fortnite_sucks.jpg"]});
    }
    
    if (isReady && (message.content.includes('aram') || message.content.includes('arams') || message.content.includes('league'))) {
        message.channel.send("League of Tanks, Game Never Changes!", {files: ["./assets/league_of_tanks.png"]});
        
        isReady = false;
        var voiceChannel = message.member.voiceChannel;
        
        voiceChannel.join().then(connection => {
            
            randomNum = randomWholeNum();
            switch(randomNum) {
                case 1:
                    clip = "./assets/league_file.mp3";
                    break;
                case 2:
                    clip = "./assets/league_file.mp3";
                    break;
                case 3:
                    clip = "./assets/league_file.mp3";
                default
                    clip = "./assets/league_file.mp3";
            };
            
            const dispatcher = connection.playFile(clip);
            dispatcher.on("end", end => {
                voiceChannel.leave();
            });

        }).catch(err => console.log(err));

        isReady = true;
        
    }
    
    /*
    if (message.author.username === 'HazyArc14') {
        message.channel.send({files: ["./assets/fortnite_sucks.jpg"]});
    }
    */

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
