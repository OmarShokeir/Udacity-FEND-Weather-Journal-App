/* Global Variables */
const key = '&appid=a500bd39dac94198e42623a3eb722af3';
const url = 'http://api.openweathermap.org/data/2.5/weather?zip=';


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Event listener for the button
document.getElementById('generate').addEventListener('click',function callBack(){
    const zip = document.getElementById('zip').value;
    getWeather(key, url, zip);
})

// Writing the asunc function
const getWeather = async(key, url, zip)=>{
    const res = await fetch(url + zip + key);
    try {
        const data = await res.json;
        console.log(data);
    }
    catch(error){
        console.log("Error: ",error);
    }
}

