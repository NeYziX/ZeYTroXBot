const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = (":");

bot.on('ready', function() {
  bot.user.setGame(":help | Dev By NeYziX");
  console.log("le bot a démarré"); 
  bot.channels.get('434344990508843011').send("**=======================**");
  bot.channels.get('434344990508843011').send("| LE BOT VIENT DE SE LANCER |");
  bot.channels.get('434344990508843011').send("**=======================**");
});

bot.login(process.env.BOT_TOKEN);

bot.on('message', message => {
  if (message.content.startsWith(prefix + "avatar")) {

message.channel.send({embed: {

    title: "Votre avatar",

    image: {

        url: message.author.avatarURL

    },

    color: 15722240

}

    })

}
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
  
    if (!message.content.startsWith(prefix)) return;
  
    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "roll":
            var roll = Math.floor(Math.random() * args[1]) +1;
            if (!roll) return message.reply("Entre un numéro")
            message.channel.send("Je choisi le numéro " + roll + " !");
            break;
        case "8ball":
        let args = message.content.split(" ").slice(1);
        let tte = args.join(" ")
        if (!tte){
            return message.reply("Merci de poser une question :8ball:")};
        
            var replys = [
                "Oui",
                "Non",
                "Je sais pas",
                "Peut-être"
            ];
        
            let reponse = (replys[Math.floor(Math.random() * replys.length)])
            var bembed = new Discord.RichEmbed()
            .setDescription(":8ball: 8ball")
            .addField("Question :thinking:", tte)
            .addField("Réponse :kissing_heart:", reponse)
            message.channel.sendEmbed(bembed)
            break;
            case "clear":
            if (message.member.hasPermission("MANAGE_MESSAGES")){
                message.channel.fetchMessages()
                    .then(function(list){
                        message.channel.bulkDelete(list);
                }, function(err){message.channel.send("Erreur")})}
            break;
        
    }});

bot.on('message', message => {
    if(message.content[0] === prefix) {
        let spliteMessage = message.content.split(' ');
        if(spliteMessage[0] === ":hello") {
            message.channel.send("world!");
            message.author.createDM().then(channel => {
                channel.send('WORLD!');
            }).catch(console.error);
        bot.channels.get('434344990508843011').send("Commande §hello utilisée par : " + message.author.username);
        }
      
        else if(spliteMessage[0] === ":help") {
            message.channel.send("Liste des commandes envoyées en privée.");
            message.author.createDM().then(channel => {
                channel.send('**⇩ Liste des commandes ⇩: \n \n __Bientôt__**');
            }).catch(console.error);
        bot.channels.get('434344990508843011').send("Commande §help utilisée par : " + message.author.username);
        }             
    }    
});

bot.on('message', message => {
    if (message.content === prefix + "ping"){
        message.channel.sendMessage("Temps de latence avec le serveur : " + `${message.createdTimestamp - Date.now()}` + "MS");  
    }
});      

bot.on('message', message => {

    if (message.content === prefix + "info") {
        var embed = new Discord.RichEmbed()
        .setDescription("Information de Discord :")
        .addField("Nom du Discord :", message.guild.name)        
        .addField("Crée le :", "19/01/18 20:09:34")
        .addField("Crée par :", ":art: ๖̶̶̶ζ͜MrPăsțeł :art:#0091")
        .addField("Tu as rejoint le :", message.member.joinedAt)
        .addField("Utilisateurs sur le Discord :", message.guild.memberCount)
        .addField("ID :", "403989383423721472")
        .setFooter("©NeYziX | Tous droits réservés.")
        .setColor("0x81DAF5")
    message.channel.sendEmbed(embed)
    }
});

bot.on('message', message => {

    if (message.content === prefix + "créateur") {
        var embed = new Discord.RichEmbed()
        .setDescription("Pour visiter le site du créateur :")
        .addField("Lien :", "http://xrainbow.000webhostapp.com")
        .setFooter("©NeYziX | Tous droits réservés.")
        .setColor("0x81DAF5")
    message.channel.sendEmbed(embed)
    }
});

bot.on('message', message => {

    if (message.content === prefix + "sm") {
        var embed = new Discord.RichEmbed()
        .setDescription("Réseaux sociaux de PastelWorld :")
        .addField("Instagram :", "https://www.instagram.com/pastelworld_officiel/") 
        .setFooter("©NeYziX | Tous droits réservés.")
        .setColor("0x81DAF5")
    message.channel.sendEmbed(embed)
    }
});

bot.on('message', message => {

    if (message.content === prefix + "socialmedia") {
        var embed = new Discord.RichEmbed()
        .setDescription("Réseaux sociaux de PastelWorld :")
        .addField("Instagram :", "https://www.instagram.com/pastelworld_officiel/")
        .setFooter("©NeYziX | Tous droits réservés.")
        .setColor("0x81DAF5")
    message.channel.sendEmbed(embed)
    }
});

bot.on('messageReactionAdd', (reaction, user) => {
    if(reaction.emoji.name === "☺")
        bot.channels.get('434344990508843011').send("EZ");
  
    bot.channels.get('434344990508843011').send("Réaction utilisée : " + reaction.emoji.name);
});

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "bienvenue").send(`Hey @ZeYTroXBot, bienvenue sur ZeYTroX Serveur :tada::hugging: ! \n Nous sommes **${membercount} sur le serveur :tada:`)
});

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "bienvenue").send(`${member} a quitté PastelWorld. Nous te souhaitons une bonne continuation.`)
});

bot.on("guildMemberAdd", member => {
    var role = member.guild.roles.find('name', 'Membres');
    member.addRole(role)
})
