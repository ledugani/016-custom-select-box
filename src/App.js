import React from 'react';
import SelectBox from './features/select-box';

function App() {
  return (
    <div>
      <h1>Custom Select Box using ReactJS</h1>
      <div style={{margin: '16px', position: 'relative'}}>
        <SelectBox
        width={200}
        name="country_id"
        items={[
          { value: 'United States', id: 1 },
          { value: 'Mexico', id: 2 },
          { value: 'Canada', id: 3 }
        ]}
      />
      </div>
    </div>
  );
}

export default App;
