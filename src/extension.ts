import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "vslack" is now active!');

  vscode.window.showInformationMessage("hi");
}

// this method is called when your extension is deactivated
export function deactivate() {}
