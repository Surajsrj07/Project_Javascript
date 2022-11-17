const btnStart = document.querySelector('.start');
const btnStop = document.querySelector('.stop');
const btnReset = document.querySelector('.reset');

let hrs = mins = secs = ms = 0, startTimer;


btnStart.classList.add('start-active');
btnStop.classList.remove('stop-active');

btnStart.addEventListener('click', () => {

    startTimer = setInterval(() => {

        ms++; //ms=ms+1
        if (ms == 100) {
            secs++;
            ms = 0;
        }
        if (secs == 60) {
            mins++;
            secs = 0;
        }
        if (mins == 60) {
            hrs++;
            mins = 0;
        }
        updateDisplay();

    }, 10);


});


btnStop.addEventListener('click', () => {
    btnStart.classList.remove('start-active');
    btnStop.classList.add('stop-active');

    clearInterval(startTimer);

});


btnReset.addEventListener('click', () => {
    hrs = mins = secs = ms = 0;
    clearInterval(startTimer);
    btnStart.classList.remove('start-active');
    btnStop.classList.remove('stop-active');

    updateDisplay();
});



function updateDisplay() {

    //Formatted Display

    phrs = hrs < 10 ? '0' + hrs : hrs;
    pmins = mins < 10 ? '0' + mins : mins;
    psecs = secs < 10 ? '0' + secs : secs;
    pms = ms < 10 ? '0' + ms : ms;

    //Output Display
    document.querySelector('.hrs').innerText = phrs;
    document.querySelector('.mins').innerText = pmins;
    document.querySelector('.secs').innerText = psecs;
    document.querySelector('.ms').innerText = pms;

}