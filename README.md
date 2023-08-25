# Buffer and Stream

Think of a **buffer** as a temporary storage box for data, like a basket. You put things (data) in the basket (buffer) so you can carry them around or work with them.

A **stream**, on the other hand, is like a conveyor belt that moves data from one place to another in small pieces. It's like sending one piece of a puzzle at a time, rather than sending the whole puzzle at once. This is helpful when you have a big puzzle (large file) that you don't want to move all at once because it's heavy.

So, a buffer is like a basket for holding data, and a stream is like a conveyor belt for moving data in small parts. They both help manage data efficiently in programs, especially when dealing with large amounts of information.const 

```js
fs = require('fs')

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf-8'})
const writeStream = fs.createWriteStream('./docs/blog4.txt')

readStream.on('data', (chunk) => {
  console.log('---- New Chunk ----')
  console.log(chunk)
  writeStream.write('\nNEW CHUNK\n')
  writeStream.write(chunk)
})
```