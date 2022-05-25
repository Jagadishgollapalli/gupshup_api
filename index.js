const Gupshup = require('gupshup-whatsapp-api');
require('dotenv').config();
// console.log(process.env)


let client = new Gupshup({
	apiKey: process.env.API_KEY
});


client.message.send({
	channel : "whatsapp",
	source : "917834811114",
	destination : "919789709403",
	'src.name': "Jagadish",
	message : {
		type: "file",
		url : "https://jsoncompare.org/LearningContainer/SampleFiles/PDF/sample-pdf-with-images.pdf",
		contentType: "application/pdf",
		filename: "Sample file"
	}
}).then((response) => {
	console.log("Text message sent", response)
}).catch(err => {
	console.log("Text message err:", err)
})



