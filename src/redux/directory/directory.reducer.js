import hats from './photos/hats.jpg';
import jackets from './photos/jackets.jpg';
import footwear from './photos/footwear.jpg';
import womens from './photos/womens.jpg';
import mens from './photos/mens.jpg';

const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl: hats,
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl: jackets,
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'footwear',
      imageUrl: footwear,
      id: 3,
      linkUrl: 'shop/footwear'
    },
    {
      title: 'womens',
      imageUrl: womens,
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'mens',
      imageUrl: mens,
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    }
  ]
};


export const directoryReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default:
      return state;
  };
};