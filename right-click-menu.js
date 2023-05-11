chrome.runtime.onInstalled.addListener(async () => {

    chrome.contextMenus.create({
        title: "Sherlock Custom", //菜单的名称
        id: '10',//一级菜单的id
        contexts: ['page', 'selection'], // page表示页面右键就会有这个菜单，如果想要当选中文字时才会出现此右键菜单，用：selection
    });

    chrome.contextMenus.create({
        title: '百度地图', //菜单的名称
        id: '1010',//二级菜单的id
        parentId: '10',//表示父菜单是“Sherlock Custom”
        contexts: ['page', 'selection']
    });
});


// Open a new search tab when the user clicks a context menu
chrome.contextMenus.onClicked.addListener((item, tab) => {
    console.log(item)
    switch (item.menuItemId) {
        case '1010': //百度地图
            var selectedLocation = item.selectionText;
            var home = "久赋名邸"
            //window.open(`https://map.baidu.com/search/${selectedLocation}`, "_blank")
            chrome.tabs.create({ url: `http://api.map.baidu.com/direction?origin=${home}&destination=${selectedLocation}&mode=transit&region=杭州&output=html`, index: tab.index + 1 });
            break;
    }
});