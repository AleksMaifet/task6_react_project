import { Header } from 'components/Header';
import { RoutesBlock } from 'routes';
import { ReturnComponentType } from 'types';

export const App = (): ReturnComponentType => (
  <>
    <Header />
    <RoutesBlock />
  </>
);
