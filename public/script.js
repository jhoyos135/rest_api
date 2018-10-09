
let submit = document.querySelector('.submit');

submit.onclick = function(e) {
    e.preventDefault();

    if(submit.done) {return;}

    let lng = document.querySelector("input.lng");
    let lat = document.querySelector("input.lat");
    let url = `/api/customers?lng=${lng.value}&lat=${lat.value}`;

    fetch(url).then( (data) => {

       
        return data.json();

    }).then(function(myCustomers) {
        let obj = myCustomers;

    for(let i = 0; i < obj.length; i++) {


        let customers_found = `
        
    <li>
        <span>Name: ${obj[i].name}</span>
        <span>Age: ${obj[i].age}</span>
    </li>

        `;
        document.querySelector("#customers").innerHTML += customers_found;

        
}   
    
    });

    submit.done = true;
    
};





