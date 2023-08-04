vkBridge.send('VKWebAppInit'); // Иницилизация приложения на сервере Вконтакте

function ControlInJS(cmd) {
  if (cmd == "ActiveMenuCreatePlan") { // Если выбрана кнпока "Создать тренировку"
    vkBridge.send('VKWebAppAddToFavorites');
    alert("+++");
  };
};
