import { getIcon } from '../getDishIcon';
import { DishesTitles } from '../../types';

describe('getIcon', () => {
  it('returns burger emoji for Burger dish', () => {
    expect(getIcon(DishesTitles.Burger)).toBe('🍔');
  });

  it('returns drink emoji for Drink dish', () => {
    expect(getIcon(DishesTitles.Drink)).toBe('🥤');
  });

  it('returns fish emoji for Fish dish', () => {
    expect(getIcon(DishesTitles.Fish)).toBe('🍣');
  });
});
