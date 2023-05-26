// 섹션 2. 타입스크립트 기본 -  5.any와 unknown
// any : 타입 검사를 받지 X
let anyVar = 10;
anyVar = "hello";
anyVar = true;
anyVar = {};
anyVar.toUpperCase();
let num = 5;
num = anyVar;
// unknown : 어떤 타입 값이든 저장이 가능하다. 
// but, 어떤 연산에도 참여할 수 없으며, 메서드도 사용할 수 X, 어떤 타입의 변수에도 저장할 수 없다.
// ==> 결국 값을 저장하는 행위밖에 할 수 업음
let unknownVar;
unknownVar = "hello";
unknownVar = true;
unknownVar = () => { };
// num = unknownVar;   ==> 오류!
// so, unknown을 로직에 쓰려면 어떤 타입인지 모르기 때문에 타입 보장 검사가 꼭 필요함 
if (typeof unknownVar == "number") {
    // ........
}
export {};
