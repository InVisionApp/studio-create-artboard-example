const os = require('os');
const path = require('path');

const chalk = require('chalk');
const fetch = require('node-fetch');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');

const manifest = require('./manifest.json');

class AfterDonePlugin {
  constructor(callback) {
    this.callback = callback;
  }

  apply(compiler) {
    compiler.plugin('done', this.callback);
  }
}

const PLUGIN_BASE = path.join(os.homedir(), '.invision-studio', 'plugins');
const OUTPUT_PATH = path.join(PLUGIN_BASE, manifest.name);

module.exports = (env, argv) => {
  const IS_PROD = argv && argv.mode !== 'development';
  const DASHBOARD_PORT = env ? env.port : undefined;

  const config = {
    target: 'node',

    entry: {
      'in-editor': './src/index.tsx',
    },

    output: {
      path: OUTPUT_PATH,
      filename: '[name].js',
    },

    module: {
      rules: [
        {
          test: /\.(t|j)sx?$/,
          exclude: /node_modules/,
          use: [{ loader: 'babel-loader' }],
        },
        {
          test: /\.(gif|jpe?g|png|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'assets',
                publicPath: '/',
              },
            },
          ],
        },
      ],
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },

    plugins: [
      new CopyWebpackPlugin([{ from: 'manifest.json', to: 'manifest.json' }]),
      new CopyWebpackPlugin([{ from: 'assets', to: 'assets' }]),
      new CleanWebpackPlugin([OUTPUT_PATH], { allowExternal: true }),
    ],
  };

  if (IS_PROD) {
    config.plugins.push(
      new MinifyPlugin(
        {
          removeConsole: true,
        },
        {
          sourceMap: true,
        },
      ),
    );
  }

  if (DASHBOARD_PORT) {
    const reportError = reason => {
      // eslint-disable-next-line no-console
      console.log(
        chalk.red(
          `\n[Dashboard Server] error: could not reload plugins: ${reason}`,
        ),
      );
    };
    config.plugins.push(
      new AfterDonePlugin(() => {
        // eslint-disable-next-line no-console
        console.log(chalk.blue(`\n[Dashboard Server] reloading plugins...\n`));
        fetch(`http://localhost:${DASHBOARD_PORT}/reload-plugins`)
          .then(res => {
            if (!res.ok) {
              reportError(res.text());
            }
          })
          .catch(err => {
            if (err.code !== 'ECONNRESET') {
              reportError(err.message);
            }
          });
      }),
    );
  }

  return config;
};
