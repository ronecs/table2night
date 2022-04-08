export type TBasicUserInfo = {
  id: string;
  name: string;
  image: string;
};

export type TUserInfo = TBasicUserInfo & {
  email: string;
  password: string;
};
