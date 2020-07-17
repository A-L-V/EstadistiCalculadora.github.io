

function agrupados(){
     let noAgrupados = document.getElementById("noAgrupados");
     let agrupados = document.getElementById("agrupados");
     agrupados.removeAttribute("onclick");
     noAgrupados.setAttribute("onclick","noAgrupados()");
     document.getElementById("divAgrupados").style.display="block";
     document.getElementById("divNoAgrupados").style.display="none";
     if(noAgrupados.hasAttribute("onclick")){
          mainB();
     };
}
var creados = 0;
var variables = [];

function mainB(){     
     var table = document.getElementById("table");
     var intervalos = document.getElementsByClassName("interval");

// variables para la matriz
     var fila = document.getElementsByClassName("fila");
     var td = document.getElementsByClassName("td");


     
     var media = document.getElementsByClassName("media");
     var mediana = document.getElementsByClassName("mediana");
     var moda = document.getElementsByClassName("moda");
     var cantTh = document.getElementsByClassName("th").length;

     intervalos[0].addEventListener("click",function(){
          //crearFila();
          crearArray(cantTh);
          //crearTd(fila,td,td.length,cantiTh);
          //creados++;
     });
     intervalos[1].addEventListener("click",function(){
          if(creados > 0){
               var borrar = table.lastChild;
               table.removeChild(borrar);
               creados--;
          }
     });

     media[0].addEventListener("click",function(){
          hallarMedia()
     });

     mediana[0].addEventListener("click",function(){
          hallarMediana();
     })

     moda[0].addEventListener("click",function(){
          hallarModa();
     })
     
}


function crearArray(cantTh){
     var fila = document.createElement("tr");
     variables.push([fila])
     table.appendChild(fila)
     var cantFilas = variables.length -1;
     for(let i = 0; i < cantTh; i++){
          var td = document.createElement("td");
          variables[cantFilas][0].appendChild(td);
          variables[cantFilas].push([td]);
     }
     console.log(variables[cantFilas])
     for(let i = 0; i<2;i++){
          var number = document.createElement("input");
          number.setAttribute("type","number");
          variables[cantFilas][1].appendChild(number)
     }
     var number = document.createElement("input");
     number.setAttribute("type","number");
     variables[cantFilas][2].appendChild(number)
     console.log(variables)
}
function hallarModa(){
     var posicion = (n.innerHTML)/2;
     var a = 0
     while(posicion > columna2[a].innerHTML){
          a++;
     }
     var filaN = fila[a];
     var limiteInferior = parseFloat(columna0[a*2].value);
     var amplitud = parseFloat(columna0[(a*2)+1].value) - limiteInferior ;
     var fiAnterior;
     var fiSuperior;

     if(a>0)  fiAnterior = columna1[a-1].value;
     else fiAnterior = 0;

     if(a +1 == columna1.length)     fiSuperior = 0;
     else fiSuperior = columna1[a+1].value;

     var d1 = columna1[a].value - fiAnterior;
     var d2 = columna1[a].value - fiSuperior;
     var moda = limiteInferior + (amplitud*(d1/(d1 + d2)));
     escribirModa[1].innerHTML = (Math.floor(moda*100))/100;

}


function hallarMediana(){
     var posicion = (n.innerHTML)/2;
     var a = 0;
     while(posicion > columna2[a].innerHTML){
          a++;
     }
     var filaN = fila[a];
     var limiteInferior = parseFloat(columna0[a*2].value);
     var amplitud = parseFloat(columna0[(a*2)+1].value) - limiteInferior;  
     var FiAnterior;
     if(a > 0){
          FiAnterior = parseFloat(columna2[a-1].innerHTML);
     }
     else FiAnterior = 0
     var mediana = limiteInferior + ((amplitud*(posicion - FiAnterior))/parseFloat(columna1[a].value));
     escribirMediana[1].innerHTML = (Math.floor(mediana*100))/100;
}

function hallarMedia(){
     var media = 0;
     for(let i = 0; i < columna4.length;i++){
          media = parseFloat(media)+ parseFloat(columna4[i].innerHTML);
     }
     mostrar.innerHTML =+ (Math.floor(media/(n.innerHTML)*100))/100;
     
}


function crearFila(){
     var tr = document.createElement("tr");
     tr.setAttribute("class","fila");
     table.appendChild(tr);
}

function crearTd(fila,td,cantTd,cantiTh){
     
     for(let i = 0; i<2;i++){
          var text = document.createElement("input");
          text.setAttribute("type","number");
          text.setAttribute("class","columna0");
          td[cantTd].appendChild(text);
     }
     cantTd++;
     var number = document.createElement("input");
     number.setAttribute("type","number");
     number.setAttribute("class","columna1");
     td[cantTd].appendChild(number);  
}
/* */ 
