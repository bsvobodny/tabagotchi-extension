# tabagotchi-extension

> a chrome extension tools built with Vite + React-ts, and Manifest v3

## Installing

1. Check if your `Node.js` version is >= **14**.
2. Change or configurate the name of your extension on `src/manifest`.
3. Run `npm install` to install the dependencies.

## Developing

run the command

```shell
$ cd tabagotchi-extension

$ npm run dev
```

### Chrome Extension Developer Mode

1. set your Chrome browser 'Developer mode' up
2. click 'Load unpacked', and select `tabagotchi-extension/build` folder

### Nomal FrontEnd Developer Mode

1. access `http://localhost:3000/`
2. when debugging popup page, open `/popup.html`
3. when debugging options page, open `/options.html`

## Packing

After the development of your extension run the command

```shell
$ npm build
```

Now, the content of `build` folder will be the extension ready to be submitted to the Chrome Web Store. Just take a look at the [official guide](https://developer.chrome.com/webstore/publish) to more infos about publishing.


## Collaborators

<a href="https://github.com/xyam">
    <img src="https://avatars.githubusercontent.com/u/32527058?v=4?s=100" width="100px;" alt="Maxime Sanchez"/> 
</a
<a href="https://github.com/bsvobodny">
    <img src="https://avatars.githubusercontent.com/u/14125410?v=4?s=100" width="100px;" alt="Benjamin Svobodny"/> 
</a>

