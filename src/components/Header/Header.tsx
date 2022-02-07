import { NavLink } from 'react-router-dom';

import style from './Header.module.css';

import { PATH } from 'routes/Route';
import { ReturnComponentType } from 'types';

const pages = [
  { id: 1, pageName: 'Главная', component: PATH.HOME_PAGE },
  { id: 2, pageName: 'Сотрудники', component: PATH.EMPLOYEES },
];

export const Header = (): ReturnComponentType => (
  <div className={style.containerBlock}>
    <ul className={style.linksBlock}>
      {pages.map(({ id, pageName, component }) => (
        <li key={id}>
          <NavLink to={component}>{pageName}</NavLink>
        </li>
      ))}
    </ul>
  </div>
);
