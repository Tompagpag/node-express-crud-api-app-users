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

  static getUser(id) {
    const user = users.find((user) => user.id === id);
    return user;
  }

  static create({ nom, prenom, email }) {
    let newId = Math.max(...users.map((u) => u.id), 0) + 1;
    let isAlreadyIn = users.some((u) => u.email === email);
    if (isAlreadyIn) {
      throw new BadRequestError("Cet utilisateur existe déjà");
    }
    users = [...users, { id: newId, nom, prenom, email }];
    return users;
  }
}

export default UserService
