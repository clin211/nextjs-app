# Next.js App

## 项目简介

这是一个使用 Next.js、Tailwind CSS、Zustand、Immer、Ant Design (antd)、ESLint、Prettier、Husky 和 lint-staged 搭建。

## 技术栈

-   **Next.js**: React 框架，用于构建服务端渲染和静态网站生成的应用。
-   **Tailwind CSS**: 一个功能类优先的 CSS 框架，用于快速构建自定义用户界面。
-   **Zustand**: 一个轻量级的状态管理库。
-   **Immer**: 用于帮助编写更简洁的不可变数据处理逻辑。
-   **Ant Design (antd)**: 一套企业级 UI 设计语言和 React 组件库。
-   **ESLint**: 一个插件化的 JavaScript 代码检查工具。
-   **Prettier**: 一个代码格式化工具。
-   **Husky**: 一个 Git hooks 工具，用于在提交代码前运行脚本。
-   **lint-staged**: 一个工具，用于在 Git 暂存文件上运行 linters。

## 项目结构

```tree
.
├── README.md
├── commitlint.config.ts
├── next-env.d.ts
├── next.config.mjs
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── public                          # 静态资源
│   ├── next.svg
│   └── vercel.svg
├── src
│   ├── app                         # App router
│   ├── assets                      # 静态资源
│   ├── components                  # 组件
│   ├── store                       # Zustand 状态管理
│   ├── hooks                       # 自定义 Hooks
│   ├── lib                         # 库函数
│   ├── utils                       # 工具函数
│   └── data                        # 静态数据
├── tailwind.config.ts
├── tsconfig.json
└── typings.d.ts
```

## 克隆与运行

-   克隆仓库代码
    ```sh
    $ git clone https://github.com/clin211/nextjs-app
    ```
-   安装依赖
    ```sh
    $ pnpm i
    ```
-   运行项目
    ```sh
    $ pnpm dev
    ```
