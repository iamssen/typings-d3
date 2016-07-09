# Selection

```
call(func:(selection:Selection, ...args) => void, ...args):this;
nodes():Node[];
node():Node;
size():number;
empty():boolean;
each(func:$$.ValueFunction<void>):this;
select(selector:$$.Selector | $$.ValueFunction<Node>):this;
selectAll(selector:$$.SelectorAll | $$.ValueFunction<Node[] | NodeListOf<Node>>):this;
filter(filter:$$.ValueFunction<boolean>):this;
merge(otherSelection:Selection):this;
attr(name:string):any;
attr(name:string, value:$$.Primitive):this;
attr(name:string, value:$$.ValueFunction<$$.Primitive>):this;
style(name:string):any;
style(name:string, value:$$.Primitive, priority?:boolean):this;
style(name:string, value:$$.ValueFunction<$$.Primitive>, priority?:boolean):this;
text():string;
text(value:string):this;
text(value:$$.ValueFunction<string>):this;
remove():this;
data():any[];
data(value:any[] | $$.ValueFunction<any>, key?:$$.ValueFunction<any>):this;
enter():this;
exit():this;
order():this;
sort(comparator:(a:any, b:any) => number):this;
property(name:string):any;
property(name:string, value:any):this;
property(name:string, value:$$.ValueFunction<any>):this;
classed(name:string):boolean;
classed(name:string, value:boolean):this;
classed(name:string, value:$$.ValueFunction<boolean>):this;
html():string;
html(value:string):this;
html(value:$$.ValueFunction<string>):this;
raise():this;
lower():this;
append(type:string):this;
append(type:$$.ValueFunction<Node>):this;
insert(type:string | $$.ValueFunction<Node>, before?:$$.Selector | $$.ValueFunction<Node>):this;
datum():any;
datum(value:any):this;
on(type:string, listener?:$$.ValueFunction<void>, capture?:boolean):this;
dispatch(type:string, params?:$$.ValueFunction<any> | any):this;
```

# Transition

```
call(func:(selection:Selection, ...args) => any, ...args):this;
nodes():Node[];
node():Node;
size():number;
empty():boolean;
each(func:$$.ValueFunction<void>):this;
select(selector:$$.Selector | $$.ValueFunction<Node>):this;
selectAll(selector:$$.SelectorAll | $$.ValueFunction<Node[] | NodeListOf<Node>>):this;
filter(filter:$$.ValueFunction<boolean>):this;
merge(otherSelection:Selection):this;
attr(name:string):any;
attr(name:string, value:$$.Primitive):this;
attr(name:string, value:$$.ValueFunction<$$.Primitive>):this;
style(name:string):any;
style(name:string, value:$$.Primitive, priority?:boolean):this;
style(name:string, value:$$.ValueFunction<$$.Primitive>, priority?:boolean):this;
text():string;
text(value:string):this;
text(value:$$.ValueFunction<string>):this;
remove():this;
transition(transition?:any):this;
selection():Selection;
on(type:string):$$.ValueFunction<void>;
on(type:string, listener:$$.ValueFunction<void>):this;
on(type:'start'):$$.ValueFunction<void>;
on(type:'start', listener:$$.ValueFunction<void>):this;
on(type:'end'):$$.ValueFunction<void>;
on(type:'end', listener:$$.ValueFunction<void>):this;
on(type:'interrupt'):$$.ValueFunction<void>;
on(type:'interrupt', listener:$$.ValueFunction<void>):this;
attrTween(name:string):$$.ValueFunction<(t:number) => any>;
attrTween(name:string, value:(t:number) => any):this;
attrTween(name:string, value:$$.ValueFunction<(t:number) => any>):this;
styleTween(name:string):$$.ValueFunction<(t:number) => any>;
styleTween(name:string, value:(t:number) => any, priority?:boolean):this;
styleTween(name:string, value:$$.ValueFunction<(t:number) => any>, priority?:boolean):this;
tween(name:string):$$.ValueFunction<(t:number) => void>;
tween(name:string, value:(t:number) => void):this;
tween(name:string, value:$$.ValueFunction<(t:number) => void>):this;
delay():number;
delay(value:number):this;
delay(value:$$.ValueFunction<number>):this;
duration():number;
duration(value:number):this;
duration(value:$$.ValueFunction<number>):this;
ease():(t:number)=>number;
ease(value:(t:number)=>number);
```

# BaseSelection

```
nodes():Node[];
node():Node;
size():number;
empty():boolean;
each(func:$$.ValueFunction<void>):this;
select(selector:$$.Selector | $$.ValueFunction<Node>):this;
selectAll(selector:$$.SelectorAll | $$.ValueFunction<Node[] | NodeListOf<Node>>):this;
filter(filter:$$.ValueFunction<boolean>):this;
merge(otherSelection:Selection):this;
attr(name:string):any;
attr(name:string, value:$$.Primitive):this;
attr(name:string, value:$$.ValueFunction<$$.Primitive>):this;
style(name:string):any;
style(name:string, value:$$.Primitive, priority?:boolean):this;
style(name:string, value:$$.ValueFunction<$$.Primitive>, priority?:boolean):this;
text():string;
text(value:string):this;
text(value:$$.ValueFunction<string>):this;
remove():this;
```