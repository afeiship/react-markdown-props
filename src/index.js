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
    var _value = nx.get(value, 'defaultValue.value', '-');
    _value.includes('\n') && (_value = '-');
    rows.push([
      key,
      nx.get(value, 'type.name'),
      String(value.required),
      _value,
      value.description.split('\n')[0]
    ]);
  });

  var mdstring = json2md({
    table: {
      headers: ['Name', 'Type', 'Required', 'Default', 'Description'],
      rows: rows
    }
  });

  return prettier.format(mdstring, { parser: 'markdown' });
};
