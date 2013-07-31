var Icon,
    IconManager,
    i= 3,
    z=0,x=0;

Icon = function(obj){
    var a;
    for (a in obj){
        if(obj.hasOwnProperty(a)){
            this[a] = obj[a];
        }
    }
};
Icon.prototype= {
    newIcon: function(obj){
        var e="'";
        document.getElementById('wrapperIcon').innerHTML += tmpl('icon')({id:obj.type, img:obj.img, itext:obj.itext, alert:'openWindows.deliver('+e+obj.name+e+')'+'; newIcons.deliver('+e+obj.name+e+');' });
        document.getElementById('embmenuStart').innerHTML += tmpl('iconPysk')({id:obj.type+'Pysk', img:obj.img+'Pysk', itext:obj.windowOpt.type, alert:'openWindows.deliver('+e+obj.name+e+')'+'; newIcons.deliver('+e+obj.name+e+');'  });
    }
};

