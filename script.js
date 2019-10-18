/*function init(){
    var i = event.target;
    if(i.value !== ''){
        var element = document.querySelector("#"+i.id+'-error');
        element.classList.remove('active');
        switch(i.id){
            case 'name-input':
                var reg= /^[a-z]+$/gi;
                if(reg.test(i.value)){
                    var ele = document.querySelector("#"+i.id+'-format-error');
                    ele.classList.remove('active');
                }else {
                    var ele = document.querySelector("#"+i.id+'-format-error');
                    ele.classList.add('active');
                }
                break;
            case 'Last-name-input':
                var reg= /^[a-z]+$/gi;
                if(reg.test(i.value)){
                    var ele = document.querySelector("#"+i.id+'-format-error');
                    ele.classList.remove('active');
                }else {
                    var ele = document.querySelector("#"+i.id+'-format-error');
                    ele.classList.add('active');
                }
                break;
            case 'mail-input':
                var reg = /\w+@\w+\.\w+/gi;
                if(reg.test(i.value)){
                    var ele = document.querySelector("#"+i.id+'-format-error');
                    ele.classList.remove('active');
                }else {
                    var ele = document.querySelector("#"+i.id+'-format-error');
                    ele.classList.add('active');
                }
                break;
        }
    }else {
        var ele = document.querySelector("#"+i.id+'-error');
        ele.classList.add('active');
        var element = document.querySelector("#"+i.id+'-format-error');
        element.classList.remove('active');
      }
}
*/
let obj = {
    'name-input' : /^[a-z]+$/gi,
    'Last-name-input' : /^[a-z]+$/gi,
    'mail-input': /\w+@\w+\.\w+/gi,
}
function init(){
    var element = event.target;
    if(element.value !== ''){
        var errorSelector = document.querySelector("#"+element.id+'-error');
        errorSelector.classList.remove('active');
        if(obj[element.id].test(element.value) == true){
            var formatErrorSelector = document.querySelector('#'+element.id+'-format-error');
            formatErrorSelector.classList.remove('active');
        }else if(obj[element.id].test(element.value) == false) {
            var formatErrorSelector = document.querySelector('#'+element.id+'-format-error');
            formatErrorSelector.classList.add('active');
        }
    }else {
        var errorSelector = document.querySelector("#"+element.id+'-error');
        errorSelector.classList.add('active');
        var formatErrorSelector = document.querySelector('#'+element.id+'-format-error');
        formatErrorSelector.classList.remove('active');
    }
}
