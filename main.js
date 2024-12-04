
const userLocation = "Memphis, Tennessee"
const URL = `https://geocode.maps.co/search?q=${userLocation}&api_key=${API_KEY}`
const satCode = 25544

//to make an API call
// make request
fetch(URL)
//handle raw response
.then(function(rawResponse){
    return rawResponse.json()
})
//use response
.then(function(data){
const longitude = data[0].lon
const latitude = data[0].lat
    // console.log('Long: ' + data[0].lon)
    // console.log('Lat: ' + data[0].lat)
    return fetch(`https://sat.terrestre.ar/passes/${satCode}?lat=${latitude}&lon=${longitude}&limit=1`)
})

.then(rawResponse => rawResponse.json())
// .then(function(rawResponse){
//     return rawResponse.json()
// }
// )
.then( data =>{
    console.log(data)
})

.catch(error => {
    console.error("Error:", error); 
});