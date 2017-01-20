
# Contribution

## Install

```bash
git clone <%=gitRepository%>
cd <%=appName%>
npm install
npm link
```

## Build Scripts

- `npm start -- -key value` where `key` and `value` is an argument passed to CLI
- `npm test`
- `npm run release` tags in github and publishes to npm using [release-it](https://github.com/webpro/release-it#help)
