/*!
 * name: @feizheng/react-markdown-props
 * url: https://github.com/afeiship/react-markdown-props
 * version: 1.0.0
 * license: MIT
 */

var reactDocs=require("react-docgen"),fs=require("fs"),json2md=require("json2md");require("@feizheng/next-js-core2"),module.exports=function(e){var r=fs.readFileSync(e),n=reactDocs.parse(r),o=[];return nx.forIn(n.props,function(e,r){o.push([e,r.type.name,nx.get(r,"defaultValue.value")||"-",r.description])}),json2md({table:["Name","Type","Default","Description"],rows:o})};