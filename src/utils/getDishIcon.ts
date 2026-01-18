import {
  DishesTitles,
  type DishesTitles as DishesTitlesType,
} from '../types'

export function getIcon(title: DishesTitlesType): string {
  switch (title) {
    case DishesTitles.Burger:
      return '🍔';
    case DishesTitles.Drink:
      return '🥤';
    case DishesTitles.Fish:
      return '🍣';

    default: {
      const _exhaustiveCheck: never = title
      return _exhaustiveCheck;
    }
  }
}
