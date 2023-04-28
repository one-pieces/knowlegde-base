# 题目
实现一个 render 函数，要求传入 template 和 data，执行 render 函数之后可以正确解析 template

```js
const template = '{{ user["name"] }}，今天你又学习了吗 - 用户ID: {{ user.id }}'
const data = {
  user: {
    id: 10086,
    name: "test",
  },
};
console.log(render(template, data))
// test，今天你又学习了吗 - 用户ID: 10086
```

# 解答
我们可以按以下步骤来实现 render 函数：
1. 获取 template 里的变量名，即 {{}} 内的字符串（**使用 replace + 正则，获取 {{}} 内字符串**）
2. 将变量字符串转换为变量字段数组（**通过 replace + 正则，将不同的取值方式，比如 '.', '[]'，统一转换为 '.'，然后使用 split 转换位数组**）
3. 将数组转换为 data 内的具体值（**使用 for 循环，一层层地将 data 内的值取出**）

```js
const get = (data, path, defaultValue) => {
  // a[3].b -> a.3.b -> [a, 3, b]
  const paths = path
    .replace(/\[(\w+)\]/g, '.$1')
    .replace(/\["(\w+)"\]/g, '.$1')
    .replace(/\['(\w+)'\]/g, '.$1')
    .split('.')
  let result = data
  for (const p of paths) {
    result = result?.[p] || defaultValue
  }
  return result 
}

const render = (template, data) => {
  return template.replace(/{{\s+([^\s]+)\s+}}/g, (capture, key) => {
    console.log('capture, key', capture, key)
    return get(data, key)
  })
}

const template = '{{ user["name"] }}，今天你又学习了吗 - 用户ID: {{ user.id }}'
const data = {
  user: {
    id: 10086,
    name: "test",
  },
};
console.log(render(template, data))
```