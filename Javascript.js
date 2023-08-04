
class user{
	constructor(options) {
		this.name = options.name;
		this.login = options.login;
	}
}


class setting{
	constructor(options) {
		this.ActiveMenu = "MainMenu"; // Какое меню сейчас установлено (Сперва будет главное)
	}


	CloseMenu(cmd) { // Закрыть меню (Принимает название меню)

		// Главное меню
		if (cmd == "MainMenu") { 
 			document.getElementById("MainText").style.display = "none";
			document.getElementById("block_Info_Wallet").style.display = "none";
			document.getElementById("Img_finance").style.display = "none";
			document.getElementById("block_Info_Random").style.display = "none";
			document.getElementById("Img_pedestal").style.display = "none";
			document.getElementById("block_Info_QRCODE").style.display = "none";
			document.getElementById("Img_QRCODE").style.display = "none";
			document.getElementById("block_Info_Pay").style.display = "none";
			// document.getElementById("block_left_smart").style.display = "none";
			document.getElementById("circle2").style.display = "none";
			return true;

		// меню новостей
		} else if (cmd == "News") {
			var elements = document.getElementsByClassName("Main_Block_News");

			while(elements.length > 0) {
				elements[0].remove();
			};
			return true;
		};
	};

	OpenMenu(cmd) { // Открыть меню
		// Главное меню	
		if (cmd == "MainMenu") { 
			document.title = "Solve Corporation";
			document.getElementById("MainMenu_News").innerHTML = "News"; // исправить название кнопки на close (закрыть меню новостей)
			document.getElementById("MainMenu_CreateQR").innerHTML = "Create QR"; // исправить название кнопки на close (закрыть меню новостей)
			document.getElementById("MainText").style.display = "inline-block";
			document.getElementById("block_Info_Wallet").style.display = "inline-block";
			document.getElementById("Img_finance").style.display = "inline-block";
			document.getElementById("block_Info_Random").style.display = "inline-block";
			document.getElementById("Img_pedestal").style.display = "inline-block";
			document.getElementById("block_Info_QRCODE").style.display = "inline-block";
			document.getElementById("Img_QRCODE").style.display = "inline-block";
			document.getElementById("block_Info_Pay").style.display = "inline-block";
			// document.getElementById("block_left_smart").style.display = "inline-block";
			document.getElementById("circle2").style.display = "inline-block";	
			this.ActiveMenu = "MainMenu";
			return true;

		// Если нужно открыть меню Новостей
		} else if (cmd == "News") { 
				

			document.getElementById("MainMenu_News").innerHTML = "close"; // исправить название кнопки на close (закрыть меню новостей)

			// ТЕСТОВАЯ ВЕРСИЯ
			let element1 = 0;
			for (let i = 0; i < 3; i++) {
				if (i == 0) {
					element1 = document.body.appendChild(document.createElement('div'))
					element1.classList.add("Main_Block_News");
				}

				let element2 = element1.appendChild(document.createElement('div'));
				element2.classList.add("Block_New");

				let element3 = element2.appendChild(document.createElement('div'));
				element3.classList.add("Block_New_One");
			};
			
			this.ActiveMenu = "News";
			document.title = "News";
			return true;

			// ----------------


		// Меню QRCODE
		} else if (cmd == "QRCODE") { // НЕДОДЕЛАНО, НЕ ЗАБЫВАТЬ ПРО ТО, КАК УДАЛЯТЬ ЭТИ ОБЪЕКТЫ

			document.getElementById("MainMenu_CreateQR").innerHTML = "close"; // исправить название кнопки на close (закрыть меню новостей)

			let element1 = document.body.appendChild(document.createElement('div'))
			element1.classList.add("MainBlock_QRCODE");

			let elementInput = element1.appendChild(document.createElement('input'))
			elementInput.classList.add("ElementInput");
			elementInput.placeholder = "Here you need to enter the text";

			this.ActiveMenu = "QRCODE";
			return true;

		};
	};

	CloseAllMenu() { // Закрыть все меню
		if (this.ActiveMenu == "MainMenu") {
			this.CloseMenu("MainMenu");
		} else if (this.ActiveMenu == "News") {
			this.CloseMenu("News")
		} else if (this.ActiveMenu == "QRCODE") {
			this.CloseMenu("QRCODE")
		};
	};


	SetMenu(cmd) { // Переключение меню (принимает в себя название меню на которое нужно переключить)
		
		// Если нужно переключить на меню новостей
		if (cmd == "News") {
			this.CloseAllMenu(); // Закрыть все меню
			this.OpenMenu("News"); // Открыть меню Новостей
		
		// Если нужно переключить на главное меню
		} else if (cmd == "MainMenu") {
			this.CloseAllMenu(); // Закрыть все меню
			this.OpenMenu("MainMenu");
		
		// Если нужно переключить на страницу general QR CODE
		} else if (cmd == "QRCODE") {
			this.CloseAllMenu(); // Закрыть все меню
			this.OpenMenu("QRCODE");
		}
	}

}

let settings = new setting(); // Создание объекта настроек







// Взаимодействие сайта html с функционалом

function ControlFunc(cmd) {
	
	// Если была нажата кнопка "News", либо кнопка "close" для выхода в главное меню
	if (cmd == "ActiveButtonNews_MainMenu") {
		if (settings.ActiveMenu == "MainMenu") {
			settings.SetMenu("News"); // Переключить на меню "Новости"
		} else if (settings.ActiveMenu == "News") {
			settings.SetMenu("MainMenu"); // Переключить на главное меню
		};


	// Если былы нажата кнопка "QR CODE" или обратная
	} else if (cmd == "ActiveButtonQRCODE") {
		if (settings.ActiveMenu == "MainMenu") {
			settings.SetMenu("QRCODE"); // Переключить на главное меню
		} else if (settings.ActiveMenu == "QRCODE"){
			settings.SetMenu("MainMenu"); // Переключить на главное меню
		}
	}
};


// -----------