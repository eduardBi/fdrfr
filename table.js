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
    let rowElement = document.createElement('tr')
    bodyTable.appendChild(rowElement)
    for(let timeCellls=0;timeCellls<7;timeCellls++){
        let timeCell = document.createElement('td');
        timeCell.setAttribute('data-array-row',TimeRows);
        timeCell.setAttribute('data-array-item',timeCellls);
        timeCell.addEventListener('click',chnageColorOnClick);
        timeCell.addEventListener('mouseover',chnageColorOnMouseOver);

        timeCell.innerText=SplitedData[TimeRows][timeCellls];
        bodyTable.children[TimeRows].appendChild(timeCell);
    }
}

function chnageColorOnMouseOver(e){
    let firstAttribute=e.target.attributes[0].nodeValue;
    let secondAttribute=e.target.attributes[1].nodeValue;
    SplitedData[firstAttribute][secondAttribute]=5;
    e.target.innerText=5
}

function chnageColorOnClick(e){
    let firstAttribute=e.target.attributes[0].nodeValue;
    let secondAttribute=e.target.attributes[1].nodeValue;
    SplitedData[firstAttribute][secondAttribute]=5;
    e.target.innerText=5
}


