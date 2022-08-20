const check = 'bookstore/categories/check';

// Reducer
export default function categoriesReducer(state = [], action = {}) {
  switch (action.type) {
    // do reducer stuff
    case check:
      return 'Under Constuction';
    default:
      return state;
  }
}

// Action Creators
export function checkCategories() {
  return { type: check };
}
