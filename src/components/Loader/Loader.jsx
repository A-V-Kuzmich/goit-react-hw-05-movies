import Load from 'react-loader-spinner';
import s from './Loader.module.scss';

export function Loader() {
  return (
    <div className={s.container}>
      <Load type="TailSpin" color="#00BFFF" arialLabel="loading-indicator" />
    </div>
  );
}
