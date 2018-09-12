exports.run = (client, message, args) => {
message.channel.send('What tag would you like to see? This will await will be cancelled in 30 seconds. It will finish when you provide a message that goes through the filter the first time.')
.then(() => {
    const oak = require("./data/oak.json");
    const oak_response = oak.version
  message.channel.awaitMessages(response => response.content === oak_response, {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(`The collected message was: ${collected.first().content}`);
    })
    .catch(() => {
      message.channel.send('There was no collected message that passed the filter within the time limit!');
    });
});
}