"use strict";
window.addEventListener('DOMContentLoaded', ()=>{
    const tabs = document.querySelectorAll('.local'),
          tabsParent = document.querySelector('.lang');

    function hideTabContent(){ // убираем табы
        tabs.forEach(element =>{
            element.classList.remove('active');
            
        });
    }
    function showTabContent(i){ // появление таба
        tabs[i].classList.add('active');
    }


    hideTabContent();
    showTabContent(0);

    tabsParent.addEventListener('click', (event)=>{
        const target = event.target;
        if(target && target.classList.contains('local')){
            tabs.forEach((item, i)=>{
                if(target == item){
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
        console.log(target);
    });
});