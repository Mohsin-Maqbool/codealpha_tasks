
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '42a88d0ea4mshaacdfbdbabc9e3fp1e5f51jsnf16756d24792',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };



// const getWeather = (city) =>{

// 	cityName.innerHTML = city

//   fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?City=' + city, options)
// 	.then(response => response.json())
// 	.then(response => {


// 		console.log(response)

// 		cloud_pct.innerHTML = response.cloud_pct
// 		temp.innerHTML = response.temp
// 		temp2.innerHTML = response.temp
// 		feels_like.innerHTML = response.feels_like
// 		humidity.innerHTML = response.humidity
// 		humidity2.innerHTML = response.humidity
// 		min_temp.innerHTML = response.min_temp
// 		max_temp.innerHTML = response.max_temp
// 		wind_speed.innerHTML = response.wind_speed
// 		wind_speed2.innerHTML = response.wind_speed
// 		wind_degrees.innerHTML = response.wind_degrees
// 		sunrise.innerHTML = response.sunrise
// 		sunset.innerHTML = response.sunset

// 	})
// 	.catch(err => console.error(err));

// }

// submit.addEventListener("click", (e)=>{
// e.preventDefault()
// getWeather(city.value)

// })

// getWeather("Delhi")









const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Multan';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '42a88d0ea4mshaacdfbdbabc9e3fp1e5f51jsnf16756d24792',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) =>{

		cityName.innerHTML = city
	
	  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?City=' + city, options)
		.then(response => response.json())
		.then(response => {
	
	
			console.log(response)
	
			cloud_pct.innerHTML = response.cloud_pct
			temp.innerHTML = response.temp
			temp2.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			humidity2.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_speed2.innerHTML = response.wind_speed
			wind_degrees.innerHTML = response.wind_degrees
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset
	
		})
		.catch(err => console.error(err));
	
	}
	
	submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
	
	})
	
	getWeather("Multan")
	
	





















// // 	// try {
// // 	// 	const response = await fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?City=Multan", {
// // 	// 	  method: 'GET',
// // 	// 	  headers: {
// // 	// 		'X-RapidAPI-Key': '42a88d0ea4mshaacdfbdbabc9e3fp1e5f51jsnf16756d24792',
// // 	// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// // 	// 	  }
// // 	// 	});
	  
// // 	// 	if (response.ok) {
// // 	// 	  const result = await response.json();
// // 	// 	  console.log(result);
// // 	// 	}
// // 	//   } catch (err) {
// // 	// 	console.error(err);
// // 	//   }










 
// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '42a88d0ea4mshaacdfbdbabc9e3fp1e5f51jsnf16756d24792',
//         'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
//     },
// };

// fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?City=Multan', options)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`Failed to fetch data. Status: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then(response => {
//         console.log(response);

//         // Correct the typo in feels_like
//         feels_like.innerHTML = response.feels_like;
//         cloud_pct.innerHTML = response.cloud_pct;
//         temp.innerHTML = response.temp;
//         humidity.innerHTML = response.humidity;
//         min_temp.innerHTML = response.min_temp;
//         max_temp.innerHTML = response.max_temp;
//         wind_speed.innerHTML = response.wind_speed;
//         wind_degrees.innerHTML = response.wind_degrees;
//         sunrise.innerHTML = response.sunrise;
//         sunset.innerHTML = response.sunset;
//     })
//     .catch(err => {
//         console.error(err);

//         // Display an error message on your UI if needed
//         // For example: document.getElementById('error-message').innerText = 'Failed to fetch data.';
//     });
