let a=[{songname:'" GANESH AARTI "',songvalue:new Audio('aarti.mp3') }
,{songname:'" AATMARAMA "',songvalue:new Audio('aatmarama.mp3')}
,{songname:'" EK HASEENA THI "',songvalue:new Audio('Ek Haseena Thi.mp3')}
,{songname:'" HOP HIP HOP "',songvalue:new Audio('hop hip.mp3')}
,{songname:'" RAMA-AYENGE "',songvalue:new Audio('ramaayenge.mp3')}
,{songname:'" RAMSIYARAM "',songvalue:new Audio('ramsiyaram.mp3')}
,{songname:'" WHY THIS COLABERRY DI "',songvalue:new Audio('Why This Kolaveri Di.mp3')}
 ]
// var currentsong;
// let boll=true;
// var storeindex;
// let j=0;
// let k=1;
let songnames=document.getElementsByClassName('songname');
let songs=document.getElementsByClassName('songs');
Array.from(songs).forEach((ele,index)=>{
    a[index].songvalue;
   
    ele.addEventListener('click',(f)=>{
        a[index].songvalue.addEventListener('timeupdate',()=>{
            // console.log(a[index].songvalue.currentTime) ;
            // console.log(a[index].songvalue.duration) ;
            let value1=parseInt((a[index].songvalue.currentTime/a[index].songvalue.duration)*100);
          input.value=value1
         })
         a[index].songvalue.play()
  
         console.log(a[index].songname)
         play.src='pause.png'
         for(let i=index+1;i<a.length;i++)
         {   a[i].songvalue.pause()
            console.log('song after'+a[i])
         }
         for(let i=index-1;i>=0;i--)
         { a[i].songvalue.pause()
            console.log('song before'+a[i])
         }
    })
      
  })
  Array.from(songnames).forEach((ele,index)=>{
    ele.innerText=a[index].songname;
    ele.addEventListener('dblclick',()=>{
      a[index].songvalue.pause()
    })

  })
  // frdbtn.addEventListener('click',()=>{
  //   j++;
  //   k++;
  //   a[storeindex+j].songvalue.play()
  //  for(let i=storeindex+k;i<a.length;i++)
  //  {  a[i].songvalue.pause()
   
  //  }
  //  for(let i=storeindex;i>=0;i--)
  //  { a[i].songvalue.pause()
   
  //  }
 

  // })