const api='https://jx.m3u8.tv/jiexi/?url=';
const message=document.getElementById('message');

function PlayVideo(){
    
    let url = document.querySelector('.url').value;
    if(!url){
        message.innerHTML=`<p id="messageP" style="width: 100%; height: 100%;">请输入视频链接<p>`
        setTimeout(() => {
            const pElement = document.getElementById('messageP');
            if (pElement) {
                pElement.style.display = 'none';
            }
        }, 3000);
        return;                                                                                         
    }
    playUrl=api+url 
    let playBox = document.getElementById('play_box');
    playBox.innerHTML = `<iframe src="${playUrl}" width="100%" height="100%" 
    frameborder="0" allowfullscreen></iframe>`;
    document.querySelector('.url').value = '';
    document.querySelector('.line_container').style.display = 'flex';
}
