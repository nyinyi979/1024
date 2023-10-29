let box = document.getElementById('box').children;

//plus swap if there is an empty space beside 
function Combing(firstBox , secondBox){
    let lastBox = secondBox;
    if(box[firstBox].textContent === box[secondBox].textContent && box[firstBox].textContent !== '' && box[secondBox].textContent !== '' && firstBox !== lastBox){
        box[secondBox].textContent = Number(box[firstBox].textContent) * 2;
        box[firstBox].textContent = '';
    }
}
function removeClassByPrefix(el, prefix) {
    var regx = new RegExp('\\b' + prefix + '.*?\\b', 'g');
    el.className = el.className.replace(regx, '');
    return el;
}
function checkText(){
    let box = document.getElementById('box').children;
    for(var i = 0; i<16; i++){
        if(box[i].textContent === '0') box[i].textContent = '';
        //changing bg for no text existence
        removeClassByPrefix(box[i] , 'bg-')
        switch(box[i].textContent){
            case '':
                box[i].classList.add('bg-slate-500');
                break;
            case '2':
                box[i].classList.add('bg-slate-100');
                break;
            case '4':
                box[i].classList.add('bg-green-400');
                break;
            case '8':
                box[i].classList.add('bg-blue-500');
                break;
            case '16':
                box[i].classList.add('bg-yellow-500');
                break;
            case '32':
                box[i].classList.add('bg-red-500');
                break;
            case '64':
                box[i].classList.add('bg-orange-700');
                break;
            case '128':
                box[i].classList.add('bg-amber-500');
                break;
            case '256':
                box[i].classList.add('bg-emerald-700');
                break;
            case '512':
                box[i].classList.add('bg-lime-700');
                break;
            case '1024':
                box[i].classList.add('bg-teal-300');
                alert('You won!')
                break;
            case '2048':
                box[i].classList.add('bg-cyan-500');
                break;
            default: 
        }
    }
    setTimeout(()=>{
        for(var i = 0; i<16; i++){ 
            box[i].classList.remove('pop');
        }
    }, 400)
}

function swipeRight(){

    //clearing space 
    for(var i = 0; i<8; i++){

        for(var j = 0; j<=15; j++){
            let amount = 1;
            if( j === 3 || j === 7 || j === 11 || j === 15) continue;
            if(box[j].textContent !== '' && box[j+amount].textContent === '') {
                box[j+amount].textContent = box[j].textContent;
                box[j].textContent = '';  
                j = amount;
            } 
        }
        //plus after all tiles solved
        if(i === 3){
            for(var k = 15; k>0; k--){
                if(box[k].textContent === '0') box[k].textContent = '';
                if( k === 3 || k === 7 || k === 11 || k === 15) continue;
                if(box[k].textContent === box[k+1].textContent && box[k].textContent !== ''){
                    box[k+1].textContent = Number(box[k].textContent) * 2;
                    box[k].textContent = '';
                }
            }
        }
        //do the area cleaning again
        if(i === 4){
            for(var j = 0; j<=15; j++){
                let amount = 1;
                if( j === 3 || j === 7 || j === 11 || j === 15) continue;
                if(box[j].textContent !== '' && box[j+amount].textContent === '') {
                    box[j+amount].textContent = box[j].textContent;
                    box[j].textContent = '';  
                    j = amount;
                } 
            }
        }
    }

}

function swipeLeft(){

    //clearing space 
    for(var i = 0; i<8; i++){

        for(var j = 0; j<=15; j++){
            let amount = 1;
            if( j === 0 || j === 4 || j === 8 || j === 12) continue;
            if(box[j].textContent !== '' && box[j-amount].textContent === '') {
                box[j-amount].textContent = box[j].textContent;
                box[j].textContent = '';  
                j = amount;
            } 
        }
        //plus after all tiles solved
        if(i === 3){
            for(var k = 0; k<=15; k++){
                if(box[k].textContent === '0') box[k].textContent = '';
                if( k === 0 || k === 4 || k === 8 || k === 12) continue;
                if(box[k].textContent === box[k-1].textContent && box[k].textContent !== ''){
                    box[k-1].textContent = Number(box[k].textContent) * 2;
                    box[k].textContent = '';
                }
            }
        }
        //do the area cleaning again
        if(i === 4){
            for(var j = 0; j<=15; j++){
                let amount = 1;
                if( j === 0 || j === 4 || j === 8 || j === 12) continue;
                if(box[j].textContent !== '' && box[j-amount].textContent === '') {
                    box[j-amount].textContent = box[j].textContent;
                    box[j].textContent = '';  
                    j = amount;
                } 
            }
        }
    }

}

function swipeDown(){

    //clearing space 
    for(var i = 0; i<8; i++){

        for(var j = 4; j<=15; j++){
            let amount = 4;
            if(box[j-amount].textContent !== '' && box[j].textContent === '') {
                box[j].textContent = box[j-amount].textContent;
                box[j-amount].textContent = '';  
                j = amount;
            } 
        }
        //plus after all tiles solved
        if(i === 3){
            for(var k = 15; k>=4; k--){
                if(box[k].textContent === '0') box[k].textContent = '';
                if(box[k].textContent === box[k-4].textContent && box[k].textContent !== ''){
                    box[k].textContent = Number(box[k].textContent) * 2;
                    box[k-4].textContent = '';
                }
            }
        }
        //plus after all tile cleared second
        if(i === 4){
            for(var j = 4; j<=15; j++){
                let amount = 4;
                if(box[j-amount].textContent !== '' && box[j].textContent === '') {
                    box[j].textContent = box[j-amount].textContent;
                    box[j-amount].textContent = '';  
                    j = amount;
                } 
            }
        }
    }

}

function swipeTop(){

    //clearing space 
    for(var i = 0; i<8; i++){
        for(var j = 0; j<=11; j++){
            let amount = 4;
            if(box[j+amount].textContent !== '' && box[j].textContent === '') {
                box[j].textContent = box[j+amount].textContent;
                box[j+amount].textContent = '';  
                j = amount;
            } 
        }

        //plus after first time tiles solved
        if(i === 3){
            for(var k = 0; k<=11; k++){
                if(box[k].textContent === '0') box[k].textContent = '';
                if(box[k].textContent === box[k+4].textContent && box[k].textContent !== ''){
                    box[k].textContent = Number(box[k].textContent) * 2;
                    box[k+4].textContent = '';
                }
            }
        }
        
        if(i === 4){
            for(var j = 0; j<=11; j++){
                let amount = 4;
                if(box[j+amount].textContent !== '' && box[j].textContent === '') {
                    box[j].textContent = box[j+amount].textContent;
                    box[j+amount].textContent = '';  
                    j = amount;
                } 
            }
        }
        
    }

}

//creating random element
function popRandom(){
    let number = [];
    for(var i = 0; i<16; i++){
        if(box[i].textContent === '') number.push(i);
    }
    let random = Math.floor(Math.random() * number.length);
    let custom_number = number[random];
    if(number.length === 0) {
        alert("It might be over! Or check other way:)");
        return;
    }
    box[custom_number].textContent = 2;
    box[custom_number].classList.add('bg-slate-100'); 
    box[custom_number].classList.add('pop');
}
//key binding
document.onkeydown = function(e){
    if(e.key === 'd' || e.key === 'D'){
        swipeRight();
        popRandom();
        checkText();
    }
    if(e.key === 'a' || e.key === 'A'){
        swipeLeft();
        popRandom();
        checkText();
    }
    if(e.key === 's' || e.key === 'S'){
        swipeDown();
        popRandom();
        checkText();
    }
    if(e.key === 'w' || e.key === 'W'){
        swipeTop();
        popRandom();
        checkText();
    }
}
//button binding
document.getElementById('W').onclick = function(){
    swipeTop();
    popRandom();
    checkText();
}
document.getElementById('A').onclick = function(){
    swipeLeft();
    popRandom();
    checkText();
}
document.getElementById('S').onclick = function(){
    swipeDown();
    popRandom();
    checkText();
}
document.getElementById('D').onclick = function(){
    swipeRight();
    popRandom();
    checkText();
}
popRandom();