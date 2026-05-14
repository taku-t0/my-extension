import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

export function activate(context: vscode.ExtensionContext) {
	const provider = new GameViewProvider(context.extensionUri);
	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider('myExtension.gameView', provider)
	);
}

class GameViewProvider implements vscode.WebviewViewProvider {
	constructor(private readonly extensionUri: vscode.Uri) { }

	resolveWebviewView(webviewView: vscode.WebviewView) {
		webviewView.webview.options = {
			enableScripts: true,
			localResourceRoots: [
				vscode.Uri.joinPath(this.extensionUri, 'webview-ui', 'build')
			]
		};
		webviewView.webview.html = this.getHtml(webviewView.webview);
	}

	private getHtml(webview: vscode.Webview): string {
		const buildDir = vscode.Uri.joinPath(this.extensionUri, 'webview-ui', 'build');

		const indexPath = path.join(buildDir.fsPath, 'index.html');
		let html = fs.readFileSync(indexPath, 'utf8');

		html = html.replace(
			/(src|href)="([^"]+)"/g,
			(match, attr, value) => {
				if (value.startsWith('http')) return match;
				const uri = webview.asWebviewUri(
					vscode.Uri.joinPath(buildDir, value)
				);
				return `${attr}="${uri}"`;
			}
		);

		return html;
	}
}

export function deactivate() { }