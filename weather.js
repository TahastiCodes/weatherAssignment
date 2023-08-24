fetch("http://api.weatherapi.com/v1/current.json?key=64859a268127415386c140904232308&q=Brooklyn&aqi=no")
.then(function (result) {            //fetching and returning search
    console.log(result)             //? 3 stages pending, fulfilled, rejected
    return result.json();           //? When fulfilled you can access data
})
.then(function (json) {              // console.log json & call dispRes function
    console.log(json);
        displayResults(json);
})

function displayResults(json) {
    const results = document.querySelector('.results');
    let header = document.createElement('h3');
    results.appendChild(header);
    header.textContent = json.location.name;
    let header2 = document.createElement('h3');
    results.appendChild(header2);
    header2.textContent = json.current.temp_f;
    let header3 = document.createElement('humidity');
    results.appendChild(header3);
    header3.textContent = json.current.humidity;
}


//64859a268127415386c140904232308