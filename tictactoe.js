let boxes = document.querySelectorAll('.box'); // ye bhi ek array hai bs array of boxes hai
let resetbtn = document.querySelector('.reset');
let extras = document.querySelector('.extras');
let winnername = document.querySelector('.winname');
let newgame = document.querySelector('.newgame');


let turnO = true; //player O fisr change phir player X

const winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

// hr ek box pr event listener ko add krenge 
// and kyuki hme hr box pr itterate krna hai apne aap 
// uske liye hm for each loop ka use krenge
let count = 0;
boxes.forEach((box) => {
    box.addEventListener('click', ()=>{
        console.log('Box Clicked');
        
        if (turnO){
            box.innerText = 'O';
            box.style.color = 'red';

            turnO = false;
        } else{
            box.innerText= 'X';
            box.style.color = 'black';

            turnO = true;
        }
        
        box.disabled = true;
        count++;
        console.log(count);
    
        let iswinner = checkwin();
        
        if (count == 9 && !iswinner){
            console.log('DRAW');
            draw();
        }
    })
})
const draw = () =>{
    winnername.innerText = `DRAW`;
    extras.classList.remove('hide');
    disablebox();
};



const showinner = (winner) =>{
    winnername.innerText = `Congratulations, Winner is ${winner}`;
    extras.classList.remove('hide');
    disablebox();
};
const checkwin = () => {
    for (pattern of winpattern){
        let pos0val = boxes[pattern[0]].innerText;
        let pos1val = boxes[pattern[1]].innerText;
        let pos2val = boxes[pattern[2]].innerText;
        
        if (pos0val != '' && pos1val != '' && pos2val != ''){
            if (pos0val === pos1val && pos1val === pos2val){
                console.log('Winner', pos0val);
                showinner(pos0val);
            } 
        }
    }
};

const disablebox = () =>{
    for (let box of boxes){
        box.disabled = true;
    }
};

const enablebox = () =>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText = '';
    }
};

const reset = () =>{
    turnO = true;
    enablebox();
    extras.classList.add('hide');
    count = 0;
};

newgame.addEventListener('click', reset);
resetbtn.addEventListener('click', reset);