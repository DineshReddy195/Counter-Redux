const counterReducer=(storedata=0,action)=>{
    if(action.type==='increment'){
        return storedata+1
    }else if(action.type==='decrement'){
        if(storedata>=1){
            return storedata-1
        }else{
            alert('Cannot be negative numbers')
        }
    }else if(action.type==='reset'){
        return storedata=0
    }else{
    return storedata
    }

}

export default counterReducer