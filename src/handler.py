from telegram import *
from telegram.ext import *
import txt as txt
import msrules as msrules
import techne_contacts as tcontacts

# Function for /start
def start(update, context):
    context.bot.send_message(chat_id=update.effective_chat.id, text=txt.txt_start)

# Function for /boop
def boop(update, context):
    context.bot.send_message(chat_id=update.effective_chat.id, text="... I wasn't sleeping! :(")

# Function for /help
def bothelp(update, context):
    context.bot.send_message(chat_id=update.effective_chat.id, text=txt.txt_help)

# Function for /rules
def rules(update, context):
    context.bot.send_message(chat_id=update.effective_chat.id, text=msrules.msrules)

# Function for /contact
def contacts(update, context):
    context.bot.send_message(chat_id=update.effective_chat.id, text=tcontacts.contacts)

# Function for /resources
def resources(update, context):
    context.bot.send_message(chat_id=update.effective_chat.id, text=txt.txt_resources)

# Function for /keith
def resources(update, context):
    context.bot.send_message(chat_id=update.effective_chat.id, text=txt.txt_keith)
