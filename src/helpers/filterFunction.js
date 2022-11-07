const SortByPriceHandler=(data,sortByPrice)=>{
    if(sortByPrice && sortByPrice==="PRICE_HIGH_TO_LOW"){
       return data.sort((a,b)=>b["price"]-a["price"])
    }
    if(sortByPrice &&sortByPrice==="PRICE_LOW_TO_HIGH"){
       return data.sort((a,b)=>a["price"]-b["price"])
    }
    return data
}

const SortByCategoryHandler=(data,idealForMen,idealForWomen,idealForBoth)=>{
    if(idealForMen===false && idealForWomen===false &&idealForBoth===false){
      return data
    }
   {
      let a=data.filter((product)=>idealForMen ? product.idealFor.includes("Men")?true:false:false)
      let b=data.filter((product)=>idealForWomen ? product.idealFor.includes("Women") ? true:false:false)
      let c=data.filter((product)=>idealForBoth ? product.idealFor.includes("Women") && product.idealFor.includes("Men")? true:false:false)
      return [...a,...b,...c]
    }
}

const SortByBrandHandler=(data,brandPeace,brandSmiling,brandKind)=>{
  if(brandSmiling ===false && brandPeace===false){
    return data
  }
  {
    let data1=data.filter((product)=>brandSmiling?product.brand==="Smile":false)
    let data2=data.filter((product)=>brandPeace?product.brand==="Peace":false)
    let data3=data.fillter((product)=>brandKind?product.brand==="Kind":false)
    return [...data1,...data2,...data3]
  }
}
const SortByPriceRangeHandler=(data,maxPrice)=>{
   return data.filter((product)=>product.price <=maxPrice)
}
const SearchBrandHandler=(data,searchBrandValue)=>{
  return data.fillter((product)=>product.brand.toLowerCase()===searchBrandValue)
}
const SortBySizeHandler=(data,sizeSmall,sizeMedium,sizeLarge,sizeXLarge)=>{
  if(sizeSmall===false&&sizeMedium===false&&sizeLarge===false&&sizeXLarge===false){
    return data
  }
  {
    let data1=data.filter((product)=>sizeSmall?product.size.includes("S")?true:false:false)
    let data2=data.filter((product)=>sizeMedium?product.size.includes("M")?true:false:false)
    let data3=data.filter((product)=>sizeLarge?product.size.includes("L")?true:false:false)
    let data4=data.filter((product)=>sizeXLarge?product.size.includes("XL")?true:false:false)
    return [...data1,...data2,...data3,...data4]
  }
}
export {SortByPriceHandler,
  SortByCategoryHandler,
  SortByBrandHandler,
  SortByPriceRangeHandler,
  SearchBrandHandler,
  SortBySizeHandler
}