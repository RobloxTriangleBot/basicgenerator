const Discord = require ("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.RichEmbed()
.setColor("#363940")
.setFooter('©️ CopyRight Para™️')
.addField('__STOCK__','__**STOCK COMMANDS**__\n\n`$spotify`: 100 \n`$hulu`: 105 \n`$minecraft`: 0 \n`$nitro`: 1100 \n`$nordvpn`: 1006 \n`$origin`: 0 \n`$proxy`: 127 \n\n **✩** If your account does not work, it is not our fault. This is a free generator so dont complain.');
message.channel.send(embed)
}
module.exports.help = {
  name: 'help'
}
