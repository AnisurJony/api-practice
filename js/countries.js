
const loadCountries = () => {
            fetch('https://restcountries.eu/rest/v2/all')
                        .then(res => res.json())
                        .then(data => displayContries(data))
}

loadCountries();
const displayContries = country => {
            const divCountry = document.getElementById('countries');
            // for (const findContry of country) {
            //             const p = document.createElement('p');
            //             p.innerText = `Country Name: ${findContry.name} 
            //             Capital: ${findContry.capital}`
            //             divCountry.appendChild(p);
            //             // console.log(findContry)
            // }
            country.forEach(desh => {
                        const div = document.createElement('div');
                        // const h3 = document.createElement('h3');
                        // const p = document.createElement('p');
                        // p.innerText = desh.capital;
                        // h3.innerText = desh.name;
                        // div.appendChild(h3);
                        // div.appendChild(p);
                        div.classList.add('country')
                        div.innerHTML = `
                        <h3>${desh.name}</h3>
                        <p>${desh.capital}</p>
                        <button onclick="loadCountryByName('${desh.name}')">Details</button>`
                        divCountry.appendChild(div);
            })
}

const loadCountryByName = name => {
            const url = `https://restcountries.eu/rest/v2/name/${name}`
            fetch(url)
                        .then(res => res.json())
                        .then(data => CountryDetails(data[0]))

}

const CountryDetails = mydata => {
            const countryDiv = document.getElementById('country-details');
            countryDiv.innerHTML = `
            <h5>${mydata.name}</h5>
            <p>Population ${mydata.population}</p>
            <img width="200px" src="${mydata.flag}">`;
            countryDiv.style.textAlign = "center";

            // console.log(mydata)
}