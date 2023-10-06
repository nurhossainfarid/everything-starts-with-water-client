import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CategoryLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{backgroundColor: match ? '#2A99FF' : 'white' , color: match ? 'white': '#2A99FF',fontFamily: 'Outfit', borderRadius: '10px'}}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
}

export default CategoryLink;