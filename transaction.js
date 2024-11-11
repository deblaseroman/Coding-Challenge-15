import { assets, getAssetById } from './asset.js';

class Transaction {
  constructor(assetId, type, quantity) {
    this.assetId = assetId; 
    this.type = type; 
    this.quantity = quantity;  
  }

  
  process() {
    const asset = getAssetById(this.assetId); 
    if (!asset) {
      throw new Error('Asset not found');
    }

    if (this.type === 'buy') {
      
      asset.quantity += this.quantity;
      console.log(`Bought ${this.quantity} units of ${asset.name}. New quantity: ${asset.quantity}`);
    } else if (this.type === 'sell') {
      
      if (asset.quantity < this.quantity) {
        throw new Error(`Insufficient quantity for sale of ${asset.name}`);
      }
      asset.quantity -= this.quantity;  
      console.log(`Sold ${this.quantity} units of ${asset.name}. New quantity: ${asset.quantity}`);
    }
  }
}
export { Transaction };
//Create transaction module with Transaction class.

