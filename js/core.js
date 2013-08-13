<!--Наблюдатель-->
function Publisher() {
    this.subscribers = [];
}

Publisher.prototype.deliver = function(type,name) {
    this.subscribers.forEach(
        function(fn) {
            fn(type,name);
        }
    );
    return this;
};

Function.prototype.subscribe = function(publisher) {
    publisher.subscribers.push(this);
    return this;
};

<!-- -->
///////////
///////////
var openWindows  = new Publisher,
    newIcons     = new Publisher,
    closeWindows = new Publisher,
    closeIcons   = new Publisher,
    minWindows   = new Publisher,
    maxWindows   = new Publisher,
    i,
    zIndex= 0,deepStatus=0;


var openWind = function(name,iname) {
    if(name=='deep'){
        arrayWrite("",iname);
        if(deepStatus==0){
            deepStatus=1;
        document.getElementById('wrapperWindows').innerHTML += tmpl('windMusic')({id:name, textarea:'div', nameWindows: iname, n:i++, min:'onclick="minWindows.deliver(\''+name+'\',\''+(i-1)+'\')"', closes:'onclick="closeWindows.deliver(\''+name+'\',\''+(i-1)+'\') ; closeIcons.deliver(\''+(i)+'\');"' });
       }
    }else{
    (name=='book')? text='textarea' : text='div';
    document.getElementById('wrapperWindows').innerHTML += tmpl('wind')({id:name, textarea:text, nameWindows: iname, n:i++, min:'onclick="minWindows.deliver(\''+(i-1)+'\')"', closes:'onclick="closeWindows.deliver(\''+name+'\',\''+(i-1)+'\') ; closeIcons.deliver(\''+(i-1)+'\');"' });
    }
};

var newIcon = function(name) {
    if(name=='deep'){
        if(deepStatus==1){
            deepStatus=2;
            document.getElementById('workStart').innerHTML += tmpl('iconPanelStart')({id:i+'icon', className:name+'Start', maximizeWindows:'onclick="maxWindows.deliver(\''+(i-1)+'\')"' });
        }
    }else{
        document.getElementById('workStart').innerHTML += tmpl('iconPanelStart')({id:i+'icon', className:name+'Start', maximizeWindows:'onclick="maxWindows.deliver(\''+(i-1)+'\')"' });
    }
};

var closeWind = function(type,name) {
    document.getElementById('wrapperWindows').removeChild(document.getElementById('win'+name));
    if(type=='deep'){
        document.getElementById("trackList").className='closeTrackList';
        song.pause();
        deepStatus='0';
    }
};

var closeIcon = function(name) {
    document.getElementById('workStart').removeChild(document.getElementById(name+'icon'));
};
var minWind = function(type,name) {
    document.getElementById('win'+name).style.display='none';
    (type=='deep')?document.getElementById("trackList").className='closeTrackList':"";
};

var maxWind = function(name) {
    console.log(" "+name);
    document.getElementById('win'+name).style.display='block';
    document.getElementById('win'+name).style.zIndex=zIndex++;
};

newIcon.subscribe(newIcons);
closeIcon.subscribe(closeIcons);
openWind.subscribe(openWindows);
closeWind.subscribe(closeWindows);
minWind.subscribe(minWindows);
maxWind.subscribe(maxWindows);

///////////

var OS,
    startOS,
    musicArray= new Array(),
    q=0;
startOS = {
    renderAll: function(){
        var a;
        for (a in this.OSSettings) {
            new OS(this.OSSettings[a]);
            if(this.OSSettings[a].url!=undefined){
                musicArray[q++]=this.OSSettings[a].url;
            }
        }
    }
};

OS = function (obj) {
    var a;
    for (a in obj){
        if (obj.hasOwnProperty(a)){
            this[a] = obj[a];
        }
    }

OS.prototype.newIcon(obj);
};

OS.prototype={
    newIcon:function(obj){
            Icon.prototype.newIcon(obj);
    }
}

<!-- Шаблонизатор -->
function tmpl(str){
    var fn = new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +

            // Introduce the data as local variables using with(){}
            "with(obj){p.push('" + document.getElementById(str).innerHTML
            .replace(/[\r\t\n]/g, " ")
            .split("<%").join(    "\t")
            .replace(/((^|%>)[^\t]*)'/g, "$1\r")
            .replace(/\t=(.*?)%>/g, "',$1,'")
            .split("\t").join("');")
            .split("%>").join(" p.push('")
            .split("\r").join("\\'") + "');} return p.join('');");
    return fn
}



