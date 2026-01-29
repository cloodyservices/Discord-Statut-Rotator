# Cloody Status Rotator

Cloody Status Rotator is a small Node.js utility to rotate Discord rich presence/status entries. Configure your presence in [config.json](config.json#L1) and run the app with Node or a process manager.

**Repository files:** [package.json](package.json#L1), [config.json](config.json#L1), [index.js](index.js#L1)

## Features

- Rotate custom rich presence entries
- Support for images, buttons and multiple custom statuses
- Works with `discord.js` and light dependencies

## Requirements

- Node.js 16+ (or compatible)
- A valid Discord token or application setup as required by your configuration

## Installation

```bash
npm install
```

## Configuration

Copy and edit `config.json` (already sanitized in this repo). Fill in your `applicationId`, `imageURL`, `richPresence` fields and `token`. Keep tokens secret — do not commit them to a public repo.

See the repository config file: [config.json](config.json#L1)

Example snippet (replace values):

```json
{
  "applicationId": "",
  "imageURL": "",
  "richPresence": {
    "applicationId": "",
    "type": "PLAYING",
    "url": "",
    "name": "",
    "details": "",
    "state": "",
    "largeText": "",
    "smallText": "",
    "button1": {"label": "Discord", "url": ""},
    "button2": {"label": "Website", "url": ""}
  },
  "token": ""
}
```

## Run

Start with Node:

```bash
node index.js
```

Or run with PM2 to keep it always online:

```bash
pm2 start index.js --name "cloody-status-rotator"
pm2 save
pm2 startup
```

## Notes

- This repository no longer contains any active tokens or private details — `config.json` has been sanitized. Add your credentials locally before running.
- When sharing on GitHub, do not include your `config.json` with real tokens. Use environment variables or a private config file if possible.

## Author

Author: cLooDy

## License

ISC
# INFINITYS - Custom Discord Rich Presence Bot

INFINITYS is a customizable Discord bot designed to set and manage custom Rich Presence (RPC) for your Discord account. With INFINITYS, you can create a unique and personalized presence that stands out, complete with custom buttons, images, and activity details.

## Features

- **Custom Rich Presence:** Set a custom activity status with details, state, and buttons.
- **Dynamic Image Support:** Use custom images for your rich presence.
- **Interactive Buttons:** Add up to two buttons with custom labels and URLs.
- **Fully Configurable:** Easily customize the bot through a simple `config.json` file.
- **Lightweight & Easy to Use:** Simple setup and minimal dependencies.
## Configuration
Below is the configuration structure for the bot. Make sure to update the values with your own:
## Copyright
Copyright (c) 2025 cLo_oDy. All rights reserved.
## Instructions
To Install Requirements
```bash
npm install
```

```json
{
    "applicationId": "",
    "imageURL": "https://i.postimg.cc/NjZ8pGpZ/ffffffffffffffff.png",
    "richPresence": {
      "applicationId": "",
      "type": "PLAYING",
      "url": "https://www.youtube.com/watch?v=5icFcPkVzMg",
      "name": "",
      "details": "",
      "state": "",
      "largeText": "",
      "smallText": "",
      "button1": {"label": "Discord", "url": ""},
      "button2": {"label": "Website", "url": ""}
    },
    "token":""
}
```
## Hosting

To keep the bot running continuously, we recommend using [PM2](https://pm2.keymetrics.io/), a process manager for Node.js applications.

### Install PM2
If you haven't installed PM2 yet, run the following command:

```bash
  npm install -g pm2
```
## Start the Bot
```bash
  pm2 start index.js --name "INFINITYS"
```
## Keep the Bot Running After Restart
```bash
  pm2 save
  pm2 startup
```
## Restart the Bot
```bash 
  pm2 restart INFINITYS
```
## Stop the Bot
```bash 
  pm2 stop INFINITYS
```