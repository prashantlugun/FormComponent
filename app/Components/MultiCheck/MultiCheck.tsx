"use client"


import React, { useState, ChangeEvent } from 'react';
import { MultiCheck } from './type';
import './Dropdown.css';
import Button from '../Button';

interface Option {
  value: string;
  label: string;
}

const MultiCheck: React.FC<MultiCheck> = ({
  options,
  onSelect,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [searchText, setSearchText] = useState('');

  const handleOptionToggle = (option: Option) => {
    if (selectedOptions.includes(option.value)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option.value));
    } else {
      setSelectedOptions([...selectedOptions, option.value]);
      setSearchText('')
    }
  };

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

//   const handleButtonClick = () => {
//     onSelect(selectedOptions);
//   };

  const filteredOptions: any[] = options.filter((option: any) =>
    option.label.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleButtonClick = () => {
    setSelectedOptions([]);
    onSelect(selectedOptions);
  };

  return (
    <div className='dropdown'>
      <div
        className={`dropdown-btn ${isActive ? 'dropdown-btn-before-active' : ''}`}
        onClick={() => setIsActive(!isActive)}
      >
        {selectedOptions.length > 0 ? (
          <div className="dropdown-selected">{selectedOptions.join(', ')}</div>
        ) : (
          <div className="dropdown-placeholder">Select options</div>
        )}

        {isActive && (
          <div className="dropdown-content"
          onClick={(e) => e.stopPropagation()}
          >
            <input
            className='dropdown-search'
              type="text"
              placeholder="Search..."
              value={searchText}
              onChange={handleSearchInputChange}
            />

            {filteredOptions.map((option: Option) => (
              <div key={option.value} 
              className={`dropdown-item ${selectedOptions.includes(option.value) ? 'selected' : ''}`}
              onClick={() => handleOptionToggle(option)}
              >
                <input
                
                  type="checkbox"
                  checked={selectedOptions.includes(option.value)}
                  onChange={() => handleOptionToggle(option)}
                />
                {option.label}
              </div>
            ))}
          </div>
        )}

      <Button variant='primary_outline' onClick={handleButtonClick}>Submit</Button>
      </div>
    </div>
  );
};

export default MultiCheck;
