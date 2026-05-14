# my-extension README

This is the README for your extension "my-extension". After writing up a brief description, we recommend including the following sections.

## Features

Describe specific features of your extension including screenshots of your extension in action. Image paths are relative to this README file.

For example if there is an image subfolder under your extension project workspace:

\!\[feature X\]\(images/feature-x.png\)

> Tip: Many popular extensions utilize animations. This is an excellent way to show off your extension! We recommend short, focused animations that are easy to follow.

## Requirements

If you have any requirements or dependencies, add a section describing those and how to install and configure them.

## Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

* `myExtension.enable`: Enable/disable this extension.
* `myExtension.thing`: Set to `blah` to do something.

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of ...

### 1.0.1

Fixed issue #.

### 1.1.0

Added features X, Y, and Z.

---

## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

## Working with Markdown

You can author your README using Visual Studio Code. Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux).
* Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux).
* Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets.

## For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**


# my-extension README

VS CodeのサイドバーにTic Tac Toe（三目並べ）ゲームを表示するVS Code拡張機能です。

## 機能

- VS Codeのサイドバーで三目並べがプレイできる
- 手順の履歴管理とタイムトラベル
- 勝利マスのハイライト表示

## 必要環境

- Node.js 18以上
- npm

## 開発環境のセットアップ

### 1. 依存パッケージのインストール

```bash
npm install
cd webview-ui && npm install && cd ..
```

### 2. Reactアプリのビルド

```bash
cd webview-ui && npm run build && cd ..
```

### 3. 拡張機能本体のビルド

```bash
npm run compile
```

## デバッグ手順

### デバッグ起動

1. このプロジェクトをVS Codeで開く
2. `F5` を押して **Extension Development Host** を起動する
3. 新しいウィンドウのサイドバーアイコンをクリックしてゲームを開く

### WebviewのDevToolsを開く

Reactアプリ部分をブラウザのように検証できます：

```
コマンドパレット (Ctrl+Shift+P) → "Developer: Open Webview Developer Tools"
```

### ウォッチモード（開発中の推奨）

ターミナルを2つ開いて並行実行します：

```bash
# ターミナル1: ReactアプリのUI確認（ブラウザで開く）
cd webview-ui && npm start

# ターミナル2: 拡張機能本体の監視ビルド
npm run watch
```

変更を反映するには `Ctrl+Shift+F5` でExtension Development Hostを再起動します。

> **注意:** `webview-ui/` での `npm start` はブラウザ上でUIを確認するためのものです。実際のWebviewに反映するには `npm run build` が必要です。

## パッケージング手順

### 1. vsceのインストール

```bash
npm install -g @vscode/vsce
```

### 2. 本番用ビルド

```bash
npm run package
cd webview-ui && npm run build && cd ..
```

### 3. .vsixファイルの生成

```bash
vsce package
```

プロジェクトルートに `.vsix` ファイルが生成されます。

### 4. ローカルにインストール

```bash
code --install-extension my-extension-0.0.1.vsix
```

またはVS Code UI: 拡張機能 → `...` → `VSIXからインストール...`

## 拡張機能の設定

この拡張機能は設定項目を提供しません。

## 既知の問題

なし。

## リリースノート

### 0.0.1

初回リリース。

---

**Enjoy!**