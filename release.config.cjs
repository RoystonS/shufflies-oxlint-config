module.exports = {
  branches: ["main", { name: "next", prerelease: true }],
  plugins: [
    // Analyze commit messages to determine the type of release
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "conventionalcommits",
        releaseRules: [
          // Dependabot's `include: "scope"` emits `deps-dev` for devDependency updates.
          // Its grouped OXC commits name the group in the subject; individual updates
          // name the package there.
          { type: "chore", scope: "deps*", subject: "*bump*oxlint*", release: "minor" },
          { type: "chore", scope: "deps*", subject: "*bump*oxfmt*", release: "minor" },
          { type: "chore", scope: "deps*", subject: "*bump*oxc group*", release: "minor" },
        ],
      },
    ],

    // Generate release notes based on commit messages
    "@semantic-release/release-notes-generator",

    // Publish the package to npm
    "@semantic-release/npm",
    // Create a GitHub release
    "@semantic-release/github",
  ],
};
