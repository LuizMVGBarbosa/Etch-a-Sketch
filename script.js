let frame = document.querySelector('.frame')

function workFrameGenerator(number){
    for(let i=1;i<=number;i++){
        let unit = document.createElement(`div${i}`);
        unit.classList.add('unit');
        frame.appendChild(unit);
        for(let i=1;i<=number;i++){
            let sonsUnit=document.createElement('div')
            sonsUnit.classList.add('sonsUnit')
            unit.appendChild(sonsUnit)
        }

       
    }

};
workFrameGenerator(32);