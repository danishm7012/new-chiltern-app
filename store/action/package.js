//import Product from '../../models/product';

//export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const CREATE_PACKAGE = 'CREATE_PACKAGE'
export const UPDATE_PACKAGE = 'UPDATE_PACKAGE'
/*export const SET_PRODUCTS = 'SET_PRODUCTS';

export const fetchProducts = () => {
  return async (dispatch, getState) => {
    // any async code you want!
    const userId = getState().auth.userId;
    try {
      const response = await fetch(
        'https://rn-complete-guide.firebaseio.com/products.json'
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const resData = await response.json();
      const loadedProducts = [];

      for (const key in resData) {
        loadedProducts.push(
          new Product(
            key,
            resData[key].ownerId,
            resData[key].title,
            resData[key].imageUrl,
            resData[key].description,
            resData[key].price
          )
        );
      }

      dispatch({
        type: SET_PRODUCTS,
        products: loadedProducts,
        userProducts: loadedProducts.filter(prod => prod.ownerId === userId)
      });
    } catch (err) {
      // send to custom analytics server
      throw err;
    }
  };
};

export const deleteProduct = productId => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const response = await fetch(
      `https://rn-complete-guide.firebaseio.com/products/${productId}.json?auth=${token}`,
      {
        method: 'DELETE'
      }
    );

    if (!response.ok) {
      throw new Error('Something went wrong!');
    }
    dispatch({ type: DELETE_PRODUCT, pid: productId });
  };
};
 */
export const createPackage = (newData) => {
  return async (dispatch) => {
    // any async code you want!
    /* const token = getState().auth.token
    const userId = getState().auth.userId */
    const response = await fetch(
      `https://chiltern.herokuapp.com/api/package/add`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      }
    )

    const resData = await response.json()
    console.log(resData)
  }
}

export const updatePACKAGE = (id, title, price) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://rn-complete-guide.firebaseio.com/products/${id}.json`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          price,
        }),
      }
    )

    if (!response.ok) {
      throw new Error('Something went wrong!')
    }

    dispatch({
      type: UPDATE_PACKAGE,
      pid: id,
      productData: {
        title,
        price,
      },
    })
  }
}
