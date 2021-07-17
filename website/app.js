/* Global Variables */
const key = ',us&appid=a500bd39dac94198e42623a3eb722af3&units=metric';
const url = 'http://api.openweathermap.org/data/2.5/weather?zip=';


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Event listener for the button
document.getElementById('generate').addEventListener('click',function callBack(){
    const zip = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    getWeather(key, url, zip)
    .then(function(data){
        console.log(data);
        postData('/add',{temperature: data.main.temp, date: newDate, response: feelings});
        updateUI();
    });
})

// Writing the asunc function
const getWeather = async(key, url, zip)=>{
    const res = await fetch(url + zip + key);
    try {
        const data = await res.json();
        console.log(data);
        return data;
    }
    catch(error){
        console.log("Error: ",error);
    }
    
}

const postData = async(url = ' ',data = {})=>{
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),    
      });
  
        try {
          const newData = await response.json();
          console.log(newData);
          return newData
        }catch(error) {
        console.log("Error: ", error);
        }
}

// Updating the UI
const updateUI = async () =>{
    const request = await fetch('/all');
    try {
        const allData = await request.json();
        document.getElementById('date').innerHTML = allData.date;
        document.getElementById('temp').innerHTML = allData.temperature;
        document.getElementById('content').innerHTML = allData.response;
        console.log(allData.date);
        console.log(allData.temperature);
        console.log(allData.response);
    }
    catch(error) {
        console.log("Error: ",error);
    }
}
