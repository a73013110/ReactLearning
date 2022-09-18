import { NavLink, Outlet, useLocation } from 'umi';
import './index.less';

export default function Layout() {
    const location = useLocation();
	const path = location.pathname.replaceAll("/", "").toUpperCase();
    if (path === "CITY" || path.includes("DETAIL") ) {
        return <div><Outlet /></div>
    }

	return (
		<div>
			<Outlet />

			<ul>
				<li>
					<NavLink to="/film">Film</NavLink>
				</li>
				<li>
					<NavLink to="/cinema">Cinema</NavLink>
				</li>
				<li>
					<NavLink to="/center">Center</NavLink>
				</li>
			</ul>
		</div>
	);
}
