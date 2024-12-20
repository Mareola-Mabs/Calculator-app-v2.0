$('document').ready(function(){

        /*For Mobile Tap-Highlight-Color*/
        $('body').css("-webkit-tap-highlight-color", "transparent");

        /*For Shadow Effect of Buttons.Onclicked*/

        /*For Mouse Down*/
        let click_effect = document.querySelectorAll('.clicks');

        click_effect.forEach(element =>{
            element.addEventListener('mousedown', ()=>{
                element.style.boxShadow =" inset -1.3px -1.3px 2px rgba(143, 147, 152, 0.5), inset 7px 7px 8px rgba(1, 2, 17, 0.5)";
            });
        });

        /*For Mouse Up*/
        click_effect.forEach(element1 => {
            element1.addEventListener('mouseup', ()=>{
                element1.style.boxShadow =" -1.3px -1.3px 2px rgba(143, 147, 152, 0.5), 7px 7px 8px rgba(1, 2, 17, 0.5)";
            });
            
        });

        /*For Mouse Out*/
        click_effect.forEach(element2 => {
            element2.addEventListener('mouseout', ()=>{
                element2.style.boxShadow =" -1.3px -1.3px 2px rgba(143, 147, 152, 0.5), 7px 7px 8px rgba(1, 2, 17, 0.5)";
            });
            
        });

        /*For Mobile Shadwow Effect When Clicked*/
        click_effect.forEach(element3 => {
            element3.addEventListener('touchstart', ()=>{
                element3.style.boxShadow =" inset -1.3px -1.3px 2px rgba(143, 147, 152, 0.5), inset 7px 7px 8px rgba(1, 2, 17, 0.5)";
            })
            
        });
        
        
        click_effect.forEach(element4 => {
            element4.addEventListener('touchend', ()=>{
                element4.style.boxShadow =" -1.3px -1.3px 2px rgba(143, 147, 152, 0.5), 7px 7px 8px rgba(1, 2, 17, 0.5)";
            })
            
        });
        
        click_effect.forEach(element5 => {
            element5.addEventListener('touchcancel', ()=>{
                element4.style.boxShadow =" -1.3px -1.3px 2px rgba(143, 147, 152, 0.5), 7px 7px 8px rgba(1, 2, 17, 0.5)";
            })
            
        });



        
        
        


});