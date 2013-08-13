var Icon,
    IconManager,
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
        if(obj.name=='deep'){
        document.getElementById('wrapperIcon').innerHTML += tmpl('icon')({type:obj.type, img:obj.img, itext:obj.itext, iname: obj.iname, alert:'openWindows.deliver(\''+obj.name+'\',\''+obj.url+'\')'+'; newIcons.deliver(\''+obj.name+'\');' })
        document.getElementById('embmenuStart').innerHTML += tmpl('iconMenuStart')({img:obj.img+'Start', itext:obj.iname, alert:'openWindows.deliver(\''+obj.name+'\',\''+obj.url+'\'); newIcons.deliver(\''+obj.name+'\')'  });
        }
        else{
            document.getElementById('wrapperIcon').innerHTML += tmpl('icon')({type:obj.type, img:obj.img, itext:obj.itext, iname: obj.iname, alert:'openWindows.deliver(\''+obj.name+'\',\''+obj.iname+'\')'+'; newIcons.deliver(\''+obj.name+'\');' });
            document.getElementById('embmenuStart').innerHTML += tmpl('iconMenuStart')({img:obj.img+'Start', itext:obj.iname, alert:'openWindows.deliver(\''+obj.name+'\',\''+obj.iname+'\'); newIcons.deliver(\''+obj.name+'\')'  });
        }
    }
};

