"use strict";
import * as vscode from "vscode";

const funTodos: string = "Remind me to drink water in every 30 minutes";

export function activate(context: vscode.ExtensionContext) {

  let reminder = vscode.commands.registerCommand("remindMe.remind", () => {
  // reminder message
  let reminderMessage: string = ` ⏰  '${
    funTodos
  }'⏰`;

  vscode.window.showInformationMessage(reminderMessage);

  // reminder time
  const timePeriod = 30*60*1000;
  var timer = setInterval(function () {
    vscode.window
      .showInformationMessage(`⏰  'Reminder - Drink Water! ⏰`)
      .then(() => {
        clearTimeout(timer);
        vscode.commands.executeCommand("remindMe.remind");
      });
  }, timePeriod);
      });
  context.subscriptions.push(reminder);
}
