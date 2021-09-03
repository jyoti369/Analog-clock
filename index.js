setInterval(() => {
 d=new Date();
 Thour=d.getHours();
 Tminute=d.getMinutes();
 Tsecond=d.getSeconds();
 
 hrotation=30*Thour+Tminute/2;
 mrotation=6*Tminute;
 srotation=6*Tsecond;

 hour.style.transform = `rotate(${hrotation}deg)`;
 minute.style.transform = `rotate(${mrotation}deg)`;
 second.style.transform = `rotate(${srotation}deg)`;

 },1000);