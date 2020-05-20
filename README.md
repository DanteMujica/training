# training

## 起動方法
前提としてdockerをあらかしめインストールしておく必要がある

ディレクトリ配下で下記コマンドを実行する
```
docker-compose up
```
起動したらブラウザで http://localhost/ にアクセスする。

他に使うコマンドまとめ
```
docker-compose up # dockerコンテナ起動
docker-compose ps # 立ち上げているdockerのコンテナ情報が見れる。起動中とか、止まっているとかがわかる
docker-compose down # アプリ停止コマンド dockerコンテナを立ち上げっぱなしだとPCのメモリを食うので、使ってないときは停止する
```