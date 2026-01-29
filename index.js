const fs = require('fs');
const Discord = require('discord.js-selfbot-v13');

const { Client, RichPresence, CustomStatus, SpotifyRPC } = require('discord.js-selfbot-v13');
const client = new Client();



const config = JSON.parse(fs.readFileSync('./config.json', 'utf-8'));

client.on('ready', async () => {
    console.log(`${client.user.tag} is ready!`);
    
    let getExtendURL = null;
    try {
        getExtendURL = await RichPresence.getExternal(
            client,
            config.applicationId,
            config.imageURL
        );
    } catch (err) {
        console.error('Failed to fetch external assets:', err);
    }

    let currentIndex = 0;

    function updateCustomStatus() {
        const status = new RichPresence(client)
            .setApplicationId(config.richPresence.applicationId)
            .setType(config.richPresence.type)
            .setName(config.richPresence.name)
            .setDetails(config.richPresence.details)
            .setState(config.richPresence.state)
            .setAssetsLargeText(config.richPresence.largeText)
            .setAssetsSmallText(config.richPresence.smallText);

        if (config.richPresence.url) status.setURL(config.richPresence.url);
        if (getExtendURL && getExtendURL[0]) status.setAssetsLargeImage(getExtendURL[0].external_asset_path);
        
        if (config.richPresence.button1) status.addButton(config.richPresence.button1.label, config.richPresence.button1.url);
        if (config.richPresence.button2) status.addButton(config.richPresence.button2.label, config.richPresence.button2.url);

        const randomStatus = config.customStatuses[currentIndex];
        const randomEmoji = config.customEmojis[currentIndex];

        const custom = new CustomStatus(client).setState(randomStatus);
        if (randomEmoji) custom.setEmoji(randomEmoji);

        client.user.setPresence({ activities: [custom, status] });
        currentIndex = (currentIndex + 1) % config.customStatuses.length;
    }

    updateCustomStatus();
    setInterval(updateCustomStatus, 15000); // Increased interval slightly for stability
});

client.login(config.token);
