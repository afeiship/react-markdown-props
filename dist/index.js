/*!
 * name: @feizheng/react-markdown-props
 * url: https://github.com/afeiship/react-markdown-props
 * version: 1.1.0
 * license: MIT
 */

var reactDocs=require("react-docgen"),fs=require("fs"),json2md=require("json2md"),prettier=require("prettier");require("@feizheng/next-js-core2"),module.exports=function(e,r){var t=fs.readFileSync(e),a=reactDocs.parse(t),n=[];nx.forIn(a.props,function(e,r){n.push([e,r.type.name,nx.get(r,"defaultValue.value")||"-",r.description])});var o=json2md({table:{headers:["Name","Type","Default","Description"],rows:n}});return prettier.format(o,{parser:"markdown"})};