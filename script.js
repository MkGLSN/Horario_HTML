((data, container) => {
	var schedule = document.getElementById(container);
	var days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
	
	for(var i = 0; i < 7; i++) {
		schedule.innerHTML += "<h3 class='day day-" + (i + 1) + "'>" + days[i] + "</h3>";
	}
	
	for(var i = 7; i < 21; i++) {
		var time = getTime(i);
		schedule.innerHTML += "<h3 class='time day-0'>" + time + "</h3>";
	}
	
	function getTime(time) {
		if(time < 12) {
			return time + ':00 am';
		} else if(time == 12) {
			return time + ':00 pm';
		} else {
			return (time - 12) + ':00 pm';
		}
	}
	
	function addSubject(name, day, init, finish, place, type) {
		var time = getTime(init) + ' - ' + getTime(finish);
		var dayClass = 'day-' + day;
		var timeClass = 'time-' + init + '-' + finish;
		var subject = "" +
			"<section class='subject " + dayClass + " " + timeClass + " " + type + "'>" +
			"		<h3>" + name + "</h3>" +
			"		<p>" + time + "</p>" +
			"		<p>" + place + "</p>" +
			"</section>";
		schedule.innerHTML += subject;
	}
	
	for(sub in data) {
		var subject = data[sub];
		console.log(subject['days']);
		for(day in subject['days']) {
			var day = subject['days'][day];
			addSubject(
				sub,
				day['day'],
				day['init'],
				day['finish'],
				day['place'],
				subject['type']
			);
		}
	}
})({
	'Visión artificial': {
		'type': 'class',
		'days': [
			{
				'day': '1',
				'init': '11',
				'finish': '13',
				'place': 'Sala A'
			},
			{
				'day': '3',
				'init': '11',
				'finish': '13',
				'place': 'Julio Carrizosa 9-111'
			}
		]
	},
	'Introducción a la computación movil': {
		'type': 'class',
		'days': [
			{
				'day': '1',
				'init': '13',
				'finish': '16',
				'place': 'Bases de datos'
			}
		]
	},
	'Analisis de algoritmos': {
		'type': 'class',
		'days': [
			{
				'day': '2',
				'init': '9',
				'finish': '11',
				'place': 'Fernando Barón S.J. 2-308'
			},
			{
				'day': '4',
				'init': '9',
				'finish': '11',
				'place': 'Fernando Barón S.J. 2-302'
			}
		]
	},
	'Gerencia y gestión informatica': {
		'type': 'class',
		'days': [
			{
				'day': '2',
				'init': '11',
				'finish': '13',
				'place': 'Fernando Barón S.J. 2-104'
			},
			{
				'day': '4',
				'init': '11',
				'finish': '13',
				'place': 'Pablo VI 41-101'
			}
		]
	},
	'Arquitectura de software': {
		'type': 'class',
		'days': [
			{
				'day': '2',
				'init': '16',
				'finish': '18',
				'place': 'Bases de datos'
			},
			{
				'day': '4',
				'init': '16',
				'finish': '18',
				'place': 'Fernando Barón S.J. 2-408'
			}
		]
	},
	'Web services': {
		'type': 'class',
		'days': [
			{
				'day': '6',
				'init': '14',
				'finish': '17',
				'place': 'Bases de datos'
			}
		]
	},
	'Proyecto especial': {
		'type': 'class',
		'days': [
			{
				'day': '3',
				'init': '10',
				'finish': '11',
				'place': 'Oficina Leonardo'
			}
		]
	},
	'Monitoria PC': {
		'type': 'monitory',
		'days': [
			{
				'day': '4',
				'init': '15',
				'finish': '16',
				'place': 'Gabriel Giraldo - Sotano'
			},
			{
				'day': '5',
				'init': '9',
				'finish': '11',
				'place': 'Bases de datos'
			}
		]
	},
	'Ping Pong': {
		'type': 'sport',
		'days': [
			{
				'day': '1',
				'init': '7',
				'finish': '9',
				'place': 'CJFD'
			},
			{
				'day': '3',
				'init': '16',
				'finish': '18',
				'place': 'CJFD'
			},
			{
				'day': '5',
				'init': '16',
				'finish': '18',
				'place': 'CJFD'
			}
		]
	},
	'React.JS': {
		'type': 'extra',
		'days': [
			{
				'day': '3',
				'init': '18',
				'finish': '21',
				'place': 'Biblioteca'
			},
			{
				'day': '5',
				'init': '11',
				'finish': '13',
				'place': 'Biblioteca'
			},
			{
				'day': '6',
				'init': '10',
				'finish': '13',
				'place': 'Biblioteca'
			}
		]
	},
	'Charla de control': {
		'type': 'extra',
		'days': [
			{
				'day': '1',
				'init': '16',
				'finish': '17',
				'place': 'Biblioteca'
			}
		]
	}
}, 'schedule');