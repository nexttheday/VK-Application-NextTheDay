<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Solve Corporation</title>
	<link rel="stylesheet" href="style.css">
	<link rel="shortcut icon" href="data/img/ico.ico" type="image/x-icon">
</head>
<body>

	<!-- Шапка сайта -->
	<header id="headers">
		<div id="logo">
			<span id="Headers_name">SOLVE</span>
		</div>
		<div id="about">
			<!-- <a id="MainMenu_News" onclick="ControlFunc('ActiveButtonNews_MainMenu')">News</a>
			<a id="MainMenu_Wallet">Wallet</a>
			<a id="MainMenu_Random">Random</a>
			<a id="MainMenu_CreateQR" onclick="ControlFunc('ActiveButtonQRCODE')">Create QR</a>
			<a id="MainMenu_Profile">Profile</a> -->
			<a id="MainMenu_Exit">Sign In</a> 
		</div>
	</header>
	<!---/////////// -->

	<!-- Это для пятнышек на сайте -->
	<div id="circles">
		<div id="circle1"></div>
		<div id="circle2"></div>
	</div>
	<!-- ------------------------ -->


	<div id="MainText">What opportunities do you have ?</div>

	<!-- Блоки для показа, что может сайт -->

	<!-- Контроль финансов -->
	<div id="block_Info_Wallet"></div>
	<img id="Img_finance" src="data/img/finance_USA.png">

	<!-- Рандомное число -->
	<div id="block_Info_Random"></div>
	<img id="Img_pedestal" src="data/img/Pedestal.png">

	<!-- Создание QR CODE -->
	<div id="block_Info_QRCODE"></div>
	<img id="Img_QRCODE" src="data/img/QRCODE.png">

	<!-- ------------------------------- -->


	<!-- Блок для оплаты и поддержки сайта -->

	<div id="block_Info_Pay"></div>

	<!-- ------------------------------- -->


	<!-- левое смарт окно-блок для показа другой информации -->

	<!-- <div id="block_left_smart"></div> -->

	<div id="block_left_smart">
		<a id="button_new" onclick="ControlFunc('ActiveButtonNews_MainMenu')">News</a>
		<a href="#">Wallet</a>
		<a href="#">Random</a>
		<a href="#">Create QR</a>
	</div>

	<!-- ------------------------------- -->




	<!--- Блок для чата с SOFI --> 

	<img id="Img_SOFI"  src="data/img/Sofi.png">
	<div id="SOFI_CHAT" onclick="window.open('https://t.me/SOLVE_SOFI', '_blank')">SOFI</div>
	
	<!-- ------------------------------- -->



	<!--- Подключение Javascript-а --->
	<script lang="javascript" src="Javascript.js"></script>  <!--  основной файл скрипта  -->

	<!-- ------------------------------- -->


</body>
</html>
