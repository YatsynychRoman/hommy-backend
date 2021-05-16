const { House } = require('../../database')

const data = [
  {
    location: 'Ukraine, Lviv obl, Lviv, Geya St, 35B',
    price: 12321,
    photoUrl: [],
    houseType: 'Duplex',
    description: 'Simple description',
    waterSupply: 'Centralized',
    heating: 'A Gas Boiler',
    warming: 'Thermoblock',
    userId: 1,
  },
  {
    location: 'Ukraine, Lviv obl, Zhovkva, Peremogi St, 35B',
    price: 237474,
    photoUrl: [],
    houseType: 'Cottage',
    description: 'Simple description',
    waterSupply: 'Centralized',
    heating: 'A Gas Boiler',
    warming: 'Thermoblock',
    userId: 1,
  },
  {
    location: 'Ukraine, Lviv obl, Zubra, Zelena St, 35B',
    price: 76000,
    photoUrl: [],
    houseType: 'Plot',
    description: 'Simple description',
    waterSupply: 'Individual',
    heating: 'Solid fuel Boiler',
    warming: 'Basalt Wool',
    userId: 1,
  },
  {
    location: 'Ukraine, Lviv obl, Sykhiv, Red St, 35B',
    price: 34555,
    photoUrl: [],
    houseType: 'Townhouse',
    description: 'Hui',
  },
  {
    location: 'Ukraine, Lviv obl, Lviv, Pasichna St, 35B',
    price: 92000,
    photoUrl: [],
    houseType: 'Townhouse',
    description: 'Hui',
  },
  {
    location: 'Ukraine, Lviv obl, Lviv, Vashingtona St, 35B',
    price: 45000,
    photoUrl: [],
    houseType: 'Quadrex',
    description: 'Hui',
  },
  {
    location: 'Ukraine, Lviv obl, Lviv, Vashingtona St, 35B',
    price: 45000,
    photoUrl: [],
    houseType: 'Quadrex',
    description: 'Hui',
  },
  {
    location: 'Ukraine, Lviv obl, Lviv, Vashingtona St, 35B',
    price: 45000,
    photoUrl: [],
    houseType: 'Quadrex',
    description: 'Hui',
  },
  {
    location: 'Ukraine, Lviv obl, Lviv, Vashingtona St, 35B',
    price: 45000,
    photoUrl: [],
    houseType: 'Quadrex',
    description: 'Hui',
  },
  {
    location: 'Ukraine, Lviv obl, Lviv, Vashingtona St, 35B',
    price: 45000,
    photoUrl: [],
    houseType: 'Quadrex',
    description: 'Hui',
  },
  {
    location: 'Ukraine, Lviv obl, Lviv, Vashingtona St, 35B',
    price: 45000,
    photoUrl: [],
    houseType: 'Quadrex',
    description: 'Hui',
  },
  {
    location: 'Ukraine, Lviv obl, Lviv, Vashingtona St, 35B',
    price: 45000,
    photoUrl: [],
    houseType: 'Quadrex',
    description: 'Hui',
  },
  {
    location: 'Ukraine, Lviv obl, Lviv, Vashingtona St, 35B',
    price: 45000,
    photoUrl: [],
    houseType: 'Quadrex',
    description: 'Hui',
  },
  {
    location: 'Ukraine, Lviv obl, Lviv, Vashingtona St, 35B',
    price: 45000,
    photoUrl: [],
    houseType: 'Quadrex',
    description: 'Hui',
  },
  {
    location: 'Ukraine, Lviv obl, Lviv, Vashingtona St, 35B',
    price: 45000,
    photoUrl: [],
    houseType: 'Quadrex',
    description: 'Hui',
  },
  {
    location: 'Ukraine, Lviv obl, Lviv, Vashingtona St, 35B',
    price: 45000,
    photoUrl: [],
    houseType: 'Quadrex',
    description: 'Hui',
  },
]

function dummydata() {
  data.map((house) => House.create({ ...house, squares: 123 }))
}

module.exports = {
  dummydata,
}
