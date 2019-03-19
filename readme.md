# tranform-to-readstream

---

Install
---

```
npm install --save tranform-to-readstream

```

```
yarn add  tranform-to-readstream

```

Usage

---

```

string

```javasctipr
const readStream = new TranformToReadStream('hello word', { encoding: 'utf8'});

```

or buffer 

```javasctipr

import axios from 'axios';


const res = await axios({
    url: `http://assets.maocanhua.cn/FrIHg7SNAUqOU1WAlLGz6uCmHBiD`,
    responseType: 'arraybuffer'
})
const readStream = new TranformToReadStream(res.data);

```
  

```
