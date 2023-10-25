import './Menu.css';

import MenuItem from './MenuItem';

const Menu = (props) => {
  return (
    <nav className="navigation">
      <ul className="navigation__menu">
        {props.menuItems.map((item, index) => (
          <MenuItem key={index} text={item} />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
