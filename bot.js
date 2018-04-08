const Discord = require('discord.js');
const client = new Discord.Client();

const leagueTalkedRecently = new Set();
const fortniteTalkedRecently = new Set();

var isReady = true;

// function to return random number 1-4
function randomWholeNum() {
    return Math.floor(Math.random() * 4) + 1;
}

client.on('ready', () => {
 
