const Discord = require("discord.js");
const bot = new Discord.Client();

const prefix = '!'

bot.on("ready",function(){
    console.log("Carapuce is in the place !");
});

bot.on("message",message => {
    switch(message.content){
        case prefix+"ping":
            message.channel.send("!Carapong");
            break;
        case prefix+"carabonjour":
            message.reply("Carabonjour à toi !");
            message.react("😃");
            break;
    }
});


bot.login("token")