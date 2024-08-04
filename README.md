# Nodejs_1st

### Node.jsとは

・簡単に言うとクライアントサイドおよびサーバーサイドまで作成可能<br>
　JavaScriptを使った設計手法(Node.jsは言語ではない)<br>
　
・リアルタイムアプリケーション(Line, チャット, zoomなど)が得意<br> 
　→ 非同期処理を得意としているため<br>

### バージョンについて

Node.js v22.1.0<br>

### モジュールのインストール

初期化(package.jsonの作成)<br>
`npm init -y`<br>

package.jsonとは<br>
モジュールのインストールに関して依存関係やバージョンを管理するファイル<br>

### サーバの作成

server.jsを作成し実行 → 「nodejs」のconsoleが表示される<br>
`node server.js`<br>

### HTTPモジュールの使用

`npm install --save-dev http`<br>

### package.json内scriptsの設定

scriptsを編集することでサーバーの立て方を変更<br>
これにより node server.js のような立て方を変更可能<br>
"dev": "start server.js"と記載することでnpm run startと書くことも可能<br>

"scripts": {
    "dev": "node server.js"
}

以下のコマンドで実行可能<br>

`npm run dev`<br>

### nodemonモジュールのインストール

Node.jsサーバー起動時に自動でリロードするモジュール<br>
ファイルを保存する度にリロードしてくれる<br>
グローバルでインストールするためpackage.jsonに記載はなし<br>

`npm install -g nodemon`<br>

package.jsonのdevを編集<br>

"scripts": {
    "dev": "nodemon server.js"
}

index.htmlを変更後、server.jsで一度保存、その後ブラウザで更新をすると更新されたhtmlが表示される
