const products = [
    { id: "1", name: "Heineken", description: "Cerveza Heineken Lata 473ml. Pack x 6 unidades", price: 2938, stock: 6, category: "beers", img: "../img/heineken.jpg" },
    { id: "2", name: "Quilmes", description: "Cerveza Quilmes Clásica American Adjunct Lager Lata 473ml. Pack x 6 unidades", price: 1770, stock: 14, category: "beers", img: "../img/quilmes.jpg" },
    { id: "3", name: "Stella Artois", description: "Cerveza Stella Artois European Pale Lager Lata 473ml. Pack x 6 unidades", price: 2393, stock: 8, category: "beers", img: "../img/stella_artois.jpg" },
    { id: "4", name: "Andes Origen", description: "Cerveza Andes Origen Rubia Lata 473ml. Pack x 6 unidades", price: 1820, stock: 12, category: "beers", img: "../img/andes_rubia.jpg" },
    { id: "5", name: "Rabieta", description: "Cerveza Rabieta Red Honey 473ml. Pack x 6 unidades", price: 2520, stock: 5, category: "beers", img: "../img/rabieta.jpg" },
    { id: "6", name: "Artesanal Pampa", description: "Cerveza Artesanal Pampa Cream Stout 473ml. Pack x 6 unidades", price: 2160, stock: 9, category: "beers", img: "../img/pampa_stout.jpg" },

    { id: "7", name: "Grant's", description: "Whisky Grant's Triple Wood Blend Escoces 750ml. Pack x 2 unidades", price: 10190, stock: 4, category: "distilled", img: "../img/grants.jpg" },
    { id: "8", name: "Chivas Regal", description: "Whisky Chivas Regal 15 Años 700ml.", price: 14282, stock: 5, category: "distilled", img: "../img/chivas_regal.jpg" },
    { id: "9", name: "Aconcagua", description: "Gin Aconcagua Edicion Especial London Dry 750ml. Pack x 3 unidades", price: 12749, stock: 6, category: "distilled", img: "../img/aconcagua.jpg" },
    { id: "10", name: "Kunuk 5973", description: "Gin Kunuk 5973 Mendoza Craft 750ml. Pack x 3 unidades", price: 14329, stock: 4, category: "distilled", img: "../img/kunuk.jpg" },
    { id: "11", name: "Argentina Wild", description: "Gin Argentina Wild Mendoza Argentina 750ml. Pack x 4 unidades", price: 15984, stock: 5, category: "distilled", img: "../img/argentina_wild.jpg" },
    { id: "12", name: "Smirnoff", description: "Vodka Smirnoff Rasberry Saborizado 700ml. Pack x 3 unidades", price: 6137, stock: 6, category: "distilled", img: "../img/smirnoff.jpg" },

    { id: "13", name: "Coca Cola", description: "Gaseosa Coca Cola Sabor Original Lata 354ml. Pack x 6 unidades", price: 2528, stock: 7, category: "without-alcohol", img: "../img/coca_cola.jpg" },
    { id: "14", name: "Seven Up", description: "Gaseosa Seven Up Lata 354ml. Pack x 6 unidades", price: 1313, stock: 8, category: "without-alcohol", img: "../img/seven_up.jpg" },
    { id: "15", name: "Pepsi", description: "Gaseosa Pepsi Sabor Original Lata 354ml. Pack x 6 unidades", price: 1312, stock: 9, category: "without-alcohol", img: "../img/pepsi.jpg" },
    { id: "16", name: "Monster Energy", description: "Monster Energy Sabor Original Lata 473ml. Pack x 6 unidades", price: 3055, stock: 4, category: "without-alcohol", img: "../img/monster_energy.jpg" },
    { id: "17", name: "Speed", description: "Energizante Speed Unlimited Lata 250ml. Pack x 6 unidades", price: 1976, stock: 8, category: "without-alcohol", img: "../img/speed.jpg" },
    { id: "18", name: "Paso De Los Toros", description: "Agua Tónica Paso De Los Toros Lata 269ml. Pack x 12 unidades", price: 2499, stock: 6, category: "without-alcohol", img: "../img/paso_toros.jpg" },

    { id: "19", name: "Nieto Senetiner", description: "Vino Nieto Senetiner Malbec 750ml. Caja x 6 unidades", price: 10500, stock: 8, category: "wines", img: "../img/nieto_senetiner.jpg" },
    { id: "20", name: "Correntoso", description: "Vino Tinto Malbec Correntoso Patagonia Premium 750ml. Caja x 6 unidades", price: 10335, stock: 10, category: "wines", img: "../img/correntoso.jpg" },
    { id: "21", name: "Nicasia", description: "Vino Nicasia Red Blend Cabernet Franc 750ml. Caja x 6 unidades", price: 13495, stock: 7, category: "wines", img: "../img/nicasia.jpg" },
    { id: "22", name: "Luca", description: "Vino Luca Old Vine Malbec Laura Catena 750ml. Caja x 6 unidades", price: 40422, stock: 5, category: "wines", img: "../img/luca.jpg" },
    { id: "23", name: "Casillero del Diablo", description: "Vino Casillero del Diablo Reserva Malbec 750ml. Caja x 6 unidades", price: 11200, stock: 6, category: "wines", img: "../img/casillero_diablo.jpg" },
    { id: "24", name: "Trumpeter", description: "Vino Trumpeter Cabernet Sauvignon 750ml. Caja x 6 unidades", price: 11802, stock: 8, category: "wines", img: "../img/trumpeter.jpg" }    
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 100)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const product = products.find(prod => prod.id === id);
            resolve(product);
        }, 100)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const product = products.filter(prod => prod.category === category);
            resolve(product);
        }, 100)
    })
}
