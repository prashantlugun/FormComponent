"use client"

import Button from './Components/Button';
import Input from './Components/Input';
import Label from './Components/Label';
import Radio from './Components/Radio';
import Dropdown from './Components/Singledrop/Dropdown';
import Textarea from './Components/Textarea';

import ClientFunctionComponent from 'next';
import Checkbox from './Components/checkbox';
import { useState } from 'react';
import MultiSelectDropdown from './Components/MultiDrop/MultiSelectDropdown';
import MultiCheck from './Components/MultiCheck/MultiCheck';
import Range from './Components/Range';
import Fileupload from './Components/Fileupload';

const Home = () => {

  const [checkValue, setCheckValue] = useState('');
  const [rangeVal, setRangeVal] = useState(28);

  const updateRange = (val: any) => {
    setRangeVal(val);
  };

  const dropdownOptions = [
    { label: 'React', value: 'React' },
    { label: 'Angular', value: 'Angular' },
    { label: 'Java', value: 'Java' },
    { label: 'Node', value: 'Node' },
    { label: 'Python', value: 'Python' },
    { label: 'AI', value: 'AI' },
  ];

  const checkedValue = (e: any) => {
    if (e.target.checked) {
      setCheckValue(e.target.value)
    } else {
      setCheckValue('')
    }
  }

  return (
    <>
      <Input
        placeholder='Blank Input'
      />
      <Input
        errorText='Text Field Custom Error'
        label='Custom Error'
        placeholder='Custom Error'
      />
      <Input
        label='Name'
        placeholder='Name'
      />
      <Input
        type='email'
        label='Email'
        placeholder='Email'
        errorText='Invalid email Front'
      />
      {/* <Input
        type='password'
        label='Password'
        placeholder='Password'
        passwordVisibility
      /> */}
      <Input
        disabled
        label='Disabled'
        placeholder='Disabled'
      />
      <Input
        label='ReadOnly'
        placeholder='ReadOnly'
        value='ReadOnly'
        readOnly
      />
      <Textarea
        label='Text Area Label'
        placeholder="Text Area"
        rows={5}
      />
      <h1>Button</h1>
      <Button>Submit</Button>
      <Button disabled >Disabled</Button>
      <Button variant='danger_outline' >Outline</Button>

      <Label>Label Component</Label>
      <Radio
        label='Male'
        name='gender'
      />
      <Radio
        label='Female'
        name='gender'
      />
      <h1>CheckBox</h1>
      <Label>{checkValue}</Label>
      <Checkbox
        id="myCheckbox"
        name="myCheckbox"
        value="checkboxValue A"
        label="My Checkbox"
        // onClick={ () => console.log()}
        onClick={checkedValue}
        sx={{ color: 'red' }}
      />
      <Checkbox
        id="myCheckbox"
        name="myCheckbox"
        value="checkboxValue B"
        label="My Checkbox"
        onClick={checkedValue}
        sx={{ color: 'red' }}
      />
      <Dropdown options={dropdownOptions} onSelect={(selectedOptions: any) => {
        console.log('Single Selected options:', selectedOptions);
      }} />
      <MultiSelectDropdown options={dropdownOptions} onSelect={function (selectedOptions: string[]): void {
        console.log("Multi selectedOptions :: ", selectedOptions);
      }} />
      <MultiCheck options={dropdownOptions} onSelect={function (selectedOptions: string[]): void {
        console.log("Multi Check selectedOptions :: ", selectedOptions);
      }} />
      <h1>
        Range
      </h1>
      <Range defaultValue="58" range={rangeVal} updateRange={updateRange} />
      <h1>
        File Upload
      </h1>
      <Fileupload maxSize={5} />
    </>
  );
};

export default Home;