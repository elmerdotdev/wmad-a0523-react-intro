import Logo from './Logo';
import Menu from './Menu';
import Welcome from './Welcome';

const Header = () => {
  const popUp = () => {
    alert('Hello!');
  };

  const menuArray = [
    {
      title: 'Home',
      url: 'https://www.google.com',
    },
    {
      title: 'Services',
      url: 'https://www.google.com/services',
    },
  ];

  return (
    <header>
      <Logo />
      <Menu menuItems={menuArray} />
      <Welcome
        alert={popUp}
        firstname="Elmer"
        lastname="Balbin"
        address="Vancouver"
      />
    </header>
  );
};

export default Header;
