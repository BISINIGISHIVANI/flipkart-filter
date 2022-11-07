export const FilterByCategory=({filterDispatch,idealForMen,idealForWomen,idealForBoth})=>{
    return <div className="column gap">
    <div className="row flex-center filter-category">
        <p className="mg-sm-up">GENDER</p>
        <span onClick={()=>filterDispatch({type:"CLEAR_GENDER"})}
          >CLEAR</span>
    </div>
   <div className="column gap ">
    <label>
        <input type="checkbox"
        checked={idealForMen}
        onChange={(e)=> 
            e.target.checked?
            filterDispatch({
            type:"IDEAL_FOR_MEN",
            payload:false
        }): filterDispatch({
            type:"IDEAL_FOR_MEN",
            payload:true
        })
    }
        />
       Men
      </label>
      <label>
        <input type="checkbox"
        checked={idealForWomen}
        onChange={(e)=>e.target.checked ?
            filterDispatch({
            type:"IDEAL_FOR_WOMEN",
            payload:false
        }): filterDispatch({
            type:"IDEAL_FOR_WOMEN",
            payload:true
        })}
        />
       Women
      </label>
      <label>
        <input type="checkbox"
        checked={idealForBoth}
        onChange={(e)=>e.target.checked?
            filterDispatch({
            type:"IDEAL_FOR_MEN_WOMEN",
            payload:false
        }): filterDispatch({
            type:"IDEAL_FOR_MEN_WOMEN",
            payload:true
        })
    }
        />
       Men & Women
      </label>
   </div>
</div>
}

