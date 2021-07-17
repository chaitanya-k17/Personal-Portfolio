const accountSid = "ACc78d2d5dc888a7b8e170d0de488ff3cb";
const authToken = "57eb5d6200b7797ea13a440567448350";
const client = require('twilio')(accountSid, authToken);

const SendMessage = async (data) => {

    try {
        console.log("Okay Here")
        const client = await  require('twilio')(accountSid, authToken);
        console.log(client)

        const res = await client.messages
            .create({
                body: data,
                messagingServiceSid: 'MG1b8a1dc4b65843d91604d5171058800e',
                to: '+917057868697'
            })
        console.log(res)
        // const response = await client.messages
        //     .create({ 
        //         from: 'whatsapp:+12023353172',
        //         body: data,
        //         to: 'whatsapp:+917057868697'
        //     })
        // console.log("Okay")
        // console.log(response);
        // if (response.status === "send") {
        //     return "Sent";
        // }
        // else {
        //     return "error";
        // }
    } catch (err) {
        console.log(err)
        return "error";

    }
}

export default SendMessage;
