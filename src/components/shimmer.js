export const Shimmer=()=>{
    return(
        <div className='restlist'>
           {
            Array(20).fill("").map((e,index)=> <div className="shimmer-card"key={index}>
                    
            </div>)
            
           }
        </div>
    );
};