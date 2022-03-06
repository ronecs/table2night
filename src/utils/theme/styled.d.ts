// styled.d.ts
import 'styled-components';
import { TTheme } from '@table2night/utils/theme/theme';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends TTheme {}
}
