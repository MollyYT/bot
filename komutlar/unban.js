const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')
exports.run = async(client, message, args) => {

  let yDarkCodeS = args[0]

if (!yDarkCodeS) {
  const Ottoman = new Discord.MessageEmbed()
  .setDescription('Kimin Banını Açcam İd Versene')
  return message.channel.send(s)
}
    

  
message.guild.members.unban(mollyyt);
 const s = new Discord.MessageEmbed()
  .setDescription(`${mollyyt} idli kişi ${message.author.tag} tarafından yasağı kaldırıldı`)
  return message.channel.send(mollyyt)
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
}
exports.help = {
  name: "unban"
}
