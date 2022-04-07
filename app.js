const express = require('express')
const bot = require('./bot')
const app = express()
const PORT = 3000
app.use(express.json())
app.post('/chat/:chatId/send', (req, res) => {
    const chatId = req.params.chatId
    bot.sendMessage(chatId, req.body.text)  
    res.send('okay')
})
app.listen(PORT, ()  => {
    console.log(`server started on http://localhost:${PORT}`)
})
