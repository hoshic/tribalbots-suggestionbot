//here the event starts
const config = require("../config.json")
module.exports = client => {
    console.log(`Discord Bot  /--/ ${client.user.tag} /--/  is online!`); //log when ready aka the bot usable
    
    console.log(` :: Bot has started as : ${client.user.tag}`);
    client.user.setPresence({status: "online"}); //change to online
}