let data=[];

let tablesData=[[],[]];


//заполняю массив
(function populirizeData(){
    for(let i =0;i<168;i++){
        data.push(22);
    }
})();

let SplitedData=[];
//разделяю массив
(function splitedData(){
    //генерирую массив с рядом в 7 элементов 
    let RowIndex=-1;
    for(let i =0; i<data.length;i++){
        
        if(i===0||i%7===0){
            RowIndex++;
            SplitedData.push([]);
            SplitedData[RowIndex].push(data[i]);
            
        }else{
            SplitedData[RowIndex].push(data[i]);
        }

    }
    console.log(SplitedData)
})()

let bodyTable=document.querySelector('#tbody');

for(let TimeRows =0;TimeRows<24;TimeRows++){
    //добавляю ряд в таблицу
    let rowElement = document.createElement('tr')
    bodyTable.appendChild(rowElement)
    for(let timeCellls=0;timeCellls<7;timeCellls++){
        //добавляю строку и аттрибутты по которым я буду выбитать элемент
        let timeCell = document.createElement('td');
        timeCell.setAttribute('data-array-row',TimeRows);
        timeCell.setAttribute('data-array-item',timeCellls);
        timeCell.style.background=createColor(20);
        //события для изменения значения и цвета 
        timeCell.addEventListener('click',chnageColorOnClick);
        timeCell.addEventListener('mouseover',chnageColorOnMouseOver);
        //добавляю модифицированные элементы 
        timeCell.innerText=SplitedData[TimeRows][timeCellls];
        bodyTable.children[TimeRows].appendChild(timeCell);
    }
}
let isMouseClicked=false;
//проверяю зажата ли кнопка мыши

function setMouseClick(boolValue){

       return isMouseClicked=boolValue
       
}

 document.querySelector('html').addEventListener('mouseup',()=>{setMouseClick(false)})
 document.querySelector('html').addEventListener('mousedown',()=>{setMouseClick(true)})


 function createColor(value){
          
    return `hsl(${440-15*value},70%, 50%)`;
    }

function chnageColorOnMouseOver(e){
    //получаю дата-аттрибуты при клике на элемент 
    let firstAttribute=e.target.attributes[0].nodeValue;
    let secondAttribute=e.target.attributes[1].nodeValue;
    //закрашиваю значения если мышь зажата
    if(isMouseClicked===true){
        SplitedData[firstAttribute][secondAttribute]=slider.value;
        e.target.innerText=tablesData[currentArray].tabletemperature
        e.target.style.background=createColor(tablesData[currentArray].tabletemperature)
        
        
    }
}

function chnageColorOnClick(e){
    //получаю дата-аттрибуты при наведении  на элемент 
    let firstAttribute=e.target.attributes[0].nodeValue;
    let secondAttribute=e.target.attributes[1].nodeValue;
    SplitedData[firstAttribute][secondAttribute]=slider.value;
    e.target.style.background=createColor(slider.value)
}




let sliders=document.querySelectorAll('#slider');

for (let index = 0; index < slider.length; index++) {
            let slider=sliders[index];
            let round=slider.children[0];
            let roundWidth=round.getBoundingClientRect().width
            let sliderWidth=slider.getBoundingClientRect().width-roundWidth;
            slider.addEventListener('mousemove',(e)=>{
            e.stopPropagation();   
            let maxValue=slider.getAttribute("data-max")*1
            let minValue=slider.getAttribute("data-min")*1
            let step=slider.getAttribute("data-step")*1
            let range=maxValue-minValue;
            let persantegeOfsliderFill=e.offsetX/sliderWidth 
            console.log('dawd')
            if(isMouseClicked){
                slider.value=Math.floor(minValue+persantegeOfsliderFill*range) 
                tablesData[currentArray]={...tablesData[currentArray],[slider.getAttribute('name')]:slider.value}
                console.log(tablesData);
                round.style.transform="translate("+(e.offsetX-roundWidth/2)+"%,0)" 
                
            }
            
        })
    
}


let SecondBody=document.querySelector('#tbody1');

for(let TimeRows =0;TimeRows<24;TimeRows++){
    //добавляю ряд в таблицу
    let rowElement = document.createElement('tr')
    SecondBody.appendChild(rowElement)
    for(let timeCellls=0;timeCellls<7;timeCellls++){
        //добавляю строку и аттрибутты по которым я буду выбитать элемент
        let timeCell = document.createElement('td');
        timeCell.setAttribute('data-array-row',TimeRows);
        timeCell.setAttribute('data-array-item',timeCellls);
        timeCell.style.background=createColor(20);
        //события для изменения значения и цвета 
        timeCell.addEventListener('click',chnageColorOnClick);
        timeCell.addEventListener('mouseover',chnageColorOnMouseOver);
        //добавляю модифицированные элементы 
        timeCell.innerText=SplitedData[TimeRows][timeCellls];
        SecondBody.children[TimeRows].appendChild(timeCell);
    }
}



let currentArray;

let tables=document.querySelectorAll('section');

for (let tableItem = 0; tableItem < tables.length; tableItem++) {
    tables[tableItem].addEventListener('mouseover',(e)=>{
        e.stopPropagation()
        return currentArray=e.currentTarget.getAttribute('data-table-id')*1
    })
    
}





