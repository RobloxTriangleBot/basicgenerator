const Discord = require ("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.RichEmbed()
.setColor("#363940")       
.setThumbnail('https://64.media.tumblr.com/tumblr_m7ex6598wI1rbwzc4o1_1280.jpg')
.setFooter('©️ CopyRight™️')
.addField('__Help__','\n`$spotify` To Get A Spotify Account .\n`$hulu` To Get A Hulu Account .\n`$minecraft` To Get A Minecraft Account .\n`$nitro` To Get A Nitro Code .\n`$nordvpn` To Get A NordVPN Account .\n`$origin` To Get A Origin Account .\n`$proxy` To Get A Proxy .\n\n **✩** Remember not all accounts will work in this generator. The premium generator will come out shortly.');
message.channel.send(embed)
}
module.exports.help = {
  name: 'help'
}
