import css from './Button.module.css';

export function Button({ loadMore }) {
  return (
    <div className={css.Wrapper}>
      <button type="button" className={css.Button} onClick={loadMore}>
        Load more
      </button>
    </div>
  );
}
