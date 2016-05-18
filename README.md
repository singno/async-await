#####package.json依赖
```
  "devDependencies": {
    "babel-plugin-transform-runtime": "^6.8.0",
    "babel-plugin-syntax-async-functions": "^6.8.0",
    "babel-plugin-transform-regenerator": "^6.8.0",
    "babel-preset-es2015": "^6.8.0",
    "babel-runtime": "^6.8.0"
  }
```

#####安装依赖
```
npm install -g babel-cli
npm install
```

#####配置.babelrc
```
{
  "presets": ["es2015"],
  "plugins": ["syntax-async-functions","transform-regenerator","transform-runtime"]
}
```

#####运行`npm start`
```
const justPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello world');
    }, 1000);
  });
};

const testAsync = async () => {
  console.log('Waiting...');
  const t = await justPromise();
  console.log(t);
};

testAsync();
```

#####各依赖组件的作用
babel-plugin-syntax-async-functions：允许babel解析async语法

babel-plugin-transform-regenerator：转换async和generator语法为通用js语法

babel-plugin-transform-runtime、babel-runtime: 省去引入babel-polyfill的麻烦

babel-preset-es2015：包含基本的plugins

##### babel-preset-es2015 包含的插件
* check-es2015-constants
* transform-es2015-arrow-functions
* transform-es2015-block-scoped-functions
* transform-es2015-block-scoping
* transform-es2015-classes
* transform-es2015-computed-properties
* transform-es2015-destructuring
* transform-es2015-duplicate-keys
* transform-es2015-for-of
* transform-es2015-function-name
* transform-es2015-literals
* transform-es2015-modules-commonjs
* transform-es2015-object-super
* transform-es2015-parameters
* transform-es2015-shorthand-properties
* transform-es2015-spread
* transform-es2015-sticky-regex
* transform-es2015-template-literals
* transform-es2015-typeof-symbol
* transform-es2015-unicode-regex
* transform-regenerator
