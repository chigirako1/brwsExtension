// firefox extension
//  download image files
//
browser.contextMenus.create({
    id: "my-download-image",
    title: "Download Image(&F)",
    contexts: ["image"],
});
browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "my-download-image") {
        // 
        console.log('test:::');
        if (false) {
            browser.downloads.download({url: info.srcUrl, saveAs: false});
        } else {
            var url = info.srcUrl;
            var filename_w_ex = url.match(".+/(.+?)([\?#;].*)?$")[1];
            var filepath = "nh/0/0/" + filename_w_ex;
            browser.downloads.download({
                url: info.srcUrl, 
                filename: filepath, 
                saveAs: false
            });
            document.body.style.backgroundColor = '#030303';
            document.body.style.border = "5px solid blue";
            document.body.style.border = "5px solid red";
        }
    }
});
