			
			var titulo = (document.querySelector(".title"));
			titulo.textContent = "Nutricionista Aparecida";

            var paciente = document.querySelector("#primeiro_paciente");

            var tdPeso = paciente.querySelector(".info-peso");
            var peso = tdPeso.textContent;

            var tdAltura = paciente.querySelector(".info-altura");
            var altura = tdAltura.textContent;

            var tdImc = paciente.querySelector(".info-imc");
            var imc = peso / (altura*altura);

            tdImc.textContent = imc;

            console.log (imc);


            if (peso <=0) {
                console.log("Peso Inválido");
            }