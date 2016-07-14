Type definitions for d3.js 4.x
================================================
![travis-ci](https://travis-ci.org/iamssen/typings-d3.svg?branch=master)

Install
------------------------------------------------
```bash
npm install d3-selection d3-transition d3-array ... --save
npm install types.d3 --save
```
Install d3 modules and `types.d3` module.

```json
{
  "compilerOptions" : {
    "typeRoots" : [ "node_modules" ],
    "types" : [ "types.d3" ]
  }
}
```
Add `typeRoots` and `types` to your `tsconfig.json`.

> tsc compiler will find `index.d.ts` files with `typeRoots` and `types`
> it is like add `/// <reference path="${typeRoots}/${types}/index.d.ts"/>` to your ts file.

```typescript
import {select} from 'd3-selection';
import {min, max} from 'd3-array';
```


`d3-selection` and `d3-transition`
------------------------------------------------
`d3-selection` include `d3-transition` API.

If you want use `Selection.transition()`. You need to import `d3-transition` before use that.

```typescript
import 'd3-transition'; // import the d3-transition
import {select} from 'd3-selection';

select('a').transition(); // then you can use Selection.transition()
```


Work Status
================================================
- [x] [d3-array](https://github.com/d3/d3-array)
- [x] [d3-axis](https://github.com/d3/d3-axis)
- [ ] [d3-brush](https://github.com/d3/d3-brush)
- [ ] [d3-chord](https://github.com/d3/d3-chord)
- [ ] [d3-collection](https://github.com/d3/d3-collection)
- [x] [d3-color](https://github.com/d3/d3-color)
- [ ] [d3-dispatch](https://github.com/d3/d3-dispatch)
- [ ] [d3-drag](https://github.com/d3/d3-drag)
- [x] [d3-ease](https://github.com/d3/d3-ease)
- [ ] [d3-force](https://github.com/d3/d3-force)
- [x] [d3-hierarchy](https://github.com/d3/d3-hierarchy)
- [x] [d3-interpolate](https://github.com/d3/d3-interpolate)
- [x] [d3-path](https://github.com/d3/d3-path)
- [x] [d3-polygon](https://github.com/d3/d3-polygon)
- [ ] [d3-quadtree](https://github.com/d3/d3-quadtree)
- [ ] [d3-random](https://github.com/d3/d3-random)
- [x] [d3-scale](https://github.com/d3/d3-scale)
- [x] [d3-selection](https://github.com/d3/d3-selection)
- [x] [d3-shape](https://github.com/d3/d3-shape)
- [ ] [d3-time](https://github.com/d3/d3-time)
- [ ] [d3-time-format](https://github.com/d3/d3-time-format)
- [ ] [d3-timer](https://github.com/d3/d3-timer)
- [x] [d3-transition](https://github.com/d3/d3-transition)
- [ ] [d3-voronoi](https://github.com/d3/d3-voronoi)
- [ ] [d3-zoom](https://github.com/d3/d3-zoom)


License
================================================
MIT


Other definitions for d3.js 4.x
================================================
- [tomwanzek/d3-v4-definitelytyped](https://github.com/tomwanzek/d3-v4-definitelytyped)