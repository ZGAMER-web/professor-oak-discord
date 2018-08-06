exports.run = (client, message, args) => {
message.channel.send('Hello Trainer! What do you need help with? You can say one something like **Directions**.')
.then(() => {
  message.channel.awaitMessages(response => response.content === 'directions' 'silph road', {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(`I see you need help with ${collected.first().content}`);
    })
    .catch(() => {
      message.channel.send('My time here is done Trainer! If you need more help just type **!oak help again**. I am going to do more research.');
    });
});
}
