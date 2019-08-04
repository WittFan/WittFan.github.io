  /*页面载入完成后，创建复制按钮*/
var btnCopyEmpty = true;
document.addEventListener("copy", copy);
function copy(oEvent){
    var selection = window.getSelection();
    if(btnCopyEmpty){
      var quoteMagic = "<!-- It's convenient in markdown file. -->\n";
      quoteMagic += "<!-- More information: https://www.exobrain.online/2019/08/04/%E4%B8%BAmarkdown%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E5%BC%95%E6%96%87%E6%A0%87%E8%AE%B0%E7%AC%A6/#more -->\n";
      quoteMagic += "<!-- quote(start){ author: authorname, site: www.sitename.com, location: ";
      quoteMagic += document.location.href;
      quoteMagic += "} -->\n";
      var copytext = quoteMagic + selection + "\n<!-- quote(end) -->";
    }else{
      var copytext = selection
    };
    oEvent.preventDefault();
    oEvent.clipboardData.setData("text", copytext);
};

!function (e, t, a) { 
/* code */
var initCopyCode = function(){
    var copyHtml = '';
    copyHtml += '<button class="btn-copy" data-clipboard-snippet="">';
    //fa fa-globe可以去字体库替换自己想要的图标
copyHtml += '  <i class="fa fa-clipboard"></i><span>copy</span>';
    copyHtml += '</button>';
    $(".highlight .code pre").before(copyHtml);
    new ClipboardJS('.btn-copy', {
        target: function(trigger) {
            triggerNext = function(){
                trigger.nextElementSibling;
                btnCopyEmpty=false;
            }
            return triggerNext;
        }
    });
}
initCopyCode();
}(window, document);

