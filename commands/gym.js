exports.run = (client, message, args) => {  
  let gym = args.join(" ");
  let Gym = require(`../commands/gyms/${gym}.js`);
  let GymNickname = require(`../commands/gyms/nicknames/${gym}.js`);
  
  Gym.run(client, message, args).then(message => {
    GymNickname.run(client, message, args);
  })
};