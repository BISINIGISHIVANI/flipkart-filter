import React from 'react'

export const FilterBySize = ({filterDispatch,sizeMedium,sizeSmall,sizeLarge,sizeXLarge}) => {
  return (
    <div className="column gap">
    <p className="mg-sm-up">Sizes</p>
    <label>
    <input type="checkbox"
     checked={sizeSmall}
     onChange={(e)=>e.target.checked?
     filterDispatch(({
         type:"SIZE_SMALL",
         payload:false
     })):
     filterDispatch(({
         type:"SIZE_SMALL",
         payload:true
     }))
     }
    />
    Small
  </label>
  <label>
    <input type="checkbox"
     checked={sizeMedium}
     onChange={(e)=>e.target.checked?
         filterDispatch(({
             type:"SIZE_MEDIUM",
             payload:false
         })):
         filterDispatch(({
             type:"SIZE_MEDIUM",
             payload:true
         }))
         }
    />
    Medium
  </label>
  <label>
    <input type="checkbox"
     checked={sizeLarge}
     onChange={(e)=>e.target.checked?
         filterDispatch(({
             type:"SIZE_LARGE",
             payload:false
         })):
         filterDispatch(({
             type:"SIZE_LARGE",
             payload:true
         }))
         }
    />
    Large
  </label>
  <label>
    <input type="checkbox"
     checked={sizeXLarge}
     onChange={(e)=>e.target.checked?
         filterDispatch(({
             type:"SIZE_XLARGE",
             payload:false
         })):
         filterDispatch(({
             type:"SIZE_XLARGE",
             payload:true
         }))
         }
    />
    XLarge
  </label>
</div>
  )
}


