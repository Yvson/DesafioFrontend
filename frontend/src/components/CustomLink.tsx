// React Router
import { 
    Link,
    useResolvedPath,
    useMatch,
    useLocation,
} from 'react-router-dom';

// Material UI
import { Box } from '@mui/material';

export default function CustomLink({children, to, ...props}:any) {
    let resolved = useResolvedPath(to);
    let location = useLocation();
    let match = resolved.pathname == '/' ? false || useMatch({ path: resolved.pathname, end:true}) : String(location.pathname).includes(resolved.pathname);
    const color = match ? 'white' : '#2B3846';
    return (
        <div>
            <Link
                to={to}
                >
                <Box sx={{ border:`1px solid ${color}`, borderRadius:'8px' }}>{children}</Box>
                
            </Link>
        </div>
    );
}