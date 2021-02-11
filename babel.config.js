module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        node: 'current'
      }
    }],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      'module-resolver',{
        alias: {}
      }
    ],
    ['@babel/plugin-proposal-class-properties', {loose: true}],
    ['@babel/plugin-proposal-decorators', {legacy: true}]
  ],
  ignore: [
    './src/**/*.spec.ts',
    './src/**/*.test.ts'
  ]
}
