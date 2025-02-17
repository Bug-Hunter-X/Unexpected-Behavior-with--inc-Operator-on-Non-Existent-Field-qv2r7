```javascript
db.collection('counters').updateOne( { _id: 'myCounter' }, {
  $setOnInsert: { sequence: 0 },
  $inc: { sequence: -1 }
});
```