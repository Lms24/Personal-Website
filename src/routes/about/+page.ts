type User = {
  id: string;
  email: string;
  about?: {
    age?: number;
  };
};
export const load = () => {
  return {
    user: {
      id: '123',
      email: 'lukas'
    } as User
  };
};
