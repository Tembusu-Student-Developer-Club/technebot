# Developer Guide for TechneBot

## Set up

This bot is written in JavaScript and NodeJS, primarily using the Telegraf module API. As an editor, please make sure you have installed the following libraries using the appropriate tool, like npm or yarn (E.g. `sudo npm install telegraf` in Unix):

- telegraf
- express

There are number of guides available online for installing NodeJS modules on your system and GUI / CLI of choice.

## Overview

This repository consists of the scripts for TechneBot, written in JavaScript. In the long term, we will overhaul the codebase
to use TypeScript, which gives us enhanced flexibility, instead of JavaScript.

The architecture for the TechneBot consists of three major components: Telegram, Database, and the Server.

The script for TechneBot is currently hosted on Heroku web servers. When a user interacts with the Bot, the server "wakes up" and starts the webhook process, which allows for the Bot to function on Telegram. 

The information that is logged through the Bot is planned to be stored in an external Database such as PostgreSQL Database.

## Upcoming Features

### Feature #1: Equipment Booking

(Command: /book)

After the user selects the equipment to be booked, the bot should provide users with two options.
There are currently three equipment available for booking: 3D Printers, Drill Press, and the Dremel Motor Saw.

3D Printer Booking (View only):
https://docs.google.com/spreadsheets/d/14mn2CvKxlx30Z1ayELKLioyNMjzOHys0OyPAgeqqHgw/edit?usp=sharing

Drill Press Booking (View only):
https://docs.google.com/spreadsheets/d/1vaYPuCm8Rhoi9Mil2uj0UZY8RhxguScEq-uhUyoK6b4/edit?usp=sharing

Motor Saw Booking (View only):
https://docs.google.com/spreadsheets/d/1Z4P_wkxLYKY-fXau3k7B7IWYRFgjEUPJYJyrfRojsJM/edit?usp=sharing

#### Feature 1.1. Booking equipment for a single slot (1 hour)

(Command: /booksingle)

This option is primarily for those who want to book the equipments for a short period of time. (1 - 3 hours at most)

When this option is selected, all timings after the current time slot, with a 4-hour buffer, will be displayed in a table format, with two columns. Left column will be the time slot, and the right column will show availability using a green tick or a single dash. (E.g. If the bot is used at 6pm, only time slots starting from 10pm will be shown)

The user will choose the single slot they wish, and the publicly-available google spreadsheet containing the equipment slots will automatically update to reflect the changes. We will use the name-handle autoconversion feature from Feature #1 above to indicate who booked the slots.

#### Feature 1.2. Booking equipment for a longer duration (Up to a week)

(Command: /bookmultiple)

This option is primarily for those who want to book the equipment for a longer duration, up to a week potentially. This option is necessary because there are 3D print jobs that can last a few days.

When this option is selected, we will provide instructions to indicate starting time and ending time. As we want to ensure that the slots can be booked weeks in advance, we will be restricting the date and time range to within the semester only.

The user must provide a starting date and time in this format: B/03/24/1500
The above means "Begin at March 24th, 3pm".

Next, the user must provide an ending date and time in this format: E/03/27/0800
The above means "End at March 27th, 8am".

This will allow the user to carefully type the timings and in the process review the timings with more care. All bookings made in this format will be sent to the MakerSpace Head and other Techne EXCOs for a second review.

#### Feature 1.3. Additional Commands

Currently, there are plans to implement further specific commands for the ease of experienced users:

- /booksingle3d
- /booksingledp
- /booksinglems
- /bookmultiple3d
- /bookmultipledp
- /bookmultiplems

These will allow them to go straight into the booking process. These commands might be preferrable to GUI choices, since the telegram chat history is always visible and they can simply click on the commands they previously used to repeatedly perform the same action.

### Feature #2: Equipment Loaning

(Command: /loan, /checkloan, /adminapproveloan)

This feature allows users to apply for equipment loans easily. It prompts the user for the equipment category, followed by equipment name, followed by loan quantity, followed by the loan period start date, followed by the loan period end date.

The full list of inventory is found here:

Inventory List (View only):
https://docs.google.com/spreadsheets/d/1ShAzqXTb991gljNOzhnHoTBz2SaNaZf-glEPz4YXFq4/edit?usp=sharing

Due to load limit, unfortunately, we may have to manually code the different equipments available. This is still under testing, and hopefully this is not the case since it would not be ideal to have to constantly update the codebase everytime a new equipment is introduced.

The information collected is logged here, in the Techne Equipment Loan Records (View only):
https://docs.google.com/spreadsheets/d/1SQepbLsa_cKe46A6ukQDjzcWXlJkTG-FTH5d1H11DGE/edit?usp=sharing

Currently, the next task is for us to convert the information we have into manual request form filling.

The command /checkloan is used to check for all loan requests by the user.

The command /adminapproveloan is used by admins to approve loan requests. We aim to implement administrator-level password checking before releasing the telegram bot as a public repository.

### Future Extensions

There are a few extensions that can be considered. The biggest possible extension is the archive feature, where all of Techne's materials (workshops or otherwise) will be available to browse and download using the bot itself. For now, this feature is replaced by a much simpler feature using a google link to the Google Drive folder of materials.

Below are other lower priority extensions being considered:

The equipment loaning can potentially be expanded to include all 4 IGs under the Blank Canvas.

The equipment loaning process can also be broken down into two different kinds: small items and large items (E.g. loaning a single screwdriver vs loaning an entire toolkit).

Other QoL features or Techne announcement features can be included in the bot.
