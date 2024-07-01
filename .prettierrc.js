module.exports = {
    printWidth: 120, // 指定每行应保持在 120 个字符以内，超过后会进行换行
    tabWidth: 4, // 一个制表符等于 4 个空格
    useTabs: false, // 不使用制表符进行缩进
    semi: true, // 在语句末尾使用分号
    singleQuote: true, // 使用单引号而不是双引号。统一代码中字符串的引号样式
    jsxSingleQuote: true, // 在 JSX 中使用单引号
    trailingComma: 'es5', // 在 ES5 支持的多行结构中（如数组和对象）使用尾随逗号
    bracketSpacing: true, // 在对象的花括号 `{}` 内部保留空格，如 `{ foo: bar }`
    bracketSameLine: false, // 将多行 HTML 元素的闭合标签单独放在下一行，而不是与最后一个属性或内容同一行
    arrowParens: 'always', // 始终在箭头函数的唯一参数周围使用括号
    endOfLine: 'lf', // 使用 Unix 风格的换行符（\n）
    singleAttributePerLine: true, // JSX 中，每行强制只显示一个属性
};
