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

License
================================================
MIT


[d3-transition]: https://github.com/d3/d3-transition
