import connect from '../../../utils/connect';
import LandingPage from '../components/LandingPage/LandingPage';

const name = 'Jack';

export default connect({ name })(LandingPage);
