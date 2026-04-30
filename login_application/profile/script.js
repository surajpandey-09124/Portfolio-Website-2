window.onload=function(){
  if(sessionStorage.getItem('user')==null){
    window.location.replace('./index.html');
  }
  else{
    let pic_upload=document.querySelector('.pic-upload');
    pic_upload.onchange=function(){
      var reader=new FileReader();
    reader.readAsDataURL(pic_upload.files[0]);
    let fileName=reader.result;
    let profile_pic=document.querySelector('.profile-pic');
    profile_pic.style.background='url('+fileName+')';
    profile_pic.style.backgroundSize='cover';
    profile_pic.style.backgrondPosition='center';
    let icon=document.querySelector('#icon');
    icon.style.display='none';
    }
  }
}