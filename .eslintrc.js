module.exports = {
    env: {
        browser: true,
        es2022: true,
        node: true,
    },
    plugins: ['@typescript-eslint', 'simple-import-sort', 'unused-imports'],
    extends: [
        'eslint:recommended',
        'next',
        'next/core-web-vitals',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    rules: {
        'no-unused-vars': 'off',
        'no-console': 'warn',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'react/no-unescaped-entities': 'off',

        'react/display-name': 'off',
        'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }],

        '@typescript-eslint/no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'warn',
        'unused-imports/no-unused-vars': [
            'warn',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_',
            },
        ],
        'simple-import-sort/exports': 'warn',
        'simple-import-sort/imports': [
            'warn',
            {
                groups: [
                    ['^react', '^@?\\w'],
                    ['^next', '^@next'],
                    ['^@?\\w', '^\\u0000'],
                    ['^@/lib', '^@/hooks'],
                    ['^@/data'],
                    ['^@/components'],
                    ['^@/store'],
                    ['^@/'],
                    [
                        '^\\./?$',
                        '^\\.(?!/?$)',
                        '^\\.\\./?$',
                        '^\\.\\.(?!/?$)',
                        '^\\.\\./\\.\\./?$',
                        '^\\.\\./\\.\\.(?!/?$)',
                        '^\\.\\./\\.\\./\\.\\./?$',
                        '^\\.\\./\\.\\./\\.\\.(?!/?$)',
                    ],
                    ['^@/types'],
                    ['^.+\\.s?css$'],
                    ['^'],
                ],
            },
        ],
    },
    globals: {
        React: true,
        JSX: true,
    },
};
