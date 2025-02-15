import xoConfigs from 'eslint-config-xo/space';
import xoReactConfigs from 'eslint-config-xo-react/space';

const [xoConfig] = xoConfigs;
const [xoReactConfig] = xoReactConfigs;

export default [
  {
    ...xoConfig,
    ...xoReactConfig,

    rules: {
      "capitalized-comments": 0,
      "import/extensions": 0,
      "n/file-extension-in-import": 0,
      "no-alert": 0,
      "no-warning-comments": 0,
      
      // Xo rules
      "unicorn/filename-case": 0,
      "unicorn/prevent-abbreviations": 0,

      // TypeScript rules
      "@typescript-eslint/naming-convention": 0,
      "@typescript-eslint/no-floating-promises": 0,
      "@typescript-eslint/no-unsafe-call": 0,
      "@typescript-eslint/no-unsafe-enum-comparison": "warn"
    }
  }
]
