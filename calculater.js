let input = document.getElementById('inputbox');
let buttons=document.querySelectorAll('button');
let string="";
let arr=Array.from(buttons);
arr.forEach(button=> {
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string=evel(string);
            input.value=string;
        }
        string += e.target.innerHTML;
        input.value=string;
    })
})