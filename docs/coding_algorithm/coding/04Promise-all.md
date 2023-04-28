# 题目

实现 promise.all

# 解答
题目并不难，我们需要知道 promise.all 有两个特点：
1. 只有当所有 promise 都 resolve，才会返回 resolve
2. 只要有一个 promise reject，则会立刻 reject

针对上面两个特点，我们只需要一次执行 promises，然后将每个 promise 结果存到 result 数组。

如果 result 长度和 promises 的长度一样，即 result.length === promises.length，则说明所有 promise 都 resolve，这时则 resolve(result)，否则只要每执行一个 promise 有 reject 时，则直接 reject all promise。

```js
function pAll(arr) {
  return new Promise((resolve, reject) => {
    const result = []

    arr.forEach((v) => {
      // v 不一定是 promise
      Promise.resolve(v)
        .then((data) => {
          result.push(data)
          if (result.length === arr.length) {
            return resolve(result)
          }
        }, reject)
        .catch(reject)
    })
  })
}

const sleep = (seconds) => new Promise((resolve) => setTimeout(() => resolve(seconds), seconds))

pAll([1, 2, 3]).then((res) => console.log(res))
pAll([sleep(1000), sleep(3000), sleep(2000)]).then((res) => console.log(res))
pAll([sleep(1000), sleep(3000), sleep(2000), Promise.reject(10000)]).then((res) => console.log(res)).catch((e) => console.log(e, '<- Error'))
```