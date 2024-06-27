import dotenv from 'dotenv';
dotenv.config(); // import dotenv for token storage

import * as ppHttps from "./helpers/pp-https.js";
import * as pronounTools from "./helpers/pronoun-tools.js";

// Pull token from env and necessary classes from discord.js
const token = process.env.TOKEN;
import {Client, Events, GatewayIntentBits} from 'discord.js';

// Create client instance
const client = new Client({intents: [GatewayIntentBits.Guilds]});

// When the client is ready, run this code (only once).
client.once(Events.ClientReady, readyClient => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);

    // Update local standard use pronouns on bot launch. Neopronouns and the like are handled separately using Pronouns.page's generator api
    let pronounArr = ppHttps.getAllStandardPronouns()
    pronounArr.then((response) => {
        console.log('Beginning startup standard pronoun write.')
        pronounTools.writeToLocal('standard.pronouns.json', JSON.stringify(response, null, 2));
    })
});

client.login(token).then();
