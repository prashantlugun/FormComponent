"use client"

import React, { useState, ChangeEvent } from 'react';
import { MultiSelectDropdownProps } from './type';
import './Dropdown.css';
import Button from '../Button';

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({
  options,
  onSelect,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [searchText, setSearchText] = useState('');

  const handleOptionToggle = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
      setSearchText('')
    }
  };

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

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
        <div>


          {isActive && (
            <div
              className="dropdown-content"
              onClick={(e) => e.stopPropagation()} // Prevent closing on click inside the dropdown content

            >
              <input
                className='dropdown-search'
                type="text"
                placeholder="Search..."
                value={searchText}
                onChange={handleSearchInputChange}
              />
              {filteredOptions.map((option: any) => (
                <div
                  key={option.value}
                  className={`dropdown-item ${selectedOptions.includes(option.value) ? 'selected' : ''}`}
                  onClick={() => handleOptionToggle(option.value)}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>

        <Button variant='primary_outline' onClick={handleButtonClick}>Submit</Button>
      </div>

    </div>
  );
};

export default MultiSelectDropdown;
