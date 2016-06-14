[d3-array]
================================================
The type definition for [d3-array] (Part of d3.js 4.x)

Install
------------------------------------------------
```bash
npm install d3-array --save
typings install d3-array --save
# or typings install github:iamssen/typings-d3/d3-array --save
```

```typescript
import {min, max} from 'd3-array';
// or import * as d3_array from 'd3-array';
```

Using with [angular-cli]
------------------------------------------------
Add this line to `~/angular-cli-build.js` file.

```js
'd3-array/build/d3-array.min.js'
```

Map `d3-array.min.js` file to `~/src/system-config.ts`

```typescript
/** Map relative paths to URLs. */
const map: any = {
  'd3-array': 'vendor/d3-array/build/d3-array.min.js'
};
```

See more...
================================================
- This definition is for [d3-array] module.

License
================================================
MIT


[d3-array]: https://github.com/d3/d3-array
[angular-cli]: https://github.com/angular/angular-cli