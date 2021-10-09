const form = document.forms['search'];
form.addEventListener ('submit', search, false);

document.forms.hero.heroName.focus();
const form = document.forms['hero'];
form.addEventListener('submit', makeHero, false);
function search(event) {
    alert('You Searched for: ${input.value}');
    event.preventDefault();
}
input.value = 'Search Here';
input.addEventListener('focus', function(){
    if (input.value==='Search Here') {
        input.value = '' 
    }
}, false);

input.addEventListener('blur', function(){
    if(input.value === '') {
        input.value = 'Search Here';
    } }, false);

    function makeHero(event) {

        event.preventDefault(); // prevent the form from being submitted
    
        const hero = {}; // create an empty object
    
        hero.name = form.heroName.value; // create a name property based on the input field's value
    
        alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
        return hero;
    }

    hero.powers = [];
    for (let i=0; i < form.powers.length; i++) {
        if (form.powers[i].checked) {
            hero.powers.push(form.powers[i].value);
        }
    }