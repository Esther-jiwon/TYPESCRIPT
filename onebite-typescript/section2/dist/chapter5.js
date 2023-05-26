// 섹션 2. 타입스크립트 기본 -  5.열거형(Enum) 타입 (타입스크립트에서만 존재!)
// enum 타입 
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 10] = "ADMIN";
    Role[Role["USER"] = 11] = "USER";
    Role[Role["GUEST"] = 12] = "GUEST";
})(Role || (Role = {}));
const user1 = {
    name: "이정환",
    role: Role.ADMIN, // 10
};
const user2 = {
    name: "홍길동",
    role: Role.USER, // 11
};
const user3 = {
    name: "아무개",
    role: Role.GUEST, // 12
};
// 문자형 열거형 
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
const user4 = {
    name: "윤지원",
    role: Role.ADMIN,
    language: Language.korean
};
export {};
