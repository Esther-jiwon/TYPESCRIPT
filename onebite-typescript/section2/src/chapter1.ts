// 섹션 2. 타입스크립트 기본 - 1.원시타입과 리터럴타입
// number
// : type => 타입주석 or 타입 어노테이션
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// string
let str1: string = "hello";
let str2: string = "hello";
let str3: string = `hello`;
let str4: string = `hello ${num1}`;

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
// strictNullChecks : null 값을 다른 타입 변수에 할당 설정
let null1: null = null;


// undefined
let unde1: undefined = undefined;

// 리터럴 타입
// 리터럴 -> 값
let numA: 10 = 10;

let strA: "hello" = "hello";


export {};