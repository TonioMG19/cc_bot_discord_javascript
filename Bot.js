const Discord = require("discord.js");
const bot = new Discord.Client();

const prefix = '!'

bot.on("ready",function(){
    console.log("Carapuce is in the place !");
});

bot.on("message",message => {
    if(message.content.startsWith(prefix)){
        let args = message.content.split(' ');
        let args1 = args[0];
        let channel = message.channel;
        switch(args1){
            case prefix+"ping":
                message.channel.send("Carapong !");
                break;
            case prefix+"carabonjour":
                message.reply("Carabonjour à toi !");
                message.react("701806833408409601");
                break;
            case prefix+"pin":
                if(!message.member.hasPermission('ADMINISTRATOR')){
                    return;
                }
                let toPin = "";
                for(let i = 1; i < args.length; i++){
                    toPin += args[i];
                    if(i < args.length-1){
                        toPin += ' ';
                    }
                }
                if(message.author.id != '701797953186037853'){
                    channel.send(prefix+'pin '+toPin)
                    message.delete();
                }
                if(message.author.id == '701797953186037853'){
                    message.edit(toPin);
                    message.pin();
                }
                break;
            case prefix+'carahelp':
                channel.send({
                    embed: {
                        color: 3447003,
                        description: "__**Les différentes commandes**__",
                        fields: [
                            {
                                name: `${prefix}carahelp`,
                                value: "Pour afficher cette aide."
                            },
                            {
                                name: `${prefix}ping`,
                                value: "Pong !"
                            },
                            {
                                name: `${prefix}pin`,
                                value: "Pour épingler le message qui commence par cette commande."
                            }
                        ]
                    }
                })
                break;
            case prefix+'emojiliste':
                break;
            default:
                channel.send('Je ne connais pas cette commande !');
        }
    }
});


bot.login("token")