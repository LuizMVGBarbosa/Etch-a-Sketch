let frame = document.querySelector('.frame')
let Nsquare = document.getElementsByTagName("input")
let question =document.querySelector('.question')
let lastfunction= null;
let lastargs =[];

function clean(){
  while(frame.firstChild){
    frame.removeChild(frame.firstChild);
};
}

Nsquare[0].addEventListener("mouseup", function buildNew() {
   clean();
   workFrameGenerator(Nsquare[0].value);

});

function workFrameGenerator(number){
       for(let i=1;i<=number;i++){
        let unit = document.createElement('div');
        const Nfather= document.createAttribute("class")
        Nfather.value = `father${i}`;
        frame.appendChild(unit);
        unit.setAttributeNode(Nfather);
        unit.classList.add('unit');
       
        for(let j=1;j<=number;j++){
            let sonsUnit=document.createElement('div');
            unit.appendChild(sonsUnit);
            const Nson= document.createAttribute("class");
            Nson.value=`son${j}`;
            sonsUnit.setAttributeNode(Nson);
            sonsUnit.classList.add('sonsUnit');
        }   
    }
    if (lastfunction!= null){
      lastfunction(Nsquare[0].value,lastargs);}
};

let colorchoice = document.querySelector('.colorChoice');
    colorchoice.addEventListener("input", () =>{makeTheSonsReady(Nsquare[0].value,colorchoice.value)});

let Eraser = document.querySelector('.Eraser')
  Eraser.addEventListener("click",() =>{makeTheSonsReady(Nsquare[0].value,"White")});

function makeTheSonsReady(number,modechoice){
    const colorchose = modechoice
    for(let i=1;i<=number;i++){
      let father = frame.querySelector(`.father${i}`);
      for(let j=1;j<=number;j++){
        let son = father.querySelector(`.son${j}`)
        son.addEventListener("mouseover",() =>{son.style.backgroundColor=colorchose;})
      }
}
    lastfunction=makeTheSonsReady;
    lastargs =[colorchose]
}
let rainbow = document.querySelector('.rainbow')
rainbow.addEventListener("click",()=>{makeTheSonsRainbow(Nsquare[0].value,)})
function makeTheSonsRainbow(number){
 
    for(let i=1;i<=number;i++){
      let father = frame.querySelector(`.father${i}`);
      for(let j=1;j<=number;j++){
        let son = father.querySelector(`.son${j}`)
        son.addEventListener("mouseover",() =>{son.style.backgroundColor= `hsl(${Math.random() * 360}, 100%, 50%)`;})
      };
    };
    lastfunction=makeTheSonsRainbow;
}

workFrameGenerator(16);
makeTheSonsReady(Nsquare[0].value,"Black");
