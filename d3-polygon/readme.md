[d3-polygon]
================================================
The type definition for [d3-polygon] (Part of d3.js 4.x)

Install
------------------------------------------------
```bash
npm install d3-polygon --save
typings install d3-polygon --save
# or typings install github:iamssen/typings-d3/d3-polygon --save
```

```typescript
import {color, rgb} from 'd3-polygon';
// or import * as d3_color from 'd3-polygon';
```

Using with [angular-cli]
------------------------------------------------
Add this line to `~/angular-cli-build.js` file.

```js
'd3-polygon/build/d3-polygon.min.js'
```

Map `d3-polygon.min.js` file to `~/src/system-config.ts`

```typescript
/** Map relative paths to URLs. */
const map: any = {
  'd3-polygon': 'vendor/d3-polygon/build/d3-polygon.min.js'
};
```

License
================================================
MIT


[d3-polygon]: https://github.com/d3/d3-polygon
[angular-cli]: https://github.com/angular/angular-cli