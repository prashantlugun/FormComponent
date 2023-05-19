"use client"

import './Dropdown.css';
import React, { ChangeEvent, useState } from 'react';
import { DropdownProps } from './type';
import Button from '../Button';

const Dropdown = ({
  options,
  onSelect,
  disabled,
  autofocus,
  label,
  required,
}: DropdownProps) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [searchText, setSearchText] = useState('');

  const handleOptionToggle = (option: string) => {
    setSelectedOption(option);
    setSearchText('');
  };

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const filteredOptions: any[] = options.filter((option: any) =>
    option.label.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleButtonClick = () => {
    if (selectedOption) {
      onSelect?.([selectedOption]);
      setSelectedOption('');
    }
  };

  return (
    <div className='dropdown'>
      <div
        className={`dropdown-btn ${disabled ? '' : isActive ? 'dropdown-btn-before-active' : ''}`}
        onClick={() => setIsActive(disabled ? false : !isActive)}
      >
        {selectedOption ? (
          <div className="dropdown-selected">{selectedOption}</div>
        ) : (
          <div className="dropdown-placeholder">Select an option</div>
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
                  className={`dropdown-item ${selectedOption === option.value ? 'selected' : ''}`}
                  onClick={() => handleOptionToggle(option.value)}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>

        <Button variant='primary_outline' disabled={disabled ? true : false} onClick={handleButtonClick}>Submit</Button>
      </div>

    </div>
  );
};

export default Dropdown;

