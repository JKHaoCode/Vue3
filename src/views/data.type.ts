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

export interface userList {
  data: {
    list?: user[];
    pagination?: {
      current: number;
      pageSize: number;
      total: number;
    },
  }
}
