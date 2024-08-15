export class User {
    constructor(
      public id: number,
      public name: string,
      public email: string,
      public password: string, // You might not want to store the password here for security reasons
      public rememberMe?: boolean // Optional field for "Remember Me" functionality
    ) {}
  }
  