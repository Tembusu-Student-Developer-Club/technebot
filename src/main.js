const { Telegraf } = require("telegraf");
const responses = require('./responses.js');

const BOT_TOKEN = // TODO

const bot = new Telegraf(BOT_TOKEN);

// Respond to /start
bot.command('start', ctx => {
    console.log(ctx.from)
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

bot.launch();
