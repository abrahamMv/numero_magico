
var max = 1000; 
var min = 1; 
var int= 9;
let local=[];
let html = document.getElementById('clock')
var btn=document.getElementById('bt');
var numerom = Math.random()*(max-min) + min; 
 numerom = parseInt(numerom); 
 

numero=()=>{
var intento=document.getElementById('intento').value,
name=document.getElementById('name').value;

  if(int>0){
  
if(intento ==numerom ){ 
  document.getElementById('pista').value=name+" "+ "HAS GANADO";
  btn.disabled=true;

}else if(intento < numerom){
    document.getElementById('pista').value=name+" "+ "EL NUMERO ES MENOR QUE EL NUMERO MAGICO.";

}else if(intento > numerom){
    document.getElementById('pista').value=name+" "+ "EL NUMERO ES MAYOR QUE EL NUMERO MAGICO.";

}
int--;
document.getElementById('intentos').value=int+1;

  }else{
    btn.disabled=true;
    document.getElementById('pista').value="HAS SUPERADO EL NUMERO DE INTESTOS PERMITIDOS"
  }
  local.push(intento);
  localStorage.setItem("intento",local);

}

reiniciar=()=>{
  int=9;
  numerom =parseInt(Math.random()*(max-min) + min );
  document.getElementById('intento').value=" ";
  document.getElementById('name').value=" ";
  btn.disabled=false;
  console.log(numerom)
  document.getElementById('pista').value=" ";
}

setInterval(function(){
  date = new Date();
  hours= date.getHours();
  minutes= date.getMinutes();
  seconds= date.getSeconds();

  html.innerHTML= hours+": "+minutes+": "+seconds;
},1000)




