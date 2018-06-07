
function phonesRequest()
{
  var phone = document.getElementById('phone');
  var button = document.getElementById('xbutton')

/*
  // 1. Создаём новый объект XMLHttpRequest
  var xhr = new XMLHttpRequest();
  // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
  xhr.open('GET', 'phones.json', false);
  // 3. Отсылаем запрос
  xhr.send();

  // 4. Если код ответа сервера не 200, то это ошибка
  if (xhr.status != 200) {
    // обработать ошибку
    phone.innerHTML =  xhr.status + ': ' + xhr.statusText; // пример вывода: 404: Not Found
  } else {
    // вывести результат
    phone.innerHTML = 'status: ' + xhr.status + '<br> statusText: ' + xhr.statusText + '<br><br>' + xhr.responseText; // responseText -- текст ответа.
  }
/**/


var xhr = new XMLHttpRequest();

xhr.open('GET', 'phones.json', true);

xhr.send(); // (1)

xhr.onreadystatechange = function()
{ // (3)
  if (xhr.readyState != 4) return;

  button.innerHTML = 'Готово!';

  if (xhr.status != 200)
  {
    phone.innerHTML = xhr.status + ': ' + xhr.statusText;
  } else {
    phone.innerHTML = xhr.responseText;
  }

}

  button.innerHTML = 'Загружаю...'; // (2)
  button.disabled = true;
}












//1
