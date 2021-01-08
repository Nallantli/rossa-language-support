const vscode = require("vscode");

function activate(context) {
	let rossa = {};
	let output = vscode.window.createTerminal("Rossa");

	rossa.path = "rossa";

	rossa.run = vscode.commands.registerCommand("rossa.run", () => {
		let code = vscode.window.activeTextEditor;
		code.document.save().then(() => {
			if (code != undefined) {
				let path = code.document.fileName;

				output.show();
				output.sendText(`${rossa.path} "${path}"`);
			}
		});
	});

	context.subscriptions.push(rossa.run);
}

exports.activate = activate;