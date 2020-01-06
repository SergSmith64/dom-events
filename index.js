console.log("DOM-Events___");
let step = 0;
const infoLogger = (event) => {
    step++;
    // __убираю функционал по-умолчания -- переход по ссылке (по href)
    if (event.target.tagName === 'A') {
        event.preventDefault();
    }
    // _____________________
    console.log(`step - ${step}`, event.currentTarget);
    document.querySelectorAll('tr').forEach(tr => tr.style.background = '');
    event.target.parentElement.style.background = 'red';
}

document.querySelector('table').addEventListener('click', infoLogger);