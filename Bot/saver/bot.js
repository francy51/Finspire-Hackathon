// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

const { ActivityHandler, MessageFactory } = require("botbuilder");

class EchoBot extends ActivityHandler {
  constructor() {
    super();
    // See https://aka.ms/about-bot-activity-message to learn more about the message and other activity types.
    this.onMessage(async (context, next) => {
      const replyText = `Echo: ${context.activity.text}`;
      await this.getAction(context, context.activity.text);
      // By calling next() you ensure that the next BotHandler is run.
      await next();
    });

    this.onMembersAdded(async (context, next) => {
      const membersAdded = context.activity.membersAdded;
      const welcomeText = "Hello and welcome!";
      for (let cnt = 0; cnt < membersAdded.length; ++cnt) {
        if (membersAdded[cnt].id !== context.activity.recipient.id) {
          await context.sendActivity(
            MessageFactory.text(welcomeText, welcomeText)
          );
        }
      }
      // By calling next() you ensure that the next BotHandler is run.
      await next();
    });
  }

  getAction = async (context, text) => {
    text = text.toLowerCase();
    let words = text.split(" ");
    if (words.includes("borrowed")) this.borrowAction(context, words);
    else if (words.includes("save")) this.saveAction(context, words);
    else if (words.includes("lent")) this.lentAction(context, words);
    else if (words.includes("spent")) this.spentAction(context, words);
    else if (words.includes("help")) this.giveHelp(context);
    else {
      await context.sendActivity(
        MessageFactory.text(
          "Sorry I don't undeerstand what you said",
          "Sorry I don't undeerstand what you said"
        )
      );
    }
  };

  borrowAction = async (context, words) => {
    let money, name;
    words.forEach((word, index) => {
      if (!isNaN(word)) money = word;
      if (words[index - 1] == "from") name = word;
    });
    const replyText = `You borrowed ${money} from ${name}`;
    await context.sendActivity(MessageFactory.text(replyText, replyText));
    await this.giveHelp();
  };

  lentAction = async (context, words) => {
    let money, name;
    words.forEach((word, index) => {
      if (!isNaN(word)) money = word;
      if (words[index - 1] == "to") name = word;
    });
    const replyText = `You lent ${money} to ${name}`;
    await context.sendActivity(MessageFactory.text(replyText, replyText));
  };

  spentAction = async (context, words) => {
    async (context, words) => {
      let money, reason;
      words.forEach((word, index) => {
        if (!isNaN(word)) money = word;
        if (words[index - 1] == "on") reason = word;
      });
      const replyText = `You spent ${money} on ${reason}`;
      await context.sendActivity(MessageFactory.text(replyText, replyText));
    };
  };

  saveAction = async (context, words) => {
    let money, reason;
    words.forEach((word, index) => {
      if (!isNaN(word)) money = word;
      if (words[index - 1] == "to") reason = word;
    });
    const replyText = `You want to save ${money} dollars to buy ${reason}`;
    await context.sendActivity(MessageFactory.text(replyText, replyText));
  };

  giveHelp = async context => {
    const replyText = `Record your information the following ways.
      \n For borrowing: Borrowed 100 dollars from Alex
      \n For Lending: Lent 200 dollars to Jason
      \n For Spending: Spent 100 dollars on food
      \n For Saving goals: Save 100 dollars to travel `;
    await context.sendActivity(MessageFactory.text(replyText, replyText));
  };
}

module.exports.EchoBot = EchoBot;
