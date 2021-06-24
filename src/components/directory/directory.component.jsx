import React, { Component } from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

import footwear from './photos/footwear.jpg';
import jackets from './photos/jackets.jpg';
import hats from './photos/hats.jpg';
import mens from './photos/mens.jpg';
import womens from './photos/womens.jpg';

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'FOOTWEAR',
          image: footwear,
          id: 1
        },
        {
          title: 'JACKETS',
          image: jackets,
          id: 2
        },
        {
          title: 'HATS',
          image: hats,
          id: 3
        },
        {
          title: 'MENS',
          image: mens,
          size: 'large',
          id: 4
        },
        {
          title: 'WOMENS',
          image: womens,
          size: 'large',
          id: 5
        }
      ]
    }
  };

  render() {
    const { sections } = this.state;

    return(
      <div className='directory-menu'>
        {
          sections.map(({ title, image, size, id }) => (
            <MenuItem key={id} title={title} image={image} size={size}
            />
          ))
        }
      </div>
    );
  };
};

export default Directory;