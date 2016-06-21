[d3-shape]
================================================
The type definition for [d3-shape] (Part of d3.js 4.x)

Install
------------------------------------------------
```bash
npm install d3-shape --save
typings install d3-shape --save
# or typings install github:iamssen/typings-d3/d3-shape --save
```

```typescript
import {color, rgb} from 'd3-shape';
// or import * as d3_color from 'd3-shape';
```

Using with [angular-cli]
------------------------------------------------
Add this line to `~/angular-cli-build.js` file.

```js
'd3-path/build/d3-path.min.js', // dependent modules
'd3-shape/build/d3-shape.min.js' // d3-shape
```

Map `d3-shape.min.js` file to `~/src/system-config.ts`

```typescript
/** Map relative paths to URLs. */
const map: any = {
  'd3-path': 'vendor/d3-path/build/d3-path.min.js', // dependent modules
  'd3-shape': 'vendor/d3-shape/build/d3-shape.min.js' // d3-shape
};
```

License
================================================
MIT


[d3-shape]: https://github.com/d3/d3-shape
[angular-cli]: https://github.com/angular/angular-cli