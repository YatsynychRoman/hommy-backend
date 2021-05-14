const { House } = require('../../database')

const data = [
  {
    location: 'Ukraine, Lviv obl, Lviv, Geya St, 35B',
    price: 12321,
    photoUrl: [],
    houseType: 'Duplex',
    description: 'Hui',
  },
  {
    location: 'Ukraine, Lviv obl, Zhovkva, Peremogi St, 35B',
    price: 237474,
    photoUrl: [],
    houseType: 'Cottage',
    description: 'Hui',
  },
  {
    location: 'Ukraine, Lviv obl, Zubra, Zelena St, 35B',
    price: 76000,
    photoUrl: [],
    houseType: 'Plot',
    description: 'Hui',
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
  data.map(({ location, price, photoUrl, houseType, description }) => {
    House.create({
      location,
      price,
      photoUrl,
      houseType,
      description,
      squares: 17.81,
    })
  })
}

module.exports = {
  dummydata,
}
