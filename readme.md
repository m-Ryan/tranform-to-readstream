# tranform-to-readstream

---

Install
---

```js
npm install --save tranform-to-readstream

```

```js
yarn add  tranform-to-readstream

```

Usage

---


string

```js
import TranformToReadStream from 'tranform-to-readstream';

const readStream = new TranformToReadStream('hello word', { encoding: 'utf8'});

```

or buffer 

```js

import axios from 'axios';
import TranformToReadStream from 'tranform-to-readstream';


const res = await axios({
    url: `http://assets.maocanhua.cn/FrIHg7SNAUqOU1WAlLGz6uCmHBiD`,
    responseType: 'arraybuffer'
})
const readStream = new TranformToReadStream(res.data);

```
