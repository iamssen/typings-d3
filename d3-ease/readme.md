[d3-ease]
================================================
The type definition for [d3-ease] (Part of d3.js 4.x)

Install
------------------------------------------------
```bash
npm install d3-ease --save
typings install d3-ease --save
# or typings install github:iamssen/typings-d3/d3-ease --save
```

```typescript
import {interpolate} from 'd3-ease';
// or import * as d3_interpolate from 'd3-ease';
```

Using with [angular-cli]
------------------------------------------------
Add this line to `~/angular-cli-build.js` file.

```js
'd3-ease/build/d3-ease.min.js'
```

Map `d3-ease.min.js` file to `~/src/system-config.ts`

```typescript
/** Map relative paths to URLs. */
const map: any = {
  'd3-ease': 'vendor/d3-ease/build/d3-ease.min.js'
};
```

License
================================================
MIT


[d3-ease]: https://github.com/d3/d3-ease
[angular-cli]: https://github.com/angular/angular-cli