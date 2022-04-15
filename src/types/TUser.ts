export type TBasicUserInfo = {
  id: string;
  name: string;
  image: string;
};

export type TUserLoginInfo = {
  email: string;
  password: string;
};

export type TUserInfo = TBasicUserInfo & TUserLoginInfo;

export type TBackendUserInfo = {
  user_name: string;
  email: string;
  password: string;
  user_image: string | null;
  dbs_psswd: string;
};
