async function firstCookie() {
    let name = 'name';
    let value = 'Ivan';
    
    document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    let cookiesArray = document.cookie.split(';');

    setTimeout(() => {
        console.log(cookiesArray);
    }, 1000);    
}

async function secondCookie() {
    let myName = 'name';
    let valueMyName = 'Oleksii';
    let myAge = 'age';
    let valueMyAge = '33';
    
    document.cookie = encodeURIComponent(myName) + '=' + encodeURIComponent(valueMyName);    
    document.cookie = encodeURIComponent(myAge) + '=' + encodeURIComponent(valueMyAge);

    let cookiesArray2 = document.cookie.split(';');       

    setTimeout(() => {
        console.log(cookiesArray2);        
    }, 3000);
}

firstCookie();
secondCookie();