require('dotenv').config(); // Require dotenv for token storage

// Pull token from env and necessary classes from discord.js
const token = process.env.TOKEN;
import {Client, Events, GatewayIntentBits} from 'discord.js';

// Create client instance
const client = new Client({intents: [GatewayIntentBits.Guilds]});

// When the client is ready, run this code (only once).
client.once(Events.ClientReady, readyClient => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.login(token).then();