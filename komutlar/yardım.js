const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`MollyYT`)
.setDescription(`
:white_small_square: **=**  \`m.moderasyon\`:  **bot moderasyon sekmesini açar**
:white_small_square: **=**  \`m.eğlence\`:  **bot eğlence sekmesini açar**
:white_small_square: **=**  \`m.uptime\`:  **bot uptime sekmesi açar**
`)
.setImage("https://cdn.discordapp.com/attachments/740871896614043669/748878433840398367/Baslksz-1.png")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['help'], 
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};
