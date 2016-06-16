[d3-path]
================================================
The type definition for [d3-path] (Part of d3.js 4.x)

Install
------------------------------------------------
```bash
npm install d3-path --save
typings install d3-path --save
# or typings install github:iamssen/typings-d3/d3-path --save
```

```typescript
import {color, rgb} from 'd3-path';
// or import * as d3_color from 'd3-path';
```

Using with [angular-cli]
------------------------------------------------
Add this line to `~/angular-cli-build.js` file.

```js
'd3-path/build/d3-path.min.js'
```

Map `d3-path.min.js` file to `~/src/system-config.ts`

```typescript
/** Map relative paths to URLs. */
const map: any = {
  'd3-path': 'vendor/d3-path/build/d3-path.min.js'
};
```

License
================================================
MIT


[d3-path]: https://github.com/d3/d3-path
[angular-cli]: https://github.com/angular/angular-cli