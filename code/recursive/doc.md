## 第九章 递归

> “要理解递归，首先要理解递归。——佚名

递归：自己调用自己进行解决问题，多在树结构中出现。其核心：找到重复的部分，和跳出的边界条件(也叫基线条件)。两个经典的例子：

### 阶乘 
这个是高中数据的知识点，0的阶乘是`1`，负数的阶乘不存在
5!(5的阶乘) = 5 x 4 x 3 x 2 x 1 = 120

```js  
// 递归
function factorialRecursive(num) {
  if (num === 0 || num === 1) return 1;
  if (num < 0) return;
  return num * factorialRecursive(num - 1);
}

// 迭代
function factorialIterative(num) {
  let result = 1;
  // if(num <= 2) return num;
  for (let index = 1; index <= num; index++) {
    result *= index;
  }
  return result;
}
```


## 斐波那契数列
0 1 1 2 3 5 即后一位为前两位的和
- 位置是0的数列为零
- 1和2的斐波那契数为1
- n > 2的数列为： (n -1) + (n - 2)

```js  
// 递归
function fibonacciRecursive(num) {
  if (num < 1) return 0;
  if (num === 1 || num === 2) return 1;
  return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
}


// 迭代
function fibonacciIterative(num) {
  if (num < 1) return 0;
  if (num === 1 || num === 2) return 1;

  let res = 0;
  let f1 = 0;
  let f2 = 1;
  //   正向迭代 初始化为0，所以迭代次数为：位数 - 1
  for (let index = 0; index < num - 1; index++) {
    res = f1 + f2;
    f1 = f2;
    f2 = res;
  }

  return res;
}
```

### 记忆化的fibonacci
主要用一个数据进行结果的缓存，memo。减少计算次数，从而提高效率

```js
function fibonacciMemoization(n) {
  const memo = [0, 1]; // {1}
  const fibonacci = (n, memo) => {
    if (memo[n] != null) return memo[n]; // {2}
    return (memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)); // {3}
  };
  return fibonacci(n, memo);
}
```

## 总结
- 性能层面
  递归和迭代相比并不具有性能优势。有些情况下还不如迭代。

- 优点
  代码量少，容读