interface ITech {
  title: string,
  experience: number,
}

interface IUser {
  name?: string;
  email: string;
  password: string;
  techs: Array<string | ITech>;
}

export default function createUser({ name, email, password, techs }: IUser) {
  const user = {
    name,
    email,
    password,
    techs,
  };

  return user;
}
