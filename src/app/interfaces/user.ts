export interface User {
  guid: string;
  name: {
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  giveGift: User;
  recGift: User;
}
