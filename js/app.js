function getCountry(){
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data => showData(data));
}

const showData = (data) =>{
    // parent element
    const parentElement = document.getElementById('parrent');

    // loop
    for(let country of data){

        // set property value
        const {name,capital,region,flag,population} = country;
        const language = country.languages[0].name;
        const currency = country.currencies[0].name;
        const currencySymbol = country.currencies[0].symbol;

        // create element
        let item = document.createElement('div');
        item.innerHTML = `<div class=" bg-gray-800 shadow-md h-96
                        mx-3
                        rounded-3xl
                        flex flex-col
                        justify-around
                        items-center
                        overflow-hidden
                        sm:flex-row sm:h-44 sm:w-3/5
                        md:w-10/12
                      ">
                        <img class="h-1/2 w-full sm:h-full sm:w-1/2 object-cover"
                            src="${flag}"
                            alt="image" />

                        <div class="flex-1 w-full flex flex-col items-baseline justify-around h-1/2 pl-6
                          sm:h-full sm:items-baseline sm:w-1/2">
                            <div class="flex flex-col justify-start items-baseline">
                                <h1 class="text-2xl tracking-wide font-normal mb-0 font-sans">
                                    ${name}
                                </h1>
                                <span class="text-xs text-indigo-300 tracking-wide mt-0">${capital}, ${region}</span>
                            </div>
                            <p class="text-xs text-gray-400 w-4/5 tracking-wide">
                                Language: ${language} Currency: ${currency} (${currencySymbol})
                            </p>
                            <div class="w-full flex justify-between items-center">
                                <h1 class="font-bold text-gray-500 text-xs">People ${population.toLocaleString('en-US')}</h1>
                                
                                <a href="https://en.wikipedia.org/wiki/${name}" target="_blank" class="bg-gray-900 hover:bg-indigo-600 hover:text-white mr-3 px-3 py-1 rounded shadow-md">
                                    more...
                                </a>
                            </div>
                        </div>
                    </div>`;

        //append
        parentElement.appendChild(item);
    }
}

// call the function
getCountry();