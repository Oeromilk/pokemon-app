var typeInfo = [
  {
  'type': 'normal',
  'color': '#A8A77A',
  'dblDmgTo': {
    none: null
  },
  'hlfDmgTo': {
    'rock': 0.5,
    'steel': 0.5
  },
  'dblDmgFrom': {
    'fighting': 2
  },
  'hlfDmgFrom': {
    none: null
  }},
  {
  'type': 'fire',
  'color': '#EE8130',
  'dblDmgTo': {
    'bug': 2,
    'grass': 2,
    'ice': 2,
    'steel': 2
  },
  'hlfDmgTo': {
    'dragon': 0.5,
    'fire': 0.5,
    'rock': 0.5,
    'water': 0.5
  },
  'dblDmgFrom': {
    'ground': 2,
    'rock': 2,
    'water': 2
  },
  'hlfDmgFrom': {
    'bug': 0.5,
    'fairy': 0.5,
    'fire': 0.5,
    'grass': 0.5,
    'ice': 0.5,
    'steel': 0.5
  }},
  {
  'type': 'water',
  'color': '#6390F0',
  'dblDmgTo': {
    'fire': 2,
    'ground': 2,
    'rock': 2
  },
  'hlfDmgTo': {
    'dragon': 0.5,
    'grass': 0.5,
    'water': 0.5
  },
  'dblDmgFrom': {
    'electrc': 2,
    'grass': 2
  },
  'hlfDmgFrom': {
    'fire': 0.5,
    'water': 0.5,
    'ice': 0.5,
    'steel': 0.5
  }},
  {
  'type': 'electric',
  'color': '#F7D02C',
  'dblDmgTo': {
    'flying': 2,
    'water': 2
  },
  'hlfDmgTo': {
    'dragon': 0.5,
    'grass': 0.5,
    'electric': 0.5
  },
  'dblDmgFrom': {
    'ground': 2
  },
  'hlfDmgFrom': {
    'electrc': 0.5,
    'flying': 0.5,
    'steel': 0.5
  }},
  {
  'type': 'grass',
  'color': '#7AC74C',
  'dblDmgTo': {
    'ground': 2,
    'rock': 2,
    'water': 2
  },
  'hlfDmgTo': {
    'bug': 0.5,
    'dragon': 0.5,
    'fire': 0.5,
    'flying': 0.5,
    'grass': 0.5,
    'poison': 0.5,
    'steel': 0.5
  },
  'dblDmgFrom': {
    'bug': 2,
    'fire': 2,
    'flying': 2,
    'ice': 2,
    'poison': 2
  },
  'hlfDmgFrom': {
    'electrc': 0.5,
    'grass': 0.5,
    'ground': 0.5,
    'water': 0.5
  }},
  {
  'type': 'ice',
  'color': '#96D9D6',
  'dblDmgTo': {
    'dragon': 2,
    'flying': 2,
    'grass': 2,
    'ground': 2
  },
  'hlfDmgTo': {
    'fire': 0.5,
    'ice': 0.5,
    'steel': 0.5,
    'water': 0.5
  },
  'dblDmgFrom': {
    'fighting': 2,
    'fire': 2,
    'rock': 2,
    'steel': 2
  },
  'hlfDmgFrom': {
    'ice': 0.5
  }},
  {
  'type': 'fighting',
  'color': '#C22E28',
  'dblDmgTo': {
    'dark': 2,
    'ice': 2,
    'normal': 2,
    'rock': 2,
    'steel': 2
  },
  'hlfDmgTo': {
    'bug': 0.5,
    'fairy': 0.5,
    'poison': 0.5,
    'psychic': 0.5
  },
  'dblDmgFrom': {
    'fairy': 2,
    'flying': 2,
    'psychic': 2
  },
  'hlfDmgFrom': {
    'bug': 0.5,
    'dark': 0.5,
    'rock': 0.5
  }},
  {
  'type': 'poison',
  'color': '#A33EA1',
  'dblDmgTo': {
    'grass': 2,
    'fairy': 2
  },
  'hlfDmgTo': {
    'ghost': 0.5,
    'ground': 0.5,
    'poison': 0.5,
    'rock': 0.5
  },
  'dblDmgFrom': {
    'ground': 2,
    'psychic': 2
  },
  'hlfDmgFrom': {
    'bug': 0.5,
    'fairy': 0.5,
    'fighting': 0.5,
    'grass': 0.5,
    'poison': 0.5
  }},
  {
  'type': 'ground',
  'color': '#E2BF65',
  'dblDmgTo': {
    'electric': 2,
    'fire': 2,
    'poison': 2,
    'rock': 2,
    'steel': 2
  },
  'hlfDmgTo': {
    'bug': 0.5,
    'grass': 0.5
  },
  'dblDmgFrom': {
    'grass': 2,
    'ice': 2,
    'water': 2
  },
  'hlfDmgFrom': {
    'poison': 0.5,
    'rock': 0.5
  }},
  {
  'type': 'flying',
  'color': '#A98FF3',
  'dblDmgTo': {
    'bug': 2,
    'fighting': 2,
    'grass': 2
  },
  'hlfDmgTo': {
    'electric': 0.5,
    'rock': 0.5,
    'steel': 0.5
  },
  'dblDmgFrom': {
    'electric': 2,
    'ice': 2,
    'rock': 2
  },
  'hlfDmgFrom': {
    'bug': 0.5,
    'fighting': 0.5,
    'grass': 0.5
  }},
  {
  'type': 'psychic',
  'color': '#F95587',
  'dblDmgTo': {
    'fighting': 2,
    'poison': 2
  },
  'hlfDmgTo': {
    'psychic': 0.5,
    'steel': 0.5
  },
  'dblDmgFrom': {
    'bug': 2,
    'dark': 2,
    'ghost': 2
  },
  'hlfDmgFrom': {
    'fighting': 0.5,
    'psychic': 0.5
  }},
  {
  'type': 'bug',
  'color': '#A6B91A',
  'dblDmgTo': {
    'psychic': 2,
    'grass': 2,
    'dark': 2
  },
  'hlfDmgTo': {
    'fighting': 0.5,
    'steel': 0.5,
    'fire': 0.5,
    'flying': 0.5,
    'ghost': 0.5,
    'poison': 0.5,
    'fairy': 0.5
  },
  'dblDmgFrom': {
    'fire': 2,
    'flying': 2,
    'rock': 2
  },
  'hlfDmgFrom': {
    'fighting': 0.5,
    'grass': 0.5,
    'ground': 0.5
  }},
  {
  'type': 'rock',
  'color': '#B6A136',
  'dblDmgTo': {
    'bug': 2,
    'fire': 2,
    'flying': 2,
    'ice': 2
  },
  'hlfDmgTo': {
    'fighting': 0.5,
    'ground': 0.5,
    'steel': 0.5
  },
  'dblDmgFrom': {
    'fighting': 2,
    'grass': 2,
    'ground': 2,
    'steel': 2,
    'water': 2
  },
  'hlfDmgFrom': {
    'fire': 0.5,
    'flying': 0.5,
    'normal': 0.5,
    'poison': 0.5
  }},
  {
  'type': 'ghost',
  'color': '#735797',
  'dblDmgTo': {
    'ghost': 2,
    'psychic': 2,
  },
  'hlfDmgTo': {
    'dark': 0.5
  },
  'dblDmgFrom': {
    'ghost': 2,
    'dark': 2
  },
  'hlfDmgFrom': {
    'bug': 0.5,
    'poison': 0.5
  }},
  {
  'type': 'dragon',
  'color': '#6F35FC',
  'dblDmgTo': {
    'dragon': 2
  },
  'hlfDmgTo': {
    'steel': 0.5
  },
  'dblDmgFrom': {
    'dragon': 2,
    'ice': 2,
    'fairy': 2
  },
  'hlfDmgFrom': {
    'electric': 0.5,
    'fire': 0.5,
    'grass': 0.5,
    'water': 0.5
  }},
  {
  'type': 'dark',
  'color': '#705746',
  'dblDmgTo': {
    'ghost': 2,
    'psychic': 2
  },
  'hlfDmgTo': {
    'dark': 0.5,
    'fighting': 0.5,
    'fairy': 0.5
  },
  'dblDmgFrom': {
    'bug': 2,
    'fighting': 2,
    'fairy': 2
  },
  'hlfDmgFrom': {
    'dark': 0.5,
    'ghost': 0.5
  }},
  {
  'type': 'steel',
  'color': '#B7B7CE',
  'dblDmgTo': {
    'fairy': 2,
    'ice': 2,
    'rock': 2
  },
  'hlfDmgTo': {
    'electric': 0.5,
    'fire': 0.5,
    'steel': 0.5,
    'water': 0.5
  },
  'dblDmgFrom': {
    'fighting': 2,
    'fire': 2,
    'ground': 2
  },
  'hlfDmgFrom': {
    'bug': 0.5,
    'drgon': 0.5,
    'fairy': 0.5,
    'flying': 0.5,
    'grass': 0.5,
    'ice': 0.5,
    'normal': 0.5,
    'psychic': 0.5,
    'rock': 0.5,
    'steel': 0.5
  }},
  {
  'type': 'fairy',
  'color': '#D685AD',
  'dblDmgTo': {
    'dark': 2,
    'dragon': 2,
    'fighting': 2
  },
  'hlfDmgTo': {
    'fire': 0.5,
    'poison': 0.5,
    'steel': 0.5
  },
  'dblDmgFrom': {
    'poison': 0.5,
    'steel': 0.5
  },
  'hlfDmgFrom': {
    'bug': 0.5,
    'dark': 0.5,
    'fighting': 0.5
  }}
];

module.exports = {
  typeInfo: typeInfo
};
