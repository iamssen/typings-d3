[d3-selection]
================================================
The type definition for [d3-selection] (Part of d3.js 4.x)

Install
------------------------------------------------
```bash
npm install d3-selection --save
typings install d3-selection --save
# or typings install github:iamssen/typings-d3/d3-selection --save
```

```typescript
import {select, Selection} from 'd3-selection';
// or import * as d3_selection from 'd3-selection';
```

Using with [angular-cli]
------------------------------------------------
Add this line to `~/angular-cli-build.js` file.

```js
'd3-selection/build/d3-selection.min.js'
```

Map `d3-selection.min.js` file to `~/src/system-config.ts`

```typescript
/** Map relative paths to URLs. */
const map: any = {
  'd3-selection': 'vendor/d3-selection/build/d3-selection.min.js'
};
```

[d3-transition]
================================================
This definition file include [d3-transition] API.

If you want use `Selection.transition()`. You need to import [d3-transition].

```typescript
import 'd3-transition'; // import d3-transition
import {select} from 'd3-selection';

select('a').transition() // then you can use Selection.transition()
```

License
================================================
MIT


[d3-transition]: https://github.com/d3/d3-transition
[d3-selection]: https://github.com/d3/d3-selection
[angular-cli]: https://github.com/angular/angular-cli