import loader from '../../images/loader.gif';

const Loader = () => {
  return (
    <div>
      <img
        src={loader}
        style={{ width: '200px', margin: 'auto', display: 'block' }}
        alt="Loading..."
      />
    </div>
  );
};

export default Loader;
