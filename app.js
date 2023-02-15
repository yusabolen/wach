let saniye= document.querySelector('.saniye');
let yelkovan= document.querySelector('.yelkovan');
let akrep= document.querySelector('.akrep');



console.log(yelkovan);

setInterval(() => {
    const saat= new Date().getHours();
    const dakika= new Date().getMinutes();
    const sny=    new Date().getSeconds();
    console.log(dakika)

    saniye.style.transform=`rotate(${sny*6}deg)`
    yelkovan.style.transform=`rotate(${(dakika*6)+(sny/10)}deg)`
    akrep.style.transform=`rotate(${(saat*30)+(dakika/2)}deg)`
}, 1000) ;
