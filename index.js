module.exports = {
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        // releaseRules: [{ type: '/(feat|fix)/', release: 'patch' }]
      }
    ],
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/git',
    '@semantic-release/gitlab',
    'semantic-release-wxwork'
  ]
}
