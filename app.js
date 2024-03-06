var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

const knex = require('kenx')(
    {
        client: 'sqlite3',
        connection: './foo_sqlite3'
    }
)


let series = [{
    Nom: "The Rookie",
    id: 0,
    estat: "enEmisio",
    imatge: "https://m.media-amazon.com/images/M/MV5BOTY5OWFmMzAtZTIxYi00NGM4LTk3YWMtY2MyYzMwOWVhZWM0XkEyXkFqcGdeQXVyMzAzNTY3MDM@._V1_FMjpg_UX1000_.jpg",
    descripcio: "Començar de nou és difícil per a John Nolan, qui, després d'un incident que li va canviar la vida, persegueix el seu somni de convertir-se en policia.",
    idioma: "Anglès",
    enllac: "https://www.imdb.com/title/tt7587890/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_rookie"
}, {
    Nom: "Scorpion",
    id: 1,
    estat: "enEmisio",
    imatge: "https://m.media-amazon.com/images/M/MV5BYmY2MjY2MGQtYjhjZi00OGY3LWFjMWUtMGQxZmUyODkzZmVkXkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_FMjpg_UX1000_.jpg",
    descripcio: "Un excèntric geni forma una xarxa internacional de supergenis com a línia de defensa contra les complicades amenaces del món modern.",
    idioma: "Anglès",
    enllac: "https://www.imdb.com/title/tt3514324/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_scorpion"
}, {
    Nom: "Hawai 5.0",
    id: 2,
    estat: "finalitzat",
    imatge: "https://m.media-amazon.com/images/I/91KJygvbdgL._SL1500_.jpg",
    descripcio: "Steve McGarrett retorna a casa a Oahu per buscar l'assassí del seu pare. El governador li ofereix l'oportunitat de liderar el seu propi equip de treball (Five-0).",
    idioma: "Anglès",
    enllac: "https://www.imdb.com/title/tt1600194/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_hawai"
}, {
    Nom: "Dragon ball Z",
    id: 3,
    estat: "finalitzat",
    imatge: "https://m.media-amazon.com/images/M/MV5BNGM5MTEyZDItZWNhOS00NzNkLTgwZTAtNWIzY2IzZmExOWMxXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",
    descripcio: "Després de descobrir que és d'un altre planeta, Goku i els seus amics es veuen obligats a defensar-lo d'un atac d'enemics extraterrestres.",
    idioma: "Anglès",
    enllac: "https://www.imdb.com/title/tt0214341/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_dragon%2520ball"
}, {
    Nom: "My hero academia",
    id: 4,
    estat: "finalitzat",
    imatge: "https://m.media-amazon.com/images/M/MV5BOGZmYjdjN2UtNjAwZi00YmEyLWFhNTEtNjM1OTc5ODg0MGEyXkEyXkFqcGdeQXVyMTA1NjQyNjkw._V1_FMjpg_UX1000_.jpg",
    descripcio: "Un nen amant dels superherois però sense cap poder, està decidit a entrar a la prestigiosa acadèmia de herois i a aprendre el que realment significa ser un heroi.",
    idioma: "Anglès",
    enllac: "https://www.imdb.com/title/tt5626028/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_my%2520her"
}]

let temporades = [{
    Nom: "The Rookie: temporada 1",
    id: 0,
    estat: "finalitzat",
    imatge: "https://m.media-amazon.com/images/M/MV5BM2MyZjlhZTUtNmQ5Yi00ZjA5LTgxZTEtZDIwYWYxYjZkNmY4XkEyXkFqcGdeQXVyNjgyNzQwNzA@._V1_FMjpg_UX1000_.jpg",
    descripcio: "A causa de la seva edat, algunes persones importants dubten i consideren la situació una crisi de mitjana edat.",
    enllac: "https://www.imdb.com/title/tt7587918/?ref_=ttep_ep1",
    episodis: 20,
    serie: 0
}, {
    Nom: "The Rookie: temporada 2",
    id: 1,
    estat: "enEmisio",
    imatge: "https://m.media-amazon.com/images/M/MV5BZTE3NDFiOTEtNjdlMi00NDA4LWI3NTQtYjRhOTQ3MGUxNmMyXkEyXkFqcGdeQXVyNTA4NzExMDg@._V1_.jpg",
    descripcio: "Els membres de les forces de seguretat han de fer front a les repercussions d'un atac conspirat a la ciutat de Los Angeles, amb Bradford debatent-se entre la vida i la mort.",
    enllac: "https://www.imdb.com/title/tt10360952/?ref_=ttep_ep1",
    episodis: 20,
    serie: 0
}, {
    Nom: "Scorpion: temporada 1",
    id: 2,
    estat: "finalitzat",
    imatge: "https://m.media-amazon.com/images/M/MV5BNzI2MjYzNDI5Nl5BMl5BanBnXkFtZTgwODEyMTg5MjE@._V1_.jpg",
    descripcio: "Walter O'Brien i el seu equip de súper genis són assignats pel govern per ajudar els avions a aterrar després que el sistema de comunicació s'apaga.",
    enllac: "https://www.imdb.com/title/tt3828930/?ref_=vp_close",
    episodis: 22,
    serie: 1
}, {
    Nom: "Scorpion: temporada 2",
    id: 3,
    estat: "finalitzat",
    imatge: "https://m.media-amazon.com/images/M/MV5BMjMwNDY1MzE0OV5BMl5BanBnXkFtZTgwMjAyNDk2NjE@._V1_FMjpg_UX1000_.jpg",
    descripcio: "El nou director de Seguretat Nacional reuneix l'equip quan un satèl·lit rus d'energia nuclear surt de l'òrbita i ha de ser desviat abans que detoni sobre el sud de Califòrnia.",
    enllac: "https://www.imdb.com/title/tt4417120/?ref_=ttep_ep1",
    episodis: 24,
    serie: 1
}, {
    Nom: "Hawai 5.0: temporada 1",
    id: 4,
    estat: "finalitzat",
    imatge: "https://m.media-amazon.com/images/M/MV5BMjI0MjgyNzEyM15BMl5BanBnXkFtZTcwODEyMDE5Mw@@._V1_QL75_UY281_CR155,0,190,281_.jpg",
    descripcio: "El governador de Hawaii autoritza l'oficial d'intel·ligència de la Marina Steve McGarrett a reunir una unitat especial la primera feina de la qual és capturar l'home que va matar el pare de McGarrett.",
    enllac: "https://www.imdb.com/title/tt1603616/?ref_=ttep_ep1",
    episodis: 24,
    serie: 2
}, {
    Nom: "Hawai 5.0: temporada 2",
    id: 5,
    estat: "enEmisio",
    imatge: "https://m.media-amazon.com/images/M/MV5BMjA1ODg0Nzg1MF5BMl5BanBnXkFtZTgwOTA3ODM0MjE@._V1_FMjpg_UX1000_.jpg",
    descripcio: "McGarrett fuig de la presó i es prepara per venjar-se de Wo Fat amb l'ajuda del seu antic equip Five-0, que ja no existeix, i de l'instructor de la Marina.",
    enllac: "https://www.imdb.com/title/tt1982323/?ref_=ttep_ep1",
    episodis: 23,
    serie: 2
}, {
    Nom: "Dragon ball Z: temporada 1",
    id: 6,
    estat: "finalitzat",
    imatge: "https://m.media-amazon.com/images/M/MV5BZDk0OTUxNDYtZDRhOC00N2QyLWJmMzctZmJlYWEwY2E5MzRiXkEyXkFqcGdeQXVyMTk3OTMzOA@@._V1_FMjpg_UX1000_.jpg",
    descripcio: "Després de cinc anys de pau, arriba una nova amenaça per a en Goku i els seus amics, el malvat germà d'en Goku, Radditz.",
    enllac: "https://www.imdb.com/title/tt0843688/?ref_=ttep_ep1",
    episodis: 26,
    serie: 3
}, {
    Nom: "Dragon ball Z: temporada 2",
    id: 8,
    estat: "enEmisio",
    imatge: "https://m.media-amazon.com/images/M/MV5BZDQ5NmY2M2YtYTIyZC00MDZlLWEwMDktN2ZiMDBhN2QxZTc4XkEyXkFqcGdeQXVyMTk3OTMzOA@@._V1_FMjpg_UX1000_.jpg",
    descripcio: "La banda plora la pèrdua de Yamcha, Tien, Chiaotzu i Piccolo. Amb Kami desaparegut, les Boles de Drac de la Terra han desaparegut. Els herois supervivents trobaran la manera de desitjar que els seus amics caiguts tornin a la vida?",
    enllac: "https://www.imdb.com/title/tt1168298/?ref_=ttep_ep1",
    episodis: 27,
    serie: 3
}, {
    Nom: "My hero academia: temporada 1",
    id: 9,
    estat: "finalitzat",
    imatge: "https://m.media-amazon.com/images/M/MV5BMGM2ZDQyMDUtOGE1ZC00YmUwLThhZjAtYzQwNDk4ODlkZjhjXkEyXkFqcGdeQXVyNTc1NzY0Mjk@._V1_.jpg",
    descripcio: "Izuku Midoriya vol desesperadament ser un heroi, però és un dels pocs de la seva generació que ha nascut sense cap Quirk. La trobada amb l'heroi número u, All Might, canviarà el seu destí?",
    enllac: "https://www.imdb.com/title/tt5632458/?ref_=ttmi_tt",
    episodis: 13,
    serie: 4
}, {
    Nom: "My hero academia: temporada 2",
    id: 10,
    estat: "finalitzat",
    imatge: "https://m.media-amazon.com/images/M/MV5BMDRkZTM3OTAtMDQzNy00Y2JlLWE0NjktZGM2ODFlODRmZGRhXkEyXkFqcGdeQXVyMjI5MTEyNzY@._V1_.jpg",
    descripcio: "Izuku mira enrere els esdeveniments que el van portar a U.A. Batxillerat i en el seu camí per convertir-se en un heroi",
    enllac: "https://www.imdb.com/title/tt6875966/?ref_=ttep_ep0",
    episodis: 25,
    serie: 4
}];

function get_summary_data(data) {
    array = []
    for (let i = 0; i < data.length; i++) {
        const object = {};
        object.Nom = data[i].Nom;
        object.estat = data[i].estat;
        object.enllac = data[i].enllac;
        if (data === temporades) {
            object.episodis = data[i].episodis;
        } else {
            object.idioma = data[i].idioma;

        }
        array.push(object)
    }
    return array
}

function get_object_data(id, data, res, proposal) {
    let object = null
    let foundIndex = -1
    for (let i = 0; i < data.length; i++) {
        if (data[i].id === id) {
            object = data[i]
            break
        }
    }

    if (!object) {
        res.status(404).json('Item' + id + 'not found')
    } else if (proposal === 'render') {
        return object
    } else {
        res.status(200).json(object)
    }
}

function findIndexObject(id, data) {
    let foundIndex = -1
    for (let i = 0; i < data.length; i++) {
        if (data[i].id === id) {
            foundIndex = i
            break;
        }
    }

    return foundIndex


}

function updateDataObject(foundIndex, params, data) {
    let seriesKeys = Object.keys(params)
    for (let i = 0; i < seriesKeys.length; i++) {

        if (seriesKeys[i] === "Nom") {
            data[foundIndex].Nom = params.Nom

        }

        if (seriesKeys[i] === "estat") {
            data[foundIndex].estat = params.estat

        }
        if (seriesKeys[i] === "imatge") {
            data[foundIndex].imatge = params.imatge

        }

        if (seriesKeys[i] === "idioma") {
            data[foundIndex].idioma = params.idioma

        }

        if (seriesKeys[i] === "descripcio") {
            data[foundIndex].descripcio = params.descripcio

        }
        if (seriesKeys[i] === "enllac") {
            data[foundIndex].enllac = params.enllac

        }
        if (seriesKeys[i] === "episodis") {
            data[foundIndex].episodis = params.episodis

        }
    }

}

// START API ENDPOINTS
app.get('/api/temporades', (req, res) => {
    res.status(200).send(get_summary_data(temporades));
});

app.get('/api/temporades/:id', (req, res) => {
    const id = parseInt(req.params.id)
    console.log(typeof (id))

    get_object_data(id, temporades, res)
});

app.get('/api/series', (req, res) => {
    res.status(200).send(get_summary_data(series));
});

app.get('/api/series/:id', (req, res) => {
    const id = parseInt(req.params.id)
    console.log(typeof (id))

    get_object_data(id, series, res)
});

app.delete('/api/temporades/:id', (req, res) => {
    const id = parseInt(req.params.id)
    let foundIndex = findIndexObject(id, temporades)

    if (foundIndex === -1) { // si no encontrado
        res.status(404).send('not found')
    } else {
        temporades.splice(foundIndex, 1)
        res.status(204).send()
    }
})

app.delete('/api/series/:id', (req, res) => {
    const id = parseInt(req.params.id)
    let foundIndex = findIndexObject(id, temporades)
    if (foundIndex === -1) { // si no encontrado
        res.status(404).send('not found')
    } else {
        series.splice(foundIndex, 1)
        res.status(204).send()
    }
})

// app.post('/api/temporades', (req, res) => {
//     let params = req.body
//     params.id = temporades.length + 1
//     temporades.push(params) // DB.insert(...)
//     res.status(201).json(params)
// })

app.post('/api/temporades', async (req, res) => {
    let params = req.body
    console.log(params)
    try {
        const result = await knex('series').insert(params)
        console.log(result)

    } catch (e) {
        console.log('Error ' + e.message)
    }

    res.status(201).json(params)
})

app.post('/api/series', (req, res) => {
    let params = req.body
    params.id = series.length + 1
    series.push(params) // DB.insert(...)
    res.status(201).json(params)
})

app.put('/api/series/:id', (req, res) => {
    let params = req.body
    const id = parseInt(req.params.id)
    let foundIndex = findIndexObject(id, series)
    console.log(params)

    if (foundIndex === -1) { // si no encontrado
        res.status(404).send('not found')
    } else {
        updateDataObject(foundIndex, params, series)
        res.status(200).send()
    }

})

app.put('/api/temporades/:id', (req, res) => {
    let params = req.body
    const id = parseInt(req.params.id)
    let foundIndex = findIndexObject(id, temporades)
    console.log(params)

    if (foundIndex === -1) { // si no encontrado
        res.status(404).send('not found')
    } else {
        updateDataObject(foundIndex, params, temporades)
        res.status(200).send()
    }

})

// END OF API ENDPOINTS

// START EJS RENDER ENDPOINTS WEBSITE
app.get('/temporades', (req, res) => {
    res.render('showdataTemporades.ejs', {title: 'temporades', data: temporades})
});

//TODO: HAY QUE FORMATEAR EL DOCUMENTO PARA QUE QUEDE MAS BONITO
app.get('/temporades/:id', (req, res) => {
    const id = parseInt(req.params.id)
    console.log(typeof (id))

    res.render('showSpecificData.ejs', {title: 'specific', array: get_object_data(id, temporades, res, 'render')})
});

app.get('/series', (req, res) => {
    res.render('showdataSeries.ejs', {title: 'series', data: series})
});

app.get('/series/:id', (req, res) => {
    const id = parseInt(req.params.id)
    console.log(typeof (id))

    res.render('showSpecificData.ejs', {title: 'specific', array: get_object_data(id, series, res, 'render')})
});
// END EJS RENDER ENDPOINTS WEBSITE

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
