

//setTimeout(() => {
//    console.log('Hola mundo');
//}, 1000 );


const getUsuarioById = ( id, callback ) => {

    const usuario = {
        id,
        nombre: 'Adalberto'
    }

    setTimeout(() => {
        callback(usuario);
    }, 1500 );
}

getUsuarioById(11, ( {id,nombre} ) => {
    console.log( id );
    console.log( nombre.toUpperCase() );
});

// callback es una funcion que se manda como argumento a otra funcion

