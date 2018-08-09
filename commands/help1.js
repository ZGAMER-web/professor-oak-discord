message.channel.send('Hello, Trainer! What do you need help with? You can respond with single words as shown below... \n **directions** - Learn how to get directions to Gyms and Pokestops.')
.then(() => {
  message.channel.awaitMessages(response => response.content === 'directions', {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(`The collected message was: ${collected.first().content}`);
    })
    .catch(() => {
      message.channel.send('Sorry Trainer, I have very busy. Let me know if you need help again by replying with `!oak help`.');
    });
});
