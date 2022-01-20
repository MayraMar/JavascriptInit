const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const config = require("./config.json");
client.login(config.BOT_TOKEN)

client.on("message", function(message) {
    if (message.author.bot) return;
  });
  
const prefix = "Marya ";

client.on("message", function(message) {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' '); // da un array de argumentos
    const command = args.shift().toLowerCase(); // convierte el comando (elem 0) a  minuscula y lo guarda
    const timeTaken = Date.now() - message.createdTimestamp;
    if (command === "ping") {
        message.reply("Pong!")
    } else if (command === "suma"){
        const numArgs = args.map(x => parseFloat(x));
        const suma = numArgs.reduce((counter, x) => counter += x);
    message.reply(`La suma de los numeros ingresados da ${suma}. Demoré ${timeTaken} ms. en responder. Felicita a Marya diciendole "Marya genia!"`)
    } else if (command ==="genia!"){
        message.reply("Gracias guap@!!")
    } else if (command === "resta"){
        const numArgs = args.map(x => parseFloat(x));
        const resta = numArgs.reduce((counter, x) => counter -= x);
    message.reply(`La resta de los numeros ingresados da ${resta}. Demoré ${timeTaken} ms. en responder. Felicita a Marya diciendole "Marya genia!"`)
    }else if (command === "multiplica"){
        const numArgs = args.map(x => parseFloat(x));
        const mult = numArgs.reduce((counter, x) => counter = counter*x);
    message.reply(`La mutiplicación de los numeros ingresados da ${mult}. Demoré ${timeTaken} ms. en responder. Felicita a Marya diciendole "Marya genia!"`)
    }else if (command === "divide"){
        const numArgs = args.map(x => parseFloat(x));
        const divide = numArgs.reduce((counter, x) => counter = counter/x);
    message.reply(`La división de los numeros ingresados da ${divide}. Demoré ${timeTaken} ms. en responder.  Felicita a Marya diciendole "Marya genia!"`)
    } else {
        message.reply ("No te entiendo! Prueba indicandome Marya suma, resta, multiplica o divide. O juguemos a Marya ping");
    }
});



  