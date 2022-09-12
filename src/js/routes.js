import HomePage from '../pages/home.jsx';
import ButtonTestsPage from '../pages/branch_pages/button_test_page.jsx';
import InputFieldsTestsPage from '../pages/branch_pages/inputField_test_page';
import GridTestsPage from '../pages/branch_pages/grid_test_page.jsx';
import SliderTestsPage from '../pages/branch_pages/slider_test_page.jsx';
import ModalTestPage from '../pages/branch_pages/modal_test_page.jsx';

import NotFoundPage from '../pages/404.jsx';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/button-test/',
    component: ButtonTestsPage,
  },
  {
    path: '/inputFields-test/',
    component: InputFieldsTestsPage,
  },
  {
    path: '/grid-test/',
    component: GridTestsPage,
  },
  {
    path: '/slider-test/',
    component: SliderTestsPage,
  },
  {
    path: '/modal-test/',
    component: ModalTestPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
