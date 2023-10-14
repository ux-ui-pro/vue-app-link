<br>
<p align="center"><strong>vue-app-link</strong></p>

<div align="center">

[![npm](https://img.shields.io/npm/v/vue-app-link.svg?colorB=brightgreen)](https://www.npmjs.com/package/vue-app-link)
[![GitHub package version](https://img.shields.io/github/package-json/v/ux-ui-pro/vue-app-link.svg)](https://github.com/ux-ui-pro/vue-app-link)
[![NPM Downloads](https://img.shields.io/npm/dm/vue-app-link.svg?style=flat)](https://www.npmjs.org/package/vue-app-link)

</div>

<p align="center"><a href="https://26x3wc.csb.app/">Demo</a></p>
<br>

&#10148; **Install**

```console
yarn add vue-app-link
```
<br>

&#10148; **Import**

```javascript
import { createApp } from 'vue';
import AppLink from 'vue-app-link';

const app = createApp(App);

app.component('AppLink', AppLink);
app.mount('#app');
```
<br>

&#10148; **Usage**

```vue
<AppLink to="/">Home</AppLink>
```
```vue
<AppLink
    to="/"
    :throttle="1000"
    :changed="500"
>
  Home
</AppLink>
```
<br>

&#10148; **Settings**

| Option       |         Type          | Default  | Description                                                                                                                                                                                       |
|:-------------|:---------------------:|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `to`         | [String,&nbsp;Object] |    —     | Specifies the path to follow when a link is clicked.                                                                                                                                              |
| `throttle`   |        Number         |    —     | Sets the duration of the presence of the `.link-throttled` html class on a clicked link. This class can be used in conjunction with the `pointer-events` CSS property to prevent multiple clicks. |
| `changed`    |        Number         |    —     | As this component replaces the `<a href="...>` hyperlink with `<span>` on the target page, a delay may be required to allow this change to affect the animation call.                             |
<br>

&#10148; **License**

vue-app-link is released under MIT license
