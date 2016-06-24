[d3-hierarchy]
================================================
The type definition for [d3-hierarchy] (Part of d3.js 4.x)

Install
------------------------------------------------
```bash
npm install d3-hierarchy --save
typings install d3-hierarchy --save
# or typings install github:iamssen/typings-d3/d3-hierarchy --save
```

```typescript
import {color, rgb} from 'd3-hierarchy';
// or import * as d3_color from 'd3-hierarchy';
```

Using with [angular-cli]
------------------------------------------------
Add this line to `~/angular-cli-build.js` file.

```js
'd3-hierarchy/build/d3-hierarchy.min.js'
```

Map `d3-hierarchy.min.js` file to `~/src/system-config.ts`

```typescript
/** Map relative paths to URLs. */
const map: any = {
  'd3-hierarchy': 'vendor/d3-hierarchy/build/d3-hierarchy.min.js'
};
```

License
================================================
MIT


[d3-hierarchy]: https://github.com/d3/d3-hierarchy
[angular-cli]: https://github.com/angular/angular-cli