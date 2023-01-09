import { BadRequestError, NotFoundError } from "../exceptions";

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

  static find(id) {
    let user = users.find((u) => u.id == id);
    if (!user) {
      throw new NotFoundError("Ce user n'existe pas");
    }
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

  static delete(id) {
    let userIndex = users.findIndex((u) => u.id == id);
    if (userIndex === -1) {
      throw new NotFoundError("L'utilisateur n'existe pas");
    }
    users.splice(userIndex, 1);
    return users;
  }
}

export default UserService
