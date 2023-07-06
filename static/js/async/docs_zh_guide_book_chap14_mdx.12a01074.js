(self.webpackChunkleet_code=self.webpackChunkleet_code||[]).push([["docs_zh_guide_book_chap14_mdx"],{2888:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return c}});var s,i=n("20040"),t=n("5371");function a(e){var r=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",strong:"strong",ol:"ol",li:"li",pre:"pre",code:"code"},(0,t.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.h1,{id:"第14章-算法设计与技巧",children:[(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#第14章-算法设计与技巧",children:"#"}),"第14章 算法设计与技巧"]}),"\n",(0,i.jsxs)(r.h2,{id:"分而治之",children:[(0,i.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#分而治之",children:"#"}),"分而治之"]}),"\n",(0,i.jsxs)(r.p,{children:["分而治之也称分治算法（Divde and conquer）是算法设计中一种常用的算法。它是将一个问题拆分成与原问题相似的多个小问题，然后",(0,i.jsx)(r.strong,{children:"递归"}),"解决这些小问题，最后这些小问题的结果进行组合来解决问题。"]}),"\n",(0,i.jsx)(r.p,{children:"分治的拆解步骤："}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"分解"}),"把一个大问题分解成多个子问题"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"解决"}),"子问题，用返回子问题的方式的递归算法。递归算法的基本情形可以解决算法"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"组合"}),"这些子问题的解决方式，来解决整个的大问题"]}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["例子：分治的方法处理二分法查找",(0,i.jsx)(r.a,{href:"https://github.com/javaswing/leet-code/blob/main/code/chap14/binarySearch.ts",target:"_blank",rel:"noopener noreferrer",children:"源码链接"})]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",meta:'title="binarySearch.ts"',children:"function binarySearchRecursive(arr: number[], value: number, low: number, hight: number) {\n  const defaultValue = -1;\n  if (low <= hight) {\n    const mid = Math.floor((hight + low) / 2);\n    if (arr[mid] > value) {\n      return binarySearchRecursive(arr, value, low, mid - 1);\n    } else if (arr[mid] < value) {\n      return binarySearchRecursive(arr, value, mid + 1, hight);\n    } else {\n      return mid;\n    }\n  }\n  return defaultValue;\n}\n\nexport default function binarySearch(arr: number[], value: number) {\n  const sortArr = quickSort(arr);\n  const low = 0;\n  const hight = sortArr.length - 1;\n  return binarySearchRecursive(sortArr, value, low, hight);\n}\n"})})]})}(s=globalThis).__RSPRESS_PAGE_META||(s.__RSPRESS_PAGE_META={}),globalThis.__RSPRESS_PAGE_META["%2Fhome%2Frunner%2Fwork%2Fleet-code%2Fleet-code%2Fdocs%2Fzh%2Fguide%2Fbook%2Fchap14.mdx"]={toc:[{id:"分而治之",text:"分而治之",depth:2}],title:"第14章 算法设计与技巧",frontmatter:{}};var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,t.useMDXComponents)(),e.components).wrapper;return r?(0,i.jsx)(r,Object.assign({},e,{children:(0,i.jsx)(a,e)})):a(e)}}}]);