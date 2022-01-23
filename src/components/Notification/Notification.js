import PropTypes from 'prop-types';
import allert from 'sweetalert';

export function Notification(title, text) {
  allert({
    title: `${title}`,
    text: `${text}`,
    icon: 'warning',
    button: false,
    timer: 2000,
  });
}

Notification.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};
