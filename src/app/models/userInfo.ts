export class UserInfo {
  email: string;
  id: number;
  name: string;
  belong: string;
  age: number;
  address: string;

  constructor(
    email?: string,
    id?: number,
    name?: string,
    belong?: string,
    age?: number,
    address?: string
  ) {
    this.email = email;
    this.id = id;
    this.name = name;
    this.belong = belong;
    this.age = age;
    this.address = address;
  }
}
