export class UserInfo {
  email: string;
  password: string;
  id: number;
  name: string;
  belong: string;
  age: number;
  address: string;

  constructor(
    email?: string,
    password?: string,
    id?: number,
    name?: string,
    belong?: string,
    age?: number,
    address?: string
  ) {
    this.email = email;
    this.password = password;
    this.id = id;
    this.name = name;
    this.belong = belong;
    this.age = age;
    this.address = address;
  }
}
