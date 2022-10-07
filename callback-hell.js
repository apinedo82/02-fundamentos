
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

const getempleados = (id, callback) => {

    const empleado = empleados.find((e) => e.id === id)?.nombre;

    if (empleado){
        callback (null, empleado);
    } else {
        callback (` empleado con id ${id} no existe`);
    }
    
}

const getSalario = (id, callback) => {

    const salario = salarios.find((s) => s.id === id)?.salario;

    if (salario){
        callback (null, salario);
    } else {
        callback (` salario con id ${id} no existe`);
    }
    
}

const id = 3;

getempleados(id, (err, empleado) => {
    if (err){
        console.log('!!!ERROR');
        return console.log(err);
    } 
    
    getSalario(id, (err, salario) => {
        if (err){
            return console.log(err);
        } 
            console.log('El empleado', empleado, 'tiene un salario de:', salario);
    });   
});


