



//비교로직 전달받은 객체의 특정파라미터값만 변경여부를 체크한다.

var isChanged = function(a , b, fieldArray){
    if( a === null || b === null || fieldArray === null ){
       throw "비교대상, 비교값, 키배열은 필수입니다." 
    }
    if( typeof a !=='object' || typeof b !=='object' || !Array.isArray(fieldArray)){
        throw "비교대상과, 비교값은 Object여야하고 비교할 key 배열이 전달되야합니다."
    }
    var isDifference = false;
    for(var attr in fieldArray){
        if(a[attr] !== b[attr]){
            isDifference = true;
        }
    }

    return isDifference;
}