const Telegraf = require("telegraf");
const express = require('express');
const responses = require('./responses.js');

// ENV variables, stored in Heroku for security purposes
const TOKEN = process.env.TOKEN || '';
const PORT = process.env.PORT || 3000;
const URL = process.env.URL || 'https://tembusu-technebot.herokuapp.com';

// Start the bot and the express app using a Webhook process
// Express is needed to link Telegraf with Heroku deployment
const app = express();
const bot = new Telegraf(TOKEN);
bot.telegram.setWebhook(`${URL}/bot${TOKEN}`);
app.use(bot.webhookCallback(`/bot${TOKEN}`));

// Respond to /start
bot.command('start', ctx => {
        console.log(ctx.from);
        bot.telegram.sendMessage(ctx.chat.id, responses.start, {
    })
})

// Respond to /boop
bot.command('boop', ctx => {
        console.log(ctx.from)
        bot.telegram.sendMessage(ctx.chat.id, responses.boop, {
    })
})

// Respond to /help
bot.command('help', ctx => {
        console.log(ctx.from)
        bot.telegram.sendMessage(ctx.chat.id, responses.help, {
    })
})

// Respond to /rules
bot.command('rules', ctx => {
        console.log(ctx.from)
        bot.telegram.sendMessage(ctx.chat.id, responses.rules, {
    })
})

// Respond to /contacts
bot.command('contacts', ctx => {
        console.log(ctx.from)
        bot.telegram.sendMessage(ctx.chat.id, responses.contacts, {
    })
})

// Respond to /resources
bot.command('resources', ctx => {
        console.log(ctx.from)
        bot.telegram.sendMessage(ctx.chat.id, responses.resources, {
    })
})

// Start the express app
app.get('/', (req, res) => {
  res.send('TESTING...!!!');
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});