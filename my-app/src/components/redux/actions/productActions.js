// Assuming these action types are defined in your actions file
export const FETCH_PRODUCTS_BEGIN = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN,
});

export const fetchProductsSuccess = (categories) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { categories },
});

export const fetchProductsFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error },
});

export function fetchProducts() {
  return dispatch => {
    dispatch(fetchProductsBegin());
    // Simulating a fetch call
    try {
      // Simulated data for categories
      const categories = [
        { id: 1, name: "Skin Care", imageUrl: "https://doctris-landing-next.vercel.app/_next/image?url=%2Fimages%2Fpharmacy%2Fskin.jpg&w=1920&q=75", path: "/category/skin-care" },
        { id: 2, name: "Sexual Health", imageUrl: "https://doctris-landing-next.vercel.app/_next/image?url=%2Fimages%2Fpharmacy%2Fsexual.jpg&w=1920&q=75", path: "/category/sexual-health" },
        // Include all categories as specified in your requirement...
      ];
      dispatch(fetchProductsSuccess(categories));
    } catch (error) {
      dispatch(fetchProductsFailure(error.toString()));
    }
  };
}
