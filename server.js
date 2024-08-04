// console.log("nodejs");

// インストールしたhttpをrequire(読み込み)をする
// インストールしたhttpを使うことでクライアントとサーバーとのやり取りが可能になる
// https://nodejs.org/api/http.html
const http = require("http");

// ポート番号
const PORT = 8000;

// Node.jsが標準で用意しているfsライブラリを使ってファイルを処理する
// index.htmlを読み込んでサーバーを立てる
// readFileSync ファイルの読み込み指定(非同期処理)
const html = require("fs").readFileSync("./index.html");

// webサーバーを作る
// createServerにアクセスしreq(リクエスト)とres(レスポンス)の引数で受け取る
const server = http.createServer((req, res) => {
    // ブラウザからアクセスが来た時の処理
    // writeHead レスポンスが来た時にヘッダー情報を返す
    //           ヘッダー情報を付与してやり取りする
    // ヘッダー情報とは HTMLなのかどうか、日本語なのかどうか等
    // 第一引数 200 アクセスが成功した場合 (300 何らかの問題がある場合、400 クライアント側またはサーバー側に問題あり)
    // 第二引数 ヘッダー情報 "Content-Type": "text/html" HTMLのタイプで処理する
    res.writeHead(200, { "Content-Type": "text/html" });

    // 書き込み body要素への書き込み
    // res.write("<h1>Hello World</h1>");

    // htmlファイルへ書き込み
    res.write(html);

    // 終了
    res.end();

    // 以下のような分岐処理も可能
    // if (req.method == "GET") {
    // }
    // if (req.method == "POST") {
    // }

});

// サーバーの起動
// 第一引数 ポート番号の指定
// npm run devでサーバーが立てられる その後、http://localhost:8000 でもアクセス可能
server.listen(PORT, () => {
    console.log("server running!");
});