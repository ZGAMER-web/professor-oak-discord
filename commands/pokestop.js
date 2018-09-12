exports.run = (client, message, args) => {
  let [name, description, location] = args;
  message.reply(`Hello ${message.author.username}, I see you're wanting to submit a Pokemstop. I've gathered the following information from you.\n**Pokestop Name:** ${name}\n**Pokestop Description:**${description}\n**Location:**${location}`);
}
