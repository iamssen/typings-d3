# [d3-selection](https://github.com/d3/d3-selection)

The type definition for `d3-selection` (Part of d3.js 4.x)

## Install

```
npm install d3-selection --save
typings install d3-selection --save
// or typings install github:iamssen/typings-d3/d3-selection --save
```

```
import {select, Selection} from 'd3-selection';
// or import * as d3_selection from 'd3-selection';
```

## Using with `angular-cli`

Add this line to `~/angular-cli-build.js` file.
```
'd3-selection/build/d3-selection.min.js'
```

Map `d3-selection.min.js` file to `~/src/system-config.ts`
```
/** Map relative paths to URLs. */
const map: any = {
  'd3-selection': 'vendor/d3-selection/build/d3-selection.min.js'
};
```

# License
MIT
