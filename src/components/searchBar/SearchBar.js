import css from './SearchBar.module.css';
import { useState } from 'react';

export function SearchBar({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputValueChange = event => {
    setInputValue(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (inputValue.trim() === '') {
      alert('Put more informartion');
      return;
    }

    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.Form} onSubmit={handleSubmit}>
        <button type="submit" className={css.FormButton}>
          <span className={css.FormButtonLabel}>Search</span>
        </button>

        <input
          className={css.FormInput}
          type="text"
          autoComplete="off"
          autoFocus
          value={inputValue}
          onChange={handleInputValueChange}
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
