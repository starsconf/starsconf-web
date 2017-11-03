var schedulesArrayBase = [

    /* Day 1*/
    { date: 20171103, start: '9:15', finish: '9:25', talks: [
        { 
            type: 'break',
            title: 'Bienvenida'
        }
    ]},
    { date: 20171103, start: '9:25', finish: '10:25', talks: [
      {
          type: 'talk',
          title: 'Una Kravets <br> Technical Diagramming: From Doodles to Data Flows'
      }
    ]},
    { date: 20171103, start: '10:25', finish: '11:25', talks: [
        { type: 'talk', title: 'Donovan Brown <br> Microsoft’s Agile Transformation Story' }
    ]},
    { date: 20171103, start: '11:45', finish: '12:15', common: true, talks: [
        { type: 'talk', title: 'Alvaro Echeverria<br> De Chile a Silicon Valley: Mitos, realidades y desafíos' },
        { type: 'talk', title: 'José Urzúa<br> Codificación de Caracteres' },
        { type: 'talk', title: 'Ubaldo Taladriz<br> Microservicios con Akka y Scala' }
        /*{ type: 'workshop', title: 'Continuum: Design Sprints' }*/
    ]},
    { date: 20171103, start: '12:25', finish: '12:55', common: true, talks: [
        { type: 'talk', title: 'Edgardo Ochoa y Angel Valenzuela<br> El mejor de los proyectos es abrirnos a nuevos proyectos' },
        { type: 'talk', title: 'James Montemagno<br> Go Mobile with C#, Visual Studio, and Xamarin' },
        { type: 'talk', title: 'Claudio Salazar<br> Detectem: enumerando software para vulnerar sistemas web' }
        /*{ type: 'workshop', title: 'Continuum: Design Sprints' }*/
    ]},
    { date: 20171103, start: '13:00', finish: '13:30', common: true, talks: [
        { type: 'talk', title: 'Daniel Atik<br> Todo sobre la API de Mercado Libre: Una historia de amor' },
        { type: 'talk', title: 'Chihau Chau<br> VR/AR en Dispositivos Móviles' },
        { type: 'talk', title: 'Jairo Da Silva<br> Go: Pasado, Presente y Futuro' }
        /*{ type: 'workshop', title: 'Continuum: Design Sprints' }*/
    ]},
    { date: 20171103, start: '15:00', finish: '15:30', common: true, talks: [
        { type: 'talk', title: 'Agustin Villena<br> ¿Sabemos por qué estamos Desarrollando Software?' },
        { type: 'talk', title: 'Noah Illinsky<br> Guaranteed Successful Design' },
        { type: 'talk', title: 'Fausto Castañeda<br> TDDD: Test Driven Development for Docker' }
        /*{ type: 'workshop', title: 'Synaptic: 8 hours technical onboarding for agile teams' }*/
    ]},
    { date: 20171103, start: '15:40', finish: '16:10', common: true, talks: [
        { type: 'talk', title: 'Ignacio Peña<br> Haciendo visible lo invisible -  Experiencias únicas para una cultura organizacional saludable' },
        { type: 'talk', title: 'Ricardo Alfaro<br> Design Sprints en el mundo Enterprise' },
        { type: 'talk', title: 'Felipe Reyes<br> Instalacion y manejo de kubernetes con Juju' }
        /*{ title: 'Synaptic: 8 hours technical onboarding for agile teams' }*/
    ]},
    { date: 20171103, start: '16:20', finish: '16:50', common: true, talks: [
        { type: 'talk', title: 'Eduardo Diaz<br> Esos raros lenguajes nuevos' },
        { type: 'talk', title: 'Felipe Funes y Alberto Marcías<br> La importancia del Why en el diseño de productos' },  
        { type: 'talk', title: 'Martín Dominguez<br> El caso Preguntados: Manteniendo 25 millones de usuarios diarios' }
        /*{ type: 'workshop', title: 'Synaptic: 8 hours technical onboarding for agile teams' }*/
    ]},
    { date: 20171103, start: ' 17:15', finish: '17:45', common: true, talks: [
        { type: 'talk', title: 'Lightning Talks' },
        { type: 'talk', title: '' },
        { type: 'talk', title: '' }
    ]},
    { date: 20171103, start: '17:45', finish: '18:45', common: true, talks: [
        { type: 'talk', title: 'Rebecca Parsons: Business Agility<br> Continuous Design to Continuous Delivery' },
        { type: 'talk', title: '' },
        { type: 'talk', title: '' }
    ]},
    { date: 20171103, start: '18:45', finish: '19:45', common: true, talks: [
        { type: 'talk', title: 'Russ Unger: Onboarding<br> The Ecosystem, Not the Afterthought' },
        { type: 'talk', title: '' },
        { type: 'talk', title: '' }
    ]},
    { date: 20171103, start: '19:45', finish: '21:30', common: true, talks: [
        { type: 'drink-up', title: 'Starsconf Drink-Up' },
        { type: 'talk', title: '' },
        { type: 'talk', title: '' }
    ]},

    /* Day 2*/
    { date: 20171104, start: '9:00', finish: '10:00', talks: [
        { type: 'talk', title: 'Noah Iliinsky<br> The Four Pillars of Visualization' }
    ]},
    { date: 20171104, start: '10:00', finish: '11:00', talks: [
        { type: 'talk', title: 'Daniel May<br> Winning the most important race' }
    ]},
    { date: 20171104, start: '11:30', finish: '12:00', common: true, talks: [
        { type: 'talk', title: 'Crystal Yan: Behind the AI Curtain<br> Designing for User Trust in Artificial Intelligence and Machine Learning' },
        { type: 'talk', title: 'Andres Marinkovic<br> ¿Qué son los robot-advisors?' },
        { type: 'talk', title: 'Eduardo Graells-Garrido<br> Cómo ser Data Scientist y no morir en el intento' }
        /*{ type: 'workshop', title: 'Linets: Platform As A Service' }*/
    ]},
    { date: 20171104, start: '12:10', finish: '12:40', common: true, talks: [
        { type: 'talk', title: 'Gustavo Soto Miño<br> MIWOM. Cómo la UX salvó un producto' },
        { type: 'talk', title: 'Javier Minhondo<br> Desmitificando la Inteligencia Artificial' },     
        { type: 'talk', title: 'Felipe Hoffa<br> Qué podemos aprender de 750 mil millones de eventos en Github y 42TB de código' }
        /*{ type: 'workshop', title: 'Linets: Platform As A Service' }*/
    ]},
    { date: 20171104, start: '12:50', finish: '13:20', common: true, talks: [
        { type: 'talk', title: 'Crystal Yan<br> Bias, Uncovered: Irrational by Design' },
        { type: 'talk', title: 'Ricardo Díaz y Alex Seelenberger<br> Desmitificando Chileconvalley: Una mirada desde el Venture Capital' },
        { type: 'talk', title: 'Rodrigo Culagovski<br> Obtención, análisis y visualización de datos espaciales usando Python + Jupyter + Pandas.' }
        /*{ type: 'workshop', title: 'Linets: Platform As A Service' }*/
    ]},
    { date: 20171104, start: '13:20', finish: '13:40', common: true, talks: [
        { type: 'talk', title: '' },
        { type: 'talk', title: 'Francisco Mardones<br> ¿Por qué los desarrolladores importan?  Una mirada desde Corfo al desarrollo de la industria tecnológica nacional' },
        { type: 'talk', title: '' }
    ]},
    { date: 20171104, start: '15:00', finish: '15:30', common: true, talks: [
        { type: 'talk', title: 'Chihau Chau<br> IoT inteligente con AndroidThings y Machine Learning' },
        { type: 'talk', title: 'Fausto de la Torre<br> Plataformas, los nuevos agentes de la innovación' },
        { type: 'talk', title: 'Francisco Diaz<br> Si odio hablar en público: ¿Por qué lo sigo haciendo?' }
    ]},
    { date: 20171104, start: '15:40', finish: '16:10', common: true, talks: [
        { type: 'talk', title: 'Claire Drumond<br> From Search to Engagement: Breaking down barriers between product and marketing' },
        { type: 'talk', title: 'Davidlohr Bueso<br> Cómo empezar una carrera de kernel hacker' }, 
        { type: 'talk', title: 'Leonardo Graterol<br> Evitemos hacer daño. Ética en la ingeniería de software' }
    ]},
    { date: 20171104, start: '16:20', finish: '16:50', common: true, talks: [
        { type: 'talk', title: 'Óscar Peredo & Nicolás Kittsteiner<br> Analizando terabytes de datos de movilidad anonimizada' },
        { type: 'talk', title: 'Alejandro Salinas<br> Network Engineering 2.0' },
        { type: 'talk', title: 'Ruben Torres<br> Cómo convertirse en nómada digital' }
    ]},
    { date: 20171104, start: '17:15', finish: '18:00', common: true, talks: [
        { type: 'talk', title: 'Lightning Talks' },
        { type: 'talk', title: '' },
        { type: 'talk', title: '' }
    ]},
    { date: 20171104, start: '18:00', finish: '18:45', common: true, talks: [
        { type: 'talk', title: 'Lightning Talks' },
        { type: 'talk', title: '' },
        { type: 'talk', title: '' }
    ]},
    { date: 20171104, start: '18:45', finish: '19:45', common: true, talks: [
        { type: 'talk', title: 'Dom Price<br> The Future of Team Work: humans being human.' },
        { type: 'talk', title: '' },
        { type: 'talk', title: '' }
    ]},
    { date: 20171104, start: '19:45', finish: '19:50', common: true, talks: [
        { type: 'break', title: 'Cierre' },
        { type: 'talk', title: '' },
        { type: 'talk', title: '' }
    ]},
    { date: 20171104, start: '19:50', finish: '21:30', common: true, talks: [
        { type: 'drink-up', title: 'StarsConf Drink-Up' },
        { type: 'talk', title: '' },
        { type: 'talk', title: '' }
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

function getTrackName(track) {
    return ['Salón Fresno', 'Sala Magna', 'Sala Matte'][track - 1];
}

function paintSchedules(schedules, track, section) {
    setVisible(section + '-schelude', false);
    setVisible(section + '-schelude-0', false);
    setVisible(section + '-schelude-1', false);
    setText(section + '-text-track', getTrackName(track));
    for(var i = 0; i < schedules.length; i++) {
        var schelude = schedules[i];
        setText(section + '-text-start-time-' + i, schelude.start);
        setText(section + '-text-finish-time-' + i, schelude.finish);
        var talk = undefined;
        if (schelude.talks.length > 1) {
            talk = schelude.talks[track - 1];
        } else {
            talk = schelude.talks[0];
        }
        if (talk != undefined) {
            setText(section + '-text-title-' + i, talk.title);
        }
        setVisible(section + '-schelude', true);
        setVisible(section + '-schelude-' + i, true);
    }
}

function filterSchedules(track, numberDate, numberHour) {

    var schedulesArray = schedulesArrayBase;

    if (track != 1) {
        schedulesArray = [];
        for (var i = 0; i < schedulesArrayBase.length; i++) {
            if (schedulesArrayBase[i].common == true) {
                schedulesArray.push(schedulesArrayBase[i]);
            }
        }
    }

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

function processSchelude(track, date, time, section) {
    var numberDate = parseInt(date.replace(/-/g, ''));
    var time = time.split(':');
    var numberHour = parseInt(time[0] + '' + time[1]);
    var schedules = filterSchedules(track, numberDate, numberHour);
    paintSchedules(schedules, track, section);
}

function getNexTrack(track) {
    if (track <= 1) {
        return 2;
    } else if (track == 2) {
        return 3;
    } else if (track >= 3) {
        return 1;
    }
}

function execute() {
    var apiUrl = 'https://starsconf-clock.herokuapp.com/clock?timezone=America/Santiago';
    var track = getParameterByName('track') || 1;
    var date = getParameterByName('date');
    var time = getParameterByName('time');
    if (date != undefined && time != undefined) {
        processSchelude(track, date, time, 'first');
        track = getNexTrack(track);
        processSchelude(track, date, time, 'second');
        track = getNexTrack(track);
        processSchelude(track, date, time, 'third');
    } else {
        getJSON(apiUrl, function(resp) {
            processSchelude(track, resp.date, resp.time, 'first');
            track = getNexTrack(track);
            processSchelude(track, resp.date, resp.time, 'second');
            track = getNexTrack(track);
            processSchelude(track, resp.date, resp.time, 'third');
        });
    }
}

execute();

setInterval(function() {
    execute();
}, 15000);
