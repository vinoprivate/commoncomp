import { useState } from 'react';

import './App.scss';
import  Dropdown  from './components/Dropdown/Dropdown';
import  Radio  from './components/Radio/Radio';
import  Toggle  from './components/Toggle/Toggle';
import  Checkbox  from './components/Checkbox/Checkbox';

const options = ['Example 1', 'Example 2', 'Example 3', 'Example 4'];

function App() {
  const [radioValue, setRadioValue] = useState('checked');
  const [toggleStates, setToggleStates] = useState({
    on: true,
    off: false,
    disabled: false
  });
  const [checkboxValue, setCheckboxValue] = useState('checked');

  return (
    <div className="container">
      <div className="section">
        <h2>States Input</h2>
        <div className="dropdowns-grid">
          <div className="dropdown-item">
            <h3>Default Dropdown</h3>
            <Dropdown options={options} />
          </div>

          <div className="dropdown-item">
            <h3>Hover Dropdown</h3>
            <Dropdown options={options} className="hover-dropdown" />
          </div>

          <div className="dropdown-item">
            <h3>Disable Dropdown</h3>
            <Dropdown options={options} disabled />
          </div>

          <div className="dropdown-item">
            <h3>Select</h3>
            <Dropdown options={options} placeholder="Select" />
          </div>

          <div className="dropdown-item">
            <h3>Multiselect</h3>
            <Dropdown
              options={options}
              placeholder="Select"
              multiSelect
            />
          </div>

          <div className="dropdown-item">
            <h3>Selected</h3>
            <Dropdown
              options={options}
              placeholder="Select"
              multiSelect
              defaultSelected={['Example 3']}
            />
          </div>
        </div>
      </div>

      <div className="section">
        <div className="controls-grid">
          <div className="control-group">
            <h2>Radio</h2>
            <div className="control-items">
              <Radio
                label="Unchecked"
                checked={radioValue === 'unchecked'}
                onChange={() => setRadioValue('unchecked')}
              />
              <Radio
                label="Hover"
                checked={radioValue === 'hover'}
                onChange={() => setRadioValue('hover')}
              />
              <Radio
                label="Checked"
                checked={radioValue === 'checked'}
                onChange={() => setRadioValue('checked')}
              />
              <Radio
                label="Disable"
                checked={radioValue === 'disabled'}
                onChange={() => setRadioValue('disabled')}
                disabled
              />
            </div>
          </div>

          <div className="control-group">
            <h2>Toggle</h2>
            <div className="control-items">
              <div className="toggle-item">
                <Toggle
                  checked={toggleStates.on}
                  onChange={() => setToggleStates(prev => ({ ...prev, on: !prev.on }))}
                />
                <span>ON</span>
              </div>
              <div className="toggle-item">
                <Toggle
                  checked={toggleStates.off}
                  onChange={() => setToggleStates(prev => ({ ...prev, off: !prev.off }))}
                />
                <span>OFF</span>
              </div>
              <div className="toggle-item">
                <Toggle disabled />
                <span>Disable</span>
              </div>
            </div>
          </div>

          <div className="control-group">
            <h2>Checkbox</h2>
            <div className="control-items">
              <Checkbox
                label="Unchecked"
                checked={checkboxValue === 'unchecked'}
                onChange={() => setCheckboxValue('unchecked')}
              />
              <Checkbox
                label="Hover"
                checked={checkboxValue === 'hover'}
                onChange={() => setCheckboxValue('hover')}
              />
              <Checkbox
                label="Checked"
                checked={checkboxValue === 'checked'}
                onChange={() => setCheckboxValue('checked')}
              />
              <Checkbox
                label="Disable"
                checked={checkboxValue === 'disabled'}
                onChange={() => setCheckboxValue('disabled')}
                disabled
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="section">
        <h2>Text Input</h2>
        <div className="inputs-grid">
          <div className="input-group">
            <h3>Default</h3>
            <TextInput placeholder="Input placeholder" />
          </div>
          
          <div className="input-group">
            <h3>Hover</h3>
            <TextInput placeholder="Input placeholder" className="hover" />
          </div>
          
          <div className="input-group">
            <h3>Disable</h3>
            <TextInput placeholder="Input placeholder" disabled />
          </div>

          <div className="input-group">
            <h3>Icon Right</h3>
            <TextInput
              placeholder="Input placeholder"
              icon="+"
              iconPosition="right"
            />
          </div>

          <div className="input-group">
            <h3>Icon Left</h3>
            <TextInput
              placeholder="Input placeholder"
              icon="+"
              iconPosition="left"
            />
          </div>

          <div className="input-group">
            <h3>Disable with Icon</h3>
            <TextInput
              placeholder="Input placeholder"
              icon="+"
              disabled
            />
          </div>

          <div className="input-group">
            <h3>Text Area</h3>
            <TextInput
              placeholder="Input placeholder"
              multiline
            />
          </div>

          <div className="input-group">
            <h3>Hover Text Area</h3>
            <TextInput
              placeholder="Input placeholder"
              multiline
              className="hover"
            />
          </div>

          <div className="input-group">
            <h3>Disable Text Area</h3>
            <TextInput
              placeholder="Input placeholder"
              multiline
              disabled
            />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;