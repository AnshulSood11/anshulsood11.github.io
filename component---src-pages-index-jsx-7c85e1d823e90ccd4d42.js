(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Dtc0:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return b}));var a=n("mwIZ"),i=n.n(a),r=n("q1tI"),l=n.n(r),c=n("eNIv"),o=n("6uTu"),s=n("STHm"),m=function(e){var t=e.about;return l.a.createElement(s.a,{title:"About Me"},l.a.createElement("div",{className:"mb-6"},t.split("\n").map((function(e,t){return l.a.createElement("p",{key:t},e,l.a.createElement("br",null))}))))},u=n("Wbzz"),d=n("hbLQ"),p=function(e){var t=e.posts;return l.a.createElement(s.a,{title:"Latest Posts"},t.map((function(e){return l.a.createElement(d.a,{key:e.node.fields.slug,name:e.node.frontmatter.title,description:e.node.frontmatter.description,link:e.node.fields.slug,internal:!0})})),t.length>=5&&l.a.createElement(u.Link,{className:"text-gray-500 text-sm hover:text-black",to:"/blog"},"View all posts →"))},E=function(e){var t=e.education;return t.length?l.a.createElement(s.a,{title:"Education"},t.map((function(e){return l.a.createElement(d.a,{key:e.name,name:e.name,info:e.info,description:e.description,link:e.link})}))):null},f=function(e){var t=e.experience;return t.length?l.a.createElement(s.a,{title:"Experience"},t.map((function(e){return l.a.createElement(d.a,{key:e.name,name:e.name,info:e.info,description:e.description,link:e.link})}))):null},k=function(e){var t=e.projects;return t.length?l.a.createElement(s.a,{title:"Projects"},t.map((function(e){return l.a.createElement(d.a,{key:e.name,name:e.name,description:e.description,link:e.link})}))):null},g=function(e){var t=e.recognition;return t.length?l.a.createElement(s.a,{title:"Awards and Achievements"},t.map((function(e){return l.a.createElement(d.a,{key:e.name,name:e.name,info:e.info,description:e.description,link:e.link})}))):null},h=function(e){var t=e.skills;return l.a.createElement(s.a,{title:"Skills"},t.map((function(e){return l.a.createElement(d.a,{key:e.name,name:e.name,description:e.description})})))},v=n("ivnd"),b=(t.default=function(e){var t=e.data,n=i()(t,"site.siteMetadata.about",!1),a=i()(t,"site.siteMetadata.projects",!1),r=t.allMarkdownRemark.edges,s=i()(t,"site.siteMetadata.experience",!1),u=i()(t,"site.siteMetadata.education",!1),d=i()(t,"site.siteMetadata.skills",!1),b=i()(t,"site.siteMetadata.recognition",!1),w=!r||!r.length;return l.a.createElement(o.a,null,l.a.createElement(v.a,null),l.a.createElement(c.a,{metadata:t.site.siteMetadata,noBlog:w}),n&&l.a.createElement(m,{about:n}),!w&&l.a.createElement(p,{posts:r}),s&&s.length&&l.a.createElement(f,{experience:s}),u&&u.length&&l.a.createElement(E,{education:u}),a&&a.length&&l.a.createElement(k,{projects:a}),d&&d.length&&l.a.createElement(h,{skills:d}),b&&b.length&&l.a.createElement(g,{recognition:b}))},"1204641568")}}]);
//# sourceMappingURL=component---src-pages-index-jsx-7c85e1d823e90ccd4d42.js.map