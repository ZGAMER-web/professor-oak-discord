client.on('message', (message) => {
    if (message.author.bot) return;
    var Role=message.guild.roles.find('name','sad')
    message.member.addRole(Role)
});