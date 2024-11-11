import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';


function logPortfolioDetails() {
  
  const totalValue = calculatePortfolioValue();

  console.log(`Total Portfolio Value: $${totalValue}`);

  const allocation = getPortfolioAllocation();
  console.log('Portfolio Allocation:');

  allocation.forEach(item => {
    console.log(`${item.name}: ${item.allocationPercentage}%`);
  });
}
console.log('Initial Portfolio Details:');
logPortfolioDetails();

try {
 
  const buyTesla = new Transaction(2, 'buy', 10);
  buyTesla.process();  
 
  const sellApple = new Transaction(1, 'sell', 5);
  sellApple.process(); 
 
  const sellBond = new Transaction(3, 'sell', 3);
  sellBond.process();  
} catch (error) {
  console.log('Error during transaction:', error.message);
}


console.log('\nUpdated Portfolio Details:');
logPortfolioDetails();
//Implement main application and log portfolio details and transactions.