import { Route } from 'react-router-dom';
import { paths } from '../routes/paths';
import { Dashboard, Home, SignIn, SignUp, Error } from '../containers';

const pageList = [
	<Route exact path={paths.home} component={Home} />,
	<Route path={paths.signUp} component={SignUp} />,
	<Route path={paths.signIn} component={SignIn} />,
	<Route path={paths.dashboard} component={Dashboard} />,
	<Route path={paths.error} component={Error} />,
];

export default pageList;
