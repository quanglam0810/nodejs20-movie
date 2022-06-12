'use strick';

const countRecord = async (data)=>{
    try{
     let count = 0
     for(let i = 0; i< data.length;i++)
   
     {
          count = count+ 1;
     }
    return count;
    }
    catch(error){
        console.log(error);
        return null;
    }
};
module.exports ={
    countRecord,
};