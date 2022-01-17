module.exports.start = "Welcome to TechneBot! This bot will help you to facilitate various actions with Techne.\n\n"
                        + "To view the list of rules for MakerSpace:\n/rules\n\n"
                        + "To view the list of contacts for Techne's AY21/22 EXCO:\n/contacts\n\n"
                        + "To get the Google Drive link to Techne's public archive of educational resources:\n/resources\n\n"
                        + "To wake the bot up:\n/boop\n\n"
                        + "For further queries regarding the bot or its usage, please contact @leehws. Thank you!";

module.exports.boop = "... I wasn't sleeping! :(";

module.exports.help = "/help - View the list of commands available\n"
                       + "/rules - View the list of rules for MakerSpace\n"
                       + "/contacts - View the list of contacts for Techne's AY21/22 EXCO\n"
                       + "/resources - Get the Google Drive link to Techne's public archive of educational resources\n";

module.exports.rules = "MAKERSPACE RULES AND REGULATIONS\n\n"
                        + "1. Wear shoes at all times within the MakerSpace.\n\n"
                        + "2. Clean up after yourselves: Don't leave any loose parts / dust from machines / excess 3D Printer materials behind, and make sure to disinfect the tables.\n\n"
                        + "3. Return all tools where you found them. If you want to borrow the tools, use this bot instead - don't just take it without telling us!\n\n"
                        + "4. For tools with high injury risks such as the Drill Press / Motor Saw, please ensure that you have the appropriate eye protections and gloves. They can be found at the side cabinets. We trust that you are responsible for your actions, and inform the MakerSpace Head if there are any faulty equipment.\n\n"
                        + "5. For 3D Printer usage, please adhere to the following:\n- Clean the print bed\n- Remove the print bed after it has cooled, and place it on the table\n- Use the provided alcohol and kitchen towels to wipe down the print bed\n- Place the print bed back onto the printer and slide it back until it pushes against the screw at the back\n\n"
                        + "6. Please turn off all the power, air-conditioning, and lights when exiting the MakerSpace last.\n\n"
                        + "7. Ensure your mask is on at all times.\n\n";

const Year = "AY21/22";
const Techne_Head = "\nTechne Head:\n" + "Yeo Tee Chin, @Bluntsord";
const Techne_ViceHead = "\nTechne Vice Head:\n" + "Dao Minh Hai, @downmeanhigh";
const Techne_MakerSpaceHead = "\nTechne MakerSpace Head:\n" + "Rishi Bharadwaj, @rishinrb";
const Techne_ProjectHead = "\nTechne Projects Head:\n" + "Lee Hyung Woon, @leehws";
const Techne_ProgrammesHead = "\nTechne Programmes Head:\n" + "Mrinal Ganesh, @MrinalGanesh";
const Techne_Treasurer = "\nTechne Treasurer:\n" + "Zechariah Sim, @scattered_brainz";
const SDC_Head = "\nStudent Developer's Club (SDC) sHead:\n" + "Nicholas Toh, @nicktohzyu";

const contactsContent = Techne_Head + Techne_ViceHead + Techne_MakerSpaceHead + Techne_ProjectHead + Techne_ProjectHead + Techne_Treasurer + SDC_Head;

module.exports.contacts = contactsContent;

module.exports.resources = ("Here is the link to Techne's archive of educational resources:\n"
                            + "https://drive.google.com/drive/folders/17dshoDX6s12U6CPVZuJLHTjGlBi3fIeD?usp=sharing");
