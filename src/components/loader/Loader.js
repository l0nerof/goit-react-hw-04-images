import css from './Loader.module.css';
import { ThreeDots } from 'react-loader-spinner';

export function Loader() {
  return (
    <div className={css.Loader}>
      <ThreeDots
        height="125"
        width="125"
        radius="9"
        color="#000"
        ariaLabel="three-dots-loading"
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
}
