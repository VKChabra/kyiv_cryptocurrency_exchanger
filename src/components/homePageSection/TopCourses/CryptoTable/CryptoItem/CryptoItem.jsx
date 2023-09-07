import { getCryptoData } from 'services/API/whitebit-api';

const CryptoItem = () => {
  async function fetchMarketData() {
    try {
      const data = await getCryptoData();
      console.log(data);
    } catch (error) {
      console.error('Failed to fetch market data:', error);
    }
  }
  fetchMarketData();
  return (
    <div>
      {/* {crypto.map(item => (
        <div key={item.name}>
          <p>{item.name}</p>
          <p>{item.last}</p>
          <p>{item.percentChange}</p>
          <p>{item.volume}</p>
        </div>
      ))} */}
    </div>
  );
};

export default CryptoItem;
