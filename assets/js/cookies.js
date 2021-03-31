function cookies (functions) {
const container = document.querySelector('.cookies-container');
const save = document.querySelector('.bnt-5');
if(!container || !save) return null;

const localPref = JSON.parse(window.localStorage.getItem('cookie-pref'));
if(localPref) activeFunction(localPref);

function getFormPref() {
    return [... document.querySelectorAll('[data-function]')].filter (
       (el) => el.checked,
    ).map(el => el.getAttribute('data-function')
    );
    
}
function activeFunction(pref) {
    pref.forEach((f) => functions[f]());
    container.style.display = 'none'
    window.localStorage.setItem('cookie-pref', JSON.stringify(pref));
    
}
    function handleSave() {
        const pref = getFormPref ();
        activeFunction(pref);
    }
    save.addEventListener('click', handleSave);
}
function marketing() {
    console.log('funcção de marketing');
}
function analytics() {
    console.log('funcção de analytics');
}
cookies({
    marketing,
    analytics,
});