const vdTag =document.getElementsByClassName("enjoy-vd-widtgh")[0];
const dowloadTag =document.getElementsByClassName("vdTag2")[0];  
const ThirschildvdTag =document.getElementsByClassName("Thirs-child-vd")[0]; 
const bodyTag =document.getElementsByClassName("body")[0]; 
const UnderInputTag =document.getElementsByClassName("Second-button-Container")[0]; 
const pluaIconTag =document.getElementsByClassName("Under-input")[0];
const buttonTag =document.querySelector(".Button-Singin");
const ButtonGetstartTag =document.querySelector(".Button-Getstart");
const InputTypeTag =document.querySelector(".Input-type");
let iss = false;
InputTypeTag.addEventListener("keyup",(event) => {
 let inputvalue =event.target.value.length ;
 isvalue = inputvalue ;
 if(isvalue > 19 ) { 
   return iss = true ;
 }
})


ButtonGetstartTag.addEventListener("click",() => {
  ButtonGetstartTag.innerHTML = ""
  ButtonGetstartTag.innerHTML += `<i class="fa-solid fa-arrows-rotate change"></i>`
  setTimeout(()=> {
    ButtonGetstartTag.innerHTML = ""
    ButtonGetstartTag.innerHTML += `<i class="fa-solid fa-clock-rotate-left change"></i>`
  },1000)
  setTimeout(()=> {
    ButtonGetstartTag.innerHTML = ""
    ButtonGetstartTag.innerHTML += `<i class="fa-regular fa-clock change"></i>`
  },1500)
  setTimeout(()=> {
    ButtonGetstartTag.innerHTML = ""
    ButtonGetstartTag.innerHTML += `<i class="fa-solid fa-spinner change"></i>`
  },2000)
  setTimeout(()=> {
    ButtonGetstartTag.innerHTML = ""
    ButtonGetstartTag.innerHTML += `<i class="fa-solid fa-xmarks-lines change"></i>`
  },2500)
  setTimeout(()=> {
    ButtonGetstartTag.innerHTML = ""
    ButtonGetstartTag.innerHTML += `GetStarted >`
  },3000)
})
const searchlink = "https://www.netflix.com/sg/login"
buttonTag.addEventListener("click",() => {
  location.href = searchlink
console.log("it workinf")
})
let isgarry = ["g1","g2","g3","g4","g5","g6" ]

for(let i = 0 ; i < isgarry.length ; i++ ) {  
  const XiconTag =document.getElementById(isgarry[i])
  console.log(XiconTag)
  XiconTag.style.display = "none"
}



const isplay = () => {
 let  is77 = vdTag.play()
 let  vv = dowloadTag.play()
 let  child =ThirschildvdTag.play()
  
  
}

setInterval(() => {
  isplay();
},4000);

const nonBlock = (isWaiting,Gcheck) => {
  let tag1 =document.getElementById(isWaiting)
      tag1.style.display = "none"   
     

}
const gfunction = (isg) => {
  const g1=document.getElementById(isg)
   g1.style.display= "block"
}
const gnone =(isg2 ) => {
  const g1=document.getElementById(isg2)
   g1.style.display= "none" ;
  
}
const Blocknon = (isWaiting) => {
  let tag1 =document.getElementById(isWaiting)
      tag1.style.display = "block"
      
     

}
const ispTagblock = (pp) => {
const PTag =document.getElementsByClassName(pp)[0];
PTag.style.display = "block"

}
const ispTagnone = (pp) => {
  const PTag =document.getElementsByClassName(pp)[0];
  PTag.style.display = "none"
  }
let Tindex = 0 ;
pluaIconTag.addEventListener("click",(event)=> {
  const isid =event.target.id ;
 const isTrue = true ;
  switch(isid) {
    case "i1" :   
  
      nonBlock(isid)
      gfunction("g1")
      ispTagblock("p1")
     
  
      break;
    case "i2":

    
        nonBlock(isid)
        gfunction("g2")
        ispTagblock("p2")
      
  
      break;
      case "i3":
        nonBlock(isid)
        gfunction("g3")
        ispTagblock("p3")
      break;
      case "i4":
        nonBlock(isid)
        gfunction("g4")
        ispTagblock("p4")
      break;
      case "i5":
        nonBlock(isid)
        gfunction("g5")
        ispTagblock("p5")
      break;
      case "i6":
        nonBlock(isid)
        gfunction("g6")   
        ispTagblock("p6")   
      break;
    default:   
  }

  
  })
 
pluaIconTag.addEventListener("click",(event)=> {
  const isid =event.target.id ;
 
  switch(isid) {
    case "g1" :  
      gnone("g1")      
      Blocknon("i1")
      ispTagnone("p1")
      break;
    case "g2":
      gnone("g2")  
      Blocknon("i2")
      ispTagnone("p2")
      break;
      case "g3":
        gnone("g3") 
        Blocknon("i3") 
        ispTagnone("p3")
      break;
      case "g4":
        gnone("g4")  
        Blocknon("i4")
        ispTagnone("p4")
      break;
      case "g5":
        gnone("g5")  
        Blocknon("i5")
        ispTagnone("p5")
      break;
      case "g6":
        gnone("g6") 
        Blocknon("i6")    
        ispTagnone("p6")   
      break;
    default:   
  }

  
  })







