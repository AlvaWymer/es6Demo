let a = "Yangnaihua";
let b = `杨乃华${a}yangnaihua`;
console.log(b);


// 字符串模板 计算
let cala = 1;
let calb = 2; 
let resule = `${cala + calb}`;
console.log(resule);

// 是否包含
let incla = 'yang';
let inclus = 'yangnaihfdusfhsduifhsauifhdsia';
console.log(inclus.includes(incla)); // 是否包含
// 是否以这个开头
console.log(inclus.startsWith(incla));
//是否以这个结尾
console.log(inclus.endsWith(incla));
console.log(`haha|`.repeat(3));
