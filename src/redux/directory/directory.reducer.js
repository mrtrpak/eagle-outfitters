import footwear from './photos/footwear.jpg';
import jackets from './photos/jackets.jpg';
import hats from './photos/hats.jpg';
import mens from './photos/mens.jpg';
import womens from './photos/womens.jpg';

const INITIAL_STATE = {
  sections: [
    {
      title: 'footwear',
      image: footwear,
      id: 1,
      linkUrl: 'shop/footwear'
    },
    {
      title: 'jackets',
      image: jackets,
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'hats',
      image: hats,
      id: 3,
      linkUrl: 'shop/hats'
    },
    {
      title: 'mens',
      image: mens,
      size: 'large',
      id: 4,
      linkUrl: 'shop/mens'
    },
    {
      title: 'womens',
      image: womens,
      size: 'large',
      id: 5,
      linkUrl: 'shop/womens'
    }
  ]
};

export const directoryReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default:
      return state;
  };
};