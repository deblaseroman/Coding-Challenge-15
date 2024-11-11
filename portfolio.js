import { assets } from './asset.js';

function calculatePortfolioValue() {
  let totalValue = 0;

  assets.forEach(asset => {
    totalValue += asset.price * asset.quantity;
  });

  return totalValue;
}

function getPortfolioAllocation() {
  const totalValue = calculatePortfolioValue(); 

  return assets.map(asset => {
    const assetValue = asset.price * asset.quantity;
    const allocationPercentage = ((assetValue / totalValue) * 100).toFixed(2);
    return {
      name: asset.name,
      allocationPercentage: allocationPercentage
    };
  });
}
export { calculatePortfolioValue, getPortfolioAllocation };
//Create portfolio module with calculatePortfolioValue and getPortfolioAllocation functions.