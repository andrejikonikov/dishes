import { beforeMount, afterMount } from '@playwright/experimental-ct-react/hooks';
import '../src/index.css';

beforeMount(async ({ App }) => {
  // This hook runs before the component is mounted
});

afterMount(async () => {
  // This hook runs after the component is mounted
});
