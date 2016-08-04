import connect from '../../../utils/connect';
import InfoPage from '../components/InfoPage/InfoPage';

const phones = [
  '12345',
  '67890',
  '11111',
  '2222',
];

export default connect({ phones })(InfoPage);
