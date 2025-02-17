# MongoDB $inc Operator Bug
This example demonstrates a potential issue when using the `$inc` operator in MongoDB with a field that doesn't pre-exist. Using `$inc` with a negative value to decrement a non-existent field can lead to unexpected results.

## Bug Description
The code attempts to decrement a counter using `$inc`, but if the counter field does not yet exist, the operation may fail or produce unpredictable results. This is particularly true if the field's type is not defined beforehand.

## Solution
The solution involves ensuring that the counter field exists and is of the appropriate type (usually a Number) before attempting to modify it using `$inc`. We can do this by using the `$setOnInsert` operator within a single update operation.