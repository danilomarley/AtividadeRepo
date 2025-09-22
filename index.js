    function getRandomHexColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function changeElementColor() {

        var elms = document.querySelectorAll("[id='targetElement']");
 
        for(var i = 0; i < elms.length; i++) 
            elms[i].style.color=getRandomHexColor();;
       
    }
    document.addEventListener('DOMContentLoaded', function() {
        changeElementColor();
        });
    
