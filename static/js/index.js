const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');


setInterval(() => {
    let day = new Date()
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`
    mn.style.transform = `rotateZ(${mm}deg)`
    sc.style.transform = `rotateZ(${ss}deg)`
})


const checkbox = document.getElementById('checkbox')

checkbox.addEventListener('change', ()=> {
    // const mnBefore = document.getElementById('mn')
    // mnBefore.classList.toggle('dark')
    // const scBefore = document.getElementById('sc')
    // scBefore.classList.toggle('dark')
    document.body.classList.toggle('dark')
    toggleColors()
})

let initialTheme = true;

function toggleColors() {
    const root = document.documentElement;
    if(initialTheme) {
        root.style.setProperty('--colorArrow', '#fff');
        root.style.setProperty('--colorCheckbox', '#3f3f3f');
        initialTheme = false;
    } else {
        root.style.setProperty('--colorArrow', '#3f3f3f');
        // root.style.setProperty('--text-color', 'green');
        root.style.setProperty('--colorCheckbox', '#fff');
        initialTheme = true;
    }
}