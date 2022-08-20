import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { checkCategories } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories, shallowEqual);

  const performCheck = () => {
    dispatch(checkCategories());
    const h2 = document.querySelector('.header');
    h2.innerHTML = categories;
  };
  return (
    <>
      <h2 className="header"> </h2>
      <button type="button" onClick={performCheck}>Check status</button>
    </>
  );
};
export default Categories;
