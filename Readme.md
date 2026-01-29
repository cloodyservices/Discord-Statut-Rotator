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

## Stop the Bot
```bash 
  pm2 stop INFINITYS
```
