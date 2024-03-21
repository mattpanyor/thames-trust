class User {
  constructor(firstName = '', lastName = '', emailAddress = '', username = '', password = '') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailAddress = emailAddress;
    this.username = username;
    this.password = password;
  }
}

export default User;
