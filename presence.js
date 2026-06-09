const { RichPresence } = require("discord.js-selfbot-v13");
const chalk = require("chalk");
const cfg = require("./config");

function rpc(client, config) {
    const status = new RichPresence(client)
        .setApplicationId(cfg.APPLICATION_ID)
        .setType("PLAYING")
        .setName("học là trính")
        .setDetails("sớm thôi trong 5 tháng")
        .setStartTimestamp(Date.now())
        .setAssetsLargeImage(cfg.LARGE_IMAGE_URL)
        .setAssetsLargeText("X")
        .addButton(cfg.BUTTON_1_LABEL, cfg.BUTTON_1_URL)
        .addButton(cfg.BUTTON_2_LABEL, cfg.BUTTON_2_URL);

    if (config.settings.discordrpc) {
        client.user.setPresence({
            activities: [status],
        });

        console.log(chalk.blue("RPC running"));
    }
}

module.exports = rpc;
