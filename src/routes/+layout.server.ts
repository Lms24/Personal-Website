import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ route }) => {
  if (route.id === null) {
    throw redirect(301, '/home/');
  }
};
