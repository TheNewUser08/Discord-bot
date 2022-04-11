const Discord = require('discord.js');
require('dotenv').config();
const client =  new Discord.Client({
	intents: [ 'GUILDS', 'GUILD_MESSAGES' ]
});
client.on('ready', () => {
	console.log('hello, my name is ' + client.user.username);
});

client.on('messageCreate', (msg) => {
	if (msg.content === 'ping') {
		msg.reply('pong');
	}
});

client.login(process.env.DISCORD_TOKEN);
