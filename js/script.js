const input = document.getElementById('visor')


function Calcular(input) {

	this.iniciar = function(){
		this.addNumber()
		this.addOperator()
		this.clear()
		this.delete()
		this.realizarConta()
		this.simboloDecimal()
	}

	this.addNumber = function(){
		document.addEventListener('click', function(e){
			elemento = e.target
			if(elemento.classList.contains('num') && input.value.length < 12){
				input.value += elemento.value
			} 
		})
	}

	this.addOperator = function(){
		document.addEventListener('click', function(e){
			elemento = e.target
			if(elemento.classList.contains('operador') && input.value != '' && input.value.length < 12){
				if(input.value.slice(-1) != '+' &&
				   input.value.slice(-1) != '-' &&
				   input.value.slice(-1) != '*' &&
				   input.value.slice(-1) != '/'){
					input.value += elemento.value
				}

			}
		})
	}

	this.clear = function(){
		document.addEventListener('click', function(e){
			elemento = e.target
			if(elemento.classList.contains('clear')){
				input.value = ''
			}
		})
	}

	this.delete = function(){
		document.addEventListener('click', function(e){
			elemento = e.target
			if(elemento.classList.contains('delete')){
				input.value = input.value.slice(0,-1)				
			}
		})
	}

	this.realizarConta = function(){
		document.addEventListener('click', function(e){
			elemento = e.target
			if(elemento.classList.contains('realizarConta')){
				let conta = input.value
				let x = '(' + conta + ')' + '%1'
				x = eval(x)

				try{
					if(x === 0){conta = eval(conta)}
					if(x != 0){conta = eval(conta).toFixed(2)}
					input.value = conta
				} catch(e){
					alert('Conta inválida')
					input.value = ''
				}

			}
		})
	}

	this.simboloDecimal = function(){
		document.addEventListener('click', function(e){
			elemento = e.target
			if(elemento.classList.contains('decimal') && input.value.length < 12){
				if(input.value != '' &&
				   input.value.slice(-1) != '+' &&
				   input.value.slice(-1) != '-' &&
				   input.value.slice(-1) != '*' &&
				   input.value.slice(-1) != '/' &&
				   input.value.slice(-1) != '.'){
					input.value += elemento.value
				   }
			}
		})
	}

}

const calculadora = new Calcular(input)
calculadora.iniciar()

