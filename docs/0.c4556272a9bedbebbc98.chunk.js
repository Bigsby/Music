webpackJsonp([0],{"+E/H":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=e("WT6e"),r=e("TToO"),o=function(){},i=function(){},u=function(){this.fileExtension=".json"},s=function(){},a=function(){},c={index:"index",text:"text",youTube:"youTube",didYouKnow:"didYouKnow",image:"image",link:"link",notesTable:"notesTable",changes:"changes"},p={topics:s,"topics/":a},f=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.basePath="theory",t.mappings=p,t}return Object(r.b)(t,n),t}(u),h=function(){},d=e("bfOx"),y=function(){},_=e("Xjw4"),m=l._0({encapsulation:0,styles:[[".link[_ngcontent-%COMP%]{cursor:pointer}.link[_ngcontent-%COMP%]:hover{text-decoration:underline}"]],data:{}});function g(n){return l._17(0,[(n()(),l._2(0,0,null,null,12,"li",[],null,null,null,null,null)),(n()(),l._16(-1,null,["\n        "])),(n()(),l._2(2,0,null,null,3,"div",[["class","link"]],null,[[null,"click"]],function(n,t,e){var r=!0;return"click"===t&&(r=!1!==l._11(n,3).onClick()&&r),r},null,null)),l._1(3,16384,null,0,d.l,[d.k,d.a,[8,null],l.B,l.k],{routerLink:[0,"routerLink"]},null),l._13(4,1),(n()(),l._16(5,null,["",""])),(n()(),l._16(-1,null,["\n        "])),(n()(),l._2(7,0,null,null,4,"ol",[],null,null,null,null,null)),(n()(),l._16(-1,null,["\n            "])),(n()(),l._2(9,0,null,null,1,"topic-index",[],null,null,null,b,m)),l._1(10,49152,null,0,y,[],{topic:[0,"topic"]},null),(n()(),l._16(-1,null,["\n        "])),(n()(),l._16(-1,null,["\n    "]))],function(n,t){n(t,3,0,n(t,4,0,"./../"+t.context.$implicit.id)),n(t,10,0,t.context.$implicit)},function(n,t){n(t,5,0,t.context.$implicit.name)})}function b(n){return l._17(0,[(n()(),l._2(0,0,null,null,4,"ol",[],null,null,null,null,null)),(n()(),l._16(-1,null,["\n    "])),(n()(),l.X(16777216,null,null,1,null,g)),l._1(3,802816,null,0,_.h,[l.M,l.J,l.q],{ngForOf:[0,"ngForOf"]},null),(n()(),l._16(-1,null,["\n"]))],function(n,t){n(t,3,0,t.component.topic.subTopics)},null)}var w=function(){},v=l._0({encapsulation:0,styles:[[""]],data:{}});function x(n){return l._17(0,[(n()(),l._2(0,0,null,null,0,"p",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,t){n(t,0,0,t.component.text)})}var k=function(){},T=l._0({encapsulation:0,styles:[[""]],data:{}});function O(n){return l._17(0,[(n()(),l._2(0,0,null,null,0,"iframe",[["allow","autoplay; encrypted-media"],["allowfullscreen",""],["frameborder","0"]],[[8,"src",5]],null,null,null,null))],null,function(n,t){n(t,0,0,"https://www.youtube.com/embed/"+t.component.video)})}var C=function(){function n(){}return n.prototype.showGrandParent=function(){return this.showParent()&&this.topic.parent.parent&&!this.topic.parent.parent.isRoot},n.prototype.showParent=function(){return this.topic&&this.topic.parent&&!this.topic.parent.isRoot},n}(),E=l._0({encapsulation:0,styles:[["[_nghost-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.link[_ngcontent-%COMP%]{cursor:pointer}.link[_ngcontent-%COMP%]:hover{text-decoration:underline}.seperator[_ngcontent-%COMP%]{margin-right:1em;margin-left:1em}"]],data:{}});function M(n){return l._17(0,[(n()(),l._2(0,0,null,null,6,null,null,null,null,null,null,null)),(n()(),l._16(-1,null,["\n    "])),(n()(),l._2(2,0,null,null,1,"topic-breadcrumb",[],null,null,null,R,E)),l._1(3,49152,null,0,C,[],{topic:[0,"topic"]},null),(n()(),l._2(4,0,null,null,1,"span",[["class","seperator"]],null,null,null,null,null)),(n()(),l._16(-1,null,[">"])),(n()(),l._16(-1,null,["\n"]))],function(n,t){var e=t.component;n(t,3,0,null==e.topic?null:e.topic.parent)},null)}function P(n){return l._17(0,[(n()(),l._2(0,0,null,null,3,"div",[["class","link"]],null,[[null,"click"]],function(n,t,e){var r=!0;return"click"===t&&(r=!1!==l._11(n,1).onClick()&&r),r},null,null)),l._1(1,16384,null,0,d.l,[d.k,d.a,[8,null],l.B,l.k],{routerLink:[0,"routerLink"]},null),l._13(2,1),(n()(),l._16(3,null,["",""]))],function(n,t){var e=t.component;n(t,1,0,n(t,2,0,"./../"+(null==e.topic?null:null==e.topic.parent?null:e.topic.parent.id)))},function(n,t){n(t,3,0,t.component.topic.parent.name)})}function R(n){return l._17(0,[(n()(),l.X(16777216,null,null,1,null,M)),l._1(1,16384,null,0,_.i,[l.M,l.J],{ngIf:[0,"ngIf"]},null),(n()(),l._16(-1,null,["\n"])),(n()(),l.X(16777216,null,null,1,null,P)),l._1(4,16384,null,0,_.i,[l.M,l.J],{ngIf:[0,"ngIf"]},null)],function(n,t){var e=t.component;n(t,1,0,e.showGrandParent()),n(t,4,0,e.showParent())},null)}var A=function(){function n(t,e){this.data=t,this.logger=e,this.logger=this.logger.forContext(n)}return n.prototype.getTopics=function(){var n=this;return this.data.getList(s).then(function(t){return n.setProperties({id:"root",name:"Root",isRoot:!0,index:0,subTopics:t},t),t})},n.prototype.getTopic=function(n){var t=this;return this.getTopics().then(function(e){return t.findTopic(n,e)})},n.prototype.getContent=function(n){var t=this;return this.data.getSingle(a,n.id).then(function(n){return n}).catch(function(e){return t.logger.error("Cannot find content for "+n.id+": "+e),{items:[{type:c.text,content:"No Content yet..."}]}})},n.prototype.getPrevious=function(n){return n?n.parent&&n.index>0?n.parent.subTopics[n.index-1]:n.parent.isRoot?null:n.parent:null},n.prototype.getNext=function(n){if(!n)return null;if(n.subTopics&&n.subTopics.length)return n.subTopics[0];for(var t=n;t;){var e=this.getNextSibling(t);if(e)return e;t=t.parent}return null},n.prototype.getNextSibling=function(n){return n&&n.parent&&n.parent.subTopics&&n.parent.subTopics.length-1>n.index?n.parent.subTopics[n.index+1]:null},n.prototype.findTopic=function(n,t){if(!t)return null;var e=t.find(function(t){return t.id==n});if(e)return e;for(var l=0;l<t.length;l++){var r=this.findTopic(n,t[l].subTopics);if(r)return r}return null},n.prototype.setProperties=function(n,t){var e=this;t&&t.forEach(function(t,l){t.id=(n.isRoot?"":n.id+".")+t.id,t.index=l,t.parent=n,e.setProperties(t,t.subTopics)})},n}(),B=function(){function n(n,t,e){this.router=n,this.activeRoute=t,this.theoryService=e,this.itemType=c}return n.prototype.ngOnInit=function(){var n=this;this.activeRoute.params.subscribe(function(t){return n.theoryService.getTopic(t.id).then(function(t){return n.topic=t}).then(function(){n.theoryService.getContent(n.topic).then(function(t){return n.content=t}),n.setNextAndPrevious()})})},n.prototype.setNextAndPrevious=function(){this.topic&&(this.next=this.theoryService.getNext(this.topic),this.previous=this.theoryService.getPrevious(this.topic))},n}(),S=l._0({encapsulation:0,styles:[["[_nghost-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.noGrow[_ngcontent-%COMP%]{-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0}.topicContainer[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.previousNextContainer[_ngcontent-%COMP%]{-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.link[_ngcontent-%COMP%]{cursor:pointer}.link[_ngcontent-%COMP%]:hover{text-decoration:underline}"]],data:{}});function N(n){return l._17(0,[(n()(),l._2(0,0,null,null,1,"topic-index",[],null,null,null,b,m)),l._1(1,49152,null,0,y,[],{topic:[0,"topic"]},null)],function(n,t){n(t,1,0,t.component.topic)},null)}function F(n){return l._17(0,[(n()(),l._2(0,0,null,null,1,"topic-text",[],null,null,null,x,v)),l._1(1,49152,null,0,w,[],{text:[0,"text"]},null)],function(n,t){n(t,1,0,t.parent.context.$implicit.content)},null)}function L(n){return l._17(0,[(n()(),l._2(0,0,null,null,1,"topic-youtube",[],null,null,null,O,T)),l._1(1,49152,null,0,k,[],{video:[0,"video"]},null)],function(n,t){n(t,1,0,t.parent.context.$implicit.content)},null)}function j(n){return l._17(0,[(n()(),l._2(0,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),l._16(-1,null,["didYouKnow"]))],null,null)}function q(n){return l._17(0,[(n()(),l._2(0,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),l._16(-1,null,["resource"]))],null,null)}function J(n){return l._17(0,[(n()(),l._2(0,0,null,null,18,"div",[["class","topicContainer"]],null,null,null,null,null)),l._1(1,16384,null,0,_.l,[],{ngSwitch:[0,"ngSwitch"]},null),(n()(),l._16(-1,null,["\n    "])),(n()(),l.X(16777216,null,null,1,null,N)),l._1(4,278528,null,0,_.m,[l.M,l.J,_.l],{ngSwitchCase:[0,"ngSwitchCase"]},null),(n()(),l._16(-1,null,["\n    "])),(n()(),l.X(16777216,null,null,1,null,F)),l._1(7,278528,null,0,_.m,[l.M,l.J,_.l],{ngSwitchCase:[0,"ngSwitchCase"]},null),(n()(),l._16(-1,null,["\n    "])),(n()(),l.X(16777216,null,null,1,null,L)),l._1(10,278528,null,0,_.m,[l.M,l.J,_.l],{ngSwitchCase:[0,"ngSwitchCase"]},null),(n()(),l._16(-1,null,["\n    "])),(n()(),l.X(16777216,null,null,1,null,j)),l._1(13,278528,null,0,_.m,[l.M,l.J,_.l],{ngSwitchCase:[0,"ngSwitchCase"]},null),(n()(),l._16(-1,null,["\n    "])),(n()(),l.X(16777216,null,null,1,null,q)),l._1(16,278528,null,0,_.m,[l.M,l.J,_.l],{ngSwitchCase:[0,"ngSwitchCase"]},null),(n()(),l._16(-1,null,["\n    "])),(n()(),l._16(-1,null,["\n"]))],function(n,t){var e=t.component;n(t,1,0,t.context.$implicit.type),n(t,4,0,e.itemType.index),n(t,7,0,e.itemType.text),n(t,10,0,e.itemType.youTube),n(t,13,0,e.itemType.didYouKnow),n(t,16,0,e.itemType.resource)},null)}function X(n){return l._17(0,[(n()(),l._2(0,0,null,null,3,"div",[["class","link"]],null,[[null,"click"]],function(n,t,e){var r=!0;return"click"===t&&(r=!1!==l._11(n,1).onClick()&&r),r},null,null)),l._1(1,16384,null,0,d.l,[d.k,d.a,[8,null],l.B,l.k],{routerLink:[0,"routerLink"]},null),l._13(2,1),(n()(),l._16(-1,null,["< Index"]))],function(n,t){n(t,1,0,n(t,2,0,"./../../"))},null)}function H(n){return l._17(0,[(n()(),l._2(0,0,null,null,3,"div",[["class","link"]],null,[[null,"click"]],function(n,t,e){var r=!0;return"click"===t&&(r=!1!==l._11(n,1).onClick()&&r),r},null,null)),l._1(1,16384,null,0,d.l,[d.k,d.a,[8,null],l.B,l.k],{routerLink:[0,"routerLink"]},null),l._13(2,1),(n()(),l._16(3,null,["< ",""]))],function(n,t){var e=t.component;n(t,1,0,n(t,2,0,"./../"+(null==e.previous?null:e.previous.id)))},function(n,t){var e=t.component;n(t,3,0,null==e.previous?null:e.previous.name)})}function U(n){return l._17(0,[(n()(),l._2(0,0,null,null,3,"div",[["class","link"]],null,[[null,"click"]],function(n,t,e){var r=!0;return"click"===t&&(r=!1!==l._11(n,1).onClick()&&r),r},null,null)),l._1(1,16384,null,0,d.l,[d.k,d.a,[8,null],l.B,l.k],{routerLink:[0,"routerLink"]},null),l._13(2,1),(n()(),l._16(3,null,[""," >"]))],function(n,t){var e=t.component;n(t,1,0,n(t,2,0,"./../"+(null==e.next?null:e.next.id)))},function(n,t){var e=t.component;n(t,3,0,null==e.next?null:e.next.name)})}function D(n){return l._17(0,[(n()(),l._2(0,0,null,null,1,"topic-breadcrumb",[["class","noGrow"]],null,null,null,R,E)),l._1(1,49152,null,0,C,[],{topic:[0,"topic"]},null),(n()(),l._16(-1,null,["\n"])),(n()(),l._2(3,0,null,null,1,"h1",[["class","noGrow"]],null,null,null,null,null)),(n()(),l._16(4,null,["",""])),(n()(),l._16(-1,null,["\n"])),(n()(),l._2(6,0,null,null,1,"p",[["class","noGrow"]],null,null,null,null,null)),(n()(),l._16(7,null,["",""])),(n()(),l._16(-1,null,["\n"])),(n()(),l.X(16777216,null,null,1,null,J)),l._1(10,802816,null,0,_.h,[l.M,l.J,l.q],{ngForOf:[0,"ngForOf"]},null),(n()(),l._16(-1,null,["\n"])),(n()(),l._2(12,0,null,null,12,"div",[["class","previousNextContainer"]],null,null,null,null,null)),(n()(),l._16(-1,null,["\n    "])),(n()(),l.X(16777216,null,null,1,null,X)),l._1(15,16384,null,0,_.i,[l.M,l.J],{ngIf:[0,"ngIf"]},null),(n()(),l._16(-1,null,["\n    "])),(n()(),l.X(16777216,null,null,1,null,H)),l._1(18,16384,null,0,_.i,[l.M,l.J],{ngIf:[0,"ngIf"]},null),(n()(),l._16(-1,null,["\n    "])),(n()(),l._2(20,0,null,null,0,"div",[],null,null,null,null,null)),(n()(),l._16(-1,null,["\n    "])),(n()(),l.X(16777216,null,null,1,null,U)),l._1(23,16384,null,0,_.i,[l.M,l.J],{ngIf:[0,"ngIf"]},null),(n()(),l._16(-1,null,["\n"]))],function(n,t){var e=t.component;n(t,1,0,e.topic),n(t,10,0,null==e.content?null:e.content.items),n(t,15,0,!e.previous),n(t,18,0,e.previous),n(t,23,0,e.next)},function(n,t){var e=t.component;n(t,4,0,null==e.topic?null:e.topic.name),n(t,7,0,null==e.topic?null:e.topic.description)})}var I=l.Y("ng-component",B,function(n){return l._17(0,[(n()(),l._2(0,0,null,null,1,"ng-component",[],null,null,null,D,S)),l._1(1,114688,null,0,B,[d.k,d.a,A],null,null)],function(n,t){n(t,1,0)},null)},{},{},[]),G=function(){},Y=l._0({encapsulation:0,styles:[["[_nghost-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{text-align:center}h2[_ngcontent-%COMP%]{text-decoration:underline}img[_ngcontent-%COMP%]{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center;max-width:100%;margin:10px}"]],data:{}});function z(n){return l._17(0,[(n()(),l._2(0,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),l._16(-1,null,["Disclaimer"])),(n()(),l._16(-1,null,["\n"])),(n()(),l._2(3,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),l._16(-1,null,["What separates the talented from the successful is a lot of hard work."])),(n()(),l._16(-1,null,["\n\n"])),(n()(),l._2(6,0,null,null,0,"img",[["src","images/talent.jpg"]],null,null,null,null,null)),(n()(),l._16(-1,null,["\n\n"])),(n()(),l._2(8,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),l._16(-1,null,["The purpose of this website is to expose the base theory and mathematics in music. There is no intent, objective or\n    promise, what so ever, to discuss or (pretend to) determine how one becomes a musician, even less, a successful one.\n    It is, henceforth, assumed the readers acknowledges that knowledge and understanding are not the (only) vehicles\n    for becoming a musician in theory and in practise and that, to achieve that purpose, that, in opinion of the disclaimer,\n    is achievable by everyone, regardless of age, genetic build, gender, creed or any other discriminatory factor, with no\n    exception, a certain amount of work is required and, during that work and forever after, a great amount of honest self\n    evaluation is paramount because it is very hard to improve when one does not realise it is not great and one tends to\n    regard the result of its own work and creations as perfect. Furthermore, the presenter is not liable for any damages\n    resulting of reading this content."]))],null,null)}var K=l.Y("ng-component",G,function(n){return l._17(0,[(n()(),l._2(0,0,null,null,1,"ng-component",[],null,null,null,z,Y)),l._1(1,49152,null,0,G,[],null,null)],null,null)},{},{},[]),$=function(){function n(n){this.theoryService=n}return n.prototype.ngOnInit=function(){var n=this;this.theoryService.getTopics().then(function(t){return n.topics=t})},n}(),V=function(){},W=l._0({encapsulation:0,styles:[[".topicsContainer[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-pack:stretch;-ms-flex-pack:stretch;justify-content:stretch}"]],data:{}});function Z(n){return l._17(0,[(n()(),l._2(0,0,null,null,1,"topic",[],null,null,null,en,tn)),l._1(1,49152,null,0,V,[],{topic:[0,"topic"],index:[1,"index"]},null)],function(n,t){n(t,1,0,t.context.$implicit,t.context.index)},null)}function Q(n){return l._17(0,[(n()(),l._2(0,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),l._16(-1,null,["Theory Topics"])),(n()(),l._16(-1,null,["\n"])),(n()(),l._2(3,0,null,null,4,"div",[["class","topicsContainer"]],null,null,null,null,null)),(n()(),l._16(-1,null,["\n    "])),(n()(),l.X(16777216,null,null,1,null,Z)),l._1(6,802816,null,0,_.h,[l.M,l.J,l.q],{ngForOf:[0,"ngForOf"]},null),(n()(),l._16(-1,null,["\n"])),(n()(),l._16(-1,null,["\n"])),(n()(),l._2(9,0,null,null,2,"button",[["routerLink","./disclaimer"]],null,[[null,"click"]],function(n,t,e){var r=!0;return"click"===t&&(r=!1!==l._11(n,10).onClick()&&r),r},null,null)),l._1(10,16384,null,0,d.l,[d.k,d.a,[8,null],l.B,l.k],{routerLink:[0,"routerLink"]},null),(n()(),l._16(-1,null,["Disclaimer"]))],function(n,t){n(t,6,0,t.component.topics),n(t,10,0,"./disclaimer")},null)}var nn=l.Y("ng-component",$,function(n){return l._17(0,[(n()(),l._2(0,0,null,null,1,"ng-component",[],null,null,null,Q,W)),l._1(1,114688,null,0,$,[A],null,null)],function(n,t){n(t,1,0)},null)},{},{},[]),tn=l._0({encapsulation:0,styles:[[".topicContainer[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background-color:#da5e50;color:#f9f4e1;height:2em;padding:15px;font-size:2em;font-weight:700;margin:10px;cursor:pointer}.topicContainer[_ngcontent-%COMP%]:hover{background-color:#5ba284}"]],data:{}});function en(n){return l._17(0,[(n()(),l._2(0,0,null,null,3,"div",[["class","topicContainer"]],[[8,"title",0]],[[null,"click"]],function(n,t,e){var r=!0;return"click"===t&&(r=!1!==l._11(n,1).onClick()&&r),r},null,null)),l._1(1,16384,null,0,d.l,[d.k,d.a,[8,null],l.B,l.k],{routerLink:[0,"routerLink"]},null),l._13(2,2),(n()(),l._16(3,null,["",". ",""]))],function(n,t){n(t,1,0,n(t,2,0,"./topic",t.component.topic.id))},function(n,t){var e=t.component;n(t,0,0,e.topic.description),n(t,3,0,e.index+1,null==e.topic?null:e.topic.name)})}var ln=e("YaPU"),rn=e("OE0E"),on=function(){function n(){}return n.prototype.build=function(){return new XMLHttpRequest},n}(),un=function(){var n={Get:0,Post:1,Put:2,Delete:3,Options:4,Head:5,Patch:6};return n[n.Get]="Get",n[n.Post]="Post",n[n.Put]="Put",n[n.Delete]="Delete",n[n.Options]="Options",n[n.Head]="Head",n[n.Patch]="Patch",n}(),sn=function(){var n={Basic:0,Cors:1,Default:2,Error:3,Opaque:4};return n[n.Basic]="Basic",n[n.Cors]="Cors",n[n.Default]="Default",n[n.Error]="Error",n[n.Opaque]="Opaque",n}(),an=function(){var n={NONE:0,JSON:1,FORM:2,FORM_DATA:3,TEXT:4,BLOB:5,ARRAY_BUFFER:6};return n[n.NONE]="NONE",n[n.JSON]="JSON",n[n.FORM]="FORM",n[n.FORM_DATA]="FORM_DATA",n[n.TEXT]="TEXT",n[n.BLOB]="BLOB",n[n.ARRAY_BUFFER]="ARRAY_BUFFER",n}(),cn=function(){var n={Text:0,Json:1,ArrayBuffer:2,Blob:3};return n[n.Text]="Text",n[n.Json]="Json",n[n.ArrayBuffer]="ArrayBuffer",n[n.Blob]="Blob",n}(),pn=function(){function n(t){var e=this;this._headers=new Map,this._normalizedNames=new Map,t&&(t instanceof n?t.forEach(function(n,t){n.forEach(function(n){return e.append(t,n)})}):Object.keys(t).forEach(function(n){var l=Array.isArray(t[n])?t[n]:[t[n]];e.delete(n),l.forEach(function(t){return e.append(n,t)})}))}return n.fromResponseHeaderString=function(t){var e=new n;return t.split("\n").forEach(function(n){var t=n.indexOf(":");if(t>0){var l=n.slice(0,t),r=n.slice(t+1).trim();e.set(l,r)}}),e},n.prototype.append=function(n,t){var e=this.getAll(n);null===e?this.set(n,t):e.push(t)},n.prototype.delete=function(n){var t=n.toLowerCase();this._normalizedNames.delete(t),this._headers.delete(t)},n.prototype.forEach=function(n){var t=this;this._headers.forEach(function(e,l){return n(e,t._normalizedNames.get(l),t._headers)})},n.prototype.get=function(n){var t=this.getAll(n);return null===t?null:t.length>0?t[0]:null},n.prototype.has=function(n){return this._headers.has(n.toLowerCase())},n.prototype.keys=function(){return Array.from(this._normalizedNames.values())},n.prototype.set=function(n,t){Array.isArray(t)?t.length&&this._headers.set(n.toLowerCase(),[t.join(",")]):this._headers.set(n.toLowerCase(),[t]),this.mayBeSetNormalizedName(n)},n.prototype.values=function(){return Array.from(this._headers.values())},n.prototype.toJSON=function(){var n=this,t={};return this._headers.forEach(function(e,l){var r=[];e.forEach(function(n){return r.push.apply(r,n.split(","))}),t[n._normalizedNames.get(l)]=r}),t},n.prototype.getAll=function(n){return this.has(n)&&this._headers.get(n.toLowerCase())||null},n.prototype.entries=function(){throw new Error('"entries" method is not implemented on Headers class')},n.prototype.mayBeSetNormalizedName=function(n){var t=n.toLowerCase();this._normalizedNames.has(t)||this._normalizedNames.set(t,n)},n}(),fn=function(){function n(n){void 0===n&&(n={});var t=n.body,e=n.status,l=n.headers,r=n.statusText,o=n.type,i=n.url;this.body=null!=t?t:null,this.status=null!=e?e:null,this.headers=null!=l?l:null,this.statusText=null!=r?r:null,this.type=null!=o?o:null,this.url=null!=i?i:null}return n.prototype.merge=function(t){return new n({body:t&&null!=t.body?t.body:this.body,status:t&&null!=t.status?t.status:this.status,headers:t&&null!=t.headers?t.headers:this.headers,statusText:t&&null!=t.statusText?t.statusText:this.statusText,type:t&&null!=t.type?t.type:this.type,url:t&&null!=t.url?t.url:this.url})},n}(),hn=function(n){function t(){return n.call(this,{status:200,statusText:"Ok",type:sn.Default,headers:new pn})||this}return Object(r.b)(t,n),t}(fn),dn=function(){};function yn(n){if("string"!=typeof n)return n;switch(n.toUpperCase()){case"GET":return un.Get;case"POST":return un.Post;case"PUT":return un.Put;case"DELETE":return un.Delete;case"OPTIONS":return un.Options;case"HEAD":return un.Head;case"PATCH":return un.Patch}throw new Error('Invalid request method. The method "'+n+'" is not supported.')}var _n=function(n){return n>=200&&n<300},mn=function(){function n(){}return n.prototype.encodeKey=function(n){return gn(n)},n.prototype.encodeValue=function(n){return gn(n)},n}();function gn(n){return encodeURIComponent(n).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/gi,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%2B/gi,"+").replace(/%3D/gi,"=").replace(/%3F/gi,"?").replace(/%2F/gi,"/")}var bn=function(){function n(n,t){void 0===n&&(n=""),void 0===t&&(t=new mn),this.rawParams=n,this.queryEncoder=t,this.paramsMap=function(n){void 0===n&&(n="");var t=new Map;return n.length>0&&n.split("&").forEach(function(n){var e=n.indexOf("="),l=-1==e?[n,""]:[n.slice(0,e),n.slice(e+1)],r=l[0],o=l[1],i=t.get(r)||[];i.push(o),t.set(r,i)}),t}(n)}return n.prototype.clone=function(){var t=new n("",this.queryEncoder);return t.appendAll(this),t},n.prototype.has=function(n){return this.paramsMap.has(n)},n.prototype.get=function(n){var t=this.paramsMap.get(n);return Array.isArray(t)?t[0]:null},n.prototype.getAll=function(n){return this.paramsMap.get(n)||[]},n.prototype.set=function(n,t){if(void 0!==t&&null!==t){var e=this.paramsMap.get(n)||[];e.length=0,e.push(t),this.paramsMap.set(n,e)}else this.delete(n)},n.prototype.setAll=function(n){var t=this;n.paramsMap.forEach(function(n,e){var l=t.paramsMap.get(e)||[];l.length=0,l.push(n[0]),t.paramsMap.set(e,l)})},n.prototype.append=function(n,t){if(void 0!==t&&null!==t){var e=this.paramsMap.get(n)||[];e.push(t),this.paramsMap.set(n,e)}},n.prototype.appendAll=function(n){var t=this;n.paramsMap.forEach(function(n,e){for(var l=t.paramsMap.get(e)||[],r=0;r<n.length;++r)l.push(n[r]);t.paramsMap.set(e,l)})},n.prototype.replaceAll=function(n){var t=this;n.paramsMap.forEach(function(n,e){var l=t.paramsMap.get(e)||[];l.length=0;for(var r=0;r<n.length;++r)l.push(n[r]);t.paramsMap.set(e,l)})},n.prototype.toString=function(){var n=this,t=[];return this.paramsMap.forEach(function(e,l){e.forEach(function(e){return t.push(n.queryEncoder.encodeKey(l)+"="+n.queryEncoder.encodeValue(e))})}),t.join("&")},n.prototype.delete=function(n){this.paramsMap.delete(n)},n}(),wn=function(){function n(){}return n.prototype.json=function(){return"string"==typeof this._body?JSON.parse(this._body):this._body instanceof ArrayBuffer?JSON.parse(this.text()):this._body},n.prototype.text=function(n){if(void 0===n&&(n="legacy"),this._body instanceof bn)return this._body.toString();if(this._body instanceof ArrayBuffer)switch(n){case"legacy":return String.fromCharCode.apply(null,new Uint16Array(this._body));case"iso-8859":return String.fromCharCode.apply(null,new Uint8Array(this._body));default:throw new Error("Invalid value for encodingHint: "+n)}return null==this._body?"":"object"==typeof this._body?JSON.stringify(this._body,null,2):this._body.toString()},n.prototype.arrayBuffer=function(){return this._body instanceof ArrayBuffer?this._body:function(n){for(var t=new Uint16Array(n.length),e=0,l=n.length;e<l;e++)t[e]=n.charCodeAt(e);return t.buffer}(this.text())},n.prototype.blob=function(){if(this._body instanceof Blob)return this._body;if(this._body instanceof ArrayBuffer)return new Blob([this._body]);throw new Error("The request body isn't either a blob or an array buffer")},n}(),vn=function(n){function t(t){var e=n.call(this)||this;return e._body=t.body,e.status=t.status,e.ok=e.status>=200&&e.status<=299,e.statusText=t.statusText,e.headers=t.headers,e.type=t.type,e.url=t.url,e}return Object(r.b)(t,n),t.prototype.toString=function(){return"Response with status: "+this.status+" "+this.statusText+" for URL: "+this.url},t}(wn),xn=/^\)\]\}',?\n/,kn=function(){function n(n,t,e){var l=this;this.request=n,this.response=new ln.a(function(r){var o=t.build();o.open(un[n.method].toUpperCase(),n.url),null!=n.withCredentials&&(o.withCredentials=n.withCredentials);var i=function(){var t=1223===o.status?204:o.status,l=null;204!==t&&"string"==typeof(l="undefined"==typeof o.response?o.responseText:o.response)&&(l=l.replace(xn,"")),0===t&&(t=l?200:0);var i,u=pn.fromResponseHeaderString(o.getAllResponseHeaders()),s=("responseURL"in(i=o)?i.responseURL:/^X-Request-URL:/m.test(i.getAllResponseHeaders())?i.getResponseHeader("X-Request-URL"):null)||n.url,a=new fn({body:l,status:t,headers:u,statusText:o.statusText||"OK",url:s});null!=e&&(a=e.merge(a));var c=new vn(a);if(c.ok=_n(t),c.ok)return r.next(c),void r.complete();r.error(c)},u=function(n){var t=new fn({body:n,type:sn.Error,status:o.status,statusText:o.statusText});null!=e&&(t=e.merge(t)),r.error(new vn(t))};if(l.setDetectedContentType(n,o),null==n.headers&&(n.headers=new pn),n.headers.has("Accept")||n.headers.append("Accept","application/json, text/plain, */*"),n.headers.forEach(function(n,t){return o.setRequestHeader(t,n.join(","))}),null!=n.responseType&&null!=o.responseType)switch(n.responseType){case cn.ArrayBuffer:o.responseType="arraybuffer";break;case cn.Json:o.responseType="json";break;case cn.Text:o.responseType="text";break;case cn.Blob:o.responseType="blob";break;default:throw new Error("The selected responseType is not supported")}return o.addEventListener("load",i),o.addEventListener("error",u),o.send(l.request.getBody()),function(){o.removeEventListener("load",i),o.removeEventListener("error",u),o.abort()}})}return n.prototype.setDetectedContentType=function(n,t){if(null==n.headers||null==n.headers.get("Content-Type"))switch(n.contentType){case an.NONE:break;case an.JSON:t.setRequestHeader("content-type","application/json");break;case an.FORM:t.setRequestHeader("content-type","application/x-www-form-urlencoded;charset=UTF-8");break;case an.TEXT:t.setRequestHeader("content-type","text/plain");break;case an.BLOB:var e=n.blob();e.type&&t.setRequestHeader("content-type",e.type)}},n}(),Tn=function(){function n(n,t){void 0===n&&(n="XSRF-TOKEN"),void 0===t&&(t="X-XSRF-TOKEN"),this._cookieName=n,this._headerName=t}return n.prototype.configureRequest=function(n){var t=Object(rn.r)().getCookie(this._cookieName);t&&n.headers.set(this._headerName,t)},n}(),On=function(){function n(n,t,e){this._browserXHR=n,this._baseResponseOptions=t,this._xsrfStrategy=e}return n.prototype.createConnection=function(n){return this._xsrfStrategy.configureRequest(n),new kn(n,this._browserXHR,this._baseResponseOptions)},n}(),Cn=function(){function n(n){void 0===n&&(n={});var t=n.method,e=n.headers,l=n.body,r=n.url,o=n.search,i=n.params,u=n.withCredentials,s=n.responseType;this.method=null!=t?yn(t):null,this.headers=null!=e?e:null,this.body=null!=l?l:null,this.url=null!=r?r:null,this.params=this._mergeSearchParams(i||o),this.withCredentials=null!=u?u:null,this.responseType=null!=s?s:null}return Object.defineProperty(n.prototype,"search",{get:function(){return this.params},set:function(n){this.params=n},enumerable:!0,configurable:!0}),n.prototype.merge=function(t){return new n({method:t&&null!=t.method?t.method:this.method,headers:t&&null!=t.headers?t.headers:new pn(this.headers),body:t&&null!=t.body?t.body:this.body,url:t&&null!=t.url?t.url:this.url,params:t&&this._mergeSearchParams(t.params||t.search),withCredentials:t&&null!=t.withCredentials?t.withCredentials:this.withCredentials,responseType:t&&null!=t.responseType?t.responseType:this.responseType})},n.prototype._mergeSearchParams=function(n){return n?n instanceof bn?n.clone():"string"==typeof n?new bn(n):this._parseParams(n):this.params},n.prototype._parseParams=function(n){var t=this;void 0===n&&(n={});var e=new bn;return Object.keys(n).forEach(function(l){var r=n[l];Array.isArray(r)?r.forEach(function(n){return t._appendParam(l,n,e)}):t._appendParam(l,r,e)}),e},n.prototype._appendParam=function(n,t,e){"string"!=typeof t&&(t=JSON.stringify(t)),e.append(n,t)},n}(),En=function(n){function t(){return n.call(this,{method:un.Get,headers:new pn})||this}return Object(r.b)(t,n),t}(Cn),Mn=function(n){function t(t){var e=n.call(this)||this,l=t.url;e.url=t.url;var r,o=t.params||t.search;if(o&&(r="object"!=typeof o||o instanceof bn?o.toString():function(n){var t=new bn;return Object.keys(n).forEach(function(e){var l=n[e];l&&Array.isArray(l)?l.forEach(function(n){return t.append(e,n.toString())}):t.append(e,l.toString())}),t}(o).toString()).length>0){var i="?";-1!=e.url.indexOf("?")&&(i="&"==e.url[e.url.length-1]?"":"&"),e.url=l+i+r}return e._body=t.body,e.method=yn(t.method),e.headers=new pn(t.headers),e.contentType=e.detectContentType(),e.withCredentials=t.withCredentials,e.responseType=t.responseType,e}return Object(r.b)(t,n),t.prototype.detectContentType=function(){switch(this.headers.get("content-type")){case"application/json":return an.JSON;case"application/x-www-form-urlencoded":return an.FORM;case"multipart/form-data":return an.FORM_DATA;case"text/plain":case"text/html":return an.TEXT;case"application/octet-stream":return this._body instanceof Sn?an.ARRAY_BUFFER:an.BLOB;default:return this.detectContentTypeFromBody()}},t.prototype.detectContentTypeFromBody=function(){return null==this._body?an.NONE:this._body instanceof bn?an.FORM:this._body instanceof An?an.FORM_DATA:this._body instanceof Bn?an.BLOB:this._body instanceof Sn?an.ARRAY_BUFFER:this._body&&"object"==typeof this._body?an.JSON:an.TEXT},t.prototype.getBody=function(){switch(this.contentType){case an.JSON:case an.FORM:return this.text();case an.FORM_DATA:return this._body;case an.TEXT:return this.text();case an.BLOB:return this.blob();case an.ARRAY_BUFFER:return this.arrayBuffer();default:return null}},t}(wn),Pn=function(){},Rn="object"==typeof window?window:Pn,An=Rn.FormData||Pn,Bn=Rn.Blob||Pn,Sn=Rn.ArrayBuffer||Pn;function Nn(n,t){return n.createConnection(t).response}function Fn(n,t,e,l){return n.merge(new Cn(t?{method:t.method||e,url:t.url||l,search:t.search,params:t.params,headers:t.headers,body:t.body,withCredentials:t.withCredentials,responseType:t.responseType}:{method:e,url:l}))}var Ln=function(){function n(n,t){this._backend=n,this._defaultOptions=t}return n.prototype.request=function(n,t){var e;if("string"==typeof n)e=Nn(this._backend,new Mn(Fn(this._defaultOptions,t,un.Get,n)));else{if(!(n instanceof Mn))throw new Error("First argument must be a url string or Request instance.");e=Nn(this._backend,n)}return e},n.prototype.get=function(n,t){return this.request(new Mn(Fn(this._defaultOptions,t,un.Get,n)))},n.prototype.post=function(n,t,e){return this.request(new Mn(Fn(this._defaultOptions.merge(new Cn({body:t})),e,un.Post,n)))},n.prototype.put=function(n,t,e){return this.request(new Mn(Fn(this._defaultOptions.merge(new Cn({body:t})),e,un.Put,n)))},n.prototype.delete=function(n,t){return this.request(new Mn(Fn(this._defaultOptions,t,un.Delete,n)))},n.prototype.patch=function(n,t,e){return this.request(new Mn(Fn(this._defaultOptions.merge(new Cn({body:t})),e,un.Patch,n)))},n.prototype.head=function(n,t){return this.request(new Mn(Fn(this._defaultOptions,t,un.Head,n)))},n.prototype.options=function(n,t){return this.request(new Mn(Fn(this._defaultOptions,t,un.Options,n)))},n}();function jn(){return new Tn}function qn(n,t){return new Ln(n,t)}var Jn=function(){},Xn=e("6kXw"),Hn=(e("EN1B"),function(){function n(t,e,l){this.http=t,this.options=e,this.logger=l,this.mappings={},this.basePath="data/",this.fileExtension="",this.logger=l.forContext(n),this.processMappings(),this.basePath+=e.basePath+"/",this.fileExtension=e.fileExtension}return n.prototype.getSingle=function(n,t){var e=this,l=this.getMapping(n);if(!l)throw this.logger.error("Unable to find mapping for: "+n.name),new Error("No mapping");return this.getFromPath(l,t).catch(function(n){throw e.logger.error("Error getting item from "+l+" id '"+t+"':"+n),new Error("Unable to read item.")})},n.prototype.getList=function(n){var t=this,e=this.getMapping(n);if(!e)throw this.logger.error("Unable to find mapping for: "+n.name),new Error("No mapping");return this.getFromPath(e).catch(function(n){throw t.logger.error("Error getting list from "+e+":"+n),new Error("Unable to read list.")})},n.prototype.getFromPath=function(n,t){return this.http.get(this.basePath+n+(t||"")+this.fileExtension).toPromise().then(function(n){return n.json()})},n.prototype.getMapping=function(n){return this.mappings[n.name]},n.prototype.processMappings=function(){for(var n in this.options.mappings)this.mappings[this.options.mappings[n].name]=n},n}()),Un=function(){},Dn=function(){};e.d(t,"TheoryModuleNgFactory",function(){return In});var In=l.Z(h,[],function(n){return l._8([l._9(512,l.j,l.V,[[8,[I,K,nn]],[3,l.j],l.v]),l._9(4608,_.k,_.j,[l.s,[2,_.q]]),l._9(4608,on,on,[]),l._9(4608,fn,hn,[]),l._9(5120,dn,jn,[]),l._9(4608,On,On,[on,fn,dn]),l._9(4608,Cn,En,[]),l._9(5120,Ln,qn,[On,Cn]),l._9(4608,o,Xn.a,[]),l._9(4608,u,f,[]),l._9(4608,i,Hn,[Ln,u,o]),l._9(4608,A,A,[i,o]),l._9(512,_.b,_.b,[]),l._9(512,Jn,Jn,[]),l._9(512,Un,Un,[]),l._9(512,d.m,d.m,[[2,d.r],[2,d.k]]),l._9(512,Dn,Dn,[]),l._9(512,h,h,[]),l._9(1024,d.i,function(){return[[{path:"topic/:id",component:B},{path:"disclaimer",component:G},{path:"",component:$},{path:"**",redirectTo:"theory",pathMatch:"full"}]]},[])])})},EN1B:function(n,t){}});