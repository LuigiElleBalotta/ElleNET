!function(){var n=Handlebars.template,a=Handlebars.templates=Handlebars.templates||{};a.news=n(function(n,a,s,e,r){function l(n,a){var e,r,l,c="";return c+='\r\n    <div class="news-item">\r\n      ',l={hash:{"class":"news-image thin-frame"},inverse:w.noop,fn:w.program(2,t,a),data:a},e=s.newsLink||n.newsLink,r=e?e.call(n,l):d.call(n,"newsLink",l),(r||0===r)&&(c+=r),c+='\r\n\r\n      <div class="news-body">\r\n        <h3 class="news-title">',l={hash:{},inverse:w.noop,fn:w.program(4,i,a),data:a},(r=s.newsLink)?r=r.call(n,l):(r=n.newsLink,r=typeof r===h?r.apply(n):r),s.newsLink||(r=f.call(n,r,l)),(r||0===r)&&(c+=r),c+='</h3>\r\n        <span class="news-summary">',(r=s.summary)?r=r.call(n,{hash:{},data:a}):(r=n.summary,r=typeof r===h?r.apply(n):r),(r||0===r)&&(c+=r),c+='</span>\r\n        <div class="news-footer">\r\n          ',l={hash:{"class":"news-comments",comments:!0},inverse:w.noop,fn:w.program(6,p,a),data:a},e=s.newsLink||n.newsLink,r=e?e.call(n,l):d.call(n,"newsLink",l),(r||0===r)&&(c+=r),c+='\r\n          <span class="news-date">',(r=s.newsDate)?r=r.call(n,{hash:{},data:a}):(r=n.newsDate,r=typeof r===h?r.apply(n):r),c+=v(r)+'</span>\r\n        </div>\r\n      </div>\r\n      <span class="clear"/>\r\n    </div>\r\n  '}function t(n,a){var e;return(e=s.newsImage)?e=e.call(n,{hash:{},data:a}):(e=n.newsImage,e=typeof e===h?e.apply(n):e),e||0===e?e:""}function i(n,a){var e,r="";return r+=" ",(e=s.title)?e=e.call(n,{hash:{},data:a}):(e=n.title,e=typeof e===h?e.apply(n):e),(e||0===e)&&(r+=e),r+=" "}function p(n,a){var e,r="";return r+='<i class="icon comment-bubble"/>',(e=s.comments)?e=e.call(n,{hash:{},data:a}):(e=n.comments,e=typeof e===h?e.apply(n):e),(e||0===e)&&(r+=e),r}this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,n.helpers),r=r||{};var c,o,m="",h="function",w=this,d=s.helperMissing,f=s.blockHelperMissing,v=this.escapeExpression;return m+='<div class="news-container">\r\n  ',o={hash:{},inverse:w.noop,fn:w.program(1,l,r),data:r},(c=s.news)?c=c.call(a,o):(c=a.news,c=typeof c===h?c.apply(a):c),s.news||(c=f.call(a,c,o)),(c||0===c)&&(m+=c),m+="\r\n</div>\r\n"})}();