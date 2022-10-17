import { Plugin, registerPlugin } from "enmity/managers/plugins";
import { React } from "enmity/metro/common";
import { getByProps } from "enmity/metro";
import { create } from "enmity/patcher";
import manifest from "../manifest.json";
import {
  ApplicationCommandInputType,
  ApplicationCommandOptionType,
  ApplicationCommandType,
  Command,
} from "enmity/api/commands";
import { sendReply } from "enmity/api/clyde";

const Bitches: Plugin = {
  ...manifest,

  onStart() {
    const bitch: Command = {
      id: "motivation-command",
      name: "bitches",
      displayName: "bitches",
      description: "Gives you bitches",
      displayDescription: "Gives you bitches",

      type: ApplicationCommandType.Chat,
      inputType: ApplicationCommandInputType.BuiltIn,

      execute: async function (args, message): Promise<void> {
        const channelId = message.channel.id;
        const datingLinks = [
          "https://tinder.com",
          "https://match.com",
          "https://dating.com",
          "https://letmedate.com",
        ];
        if (Math.floor(Math.random() * 2) === 1) {
          sendReply(channelId, "https://i.imgflip.com/6x72vy.jpg");
        } else {
          sendReply(
            channelId,
            "Click here to get bitches: " +
              datingLinks[Math.floor(Math.random() * datingLinks.length)], "Mega
              mind", "https://i.imgflip.com/6x7kod.jpg"
          );
        }
      },
    };
    this.commands = [bitch];
  },

  onStop() {
    this.commands = [];
  },
};

registerPlugin(Bitches);
