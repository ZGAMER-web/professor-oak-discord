exports.run = (client, message, args) => {
message.channel.send('Hello Trainer! What do you need help with? You can say one something like **Directions**.')
.then(() => {
  message.channel.awaitMessages(response => response.content === 'directions', {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(`!oak ${collected.first().content}`);
    })
    .catch(() => {
      message.channel.send('There was no collected message that passed the filter within the time limit!');
    });
});
}
