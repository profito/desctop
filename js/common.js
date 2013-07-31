startOS.OSSettings = {
    music: {
        name:'deep',
        type:'musicIcon',
        itext:'music',
        img:'imgMusic',
        imgicon:'imgIconMusic',
        callback: "openDeep()",
        windowOpt: {
            name: 'Now Playing: Deep Purple - Smoke on the water',
            type: 'Audio',
            width: 300,
            height: 200,
            state: 'open'
        }

    },
    text: {
        name: 'book',
        type: 'textIcon',
        itext:'text',
        img:'imgText',
        imgicon:'imgIconText',
        callback: "openBook()",
        windowOpt: {
            name: 'ololo.txt',
            type: 'Text',
            width: 300,
            height: 200,
            state: 'open'
        }
    },
    delete: {
        name: 'delete',
        type: 'deleteIcon',
        itext:'Корзина',
        img:'imgDelete',
        imgicon:'imgIconDelete',
        callback: "openBook()",
        windowOpt: {
        name: 'Delete',
            type: 'Delete',
            width: 300,
            height: 200,
            state: 'open'
        }
    }
};
startOS.renderAll();
