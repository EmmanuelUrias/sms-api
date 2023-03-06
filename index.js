const express = require('express')
const twilio = require('twilio')
const dotenv = require('dotenv')

const app = express()
const PORT = 3005

dotenv.config()

function sendSMS() {
    const client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN)

    return client.messages
        .create({
            body: 'API completed 👍', 
            from: '+18888206866',
            to: process.env.PHONE_NUMBER
        })
        .then(message => console.log(message, 'Message sent'))
        .catch(err => console.log(err, 'Message not sent'))
}
sendSMS()


app.listen(PORT, () => {
    console.log(`running on ${PORT}`)
})


// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure
const accountSid = "ACc5f9dc5ec4e71f86cf3ed69fc84161cf";
const authToken = "02defd2aeb6ca144877bbf210053ae26";
const client = require("twilio")(accountSid, authToken);
client.messages
  .create({ body: "Hello from Twilio", from: "+18888206866", to: "+17024100057" })
  .then(message => console.log(message.sid));