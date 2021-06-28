import React, { Component } from 'react';

import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component';

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
          title: 'footwear',
          image: footwear,
          id: 1,
          linkUrl: ''
        },
        {
          title: 'jackets',
          image: jackets,
          id: 2,
          linkUrl: ''
        },
        {
          title: 'hats',
          image: hats,
          id: 3,
          linkUrl: 'hats'
        },
        {
          title: 'mens',
          image: mens,
          size: 'large',
          id: 4,
          linkUrl: ''
        },
        {
          title: 'womens',
          image: womens,
          size: 'large',
          id: 5,
          linkUrl: ''
        }
      ]
    }
  };

  render() {
    const { sections } = this.state;

    return(
      <div className='directory-menu'>
        {
          sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps}/>
          ))
        }
      </div>
    );
  };
};

export default Directory;