import search from '../assets/search.svg'
const Header = ({title}) => {
  return (
  <header className="header">
    <p className="title">{title}</p>
    <div className="right">
        <div className="searchbar">
            <img src={search} alt="search icon"/>
            <input type="search"  placeholder=" Search"/>
        </div>
    </div>
  </header>
  );
};

export default Header;
