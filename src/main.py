from telegram import *
from telegram.ext import *
import handler as handler
import logging as logging
import os as os

# Gets the Port number from the Heroku environment variables (Default: 443)
PORT = int(os.environ.get('PORT', 443))

# Gets the Telegram bot token from the Heroku environment variables
TOKEN = os.environ.get('TOKEN')

# Sets up an Updater which continuously updates the bot with messages
updater = Updater(TOKEN, use_context=True)

# Sets up a dispatcher which dispatches commands to the bot
dispatcher = updater.dispatcher

# Records logs, useful for handling errors
logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s', level=logging.INFO)

# Add handlers to dispatcher
dispatcher.add_handler(CommandHandler('start', handler.start))
dispatcher.add_handler(CommandHandler('boop', handler.boop))
dispatcher.add_handler(CommandHandler('help', handler.bothelp))
dispatcher.add_handler(CommandHandler('rules', handler.rules))
dispatcher.add_handler(CommandHandler('contacts', handler.contacts))
dispatcher.add_handler(CommandHandler('resources', handler.resources))

# Start the webhook process
updater.start_webhook(listen = "0.0.0.0",
                          port = int(PORT),
                          url_path = TOKEN,
                          webhook_url = 'https://tembusu-technebot.herokuapp.com/' + TOKEN)
updater.idle()
