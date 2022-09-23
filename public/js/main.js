const cityname = document.getElementById('cityname');
const submitbtn =  document.getElementById('submitbtn');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const data_hide = document.querySelector('.middle_layer');

const getInfo = async(event) => {
    event.preventDefault();

    let cityVal = cityname.value;
    
    if(cityVal ==  ""){
        city_name.innerText = "Please write the name before search";
        data_hide.classList.add('data_hide');
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=92236605e920139e858c86676e633928`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            const tempStatus = arrData[0].weather[0].main;
            console.log(tempStatus);

            // ondition to check weather type
            if(tempStatus == "Sunny"){
                temp_status.innerHTML = 
                "<i class='fas  fa-sun' style='color: #eccc68;'></i>"
            }else if(tempStatus == "Clouds"){
                temp_status.innerHTML = 
                "<i class='fas  fa-cloud' style='color: #a5bbde;'></i>"
            }else if(tempStatus == "Rainy"){
                temp_status.innerHTML = 
                "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>"
            }else{
                temp_status.innerHTML = 
                "<i class='fas  fa-sun' style='color: white;'></i>"
            }
            data_hide.classList.remove('data_hide');
            
        }catch{
            city_name.innerText = "Please enter the city name properly";
            data_hide.classList.add('data_hide');
        }
    }
}

submitbtn.addEventListener('click', getInfo);