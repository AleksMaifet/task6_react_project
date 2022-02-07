import { Route, Routes } from 'react-router-dom';

import { EmployeePage } from 'components/EmployeePage/EmployeePage';
import { HomePage } from 'components/HomePage';
import { ReturnComponentType } from 'types';

export const PATH = {
  HOME_PAGE: '/',
  EMPLOYEES: '/employees',
};

export const RoutesBlock = (): ReturnComponentType => (
  <Routes>
    <Route path={PATH.HOME_PAGE} element={<HomePage />} />
    <Route path={PATH.EMPLOYEES} element={<EmployeePage />} />
  </Routes>
);
