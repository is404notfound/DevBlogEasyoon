module.exports = {
    framework: '@storybook/nextjs',
    stories: ["../stories/*.stories.@(js|jsx|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions"
    ],

    webpackFinal: async (config) => {
        // SWC 설정 추가
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: 'swc-loader',
                    options: {
                        jsc: {
                            parser: {
                                syntax: 'typescript',
                                jsx: true,
                            },
                            transform: {
                                react: {
                                    runtime: 'automatic',
                                },
                            },
                        },
                    },
                },
            ],
        });
        config.resolve.extensions.push('.ts', '.tsx');
        return config;
    },

    docs: {
        autodocs: true
    }
};
