import React from 'react';
import s from './Filter.module.css'

const Filter = ({value, onChange}) => {
  return (
      <>
      <p className={s.title}>Find contacts by name</p>
         <label>
          <input
            type="text"
            name="filter"
            value={value}
          onChange={onChange}
          className={s.input}
          />
      </label>
      </>
    )
}

export default Filter;
