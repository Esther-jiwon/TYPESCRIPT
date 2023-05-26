// 섹션 2. 타입스크립트 기본 -  6.void와 never


// void : 아무 값도 없음을 의미 
function func2():void {
    console.log("hello"); // return 값이 없음
}

let a:void; 
a = undefined; // void 타입 변수에는 undefined 이외 담을 수 없다. void > undefined

// 만약 null, undefined를 타입으로 쓴다면 null, undefined의 반환값이 꼭 필요함 
// void는 return 값이 아예 없는 타입
function func3():null {
    return null; // like this
}



//______________________________//

// never : 불가능을 의미, 함수가 어떠한 값도 반환할 수 없는 상황일 때 
function func4():never {
    while(true){} // like 무한루프
}

function func5():never {
    throw new Error(); // like 의도적으로 오류 발생
}

let anyVar:any;
let b:never;
// b = anyVar;   ==> 오류! never 타입에는 any를 포함한 그 어떤 타입의 값도 담을 수 없다.

export{}


