

// fetch is function that is provided by the run time or browser that is use to download data from any site

fetch("http://type.fit/api/quotes").then((response)=>
{
    return response.json();
}).then((value)=>
{
    console.log(value);
})


