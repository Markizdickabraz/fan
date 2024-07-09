document.addEventListener('DOMContentLoaded', (event) => {
    const fan = document.getElementById('fan');
    const btnOn = document.getElementById('btn-on');
    const btnOff = document.getElementById('btn-off');
    const btn1 = document.getElementById('btn-1');
    const btn2 = document.getElementById('btn-2');
    const btn3 = document.getElementById('btn-3');

    let speed = 1;
    let fanOn = false;

    function updateFanSpeed() {
        if (fanOn) {
            fan.style.animation = `spin ${1.5 / speed}s linear infinite`;
        } else {
            fan.style.animation = 'none';
        }
    }

    btnOn.addEventListener('click', () => {
        fanOn = true;
        speed = 1; 
        updateFanSpeed();
    });

    btnOff.addEventListener('click', () => {
        fanOn = false;
        updateFanSpeed();
    });

    btn1.addEventListener('click', () => {
        speed = 1;
        updateFanSpeed();
    });

    btn2.addEventListener('click', () => {
        speed = 2;
        updateFanSpeed();
    });

    btn3.addEventListener('click', () => {
        speed = 3;
        updateFanSpeed();
    });
});
