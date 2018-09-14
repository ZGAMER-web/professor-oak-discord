client.on("message", message => {
    if (message.author.bot) return;
    if(message.content.indexOf(config.prefix) !== 0) return;
     
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
   
    //CHECK FOR COMMANDS
    
  try {
      let commandFile = require(`../pokemon/${command}.js`);
      commandFile.run(client, message, args);
    } catch (err) {
      console.error("No Pokemon could be found, Sorry!");
    }    
});