module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['svelte', '@typescript-eslint'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest'
  },
  extends: ['plugin:svelte/recommended', 'standard'],
  globals: {
    launchQueue: 'readonly',
    FileSystemHandle: 'readonly',
    FileSystemFileHandle: 'readonly',
    FileSystemDirectoryHandle: 'readonly',
    FileSystemWritableFileStream: 'readonly',
    ClipboardItem: 'readonly',
    queryLocalFonts: 'readonly'
  },
  env: {
    es2022: true,
    browser: true,
    worker: true,
    node: true,
    serviceworker: true
  },
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      rules: {
        'svelte/indent': ['error', { indent: 2, indentScript: true }],
        'no-self-assign': 0,
        'a11y-media-has-caption': 0,
        'no-use-before-define': 0,
        'svelte/html-quotes': [
          'error',
          {
            prefer: 'single',
            dynamic: { quoted: false, avoidInvalidUnquotedInHTML: false }
          }
        ],
        'svelte/shorthand-attribute': ['warn', { prefer: 'always' }],
        'svelte/spaced-html-comment': ['error', 'always']
      }
    }
  ]
}
