import * as vscode from "vscode";

const fileSwitch = vscode.window.onDidChangeActiveTextEditor;
const fileEdit = vscode.workspace.onDidChangeTextDocument;

fileSwitch(() => {});
