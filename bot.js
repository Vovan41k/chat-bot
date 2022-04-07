require('dotenv').config()
const token = process.env.TOKEN
const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
    console.log(msg.chat.id);
    const VasiliyId = +process.env.ID_VASILIY
    const VladimirId = +process.env.ID_VLADIMIR

    const chatId = msg.chat.id;

    if (chatId === VasiliyId) {
        bot.sendMessage(VladimirId, msg.text)
    }
    else if (chatId === VladimirId) {
        bot.sendMessage(VasiliyId, msg.text)
    }
})

bot.onText(/\/rps (.+)/, (msg, match) => {
    //     const words = match[1].split(' ')
    //     const currency = words[0].toUpperCase()
    //     const count = words[1]
    //     const chatId = msg.chat.id;
    //     const res = convertTo(currency, count)
    //     bot.sendMessage(chatId, res + (signs[currency] || currency));
});

bot.onText(/\/rps/, (msg, match) => {

    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Выполните ход!', {
        "reply_markup": {
            "inline_keyboard": [[
                {
                    text: "🗿",
                    callback_data: "rock",
                },
                {
                    text: "✂️",
                    callback_data: "scissors",
                },
                {
                    text: "📜",
                    callback_data: "paper",
                },
            ]],

        },

    });
});
bot.on('callback_query', (query) => {
    console.log(query.from.id, query.data)
    const chatId = query.from.id
    const turn = query.data
    bot.sendMessage(chatId, `Ваш ход: ${turn}`)
})


module.exports = bot