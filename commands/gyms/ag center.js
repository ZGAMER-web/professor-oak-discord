exports.run = (client, message, args) => {  
    let commandFile = require(`../gyms/buffalo creek outdoor education center.js`);
      commandFile.run(client, message, args);
  };