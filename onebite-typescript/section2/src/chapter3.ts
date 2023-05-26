// 섹션 2. 타입스크립트 기본 -  3.객체
let userEx:object = {
    id: 1, 
    name: "윤지원"
}

// userEx.id -> 가져오지 못함 

// 객체 타입을 정의할 때는 객체 리터럴 타입으로 정의
let userEx2: {
    id:number, 
    name?:string
} = {
    id:1, 
    name:"윤지원"
}

userEx2.id

export{}


// 

let user: {
    id?: number;
    name: string;
  } = {
    id: 1,
    name: "이정환",
  };
  
  let config: {
    readonly apiKey: string;
  } = {
    apiKey: "MY API KEY",
  };
  
  // config.apiKey = "hacked";