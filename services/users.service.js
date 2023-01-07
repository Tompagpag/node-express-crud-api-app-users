let users = [
    {
    id: 1,
    nom: "toto",
    prenom: "tata",
    email: "toto@mail.com",
  },
    {
    id: 2,
    nom: "dupont",
    prenom: "jeanmi",
    email: "jeanmidup@mail.com",
  },
];

class UserService {

  static list() {
    return users;
  }
}

export default UserService
