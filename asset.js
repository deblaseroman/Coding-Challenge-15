const assets = [
    { id: 1, name: 'Apple Stock', type: 'stock', price: 150, quantity: 100 },
    { id: 2, name: 'Tesla Stock', type: 'stock', price: 700, quantity: 50 },
    { id: 3, name: 'US Treasury Bond', type: 'bond', price: 1000, quantity: 20 },
    { id: 4, name: 'Gold ETF', type: 'stock', price: 180, quantity: 30 }
  ];
  function getAssetById(id) {
    return assets.find(asset => asset.id === id);
  }
  export {assets,getAsstesById};