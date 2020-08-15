/*!
 * name: @feizheng/react-markdown-props
 * url: https://github.com/afeiship/react-markdown-props
 * version: 1.2.3
 * license: MIT
 */

var reactDocs=require("react-docgen"),fs=require("fs"),json2md=require("json2md"),prettier=require("prettier");require("@feizheng/next-js-core2"),module.exports=function(e,r){var n=fs.readFileSync(e),t=reactDocs.parse(n),i=[];nx.forIn(t.props,function(e,r){var n=nx.get(r,"defaultValue.value","-");n.includes("\n")&&(n="-"),console.log(r,n),i.push([e,nx.get(r,"type.name"),String(r.required),n,r.description.split("\n")[0]])});var o=json2md({table:{headers:["Name","Type","Required","Default","Description"],rows:i}});return prettier.format(o,{parser:"markdown"})};