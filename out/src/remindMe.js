"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const funTodos = "Remind me to drink water in every 30 minutes";
function activate(context) {
    let reminder = vscode.commands.registerCommand("remindMe.remind", () => {
        // reminder message
        let reminderMessage = ` ⏰  '${funTodos}'⏰`;
        vscode.window.showInformationMessage(reminderMessage);
        // reminder time
        const timePeriod = 30 * 60 * 1000;
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
exports.activate = activate;
//# sourceMappingURL=remindMe.js.map