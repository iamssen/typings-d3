[d3-axis]
================================================
The type definition for [d3-axis] (Part of d3.js 4.x)

Install
------------------------------------------------
```bash
npm install d3-axis --save
typings install d3-axis --save
# or typings install github:iamssen/typings-d3/d3-axis --save
```

```typescript
import {min, max} from 'd3-axis';
// or import * as d3_array from 'd3-axis';
```

Using with [angular-cli]
------------------------------------------------
Add this line to `~/angular-cli-build.js` file.

```js
'd3-axis/build/d3-axis.min.js'
```

Map `d3-axis.min.js` file to `~/src/system-config.ts`

```typescript
/** Map relative paths to URLs. */
const map: any = {
  'd3-axis': 'vendor/d3-axis/build/d3-axis.min.js'
};
```

See more...
================================================
- This definition is for [d3-axis] module.

License
================================================
MIT


[d3-axis]: https://github.com/d3/d3-axis
[angular-cli]: https://github.com/angular/angular-cli