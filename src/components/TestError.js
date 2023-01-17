import React from 'react'
import ErrorBound from './ErrorBound'

describe(describe => {
  it('should render error message', () => {
    const wrapper = mount(
      <ErrorBound>
        <h1>Test</h1>
      </ErrorBound>
    );
    expect(wrapper.find('h1').text()).toBe('Test');
  });
})

