import type { RequestHandler } from './$types';
import { foo } from '@monorepo/core';

export const GET: RequestHandler = () => {
  return new Response(foo.toString());
}