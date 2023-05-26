let user = {
    id: 1,
    name: "윤지원",
    nickname: "esther",
    birth: " 1996.08.07",
    bio: "안녕하세요",
    location: "서울"
};
// 동일 스코프에 같은 타입 별칭 선언 불가
// type User ={}
// 다른 스코프라면 가능 
function scope() {
}
let countryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
};
let countryCodes2 = {
    Brazil: "bz",
    Hongkong: "hk",
    Japan: "jp",
};
export {};
