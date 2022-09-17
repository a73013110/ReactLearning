import { NavLink, Outlet } from 'umi';
import './index.less';

export default function Layout() {
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
