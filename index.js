    function getRandomHexColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function changeElementColor() {
        const targetElement = document.getElementById('targetElement');
        targetElement.style.color = getRandomHexColor();
        const targetElement2 = document.getElementById('targetElement2');
        targetElement2.style.color = getRandomHexColor();
    }
