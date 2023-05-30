const jsTsCommonRules = {
  'react/react-in-jsx-scope': 'off',
  /**
   * ts 会检查
   */
  'react/jsx-filename-extension': 'off',
  /**
   * ts 会检查
   */
  'react/prop-types': 'off',
  /**
   * ts 会检查
   */
  /**
   * ?.()
   */
  'no-unused-expressions': 'off',
  /**
   * 依赖注入可能没用到 this
   */
  'class-methods-use-this': 'off',
  /**
   * 和 Ng 的一般编码风格冲突
   */
  'import/prefer-default-export': 'off',
  'no-console': 'off',
  'spaced-comment': 'off',
  /**
   * ts 会检查
   */
  'import/no-webpack-loader-syntax': 'off',
  /**
   * 交给 prettier 处理
   */
  'prefer-template': 'off',
  /**
   * ts 会检查
   */
  'no-unused-vars': 'off',
  /**
   * ts 会检查
   */
  'import/no-unresolved': 'off',
  /**
   * ts 会检查
   */
  'import/extensions': 'off',
  /**
   * ng 构造函数经常为空
   */
  'no-useless-constructor': 'off',
  /**
   * ng 构造函数经常为空
   */
  'no-empty-function': 'off',
  /**
   * 一般不用 require
   */
  'global-require': 'off',
  /**
   * 嵌套的三元表达式是良好的编程习惯
   */
  'no-nested-ternary': 'off',
  /**
   * 重载很常见
   */
  'no-dupe-class-members': 'off',
  /**
   * 用于 exhaustiveCheck
   */
  'no-case-declarations': 'off',
  'no-plusplus': 'off',
  'no-else-return': 'off',
  yoda: 'off',
  'no-extra-boolean-cast': 'off',
  camelcase: 'off',
  /**
   * ts 会检查全局变量
   */
  'no-undef': 'off',
  'import/no-deprecated': 'off',
  'import/named': 'off',
  'import/namespace': 'off',
  'import/default': 'off',
  'import/no-named-as-default-member': 'off',
  'import/no-extraneous-dependencies': 'off', // 有额外的很正常，可能是二次依赖
  'react/jsx-no-undef': 'off',
  'react/destructuring-assignment': 'off',
  'no-use-before-define': 'off', // 先定义后使用，函数和类除外
  'import/order': 'off', // 导入依赖要有顺序
  'no-underscore-dangle': 'off', // 禁止下划线命名
  'no-bitwise': 'off', // 不使用位运算
  'consistent-return': 'off', // return 类型要一致
  'no-param-reassign': 'off', // 参数不要重新赋值
  'prefer-rest-params': 'off', // 不使用 arguments
  'prefer-destructuring': 'off', // 没啥必要
  'max-classes-per-file': 'off', // 一个文件只有一个类
  'no-return-assign': 'off', // 箭头函数返回值不能是赋值语句
  'no-restricted-syntax': 'off', // 数组迭代避免使用循环
  'no-restricted-globals': 'off',
  'no-multi-assign': 'off', // 不能多=赋值
  'default-case': 'off', // switch case 要有 default
  'no-empty': 'off', // try catch {} 还要加注释，太二了
  '@typescript-eslint/prefer-readonly': 'off', // 不使用 readonly，没法约束模板，也没法约束成员函数
  'react-hooks/rules-of-hooks': 'off',
  'react-hooks/exhaustive-deps': 'off', // 检查 effect 的依赖
  'react/jsx-props-no-spreading': 'off',
  'react/no-array-index-key': 'off',
  'react/self-closing-comp': 'warn',
  'prefer-promise-reject-errors': 'off',
  'no-debugger': 'warn',
  'react/require-default-props': 'off',
  'jsx-a11y/alt-text': 'off',
  'arrow-body-style': 'off',
};

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    es2017: true,
    es2020: true,
    jasmine: true,
  },
  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      // 不允许 return 语句出现在 global 环境下
      globalReturn: false,
      // 开启全局 script 模式
      impliedStrict: true,
    },
    // 即使没有 babelrc 配置文件，也使用 babel-eslint 来解析
    requireConfigFile: false,
    // 仅允许 import export 语句出现在模块的顶层
    allowImportExportEverywhere: false,
  },
  extends: ['eslint-config-airbnb-base', 'eslint:recommended', 'plugin:react/recommended', 'prettier'],
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'jsx-a11y'],
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: { ...jsTsCommonRules },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        ...jsTsCommonRules,
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          {
            accessibility: 'no-public',
          },
        ], // 类实例属性方法必须带修饰符，public除外
        '@typescript-eslint/ban-types': ['error', { types: { Function: false } }], // 不使用 object Object String等作为类型，可以使用 Function
        '@typescript-eslint/consistent-type-assertions': [
          'error',
          {
            assertionStyle: 'as',
            objectLiteralTypeAssertions: 'allow',
          },
        ], // 类型断言要一致，<xx> or as xx
        '@typescript-eslint/restrict-plus-operands': 'off', // 加号两边类型要相同
        '@typescript-eslint/restrict-template-expressions': 'off', // 模板表达式中只能使用某些类型
        '@typescript-eslint/unbound-method': 'off', // 不将未绑定 this 的函数当参数
        '@typescript-eslint/no-floating-promises': 'off', // promise 要有错误处理
        '@typescript-eslint/switch-exhaustiveness-check': 'off', // switch 必须命中一个case
        '@typescript-eslint/no-dynamic-delete': 'off', // 动态删除属性
      },
    },
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['./tsconfig.json'],
      },
    },
  },
};
