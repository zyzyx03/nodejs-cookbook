# Accessing nodeJs global object

```js
console.log(globalglobal.setTimeout(() => {
  console.log('in the timeout')
}, 3000);
```
```js

// Available by default you dont have to type global

setTimeout(() => {
  console.log('in the timeout')
  clearInterval(int)
}, 3000);

const int = setInterval(() => {
  console.log('in the interval')
}, 1000)

console.log(__dirname)
console.log(__filename)
```


