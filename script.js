function init(){
    var element = document.querySelectorAll('input');
    for(let i of element){
        if(i.value !== ''){
           /* switch(i.id){
                case name-input:
                    let reg= /\w/gi;
                    reg.test(i.value);
                    break;
                
            }*/
           /* let reg= /\w/gi;
            console.log(reg.test(i.value));*/
            if(i.id === 'name-input'){
                let reg= /[a-z]/gi;
                if(reg.test(i.value)){
                    var ele = document.querySelector("#"+i.id+'-error');
                    ele.classList.remove('active');
                }else {
                    var ele = document.querySelector("#"+i.id+'-error');
                    ele.classList.add('active');
                }
            }else if(i.id === 'Last-name-input'){
                let reg= /[a-z]/gi;
                if(reg.test(i.value)){
                    var ele = document.querySelector("#"+i.id+'-error');
                    ele.classList.remove('active');
                }else {
                    var ele = document.querySelector("#"+i.id+'-error');
                    ele.classList.add('active');
                }
            }else if(i.id === 'mail-input'){
                let reg = /\w+@\w+\.\w+/gi;
                if(reg.test(i.value)){
                    var ele = document.querySelector("#"+i.id+'-error');
                    ele.classList.remove('active');
                }else {
                    var ele = document.querySelector("#"+i.id+'-error');
                    ele.classList.add('active');
                }
            }
        }else {
          //  console.log(i.id);
            var ele = document.querySelector("#"+i.id+'-error');
            ele.classList.add('active');
        }
    }
}