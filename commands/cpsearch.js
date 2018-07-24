exports.run = (client, message, args) => {
    message.channel.send("https://docs.google.com/spreadsheets/d/12AUOOrRzOwOy6WP-OIyMCo5pDNQW3MksfXL5pMDIp1c/edit?usp=sharing").catch(console.error);
}
