/*!
 * name: @feizheng/react-markdown-props
 * url: https://github.com/afeiship/react-markdown-props
 * version: 1.2.2
 * license: MIT
 */

var reactDocs=require("react-docgen"),fs=require("fs"),json2md=require("json2md"),prettier=require("prettier");require("@feizheng/next-js-core2"),module.exports=function(e,r){var t=fs.readFileSync(e),n=reactDocs.parse(t),a=[];nx.forIn(n.props,function(e,r){var t=nx.get(r,"defaultValue.value","-");t.includes("\n")&&(t="-"),a.push([e,nx.get(r,"type.name"),String(r.required),t,r.description])});var i=json2md({table:{headers:["Name","Type","Required","Default","Description"],rows:a}});return prettier.format(i,{parser:"markdown"})};