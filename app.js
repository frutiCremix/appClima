//http://api.openweathermap.org/data/2.5/weather?appid=${78b363136e11e3ef40c3455405e1a6d8}

const input=document.getElementById("input");
const btn=document.getElementById("btn");
const lienzo=document.getElementById("lienzo");
let fecha = new Date();
console.log(fecha.toDateString());
let data;
let kelvinCelsius=-273.15;

btn.addEventListener('click',(e)=>{
    let query=input.value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=78b363136e11e3ef40c3455405e1a6d8&lang=es`)
    .then(r=>r.json())
    .then(r=>{
        data=r;
    });
   
       dibujar();
});


function dibujar(){
    
    setTimeout(function(){
        console.log(data);
        lienzo.innerHTML=`
        <div class="contenedor"id="lienzo">
        <ul>
        <li>
            <div class="header">
                <p>Ciudad : ${data.name}</p>
                <p>Fecha : ${fecha.toDateString()}</p>
            </div>
            <div class="temp-actual">${Math.floor(data.main.temp+kelvinCelsius)}</div>
        </li>
        <li>
            <div class="descripcion"><p>Descripcion :   ${data.weather[0].description}</p>
            </div>
        </li>
        <li>
            <div class="contenedor-temp">
                <p class="temp">MAX :    ${Math.floor(data.main.temp_max+kelvinCelsius)}</p>
                <p class="temp">MIN :    ${Math.floor(data.main.temp_min+kelvinCelsius)}</p>
            </div>
        </li>
        <li>
            <div>
            <p class="humedad">Humedad :    ${data.main.humidity}%</p>
            </div>
        </li>
        </ul>
        </div>`
        },1000);
}

