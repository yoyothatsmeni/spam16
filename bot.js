const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {

console.log('iiFireGame');

client.user.setGame(`FireShop`,'https://www.twitch.tv/TEST-Broadcast');

});

client.on('message', message => {
  if(!message.channel.guild) return;
var prefix = "f!";
if(message.content.startsWith(prefix + 'bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let copy = "FireShop";
let request = `Requested By ${message.author.username}`;
if (!args) return message.reply('```**اكتب كلمه**```');message.channel.send(`**هل انت متاكد؟؟؟؟؟؟؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
msg.react('👍')
.then(() => msg.react('👎'))
.then(() =>msg.react('👍'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '👍' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '👎' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`☑ | Done ... لقد ارسلت ل ${message.guild.members.size} شخص`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Broadcast')
.addField('Server', message.guild.name)
.addField('Sender', message.author.username)
.addField('Message', args)
.setThumbnail(message.author.avatarURL)
.setFooter(copy, client.user.avatarURL);
m.send({ embed: bc })
msg.delete();
})
})
reaction2.on("collect", r => {
message.channel.send(`**خلاص مش هبعت**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});

client.on("message", message => {
  var prefix = "f!";
  const command = message.content.split(" ")[0];

  if(command == prefix+"vc"){

      if (!message.guild.member(message.author).hasPermission('MOVE_MEMBERS') || !message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {
          return message.reply('you do not have permission to perform this action!');
      }

      var member = message.guild.members.get(message.mentions.users.array()[0].id);
      if(!message.mentions.users){
          message.reply("please mention the member")
          return;
      }

  if(!member.voiceChannel){
  message.reply("i can't include voice channel for member!")
  return;
  }
            message.guild.createChannel('voicekick', 'voice').then(c => {
              member.setVoiceChannel(c).then(() => {
                  c.delete(305).catch(console.log)
     


 
    });
   });
  }
});

client.login(process.env.BOT_KEY);
