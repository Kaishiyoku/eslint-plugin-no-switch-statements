# Forbid the use of `switch`

Switch statements work but they are often considered bad practice and harmful, e.g. when you forget `break` notations.

Further information: https://hackernoon.com/flip-the-switch-239d2d479a29

### Fail

```js
var test = 3;

switch (test) {
    case 1:
        console.log('one');
        break;
    case 2:
        console.log('two');
        break;
    case 3:
        console.log('three');
        break;
    default:
        console.log('unknown');
}
```
