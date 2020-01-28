var reactDocs = require('react-docgen');
var fs = require('fs');
var json2md = require('json2md');

require('@feizheng/next-js-core2');

module.exports = function(inFilePath) {
  var content = fs.readFileSync(inFilePath);
  var info = reactDocs.parse(content);
  var rows = [];

  nx.forIn(info.props, function(key, value) {
    rows.push([
      key,
      value.type.name,
      nx.get(value, 'defaultValue.value') || '-',
      value.description
    ]);
  });

  return json2md({
    table: ['Name', 'Type', 'Default', 'Description'],
    rows: rows
  });
};
