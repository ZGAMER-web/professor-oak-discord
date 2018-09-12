exports.run = (client, message, args) => {
message.channel.send('I see your ready to submit a new Pokestop, Trainer!')
.then(() => {
  message.channel.awaitMessages(response => response.content === 'Pokestop', {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      client.channel.get('489478982761370').send(`submitted a new pokestop.\n\n${collected.first().content},`);
    })
    .catch(() => {
      message.channel.send('Sorry Trainer, try again later.');
    });
});
}