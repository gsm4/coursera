var Bicicleta = require('../../models/bicicleta')

describe('Bicicleta.allBicis',() => {
    it('comienza vacio',() => {
        expect(Bicicleta.allBicis.length).toBe(0);
    })
})
beforeEach(() => {
    Bicicleta.allBicis = [];
})


describe('Bicicleta.add',() =>{
    it('agregamos una', () => {
        expect(Bicicleta.allBicis.length).toBe(0);

        var a = new Bicicleta(1, 'rojo', 'urbana', [-8.049002, -34.957637]);
        Bicicleta.add(a);

        expect(Bicicleta.allBicis.length).toBe(1);

        expect(Bicicleta.allBicis[0]).toBe(a);
    })
})

describe('Bicicleta.findById',() =>{
    it('buscamos por id', () => {

        var a = new Bicicleta(1, 'rojo', 'urbana', [-8.049002, -34.957637]);
        var b = new Bicicleta(2, 'naranja', 'urbana',[-8.049630, -34.955219]);
        Bicicleta.add(a);
        Bicicleta.add(b);
        
        var targetBici = Bicicleta.findById(1);

        expect(targetBici.id).toBe(1);
        expect(targetBici.color).toEqual(a.color);
        expect(targetBici.modelo).toEqual(a.modelo);
    })
})