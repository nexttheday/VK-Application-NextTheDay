vkBridge.send('VKWebAppInit'); // Иницилизация приложения на сервере Вконтакте


function ControlInJS(cmd) {
  if (cmd == "ActiveAddInFavorit") { // Если выбрана кнпока "Добавить приложение в избранное"
    vkBridge.send('VKWebAppAddToFavorites');
  } else if (cmd == "ActiveMenuButtonInfo") { // Если выбрана кнопка "Информация" с показом информации о приложении
    document.getElementById('MainBlock').style.display = "none";
    document.getElementById('Menu_info').style.display = "block";
  } else if (cmd == "ActiveButton_back_MainMenu") { // Если нужно вернуть в главное меню
    document.getElementById('MainBlock').style.display = "block";
    document.getElementById('Menu_info').style.display = "none";
  }
};
