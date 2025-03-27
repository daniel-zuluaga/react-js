import React from 'react';
import '../components/css/TodoInputSearch.css'

function TodoInputSearch({searchValue, setSearchValue}) {

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search by example: cortar cebolla" 
        className="floating-input" 
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value)
        }
      }/>
    </div>
  );
}

export { TodoInputSearch };
