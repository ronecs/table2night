import { createContext, Dispatch, useContext } from 'react';
import { TBasicUserInfo } from '@table2night/types/TUser';

export type TUserInfoContext = {
  userInfo: TBasicUserInfo | undefined | null;
  setUserInfo: Dispatch<TBasicUserInfo | null>;
};

const createCtx = <ContextType,>() => {
  const ctx = createContext<ContextType | undefined>(undefined);
  const useCtx = () => {
    const c = useContext(ctx);
    if (!c) throw new Error('useCtx must be inside a Provider with a value');
    return c;
  };
  return [useCtx, ctx.Provider] as const;
};

const [useUserInfo, UserInfoProvider] = createCtx<TUserInfoContext>();

export { useUserInfo, UserInfoProvider };
