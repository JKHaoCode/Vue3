export interface user {
  id?: number;
  age?: number;
  username?: string;
  sex?: number;
}

export interface dataUser {
  data: {
    user: user
  }
}
