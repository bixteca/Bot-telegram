require ('dotenv').config();

const Telegrambot = require ('node-telegram-bot-api');
const token = process.env.TOKEN;

const bot = new Telegrambot (token, {polling: true});

bot.onText (/\/echo (.+)/,(msg, match) => {
    const chatId = msg.chat.id;
    const resp = match [1];
    
    bot.sendMenssage (chatId, resp);

});

bot.on('photo', async function (msg){
    const.chatId = msg.chat.id;
    const photoId = msg.photo[msg.photo.length - 1].file_id

    const photo = await bot.downloadFile(photoId, "./src/imgs");

    bot.sendPhoto(chatId, photo {caption: "Segura ai filhote!"})
})

bot.on ('message', (msg)=> {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Da ideia Bigode!');
});
