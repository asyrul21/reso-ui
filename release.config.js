module.exports = {
  branches: [
    "main",
    {
      name: "beta",
      prerelease: true,
    },
  ],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md",
      },
    ],
    "@semantic-release/npm",
    "@semantic-release/github",
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md", "dist/**", "package.json"],
        message:
          "chore(release): set `package.json` version to ${nextRelease.version} and update package changelog [skip ci]\n\n${nextRelease.notes}",
      },
    ],
  ],
};
