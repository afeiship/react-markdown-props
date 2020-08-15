/*!
 * name: @feizheng/react-markdown-props
 * url: https://github.com/afeiship/react-markdown-props
 * version: 1.2.3
 * license: MIT
 */

var reactDocs=require("react-docgen"),fs=require("fs"),json2md=require("json2md"),prettier=require("prettier");require("@feizheng/next-js-core2"),module.exports=function(e,r){var t=fs.readFileSync(e),n=reactDocs.parse(t),i=[];nx.forIn(n.props,function(e,r){var t=nx.get(r,"defaultValue.value","-");t.includes("\n")&&(t="-"),i.push([e,nx.get(r,"type.name"),String(r.required),t,r.description.split("\n")[0]])});var a=json2md({table:{headers:["Name","Type","Required","Default","Description"],rows:i}});return prettier.format(a,{parser:"markdown"})};