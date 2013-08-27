<!--Часы-->
var timeStart= document.getElementById('timeStart'),
    dateStart = document.getElementById('dateStart'),
    minutes;
function timeS(){
    time = new Date;
    (time.getMinutes()<10)? minutes="0"+time.getMinutes() : minutes=time.getMinutes();
    timeStart.innerText=time.getHours()+':'+minutes;
    dateStart.innerText=time.getDate()+'.'+(time.getMonth()+1)+'.'+time.getFullYear();
    setTimeout('timeS()', 1000);
}
timeS();

var song = new Audio(),
    play,stop,pause,urlTrack,
    splitStringMusic,li,trackList,Track;


<!--выводим все треки в список в dom и возпроизводим последний эллемент-->
function trackAll(Track){
    for(forI=musicArray.length-1;forI>=0;forI--){
        splitStringMusic=musicArray[forI].split("_");
        li=document.createElement('li');
        trackList=document.getElementById('track');
        trackList.appendChild(li);
        li.innerHTML=splitStringMusic[1];
        li.id=splitStringMusic[0];
        li.className='treckOfList';
        splitStringMusic=musicArray[musicArray.length-1].split("_");
        song.src=splitStringMusic[0];
    }
}

playSong = function(song){
    song.play();
}.bind(null, song);
stopSong = function(song){
    song.pause();
    song.currentTime = 0;
}.bind(null, song);
pauseSong = function(song){
    song.pause();
}.bind(null, song);

document.addEventListener('click',function (e){clicks(e)})
function clicks(e){
    var openList =document.getElementById("trackList").className;
    if(e.target.id=="musicButtonList"){
        (openList=="closeTrackList")? document.getElementById("trackList").className='openTrackList':document.getElementById("trackList").className='closeTrackList';
    }

    <!--выводим проигрываемый трек в конец и удоляем его из списка выше-->
    if(e.target.className=="treckOfList"){
        arrayWrite(e,"");
    }
    if(e.target.id=="NextDesctop")
    {
        nextDesctop(e.target.className);
    }

}

function arrayWrite(e,urlS){
    (e=="")? musicArray.push(urlS): musicArray.push(e.target.id+'_'+ e.target.innerText);
    for(r=0;r<musicArray.length-1;r++){
        splitStringMusic=musicArray[r].split("_");
        if(musicArray[musicArray.length-1]==(splitStringMusic[0]+'_'+splitStringMusic[1])){
            musicArray.splice(r,1)
        }
    }
    trackList=document.getElementById('track');
    trackList.innerHTML='';
    trackAll(Track);
    playSong(song);
}

function nextDesctop(img){
    if(img=="img1"){
    document.body.style.background="url('../desctop/images/bg2.jpg')";
    document.body.style.backgroundSize='cover';
    document.getElementById('NextDesctop').className="img2";
    }
    else
    {
        document.body.style.background="url('../desctop/images/bg1.jpg')";
        document.body.style.backgroundSize='cover';
        document.getElementById('NextDesctop').className="img1";

    }
}
