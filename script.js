let frame = document.querySelector('.frame')

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
     makeTheSonsReady(number);

};


function makeTheSonsReady(number){
    for(let i=1;i<=number;i++){
      let father = frame.querySelector(`.father${i}`);
      for(let j=1;j<=number;j++){
        let son = father.querySelector(`.son${j}`)
        son.addEventListener("mouseover",() =>{son.style.backgroundColor="Black"})
      
      
    }
};}
workFrameGenerator(16);