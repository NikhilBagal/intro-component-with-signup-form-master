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
