vkBridge.send('VKWebAppInit'); // Иницилизация приложения на сервере Вконтакте

alert("++=")

function ControlInJS(cmd) {
  if (cmd == "ActiveMenuCreatePlan") { // Если выбрана кнпока "Создать тренировку"
    vkBridge.send('VKWebAppAddToFavorites');
    alert("+++");
  };
};
