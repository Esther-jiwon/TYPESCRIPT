// 섹션 2. 타입스크립트 기본 -  4.타입 별칭과 인덱스 시그니처
// 타입 별칭
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
}

let user:User = {
    id: 1, 
    name: "윤지원", 
    nickname: "esther", 
    birth: " 1996.08.07", 
    bio: "안녕하세요", 
    location: "서울"
}

// 동일 스코프에 같은 타입 별칭 선언 불가
// type User ={}

// 다른 스코프라면 가능 
function scope(){
    type User = string;
}


//______________________________________________//

// 인덱스 시그니처 : 객체 타입을 유연하게 정의할 수 있도록 함
type CountryCodes = {
    Korea: string;
    UnitedState: string; 
    UnitedKingdom: string;
}

let countryCodes:CountryCodes = {
    Korea: "ko", 
    UnitedState: "us", 
    UnitedKingdom: "uk",
}

// Property가 많은 경우
type CountryCodes2 = {
    [key: string] : string;
}

let countryCodes2:CountryCodes2 = {
    Brazil: "bz",
    Hongkong: "hk", 
    Japan: "jp",
}

// 만약 인덱스 시그니처 문법에 Property를 또 추가하고자 한다면
// 인덱스 시그니처 value 타입과 추가하는 Property의 value 타입이 동일해야 한다. 
type CountryCodes3 = {
    [key: string] : string;
    // Korea: number;    ==> 오류! 
    Korea: string;
}




export{}