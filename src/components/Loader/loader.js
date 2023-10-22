import { Circles } from 'react-loader-spinner';

const wrapperStyle = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
};
export const Loader = () => {
  return (
    <div style={wrapperStyle}>
      <Circles
        height="80"
        width="80"
        color="#3470ff"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
