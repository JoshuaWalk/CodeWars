const solution = (str) => { 
    return (str.length % 2 ? str + '_' : str).match(/.{1,2}/g);
    }