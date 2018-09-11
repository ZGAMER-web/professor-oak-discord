exports.run = (client, message, args) => {
    message.channel.send("My name is **Professor Oak**. I am a custom Discord Bot that will help you along your journey. To interact with me, you must start each __new__ message with **!oak** then a space, followed by a command above.").catch(console.error);
}