import {min, Histogram, histogram} from '../d3-array';
import * as arr from '../d3-array';
import * as sel from '../d3-selection';

type D3 = arr & sel;
const d3:D3 = Object.assign({}, arr, sel);

const x:Histogram<string> = histogram<string>();
x.domain((values:Node[]) => ([10, 20]));

min([1, 2, 3])