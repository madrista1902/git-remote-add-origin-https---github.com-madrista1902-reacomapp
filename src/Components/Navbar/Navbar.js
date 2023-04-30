import { Link } from "react-router-dom";

const Navbar = (props) => {
  const handleSearch = (event) => {
    event.preventDefault();
    if (event.target.value === '' && (!props.filter || props.filter.rating === 0)) {
      props.onFilterChange(null);
    } else {
      props.onFilterChange({ title: event.target.value, rating: props.filter ? props.filter.rating : 0 });
    }
  };
  

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to={'/'}>List Movie</Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to={'/'}>List Movie</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/add'}>Add Movie</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/search'}>Search Movie</Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0" onSubmit={handleSearch}>
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </div>
  )
};

export default Navbar;
