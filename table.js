let data=[];
//заполняю массив
(function pololirizeData(){
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
            console.log('increased');
            SplitedData[RowIndex].push(data[i]);
            
        }else{
            SplitedData[RowIndex].push(data[i]);
        }

    }
    console.log(SplitedData)
})()

let bodyTable=document.querySelector('#tbody')
for(let TimeRows =0;TimeRows<24;TimeRows++){
    //добавляю ряд в таблицу
    let rowElement = document.createElement('tr')
    bodyTable.appendChild(rowElement)
    for(let timeCellls=0;timeCellls<7;timeCellls++){
        //добавляю строку и аттрибутты по которым я буду выбитать элемент
        let timeCell = document.createElement('td');
        timeCell.setAttribute('data-array-row',TimeRows);
        timeCell.setAttribute('data-array-item',timeCellls);
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
        console.log(isMouseClicked)
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
        e.target.innerText=slider.value
        e.target.style.background=createColor(slider.value)
        
    }
}

function chnageColorOnClick(e){
    //получаю дата-аттрибуты при наведении  на элемент 
    let firstAttribute=e.target.attributes[0].nodeValue;
    let secondAttribute=e.target.attributes[1].nodeValue;
    SplitedData[firstAttribute][secondAttribute]=slider.value;
    e.target.style.background=createColor(slider.value)
}


let slider=document.querySelector('#slider');
let round=document.querySelector('#round');
let sliderWidth=slider.getBoundingClientRect().width;
let roundWidth=round.getBoundingClientRect().width


slider.addEventListener('mousemove',(e)=>{
    e.stopPropagation();   
    let maxValue=slider.getAttribute("data-max")*1
    let minValue=slider.getAttribute("data-min")*1
    let step=slider.getAttribute("data-step")*1
    let range=maxValue-minValue;
    let persantegeOfsliderFill=e.offsetX/sliderWidth
    
    if(isMouseClicked){
        slider.value=Math.floor(minValue+persantegeOfsliderFill*range) 
        round.style.transform="translate("+(e.offsetX-roundWidth/2)+"px,0)" 
        
    }
    
})

