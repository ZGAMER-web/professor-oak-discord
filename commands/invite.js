exports.run = (client, message, args) => {
    message.guild.channels.get('483420033473576961').createInvite().then(invite =>
    message.channel.send(invite.url)
    client.channels.get("483831639575887873").send("A new server invite was created.");
)};
