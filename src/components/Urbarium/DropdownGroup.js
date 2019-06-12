import React from 'react';
import Dropdown from './InputDropdown';
import { Row } from '../Structural/index';

class DDG extends React.Component {
  constructor(props) {
    super(props);
    this.count = props.options.length;
    this.selectedIndexes = Array(this.count).fill(0);
    this.state = {

      // intially only the first dropdown will be enabled and have options to display
      disabled: [false, ...Array(this.count - 1).fill(true)],
      options: [this.props.options[0], ...Array(this.count - 1).fill(undefined)],
    }
  }


  accessRecursively(array, indexes, level, count = 0) {
    // options receive are nested arrays so accesing
    console.log(array, indexes, level, count);
    return count === level ? array : this.accessRecursively(array[indexes[count]], indexes, level, count + 1);
  };


  handleChange(dropdownIndex, optionIndex) {
    this.setState( prevState => {
      // enable next dropdown in chain and disable others further down
      const newDisabled = prevState.disabled.map((current, index) => 
        index - dropdownIndex <= 0 ?  current : index - dropdownIndex === 1 ? false : true);

      // update selected indexes  
      this.selectedIndexes.splice(dropdownIndex, 1, optionIndex);


      // update available options for each dropdown depeding on selected indexes
      const newOptions = prevState.options.map((element, index) => 
        index < dropdownIndex ? element : this.accessRecursively(this.props.options[index], this.selectedIndexes, index));

      return {disabled: newDisabled, options: newOptions};
    })        
  };

  getDropdowns() {
    const result = Array(this.count).fill('');
    return result.map((_, dropdownIndex) => 
      <Dropdown
        options = {this.state.options[dropdownIndex]}
        placeholder = {this.props.placeholders[dropdownIndex]}
        disabled = {this.state.disabled[dropdownIndex]} 
        changeHandler = {(optionIndex) => this.handleChange(dropdownIndex, optionIndex)}
      />)
  }

  render() {
    return (
      <Row>
        {this.getDropdowns()}
      </Row>
    )
  }
}

// TODO: Change data structure of linked dropdowns 
// there's an object structure below but its not quite ready

const provincias = [
  "San Jose",
  "Alajuela",
  "Cartago"
];

const cantones = [
  [
    "San Jose",
    "Desamparados"
  ],
  [
    "Alajuela",
    "San Ramon"
  ],
  [
    "Cartago",
    "Turrialba"
  ]
];

const distritos = [
  [
    [
      "Carmen",
      "Merced"
    ],
    [
      "Desamparados",
      "San Miguel"
    ]
  ],
  [
    [
      "Guacimo",
      "San Isidro"
    ],
    [
      "Piedades Norte",
      "PIedades Sur"
    ]
  ],
  [
    [
      "Oriental",
      "Occidental"
    ],
    [
      "Santa Cruz",
      "Pavones"
    ]
  ]
]

DDG.defaultProps = {
  options: [provincias, cantones, distritos],
  placeholders: ["Provincia", "Canton", "Distrito"]
};

export default DDG;






// first try, have to define a better structure
const testData = {
  provincias: [
    {
      name: "San Jose",
      cantones: [
        {
          name: "San Jose",
          distritos: [
            {
              name: "Carmen"
            },
            {
              name: "Merced"
            }
          ]
        },
        {
          name: "Desampadaros",
          distritos: [
            {
              name: "Desamparados"
            },
            {
              name: "San Miguel"
            }
          ]
        }
      ]
    },
    {
      name: "Alajuela",
      cantones: [
        {
          name: "Alajuela",
          distritos: [
            {
              name: "Guacima"
            },
            {
              name: "San Isidro"
            }
          ]
        },
        {
          name: "San Ramon",
          distritos: [
            {
              name: "Piedades Norte"
            },
            {
              name: "Piedades Sur"
            }
          ]
        }
      ]
    },
    {
      name: "Cartago",
      cantones: [
        {
          name: "Cartago",
          distritos: [
            {
              name: "Oriental"
            },
            {
              name: "Occidental"
            }
          ]
        },
        {
          name: "Turrialba",
          distritos: [
            {
              name: "Santa Cruz"
            },
            {
              name: "Pavones"
            }
          ]
        }
      ]
    },
  ]
}