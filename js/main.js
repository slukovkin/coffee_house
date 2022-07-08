// selectedPriceValues.length !=0  - проверка на нулевой выбор из меню

const result = document.querySelector('#btn');
const lastName = document.querySelector('#lastName');
const userName = document.querySelector('#userName');

result.addEventListener('click', function(){
    if(lastName.value !== '' && userName.value !== ''){
        alert(`Заказчик: ${lastName.value} ${userName.value}\n${outSum.textContent}`);
    } else {
        alert('Заполните пожалуйста Имя и Фамилию')
    }
})

function noString(event) {
    if (`1234567890<>?:\/}{]["'~!.,-+=@#$%^*() `.indexOf(event.key) !== -1)
      event.preventDefault();
}


lastName.addEventListener('blur', function(){
    if(lastName.value !== ''){
        // заглушка для следующего обработчика
    } else {
        if (lastName.value.includes('')) {
            lastName.focus();
        }
    }
})
userName.addEventListener('blur', function(){
    if(userName.value !== ''){
        // заглушка для следующего обработчика
    } else {
        if (userName.value.includes('')) {
            userName.focus();
        }
    } 
})

outSum = document.querySelector(".result"); //получаем элемент с классом result
checkButtons = document.querySelectorAll('[name="prod"]'); //получаем список всех checkbox элементов
let selectedPriceValues = []; //массив для хранения выбранных checkbox
/* let selectCheckProd = []; массив для хранения цены выбранных checkbox */

checkButtons.forEach(element => {                   //для каждого элемента из списка элементов checkbox
    element.addEventListener("change", function(){  //при изменении элемента
        if(element.checked){                        //если checkbox-кнопка выбрана
            selectedPriceValues.push(element.value);   //добавляем значение в массив выбранных
        } else {                                         //иначе удаляем из массива выбранных
            selectedPriceValues.splice(selectedPriceValues.indexOf(element.value),1)
        }

        if (selectedPriceValues.length !== 0) { //если массив не пустой
            let sum = 0;
                for(let i=0; i < selectedPriceValues.length; i++){
                    sum += parseInt(selectedPriceValues[i]);
                }
            outSum.textContent = `Итого: ${sum} р.`; //записываем значения в outSum            
        } else {
            outSum.textContent = 'Ничего не выбрано.'; //если не выбран товар записываем в outSum
        }
    });
});
