const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready",function(){
    console.log("Carapuce is in the place !");
});

bot.login("token")