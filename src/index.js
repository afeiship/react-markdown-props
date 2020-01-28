var reactDocs = require('react-docgen');
var fs = require('fs');
var json2md = require('json2md');
var prettier = require('prettier');

require('@feizheng/next-js-core2');

module.exports = function(inFilePath, inOptions) {
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

  var mdstring = json2md({
    table: {
      headers: ['Name', 'Type', 'Default', 'Description'],
      rows: rows
    }
  });

  return prettier.format(mdstring, { parser: 'markdown' });
};
