exports.run = (client, message, args) => {  
  let gym = args.join(" ");
  let commandFile = require(`../commands/gyms/${gym}.js`);
  commandFile.run(client, message, args).catch(() => {
    message.channel.send('There was no collected message that passed the filter within the time limit!');
  });
};