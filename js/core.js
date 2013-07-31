<!--Наблюдатель-->
function Publisher() {
    this.subscribers = [];
}

Publisher.prototype.deliver = function(data) {
    this.subscribers.forEach(
        function(fn) {
            fn(data);
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
var openWindows = new Publisher,
    newIcons = new Publisher,
    closeWindows = new Publisher,
    closeIcons = new Publisher,
    minWindows = new Publisher,
    maxWindows = new Publisher,
    e="'",
    i,
    zIndex=0;

var openWind = function(name) {
    (name=='book')?  text='textarea':  text='div';
    document.getElementById('wrapperWindows').innerHTML += tmpl('wind')({id:name, textarea: text , nameWindows:name, win:'win', n:i++, winTop:'winTop', winText:'winText', winButton:'winButton',winMin:'winMin', min:'onclick="minWindows.deliver('+e+(i-1)+e+')"', winClose:'winClose', closes:'onclick="closeWindows.deliver('+e+(i-1)+e+')'+'; closeIcons.deliver('+e+(i)+e+');"', embwinText:'embwinText' });

};

var newIcon = function(name) {
    document.getElementById('workStart').innerHTML += tmpl('iconStart')({id:i+'icon', className:name+'Start', closes:'onclick="maxWindows.deliver('+e+(i-1)+e+')"' });

};

var closeWind = function(name) {
    document.getElementById('wrapperWindows').removeChild(document.getElementById('win'+name));
};

var closeIcon = function(name) {
    document.getElementById('workStart').removeChild(document.getElementById(name+'icon'));
};

var minWind = function(name) {
    document.getElementById('win'+name).style.display='none';
};

var maxWind = function(name) {
    document.getElementById('win'+name).style.display='block';
    document.getElementById('win'+name).style.zIndex=zIndex++;
    ;
};

newIcon.subscribe(newIcons);
closeIcon.subscribe(closeIcons);
openWind.subscribe(openWindows);
closeWind.subscribe(closeWindows);
minWind.subscribe(minWindows);
maxWind.subscribe(maxWindows);

///////////

var OS,
    startOS;

startOS = {
    renderAll: function(){
        var a;
        for (a in this.OSSettings) {
            new OS(this.OSSettings[a]);
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



