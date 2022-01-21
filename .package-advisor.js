const {
  PackageUpgraderConfig,
  OptionsFilter,
  PackageNameColumn,
  DependencyColumn,
  RequiredVersionColumn,
  LatestVersionColumn,
  PublishDateColumn,
  EmberCoreAddonsFilter,
} = require('package-upgrade-advisor');

module.exports = new PackageUpgraderConfig({
  // Array of filters to run in order for composability
  filters: [
    class MyFilter extends OptionsFilter {
      mode = 'allow';
      keywords = ['ember-addon'];
    },
    class extends EmberCoreAddonsFilter {
      mode = 'deny';
    },
  ],

  // Configures the displayed table or output CSV data
  displayColumns: [
    new PackageNameColumn(),
    new RequiredVersionColumn(),
    new LatestVersionColumn(),
    new PublishDateColumn(),
    new DependencyColumn('ember-cli', { maxLength: 30 }),
    new DependencyColumn('ember-source', { maxLength: 30 }),
    new DependencyColumn('ember-data', { maxLength: 30 }),
    new DependencyColumn('ember-cli-babel', { maxLength: 30 }),
    new DependencyColumn('ember-auto-import', { maxLength: 30 }),
  ],
});
