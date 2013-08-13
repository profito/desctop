document.addEventListener('contextmenu' ,function () { myMenu()});
document.addEventListener('click' ,function () { closeMyMenu()});

document.getElementById('update').addEventListener('click',function(){window.location.reload(true)});
document.getElementById('allTools').addEventListener('click',function(){ tools() });

function closeMyMenu(){
    var contextMenu = document.getElementById('contextMenu');
    contextMenu.style.display='none';
}

function myMenu(){
    var polX = event.clientX,
        polY = event.clientY,
        contextMenu = document.getElementById('contextMenu');

    contextMenu.style.top=polY+"px";
    contextMenu.style.display='block';
    contextMenu.style.left=polX+"px";
    return false;
}

function tools(){
    document.getElementById('tools').style.display="block";
}


<!--работа с объектом navigator-->
    document.getElementById('appName').innerText=navigator.appName;
    document.getElementById('appVersion').innerText=navigator.appVersion;
    document.getElementById('cookie').innerText=(navigator.cookieEnabled=v=true)? 'да' : 'нет,что бы попробовать все возможности, включите их';
    document.getElementById('platform').innerText=navigator.platform;
    document.getElementById('toolClose').addEventListener("click",function(){document.getElementById('tools').style.display="none"   });
<!-- -->


