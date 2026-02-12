export const isToday = (dat,cur) => {
    if(dat.getDate()==cur.getDate()){
      return true
    }
    else{
      return false
    }
  }
  export const isThisWeek = (dat,cur) => {
    const dayofWeek = cur.getDay();
    const startOfWeek = new Date(cur.getFullYear(),cur.getMonth(),cur.getDate()-dayofWeek);
    const endOfWeek = new Date(cur.getFullYear(),cur.getMonth(),startOfWeek.getDate()+6);
    if(dat.getDate()>=startOfWeek.getDate()&&dat.getDate()<=endOfWeek.getDate()){
      return true;
    }
    else{
      return false;
    }
  }