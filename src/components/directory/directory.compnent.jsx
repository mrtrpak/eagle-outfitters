import React, { Component } from 'react';

import footwear from './footwear.jpg';
import jackets from './jackets.jpg';
import hats from './hats.jpg';
import mens from './mens.jpg';
import womens from './womens.jpg';

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'footwear',
          image: footwear,
          id: 1
        },
        {
          title: 'jackets',
          image: jackets,
          id: 2
        },
        {
          title: 'hats',
          image: hats,
          id: 3
        },
        {
          title: 'mens',
          image: mens,
          id: 4
        },
        {
          title: 'womens',
          image: womens,
          id: 5
        }
      ]
    }
  };

  render() {
    return(
      <div></div>
    );
  };
};

export default Directory;