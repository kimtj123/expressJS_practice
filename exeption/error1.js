let ct = 0;

setInterval(()=> {
    console.log('Start');

    try{
        console.log("ct : ", ct);
        ct+=1;
        if(ct % 2 === 0){
            throw new Error('server is not working');
        }        
    } catch(err){
        console.error(err);
    }
}, 1000)