# サスケWorks API用 スプレッドシートGAS
## リポジトリをclone
```
git clone https://interpark.backlog.jp/git/DEV/works_api_gas.git
```
## node_modulesを取得
```
cd works_api_gas

yarn
```
## ルート直下に.clasp.jsonを作成
```
cat <<EOL >> .clasp.json
{
  "scriptId":"1h3aStSj0YqJ0qRgZthbOOqBIU_2jPvSUnTHi0bZiHc5PQgFYss0329k-",
  "parentId":["1DhiIAHydAjcwYEKNE0IyIvdsJSjLFnP2hr8Ln_69VZ8"],
  "rootDir":"./claspDist",
  "filePushOrder": [
    "claspDist/appsscript.json",
    "claspDist/index.html",
    "claspDist/text/text.ts",
    "claspDist/lib/common.ts",
    "claspDist/lib/app.ts",
    "claspDist/lib/property.ts",
    "claspDist/main.ts"
  ]
}
EOL
```
## 運用上注意すべきこと
- サーバー側のファイルを増やした場合は.clasp.jsonにも追記する
