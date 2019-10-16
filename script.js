function init(){
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