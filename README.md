# Nodejs_1st

### Node.jsとは

・簡単に言うとクライアントサイドおよびサーバーサイドまで作成可能
　JavaScriptを使った設計手法(Node.jsは言語ではない)
　
・リアルタイムアプリケーション(Line, チャット, zoomなど)が得意 
　→ 非同期処理を得意としているため

### バージョンについて

Node.js v22.1.0

### モジュールのインストール

初期化(package.jsonの作成)
`npm init -y`

package.jsonとは
モジュールのインストールに関して依存関係やバージョンを管理するファイル

### サーバの作成

server.jsを作成し実行 → 「nodejs」のconsoleが表示される
`node server.js`

### HTTPモジュールの使用

`npm install --save-dev http`

### package.json内scriptsの設定

scriptsを編集することでサーバーの立て方を変更
これにより node server.js のような立て方を変更可能
"dev": "start server.js"と記載することでnpm run startと書くことも可能

"scripts": {
    "dev": "node server.js"
}

以下のコマンドで実行可能

`npm run dev`

### nodemonモジュールのインストール

Node.jsサーバー起動時に自動でリロードするモジュール
ファイルを保存する度にリロードしてくれる
グローバルでインストールするためpackage.jsonに記載はなし

`npm install -g nodemon`

package.jsonのdevを編集

"scripts": {
    "dev": "nodemon server.js"
}

index.htmlを変更後、server.jsで一度保存、その後ブラウザで更新をすると更新されたhtmlが表示される
