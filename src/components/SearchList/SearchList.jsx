import { Link, useLocation } from "react-router-dom"

const SearchList = ({movies}) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(({title, name, id}) => {
        return <li key={id}><Link to={`/movies/${id}`} state={{from:location}}>{title || name}</Link></li>
      })}
    </ul>
  )
}

export default SearchList