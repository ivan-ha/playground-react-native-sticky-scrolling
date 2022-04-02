# playground-react-native-sticky-scrolling

A playground repo to try sticky element in React Native scrolling view.

https://user-images.githubusercontent.com/20895743/161380698-2f5572ec-c9f5-4f19-8aa4-2d63cdbcf0bf.mov

## Installation

For this demo to work, we need to install the [`rn-native-portals`](https://github.com/dylancom/rn-native-portals) that's not published to NPM, and because it's just a demo, let's install it locally instead of published it to NPM.

p.s. `yarn link` won't work for React Native.

```shell
git clone git@github.com:dylancom/rn-native-portals.git
````

Modify `metro.config.js`
```js
const packagePath = '_your_local_patah_to_rn-native-portals_';
```

Then, install it with a local file path.
```shell
yarn add <_your_local_patah_to_rn-native-portals_>
```

## Development

```shell
yarn
yarn ios
```

## Reference

1. Visit [this blog](https://medium.com/@alielmajdaoui/linking-local-packages-in-react-native-the-right-way-2ac6587dcfa2) to know more on installing a local package.
2. The implementation is inspired by [this blog post](https://blog.bam.tech/developer-news/how-to-make-a-sticky-video-on-scroll-like-in-youtube-app).
3. [How a fullscreen video mode ended up implementing React Native Portals? – Bedrock Tech](https://github.com/BedrockStreaming/tech.bedrockstreaming.com/blob/master/_posts/2018-04-15-how-a-fullscreen-video-mode-ended-up-implementing-react-native-portals.md)

## Caveat

1. Expo doesn't support installing 3rd party native library, therefore this repo is `expo eject`-ed.
2. The `rn-native-portals` claimed to be not ready for production, we have to examine it carefully before adopting this solution.
3. When video is `sticky`
   1. video control doesn't work, probably the press was blocked by some invisibly layer, need further check.
   2. `ScoreView` will crash into the video, need more styling hack to make it work.
