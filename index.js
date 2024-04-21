const { Telegraf } = require('telegraf');

// Token do seu bot do Telegram
const BOT_TOKEN = '7021509475:AAHzbQSB-CiN2ltbOy81mcFeS5mu2wE9FAw';

// Crie uma instância do Telegraf
const bot = new Telegraf(7021509475:AAHzbQSB-CiN2ltbOy81mcFeS5mu2wE9FAw);

// Middleware para responder a mensagens de texto
bot.on('text', (ctx) => {
  ctx.reply('Olá! Você disse: ' + ctx.message.text);
});

// Inicia o bot
bot.launch().then(() => {
  console.log('Bot iniciado');
}).catch((err) => {
  console.error('Erro ao iniciar o bot:', err);
});
