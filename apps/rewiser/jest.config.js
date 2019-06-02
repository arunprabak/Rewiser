module.exports = {
  name: 'rewiser',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/rewiser',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
