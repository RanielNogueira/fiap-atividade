// function testandoClosure() {
//     const externa = 'Valor da funcao externa';
    
//     function funcaoInterna() {
//       const interna = 'Valor da funcao interna'
//       console.log('Imprima o ' + externa + ' e ' + interna);
//     }
    
//     return funcaoInterna(); 
//   }
  
//   testandoClosure()

// function executeDepoisDeSomar(callback) {
//     const x = 10
//     const y = 20
//     const resultado  = x + y
    
//     callback(resultado)
//   }
  
//   executeDepoisDeSomar(function(resultado) {
//     console.log('Executando essa função aposta a soma do resultado: ' + resultado)
//   })

// let calcularHoraExtra = (calback,salario, hora, porcentagem) =>{

//     let result = hora*((salario*porcentagem)/100);

//     calback(result);

// }

// calcularHoraExtra((result)=>{
//     console.log(result)
// },2000,12,20)

function Rh(valor){
    this.variavelCriadaSoComNew = valor


    this.testandoEscopo = function(){
        function funcaoInterna(){
            console.log(this.variavelCriadaSoComNew);
        }

        funcaoInterna();
    }

    this.testandoEscopoComArrow = ()=>{
        const funcaoInterna = ()=>{
            console.log(this.variavelCriadaSoComNew);
        }

        funcaoInterna();
    }

}

new Rh('Raniel 1').testandoEscopo();
new Rh('Raniel 2').testandoEscopoComArrow();