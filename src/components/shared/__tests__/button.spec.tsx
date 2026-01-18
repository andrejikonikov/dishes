import { test, expect } from '@playwright/experimental-ct-react';
import Button from '../button';

test.describe('Button', () => {
  test('renders with correct text', async ({ mount }) => {
    const component = await mount(<Button text="Click me" onClick={() => {}} />);
    
    await expect(component).toContainText('Click me');
  });

  test('calls onClick when clicked', async ({ mount }) => {
    let clicked = false;
    const component = await mount(
      <Button text="Click me" onClick={() => { clicked = true; }} />
    );
    
    await component.click();
    
    expect(clicked).toBe(true);
  });

  test('has button class', async ({ mount }) => {
    const component = await mount(<Button text="Test" onClick={() => {}} />);
    
    await expect(component).toHaveClass('button');
  });

  test('renders as a button element', async ({ mount }) => {
    const component = await mount(<Button text="Test" onClick={() => {}} />);
    
    await expect(component).toBeVisible();
  });
});
