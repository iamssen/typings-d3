[d3-transition]
================================================
The type definition for [d3-transition] (Part of d3.js 4.x)

Install
------------------------------------------------
```bash
npm install d3-transition --save
typings install d3-transition --save
# or typings install github:iamssen/typings-d3/d3-transition --save
```

```typescript
// d3-transition will patch d3-selection (unlock Selection.transition())
import 'd3-transition';
import {select, Transition} from 'd3-selection';

// d3-transition just has 3 functions
import {transition, active, interrupt} from 'd3-transition';

const t:Transition = select('a').transition();
t.style('background-color', 'red');
```

Using with [angular-cli]
------------------------------------------------
Add this lines to `~/angular-cli-build.js` file

```js
'd3-color/build/d3-color.min.js', // dependent modules
'd3-dispatch/build/d3-dispatch.min.js',
'd3-ease/build/d3-ease.min.js',
'd3-interpolate/build/d3-interpolate.min.js',
'd3-selection/build/d3-selection.min.js',
'd3-timer/build/d3-timer.min.js',
'd3-transition/build/d3-transition.min.js' // d3-transition
```

Map files to `~/src/system-config.ts`

```typescript
/** Map relative paths to URLs. */
const map: any = {
  'd3-color': 'vendor/d3-color/build/d3-color.min.js', // dependent modules
  'd3-dispatch': 'vendor/d3-dispatch/build/d3-dispatch.min.js',
  'd3-ease': 'vendor/d3-ease/build/d3-ease.min.js',
  'd3-interpolate': 'vendor/d3-interpolate/build/d3-interpolate.min.js',
  'd3-selection': 'vendor/d3-selection/build/d3-selection.min.js',
  'd3-timer': 'vendor/d3-timer/build/d3-timer.min.js',
  'd3-transition': 'vendor/d3-transition/build/d3-transition.min.js' // d3-transition
};
```

Dependent type guide
================================================
- Interpolation: `(t:number) => any`
- Ease: `(t:number) => number`

License
================================================
MIT


[d3-transition]: https://github.com/d3/d3-transition
[angular-cli]: https://github.com/angular/angular-cli
