const MenuItem = (props) => {
  return (
    <li className="navigation__menu__item">
      <a href={props.text.url}>{props.text.title}</a>
    </li>
  );
};

export default MenuItem;
