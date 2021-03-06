import cuid from 'cuid';

export default function manageRestaurants(state = {
  restaurants: []
}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = {
        id: cuid(),
        text: action.name
      }
      return { restaurants: state.restaurants.concat(restaurant) };
      // return { ...state, bands: [...state.bands, action.name] }
    case 'DELETE_RESTAURANT':
      return {restaurants: state.restaurants.filter(r => r.id !== action.id)}
    default:
      return state;
  }
};
