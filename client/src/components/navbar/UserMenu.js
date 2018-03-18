import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import { Dropdown, Menu } from 'semantic-ui-react';

const UserMenu = ({ user, signoutUser }) => {
  const renderAdminMenuItem = () => {
    if (user.role === 'admin') {
      return (
        <Dropdown.Item as={NavLink} to="/users">
          Пользователи
        </Dropdown.Item>
      );
    }
    return null;
  };

  return [
    <Menu.Item as={NavLink} to="/price" key={1}>
      Поиск по каталогу
    </Menu.Item>,
    <Menu.Item as={NavLink} to="/drugstores" key={2}>
      Аптеки
    </Menu.Item>,

    <Menu.Menu position="right" key={3}>
      <Dropdown item simple text={user.email}>
        <Dropdown.Menu>
          {renderAdminMenuItem()}
          <Dropdown.Item as={NavLink} to="/profile">
            Профиль
          </Dropdown.Item>
          <Dropdown.Item onClick={signoutUser}>Выход</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Menu>
  ];
};

UserMenu.propTypes = {
  signoutUser: PropTypes.func.isRequired
};

export default withRouter(UserMenu);
