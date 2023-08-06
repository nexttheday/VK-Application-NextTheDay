vkBridge.send('VKWebAppInit'); // Иницилизация приложения на сервере Вконтакте
vkBridge.send('VKWebAppAddToProfile', {ttl: 1666076431}); // Предложить перенести в профиль пользователя

class settings {
  constructor(options) {
    this.ActiveMenu = "MainMenu"; // Активное меню сейчас
  }

  CancelMenuAll() { // Закрыть все меню
    if (this.ActiveMenu == "MainMenu") {
      document.getElementById('MainBlock').style.display = "none";
    };
    if (this.ActiveMenu == "MenuVersion") {
      document.getElementById('Menu_info').style.display = "none";
    };
  };

  ActiveMenuOpen(cmd) { // Открыть нужное меню (cmd = name menu)
    this.CancelMenuAll(); // Закрываем все активные меню
    if (cmd == "MenuVersion") { // Если меню версии
      document.getElementById('headers_text').innerHTML = "Информация о приложении";
      document.getElementById('Menu_info').style.display = "block";
      this.ActiveMenu = "MenuVersion";
    } else if (cmd == "MainMenu") { // Если главное меню
      document.getElementById('MainBlock').style.display = "block";
      document.getElementById('headers_text').innerHTML = "NEXT THE DAY";
      this.ActiveMenu = "MainMenu";
    };
  };
};

let setting = new settings(); // Создаем объект настроек для приложения


function ControlInJS(cmd) {
  if (cmd == "ActiveAddInFavorit") { // Если выбрана кнпока "Добавить приложение в избранное"
    vkBridge.send('VKWebAppAddToFavorites');
  } else if (cmd == "ActiveMenuButtonInfo") { // Если выбрана кнопка "Информация" с показом информации о приложении
    setting.ActiveMenuOpen("MenuVersion");
  } else if (cmd == "ActiveButton_back_MainMenu") { // Если нужно вернуть в главное меню
    setting.ActiveMenuOpen("MainMenu");
  };
};
