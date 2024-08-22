
let peliculas = [
    {
        id: 1,
        nombre: 'El padrino',
        year: 1972,
        direccion: 'Francis Ford Coppola',
        protagonistas: ['Marlon Brando', 'Al Pacino', 'James Caan'],
        genero: ['Crimen', 'Drama'],
        image: 'https://images.justwatch.com/poster/123122757/s166/el-padrino.webp'
    },
    {
        id: 2,
        nombre: 'Cazadores del Arca Perdida',
        year: 1981,
        direccion: 'Steven Spielberg',
        protagonistas: ['Harrison Ford', 'Karen Allen', 'Paul Freeman'],
        genero: ['accion', 'aventura'],
        image: 'https://images.justwatch.com/poster/300765484/s166/indiana-jones-en-busca-del-arca-perdida.webp'
    },
    {
        id: 3,
        nombre: 'La redencion de Shawshank',
        year: 1994,
        direccion: 'Frank Darabont',
        protagonistas: ['Tim Robbins', 'Morgan Freeman'],
        genero: 'Drama',
        image: 'https://upload.wikimedia.org/wikipedia/en/2/24/Twisters_Official_US_Theatrical_Poster.jphttps://www.justwatch.com/co/pelicula/cadena-perpetuag'
    },
    {
        id: 4,
        nombre: 'Star Wars: Episodio V - El imperio Contraataca(1980)',
        year: 1980,
        direccion: 'Irvin Kershner',
        protagonistas: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher'],
        genero: ['Accion', 'Aventura', 'Fantasia'],
        image: 'https://images.justwatch.com/poster/179261213/s166/la-guerra-de-las-galaxias-episodio-v-el-imperio-contraataca.webp'
    },
    {
        id: 5,
        nombre: 'Tiburon',
        year: 1975,
        direccion: 'Steven Spielberg',
        protagonistas: ['Roy Scheider', 'Robert Shaw', 'Richard Dreyfuss'],
        genero: ['Aventura', 'Suspenso'],
        image: 'https://images.justwatch.com/poster/185348533/s166/tiburon.webp'
    },
    {
        id: 6,
        nombre: 'Fight Club',
        year: 1999,
        direccion: 'David Fincher',
        protagonistas: ['Brad Pitt', 'Edward Norton', 'Helena Bonham Carter'],
        genero: ['Drama'],
        image: 'https://images.justwatch.com/poster/128723874/s166/el-club-de-la-lucha.webp'
    },
    {
        id: 7,
        nombre: 'Pulp Fiction',
        year: 1994,
        direccion: 'Quentin Tarantino',
        protagonistas: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson'],
        genero: ['Crimen','Drama'],
        image: 'https://images.justwatch.com/poster/206713994/s166/pulp-fiction.webp'
    },
    {
        id: 8,
        nombre: 'Cantando Bajo la Lluvia',
        year: 1952,
        direccion: ['Satanley Donen','Gene Kelly'],
        protagonistas: ['Gene Kelly', 'Donald O´Conor', 'Debbie Reynolds'],
        genero: ['Comedia','Musical','Romance'],
        image: 'https://images.justwatch.com/poster/243962612/s166/cantando-bajo-la-lluvia.webp'
    },
    {
        id: 9,
        nombre: 'Apocalypse Now',
        year: 1979,
        direccion: 'Francis Ford Coppola',
        protagonistas: ['Martin Sheen', 'Marlon Brando', 'Rover Duvall'],
        genero: ['Drama','Guerra'],
        image: 'https://images.justwatch.com/poster/300703223/s166/apocalypse-now.webp'
    },
    {
        id: 10,
        nombre: 'Goodfellas',
        year: 1990,
        direccion: 'Martin Scorsese',
        protagonistas: ['Rober De Niro', 'Ray Liotta', 'Joe Pesci'],
        genero: ['Biografia','Drama','Crimen'],
        image: 'https://images.justwatch.com/poster/237940076/s166/uno-de-los-nuestros.webp'
    },
    {
        id: 11,
        nombre: 'Toro Salvaje',
        year: 1980,
        direccion: 'Martin Scorsese',
        protagonistas: ['Rober De Niro', 'Cathy Moriarty', 'Joe Pesci'],
        genero: ['Biografia','Drama','Deporte'],
        image: 'https://images.justwatch.com/poster/307179617/s166/toro-salvaje.webp'
    },
    {
        id: 12,
        nombre: 'The Aparment',
        year: 1960,
        direccion: 'Billy Wilder',
        protagonistas: ['Jack Lemmon', 'Shirley MacLaine', 'Fred MacMurray'],
        genero: ['Comedia','Drama','romance'],
        image: 'https://images.justwatch.com/poster/127085647/s166/el-apartamento.webp'
    },
    {
        id: 13,
        nombre: 'Chinatown',
        year: 1974,
        direccion: 'Roman Polanski',
        protagonistas: ['Jack Nicholson', 'Faye Dunaway', 'Jhon Huston'],
        genero: ['Misterio','Drama','Crimen'],
        image: 'https://images.justwatch.com/poster/202436136/s166/chinatown.webp'
    },
    {
        id: 14,
        nombre: 'Hasta que Llego su Hora',
        year: 1968,
        direccion: 'Sergio Leone',
        protagonistas: ['Henry Fonda', 'Charles Bronson', 'Claudia Cardinale'],
        genero: 'Western',
        image: 'https://images.justwatch.com/poster/129242620/s166/hasta-que-llego-su-hora.webp'
    },
    {
        id: 15,
        nombre: 'The Dark knight',
        year: 2008,
        direccion: 'Christopher Nolan',
        protagonistas: ['Christian Bale', 'heath Ledger', 'Aaron Eckhart'],
        genero: ['Accion','Drama','Crimen'],
        image: 'https://images.justwatch.com/poster/161130479/s166/el-caballero-oscuro.webp'
    },
    {
        id: 16,
        nombre: 'A Space Odyssey',
        year: 1968,
        direccion: 'Stanley Kubrick',
        protagonistas: ['Keir Duellea', 'Gary Lockwood', 'William Sylvester'],
        genero: ['Aventura', 'Ciencia Ficcion'],
        image: 'https://images.justwatch.com/poster/9065741/s166/2001-una-odisea-del-espacio.webp'
    },
    {
        id: 17,
        nombre: 'Taxi Driver',
        year: 1976,
        direccion: 'Martin Scorsese',
        protagonistas: ['Rober De Niro', 'Jodie Foster', 'Cybill Shepherd'],
        genero: ['Drama','Crimen'],
        image: 'https://images.justwatch.com/poster/308916776/s166/taxi-driver.webp'
    },
    {
        id: 18,
        nombre: 'Casa Blanca',
        year: 1942,
        direccion: 'Michael Curtiz',
        protagonistas: ['Humphrey Bogart', 'Ingrid Bergman', 'Paul Henreid'],
        genero: ['Drama','Romance', 'Guerra'],
        image: 'https://images.justwatch.com/poster/300558271/s166/casablanca.webp'
    },
    {
        id: 19,
        nombre: 'El Padrino 2',
        year: 1974,
        direccion: 'Francis Ford Coppola',
        protagonistas: ['Rober De Niro', 'Al Pacino', 'Robert Duvall'],
        genero: ['Drama','Crimen'],
        image: 'https://images.justwatch.com/poster/123121270/s166/el-padrino-parte-ii.webp'
    },
    {
        id: 20,
        nombre: 'Blade Runner',
        year: 1982,
        direccion: 'Ridley Scott',
        protagonistas: ['Harrison Ford', 'Rutger Hauer', 'Sean Young'],
        genero: ['Ciencia Ficcion','Suspenso'],
        image: 'https://images.justwatch.com/poster/53055384/s166/blade-runner.webp'
    },
    {
        id: 21,
        nombre: 'El Tercer Hombre',
        year: 1949,
        direccion: 'Carol Reed',
        protagonistas: ['Orson Welles', 'Joseph Cotten', 'Alida Valli'],
        genero: ['Film Noir','Misterio','Susenso'],
        image: 'https://images.justwatch.com/poster/136410823/s166/el-tercer-hombre.webp'
    },
    {
        id: 22,
        nombre: 'La Guerra de la Galaxias Episodio IV - Una Nueva Esperanza',
        year: 1977,
        direccion: 'George Lucas',
        protagonistas: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher'],
        genero: ['Accion', 'Aventura','Fantasia'],
        image: 'https://images.justwatch.com/poster/179200179/s166/la-guerra-de-las-galaxias-episodio-iv-una-nueva-esperanza.webp'
    },
    {
        id: 23,
        nombre: 'Volver al Futuro/Regreso al Futuro',
        year: 1985,
        direccion: 'Robert Zemeckis',
        protagonistas: ['Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson'],
        genero: ['Aventura','Comedia','Ciencia Ficcion'],
        image: 'https://images.justwatch.com/poster/311236837/s166/regreso-al-futuro.webp'
    },
    {
        id: 24,
        nombre: 'El Señor de los Anillos - La Comunidad del Anillo',
        year: 2001,
        direccion: 'Peter Jackson',
        protagonistas: ['Elijah Wood', 'Ian Mckellen', 'Orlando Bloom'],
        genero: ['Accion','Drama','Aventura'],
        image: 'https://images.justwatch.com/poster/76897800/s166/el-senor-de-los-anillos-la-comunidad-del-anillo.webp'
    },
    {
        id: 25,
        nombre: 'El Bueno el Malo y el Feo',
        year: 1966,
        direccion: 'Sergio Leone',
        protagonistas: ['Clint Eastwood', 'Eli Wallach', 'lee Van Cleef'],
        genero: 'Western',
        image: 'https://images.justwatch.com/poster/249120592/s166/el-bueno-el-feo-y-el-malo.webp'
    },
    {
        id: 26,
        nombre: 'Dr. Insolito, Teléfono Rojo Volvamos Hacia Moscú',
        year: 1964,
        direccion: 'Stanley Kubrick',
        protagonistas: ['Peter Sellers', 'George C. Scott', 'Sterling Hayden'],
        genero: ['Drama','Comedia'],
        image: 'https://images.justwatch.com/poster/195716408/s166/telefono-rojo-volamos-hacia-moscu.webp'
    },
    {
        id: 27,
        nombre: 'Con Faldas y a lo Loco',
        year: 1959,
        direccion: 'Billy Wilder',
        protagonistas: ['Marilyn Monroe', 'Tony Curtis', 'Jack Lemmon'],
        genero: ['Comedia','Romance'],
        image: 'https://images.justwatch.com/poster/312372908/s166/con-faldas-y-a-lo-loco.webp'
    },
    {
        id: 28,
        nombre: 'Ciudadano Kane',
        year: 1941,
        direccion: 'Orson Welles',
        protagonistas: ['Orson Welles', 'Joseph Cotten', 'Dorothy Comingore'],
        genero: ['Drama','Misterio'],
        image: 'https://images.justwatch.com/poster/308672978/s166/ciudadano-kane.webp'
    },
    {
        id: 29,
        nombre: 'Duro de Matar - Jungla de Cristal',
        year: 1988,
        direccion: 'Jhon McTiernan',
        protagonistas: ['Bruce Willis', 'Alan Rickman', 'Bonnie Bedelia'],
        genero: ['Accion','Thriller'],
        image: 'https://images.justwatch.com/poster/310235405/s166/jungla-de-cristal.webp'
    },
    {
        id: 30,
        nombre: 'Aliens: El Regreso',
        year: 1986,
        direccion: 'James Cameron',
        protagonistas: ['Sigourney Weaver', 'Michael Biehn', 'Carrie Henn'],
        genero: ['Accion','Ciencia Ficcion'],
        image: 'https://images.justwatch.com/poster/8542107/s166/aliens-el-regreso.webp'
    },
]

