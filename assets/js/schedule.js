var schedulesArray = [

    /* Day 1*/
    { date: 20171103, start: '8:00', finish: '9:15', talks: [
        { type: 'break', title: 'Registro + Coffee'}
    ]},
    { date: 20171103, start: '9:15', finish: '9:25', talks: [
        { type: 'break', title: 'Bienvenida' }
    ]},
    { date: 20171103, start: '9:25', finish: '10:25', talks: [
        { type: 'talk', title: 'Una Kravets: Technical Diagramming: From Doodles to Data Flows' }
    ]},
    { date: 20171103, start: '10:25', finish: '11:25', talks: [
        { type: 'talk', title: 'Donovan Brown: Microsoft’s Agile Transformation Story' }
    ]},
    { date: 20171103, start: '11:25', finish: '11:45', talks: [
        { type: 'break', title: 'Coffee Break'}
    ]},
    { date: 20171103, start: '11:45', finish: '12:15', talks: [
        { type: 'talk', title: 'José Urzúa: Codificación de Caracteres' },
        { type: 'talk', title: 'Alvaro Echeverria: De Chile a Silicon Valley: Mitos, realidades y desafíos' },
        { type: 'talk', title: 'Ubaldo Taladriz: Microservicios con Akka y Scala' }
        /*{ type: 'workshop', title: 'Continuum: Design Sprints' }*/
    ]},
    { date: 20171103, start: '12:25', finish: '12:55', talks: [
        { type: 'talk', title: 'James Montemagno: Go Mobile with C#, Visual Studio, and Xamarin' },
        { type: 'talk', title: 'Edgardo Ochoa y Angel Valenzuela: El mejor de los proyectos es abrirnos a nuevos proyectos' },
        { type: 'talk', title: 'Claudio Salazar: Detectem: enumerando software para vulnerar sistemas web' }
        /*{ type: 'workshop', title: 'Continuum: Design Sprints' }*/
    ]},
    { date: 20171103, start: '13:00', finish: '13:30', talks: [
        { type: 'talk', title: 'Chihau Chau: VR/AR en Dispositivos Móviles' },
        { type: 'talk', title: 'Crystal Yan: Behind the AI Curtain: Designing for User Trust in Artificial Intelligence and Machine Learning' },
        { type: 'talk', title: 'Jairo Da Silva: Go: Pasado, Presente y Futuro' }
        /*{ type: 'workshop', title: 'Continuum: Design Sprints' }*/
    ]},
    { date: 20171103, start: '13:30', finish: '15:00', talks: [
        { type: 'break', title: 'Almuerzo' }
    ]},
    { date: 20171103, start: '15:00', finish: '15:30', talks: [
        { type: 'talk', title: 'Noah Illinsky: Guaranteed Successful Design' },
        { type: 'talk', title: 'Agustin Villena: ¿Sabemos por qué estamos Desarrollando Software?' },
        { type: 'talk', title: 'Fausto Castañeda: TDDD: Test Driven Development for Docker' }
        /*{ type: 'workshop', title: 'Synaptic: 8 hours technical onboarding for agile teams' }*/
    ]},
    { date: 20171103, start: '15:40', finish: '16:10', talks: [
        { type: 'talk', title: 'Ricardo Alfaro: Design Sprints en el mundo Enterprise' },
        { type: 'talk', title: 'Ignacio Peña: Haciendo visible lo invisible' },
        { type: 'talk', title: 'Felipe Reyes: Instalacion y manejo de kubernetes con Juju' }
        /*{ title: 'Synaptic: 8 hours technical onboarding for agile teams' }*/
    ]},
    { date: 20171103, start: '16:20', finish: '16:50', talks: [
        { type: 'talk', title: 'Felipe Funes y Alberto Marcías: La importancia del Why en el diseño de productos' },
        { type: 'talk', title: 'Eduardo Diaz: Esos raros lenguajes nuevos' },
        { type: 'talk', title: 'Martín Dominguez: El caso Preguntados: Manteniendo 25 millones de usuarios diarios' }
        /*{ type: 'workshop', title: 'Synaptic: 8 hours technical onboarding for agile teams' }*/
    ]},
    { date: 20171103, start: '16:50', finish: '17:15', talks: [
        { type: 'break', title: 'Coffee Break' }
    ]},
    { date: 20171103, start: ' 17:15', finish: '17:45', talks: [
        { type: 'talk', title: 'Lightning Talks' }
    ]},
    { date: 20171103, start: '17:45', finish: '18:45', talks: [
        { type: 'talk', title: 'Rebecca Parsons: Business Agility: Continuous Design to Continuous Delivery' }
    ]},
    { date: 20171103, start: '18:45', finish: '19:45', talks: [
        { type: 'talk', title: 'Russ Unger: Onboarding: The Ecosystem, Not the Afterthought' }
    ]},
    { date: 20171103, start: '19:45', finish: '21:30', talks: [
        { type: 'drink-up', title: 'Getonboard Drink-Up' }
    ]},

    /* Day 2*/
    { date: 20171104, start: '8:00', finish: '9:00', talks: [
        { type: 'break', title: 'Acreditación + Coffee' }
    ]},
    { date: 20171104, start: '9:00', finish: '10:00', talks: [
        { type: 'talk', title: 'Noah Iliinsky: The Four Pillars of Visualization' }
    ]},
    { date: 20171104, start: '10:00', finish: '11:00', talks: [
        { type: 'talk', title: 'Daniel May: Winning the most important race' }
    ]},
    { date: 20171104, start: '11:00', finish: '11:30', talks: [
        { type: 'break', title: 'Coffee Break' }
    ]},
    { date: 20171104, start: '11:30', finish: '12:00', talks: [
        { type: 'talk', title: 'Andres Marinkovic: ¿Qué son los robot-advisors?' },
        { type: 'talk', title: 'Crystal Yan: Bias, Uncovered: Irrational by Design' },
        { type: 'talk', title: 'Eduardo Graells-Garrido: Cómo ser Data Scientist y no morir en el intento' }
        /*{ type: 'workshop', title: 'Linets: Platform As A Service' }*/
    ]},
    { date: 20171104, start: '12:10', finish: '12:40', talks: [
        { type: 'talk', title: 'Javier Minhondo: Desmitificando la IA' },
        { type: 'talk', title: 'Daniel Atik: Una historia de amor' },
        { type: 'talk', title: 'Felipe Hoffa: What can we learn from 750 billion GitHub events and 42 TB of code' }
        /*{ type: 'workshop', title: 'Linets: Platform As A Service' }*/
    ]},
    { date: 20171104, start: '12:50', finish: '13:20', talks: [
        { type: 'talk', title: 'Ricardo Díaz y Alex Seelenberger: Desmitificando Chileconvalley: Una mirada desde el Venture Capital' },
        { type: 'talk', title: 'Gustavo Soto Miño: MIWOM. Cómo la UX salvó un producto' },
        { type: 'talk', title: 'Rodrigo Culagovski: Obtención, análisis y visualización de datos espaciales usando Python + Jupyter + Pandas.' }
        /*{ type: 'workshop', title: 'Linets: Platform As A Service' }*/
    ]},
    { date: 20171104, start: '13:20', finish: '13:40', talks: [
        { type: 'talk', title: 'Francisco Mardones: ¿Por qué los desarrolladores importan?  Una mirada desde Corfo al desarrollo de la industria tecnológica nacional.' },
        { type: 'talk', title: '' },
        { type: 'talk', title: '' }
    ]},
    { date: 20171104, start: '13:40', finish: '15:00', talks: [
        { type: 'break', title: 'Almuerzo' }
    ]},
    { date: 20171104, start: '15:00', finish: '15:30', talks: [
        { type: 'talk', title: 'Fausto de la Torre: Plataformas: los nuevos agentes de la innovación' },
        { type: 'talk', title: 'Chihau Chau: IoT inteligente con AndroidThings y Machine Learning' },
        { type: 'talk', title: 'Francisco Diaz: Si odio hablar en público: ¿Por qué lo sigo haciendo?' }
    ]},
    { date: 20171104, start: '15:40', finish: '16:10', talks: [
        { type: 'talk', title: 'Davidlohr Bueso: Cómo empezar una carrera de kernel hacker' },
        { type: 'talk', title: 'Claire Fisher: From Search to Engagement: Breaking down barriers between product and marketing' },
        { type: 'talk', title: 'Leonardo Graterol: Evitemos hacer daño. Ética en la ingeniería de software' }
    ]},
    { date: 20171104, start: '16:20', finish: '16:50', talks: [
        { type: 'talk', title: 'Alejandro Salinas: Network Engineering 2.0' },
        { type: 'talk', title: 'Óscar Peredo & Nicolás Kittsteiner: Analizando terabytes de datos de movilidad anonimizada' },
        { type: 'talk', title: 'Ruben Torres: Cómo convertirse en nómada digital' }
    ]},
    { date: 20171104, start: '16:50', finish: '17:15', talks: [
        { type: 'break', title: 'Coffee Break' }
    ]},
    { date: 20171104, start: '17:15', finish: '18:00', talks: [
        { type: 'talk', title: 'Lightning Talks' }
    ]},
    { date: 20171104, start: '18:00', finish: '18:45', talks: [
        { type: 'talk', title: 'Lightning Talks' }
    ]},
    { date: 20171104, start: '18:45', finish: '19:45', talks: [
        { type: 'talk', title: 'Dom Price: The Future of Team Work: humans being human.' }
    ]},
    { date: 20171104, start: '19:45', finish: '19:50', talks: [
        { type: 'break', title: 'Cierre' }
    ]},
    { date: 20171104, start: '19:50', finish: '21:30', talks: [
        { type: 'drink-up', title: 'Drink-Up' }
    ]}
];

function getJSON(url, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
            callback(JSON.parse(xmlhttp.responseText));
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

/**
 * get value from query string param
 * @param {*} name 
 */
function getParameterByName(name) {
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    var results = regex.exec(url);
    if (!results) return undefined;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

/**
 * set text to element html
 * @param {*} idElement 
 * @param {*} text 
 */
function setText(idElement, text) {
    var el = document.getElementById(idElement);
    if (el) {
        el.innerHTML = text;
    }
}

/**
 * Show or hide a element html
 * @param {*} idElement 
 * @param {*} visible 
 */
function setVisible(idElement, visible) {
    var el = document.getElementById(idElement);
    if (el) {
        el.style.display = visible == true ? 'block' : 'none';
    }
}

function paintSchedules(schedules, track) {
    setVisible('schelude-0', false);
    setVisible('schelude-1', false);
    setText('text-track', track);
    for(var i = 0; i < schedules.length; i++) {
        var schelude = schedules[i];
        setText('text-start-time-' + i, schelude.start); 
        setText('text-finish-time-' + i, schelude.finish);
        var talk = undefined;
        if (schelude.talks.length > 1) {
            talk = schelude.talks[track - 1];
        } else {
            talk = schelude.talks[0];
        }
        if (talk != undefined) {
            setText('text-title-' + i, talk.title);
        }
        setVisible('schelude-' + i, true);
    }
}

function filterSchedules(numberDate, numberHour) {
    var result = [];
    for (var i = 0; i < schedulesArray.length; i++) {
        var schelude = schedulesArray[i];
        if (schelude.date == numberDate) {
            var nStart = parseInt(schelude.start.replace(':', ''));
            var nFinish = parseInt(schelude.finish.replace(':', ''));
            if (numberHour >= nStart && numberHour <= nFinish) {
                result.push(schelude);
                var scheludeNext = schedulesArray[i + 1];
                if (scheludeNext && scheludeNext.date == numberDate) {
                    result.push(scheludeNext);
                }
            }
        }
    }
    if (result.length == 0) {
        for (var i = 0; i < schedulesArray.length; i++) {
            var schelude = schedulesArray[i];
            if (schelude.date == numberDate) {
                var nStart = parseInt(schelude.start.replace(':', ''));
                var nFinish = parseInt(schelude.finish.replace(':', ''));
                if (nStart >= numberHour) {
                    result.push(schelude);
                    var scheludeNext = schedulesArray[i + 1];
                    if (scheludeNext && scheludeNext.date == numberDate) {
                        result.push(scheludeNext);
                    }
                }
            }
            if (result.length == 2) {
                break;
            }
        }
    }
    return result;
}

function processSchelude(track, date, time) {
    var numberDate = parseInt(date.replace(/-/g, ''));
    var time = time.split(':');
    var numberHour = parseInt(time[0] + '' + time[1]);
    var schedules = filterSchedules(numberDate, numberHour);        
    paintSchedules(schedules, track);
}

function execute() {
    var apiUrl = 'https://starsconf-clock.herokuapp.com/clock?timezone=America/Santiago';
    var track = getParameterByName('track') || 1;
    var date = getParameterByName('date');
    var time = getParameterByName('time');
    if (date != undefined && time != undefined) {
        processSchelude(track, date, time);
    } else {
        getJSON(apiUrl, function(resp) {
            processSchelude(track, resp.date, resp.time);
        });
    }
}

execute();

setInterval(function() {
    execute();
}, 15000);