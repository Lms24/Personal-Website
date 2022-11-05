import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ routeId }) => {
  if (routeId === null) {
    throw redirect(301, '/home/');
  }
};
