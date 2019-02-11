import moment from 'moment';

export default (date, format = 'MMM DD, YYYY') => (
  moment(date).format(format)
);
