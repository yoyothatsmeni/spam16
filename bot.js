const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 console.log("welcome bot"); 
console.log("log");
});

client.on('ready', async() => {
var server = "497726385637556236"; 
var channel = "509163390745313281";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('Fire')
    },305);
})


client.on('message', message => {
    if(message.content.startsWith('!say16')) {
    if(message.author.id !== "408374252291751976") return;
    var args = message.content.split(' ').slice(1).join(' ');
    message.channel.send(args);
    }
    });


client.login(process.env.TOKEN);
