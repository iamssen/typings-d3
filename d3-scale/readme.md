[d3-scale]
================================================
The type definition for [d3-scale] (Part of d3.js 4.x)

Install
------------------------------------------------
```bash
npm install d3-scale --save
typings install d3-scale --save
# or typings install github:iamssen/typings-d3/d3-scale --save
```

```typescript
import {interpolate} from 'd3-scale';
// or import * as d3_interpolate from 'd3-scale';
```

Using with [angular-cli]
------------------------------------------------
Add this line to `~/angular-cli-build.js` file.

```js
'd3-array/build/d3-array.min.js', // dependent modules
'd3-collection/build/d3-collection.min.js',
'd3-color/build/d3-color.min.js',
'd3-format/build/d3-format.min.js',
'd3-interpolate/build/d3-interpolate.min.js',
'd3-time/build/d3-time.min.js',
'd3-time-format/build/d3-time-format.min.js',
'd3-scale/build/d3-scale.min.js' // d3-scale
```

Map `d3-scale.min.js` file to `~/src/system-config.ts`

```typescript
/** Map relative paths to URLs. */
const map: any = {
  'd3-array': 'vendor/d3-array/build/d3-array.min.js', // dependent modules
  'd3-collection': 'vendor/d3-collection/build/d3-collection.min.js',
  'd3-color': 'vendor/d3-color/build/d3-color.min.js',
  'd3-format': 'vendor/d3-format/build/d3-format.min.js',
  'd3-interpolate': 'vendor/d3-interpolate/build/d3-interpolate.min.js',
  'd3-time': 'vendor/d3-time/build/d3-time.min.js',
  'd3-time-format': 'vendor/d3-time-format/build/d3-time-format.min.js',
  'd3-scale': 'vendor/d3-scale/build/d3-scale.min.js' // d3-scale
};
```

License
================================================
MIT


[d3-scale]: https://github.com/d3/d3-scale
[angular-cli]: https://github.com/angular/angular-cli