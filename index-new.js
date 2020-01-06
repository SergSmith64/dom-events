console.log("DOM-Events___");
let step = 0;
const infoLogger = () => {
    step++;
    // console.log(`step - ${step}`, event.type);
    // тот элемент, на котором была вызвана фунуцмя -- это таргет
    console.log(`step - ${step}`, event.target);
    // __элемент, на котором ОТРАБОТАЛА эта функция - CURRENT-TARGET
    console.log(`step - ${step}`, event.currentTarget);
}

// document.querySelector('li').addEventListener('click', infoLogger);
document.querySelector('li').addEventListener('click', infoLogger);

// document.querySelector('li').addEventListener('dblclick', infoLogger);

// Right Key Click
// document.querySelector('li').addEventListener('contextmenu', infoLogger);  
// document.querySelector('li').addEventListener('mouseover', infoLogger);
// document.querySelector('li').addEventListener('mouseout', infoLogger);
// document.querySelector('li').addEventListener('mousedown', infoLogger);
// document.querySelector('li').addEventListener('mouseup', infoLogger);
// document.querySelector('li').addEventListener('click', infoLogger);
// document.querySelector('li').addEventListener('click', infoLogger);

// document.querySelector('li').addEventListener('click', infoLogger);
// document.querySelector('li').addEventListener('copy', () => {
//     console.log("Ha-Ha!!");
//     document.querySelector('li').removeEventListener('click', infoLogger);
// });



// document.querySelector('li').removeEventListener('click', () => {
//     console.log("action-2");
// })