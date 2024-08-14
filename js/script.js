const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    value.classList.add('normal');

    value.className = '';

    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5) {
        description = "Cuidado! Você está abaixo do peso!";
        value.classList.remove('normal');
        value.classList.add('below');
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        description = "Você está no peso ideal!";
        value.classList.remove('normal');
        value.classList.add('ideal');
    } else if (bmi > 25 && bmi <= 29.9) {
        description = "Cuidado! Você está com sobrepeso!";
        value.classList.remove('normal');
        value.classList.add('risk');
    } else if (bmi > 30 && bmi <= 34.9) {
        description = "Cuidado! Você está com obesidade moderada!";
        value.classList.remove('normal');
        value.classList.add('risk_moderate');
    } else if (bmi > 35 && bmi <= 39.9) {
        description = "Cuidado! Você está com obesidade severa!";
        value.classList.remove('normal');
        value.classList.add('risk_serious');
    } else {
        description = "Cuidado! Você está com obesidade morbida!";
        value.classList.remove('normal');
        value.classList.add('risk_fatal');
    }

    value.textContent = bmi.replace('.', ',');
    document.getElementById('description').textContent = description;
})