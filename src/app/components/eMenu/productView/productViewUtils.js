export function getPrice(rateInfo) {
    return rateInfo.length ? getDealerCost(rateInfo[0]) : 0;
}

export function getDealerCost(rateInfo) {
    let dealerCost = 0;
    let levelLookUp = rateInfo.Levels[0];
    while (levelLookUp) {
      if (levelLookUp.RateInfo && levelLookUp.RateInfo.Rates[0]) {
        dealerCost = levelLookUp.RateInfo.Rates[0].DealerCost;
        levelLookUp.RateInfo.Rates[0].Options.map(item => {
          if (item.IsSelected) {
            dealerCost += item.NetRate;
          }
        })
      }
      levelLookUp = levelLookUp.Levels[0];
    }
    return dealerCost;
}
  
export  function packageTypesState(selectedProductPackage, id) {
    const groupedProvider = groupBy(selectedProductPackage, 'id');
    let result = {
        isPlan1Selected: false,
        isPlan2Selected: false,
        isPlan3Selected: false,
        isPlan4Selected: false,
        plan1: null,
        plan2: null,
        plan3: null,
        plan4: null

    };
    if (groupedProvider[id] && groupedProvider[id].length) {
        groupedProvider[id].map(item => {
        switch (item.planName) {
            case 'plan1':
            result.isPlan1Selected = true;
            result.plan1 = 'plan1';
            break;
            case 'plan2':
            result.isPlan2Selected = true;
            result.plan2 = 'plan2';
            break;
            case 'plan3':
            result.isPlan3Selected = true;
            result.plan3 = 'plan3';
            break;
            case 'plan4':
            result.isPlan4Selected = true;
            result.plan4 = 'plan4';
            break;
        }
        });
    }
    return result;
}

export function getProductRateKey(props, state) {
    if(state.productCode !== null)
      return `${state.slectedProductInfo.id}-${state.providerId}-${state.productCode}-${state.providerCode}`;
    else  return `${state.slectedProductInfo.id}-${state.providerId}-NR-${state.providerCode}`;
}
  
export function getSelectedProvider(productId, providerList, userPrefernce) {
    let selectedIndex = 0;
    for (const product in userPrefernce) {
      providerList.map((provider, index) => {
        if (provider.provider_code == product.provider_cd && productId == product.dlr_prod_id) {
          selectedIndex = index;
          return selectedIndex;
        }
      });
    }
    return selectedIndex;
}

export function getProductPackageKey(props, state, plan) {
    const productId = state.slectedProductInfo.id;
    const providerId = state.providerId;
    const productCode = state.productCode;
    const providerCode = state.providerCode;
    const packageType = plan;
    if(providerCode !== null) return `${productId}-${providerId}-${productCode}-${providerCode}-${packageType}`;
    else return `${productId}-${providerId}-${productCode}-NR-${packageType}`;
}

export function getUpdatedSelectedProductInfo(state, selectedProvider){
    const updatedSelectedProductInfo = {
        ...state.slectedProductInfo,
         category_code:selectedProvider.category_code,
         category_id:selectedProvider.category_id,
         cost:selectedProvider.cost,
         created_by_user_code:selectedProvider.created_by_user_code,
         created_timestamp:selectedProvider.created_timestamp,
         dealer_code:selectedProvider.dealer_code,
         dealer_id: selectedProvider.dealer_id,
         default_price:selectedProvider.default_price,
         extension_data: selectedProvider.extension_data,
         image_url:selectedProvider.image_url,
         is_rateable:selectedProvider.is_rateable,
         is_taxable:selectedProvider.is_taxable,
         is_balloon:selectedProvider.is_balloon,
         is_cash:selectedProvider.is_cash,
         is_contract:selectedProvider.is_contract,
         is_default:selectedProvider.is_default,
         is_deleted:selectedProvider.is_deleted,
         is_finance:selectedProvider.is_finance,
         is_frontend:selectedProvider.is_frontend,
         is_lease:selectedProvider.is_lease,
         is_markup:selectedProvider.is_markup,
         is_vehicle_certified:selectedProvider.is_vehicle_certified,
         is_vehicle_new:selectedProvider.is_vehicle_new,
         is_vehicle_used:selectedProvider.is_vehicle_used,
         long_description:selectedProvider.long_description,
         markup_value:selectedProvider.markup_value,
         max_price:selectedProvider.max_price,
         min_price:selectedProvider.min_price,
         name:selectedProvider.name,
         product_code:selectedProvider.product_code,
         product_id:selectedProvider.product_id,
         product_title:selectedProvider.product_title,
         providerId:selectedProvider.providerId,
         providerName:selectedProvider.providerName,
         provider_code:selectedProvider.provider_code,
         provider_id:selectedProvider.provider_id,
         provider_name:selectedProvider.provider_name,
         short_description:selectedProvider.short_description,
         updated_by_user_code:selectedProvider.updated_by_user_code,
         updated_timestamp:selectedProvider.updated_timestamp,
         video_url:selectedProvider.video_url
      }
      return updatedSelectedProductInfo;
}

export function getUpdatesProductsList(existingProductsList, selectedProvider){
    const updatesProductsList = Object.keys(existingProductsList).map((i)=> {
        if(existingProductsList[i].category_code === selectedProvider.category_code){
          let ob = Object.assign({},existingProductsList[i]);
          ob.category_code=selectedProvider.category_code;
          ob.category_id=selectedProvider.category_id,
          ob.cost=selectedProvider.cost,
          ob.created_by_user_code=selectedProvider.created_by_user_code,
          ob.created_timestamp=selectedProvider.created_timestamp,
          ob.dealer_code=selectedProvider.dealer_code,
          ob.dealer_id= selectedProvider.dealer_id,
          ob.default_price=selectedProvider.default_price,
          ob.extension_data= selectedProvider.extension_data,
          ob.image_url=selectedProvider.image_url,
          ob.is_rateable=selectedProvider.is_rateable,
          ob.is_taxable=selectedProvider.is_taxable,
          ob.is_balloon=selectedProvider.is_balloon,
          ob.is_cash=selectedProvider.is_cash,
          ob.is_contract=selectedProvider.is_contract,
          ob.is_default=selectedProvider.is_default,
          ob.is_deleted=selectedProvider.is_deleted,
          ob.is_finance=selectedProvider.is_finance,
          ob.is_frontend=selectedProvider.is_frontend,
          ob.is_lease=selectedProvider.is_lease,
          ob.is_markup=selectedProvider.is_markup,
          ob.is_vehicle_certified=selectedProvider.is_vehicle_certified,
          ob.is_vehicle_new=selectedProvider.is_vehicle_new,
          ob.is_vehicle_used=selectedProvider.is_vehicle_used,
          ob.long_description=selectedProvider.long_description,
          ob.markup_value=selectedProvider.markup_value,
          ob.max_price=selectedProvider.max_price,
          ob.min_price=selectedProvider.min_price,
          ob.name=selectedProvider.name,
          ob.product_code=selectedProvider.product_code,
          ob.product_id=selectedProvider.product_id,
          ob.product_title=selectedProvider.product_title,
          ob.providerId=selectedProvider.providerId,
          ob.providerName=selectedProvider.providerName,
          ob.provider_code=selectedProvider.provider_code,
          ob.provider_id=selectedProvider.provider_id,
          ob.provider_name=selectedProvider.provider_name,
          ob.short_description=selectedProvider.short_description,
          ob.updated_by_user_code=selectedProvider.updated_by_user_code,
          ob.updated_timestamp=selectedProvider.updated_timestamp,
          ob.video_url=selectedProvider.video_url,
          ob.title=selectedProvider.short_description,
          ob.isRateable=selectedProvider.is_rateable
          return ob;
        }
        else return existingProductsList[i];
      });

      return updatesProductsList;
}

/*function getPrice(rateInfo) {
  return rateInfo.length ? getDealerCost(rateInfo[0]) : 0;
} 

function getDealerCost(rateInfo) {
  let dealerCost = 0;
  let levelLookUp = rateInfo.Levels[0];
  while (levelLookUp) {
    if (levelLookUp.RateInfo && levelLookUp.RateInfo.Rates[0]) {
      dealerCost = levelLookUp.RateInfo.Rates[0].DealerCost;
      levelLookUp.RateInfo.Rates[0].Options.map(item => {
        if (item.IsSelected) {
          dealerCost += item.NetRate;
        }
      })
    }
    levelLookUp = levelLookUp.Levels[0];
  }
  return dealerCost;
}

function packageTypesState(selectedProductPackage, id) {
  const groupedProvider = groupBy(selectedProductPackage, 'id');
  let result = {
    isPlan1Selected: false,
    isPlan2Selected: false,
    isPlan3Selected: false,
    isPlan4Selected: false,
    plan1: null,
    plan2: null,
    plan3: null,
    plan4: null

  };
  if (groupedProvider[id] && groupedProvider[id].length) {
    groupedProvider[id].map(item => {
      switch (item.planName) {
        case 'plan1':
          result.isPlan1Selected = true;
          result.plan1 = 'plan1';
          break;
        case 'plan2':
          result.isPlan2Selected = true;
          result.plan2 = 'plan2';
          break;
        case 'plan3':
          result.isPlan3Selected = true;
          result.plan3 = 'plan3';
          break;
        case 'plan4':
          result.isPlan4Selected = true;
          result.plan4 = 'plan4';
          break;
      }
    });
  }
  return result;
}
function getProductRateKey(props, state) {
  if(state.productCode !== null)
    return `${state.slectedProductInfo.id}-${state.providerId}-${state.productCode}-${state.providerCode}`;
  else  return `${state.slectedProductInfo.id}-${state.providerId}-NR-${state.providerCode}`;
}

function getSelectedProvider(productId, providerList, userPrefernce) {
  let selectedIndex = 0;
  for (const product in userPrefernce) {
    providerList.map((provider, index) => {
      if (provider.provider_code == product.provider_cd && productId == product.dlr_prod_id) {
        selectedIndex = index;
        return selectedIndex;
      }
    });
  }
  return selectedIndex;
}

function getProductPackageKey(props, state, plan) {
  const productId = state.slectedProductInfo.id;
  const providerId = state.providerId;
  const productCode = state.productCode;
  const providerCode = state.providerCode;
  const packageType = plan;
  if(providerCode !== null) return `${productId}-${providerId}-${productCode}-${providerCode}-${packageType}`;
  else return `${productId}-${providerId}-${productCode}-NR-${packageType}`;
}
*/