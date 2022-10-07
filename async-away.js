const empleados = [
    {
        id: 1,
        nombre: 'Adalberto'
    },
    {
        id: 2,
        nombre: 'Roberto'
    },
    {
        id: 3,
        nombre: 'Marlon'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];

const getempleados = (id) => {    

    return new Promise((resolve, reject) => {

        const empleado = empleados.find((e) => e.id === id)?.nombre;

        (empleado)
            ? resolve(empleado)
            : reject(`no existe empleado con id ${id}`);
    } );
    
}

const getSalario = (id) => {    

    return new Promise((resolve, reject) => {

        const salario = salarios.find((s) => s.id === id)?.salario;

        (salario)
            ? resolve(salario)
            : reject(`no existe salario con id ${id}`);
    } );
    
}

const getInfoUsuarios = async(id) => {

    try {
        const empleado = await getempleados(id);
        const salario = await getSalario(id);

        return `El Empleado ${empleado} tiene un salario de ${salario}`;
        
    } catch (error) {
        throw error;
    }
    
    

} 

const id = 10;

getInfoUsuarios(id)
    .then( msg => console.log(msg))
    .catch(err => console.log(err))

