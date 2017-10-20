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




// JSON 数组格式转换
let json = {
    '0' : 'yang',
    '1' : 'nai',
    '2' : 'hua',
    length : 3
}
console.log(Array.from(json));

// 将一堆变量转换为数组
let nums = Array.of(1,2,3,4,5,6);
console.log(nums);

// 找到符合的属于数组中的函数，如果找到，那么就返回
// value：表示当前查找的值。
// index：表示当前查找的数组索引。
// arr：表示当前数组。
let numss = Array.of(1,2,3,4,5,6,7,8,9);
console.log(nums.find(function(value,index,numss){
    return value > 5 ;
}))


//  数组填充
// 第一个参数是填充的变量，第二个是开始填充的位置，第三个是填充到的位置。
let arr =['yang','nai','hua'];
arr.fill('杨乃华',2,3);
console.log(arr);

// for of 循环, 循环遍历里面的每个数据
let recu = [1,2,3,4,5,6,7,8,9];
for(let item of recu){
    console.log(item);
}

// 输出数组索引
let  recus = [2,3,4,5,6,7,8,9];
for(let item of recus.keys()){
    console.log(item);
}

// 输出数组 的索引 和数值
let recuss = [1,2,3,4,5];
for(let [index,val] of recuss.entries()){
    console.log(index + ':' + val);
}

// 遍历数组
let arra=['123','456','789']
let list=arra.entries();
console.log(list.next().value);
console.log(list.next().value);
console.log(list.next().value);


// es6 箭头函数和扩展
// 抛出异常
function add(a,b=1){
    // 'use strict'
    if(a == 0){
        // throw new Error('error');
    }
    return a + b;
}
console.log(add(0));


// 箭头函数（简单）
let fun = (a,b=2) => a+b;
console.log(fun(1)+ '箭头函数');


// 复杂的箭头函数，里面包含两句以上的命令
let funs = (c,d=3) =>{
    console.log(c+ '=c');
    console.log(d + '=d');

    // 如果是外部方法调用的话，那么  一定要有返回值
    return c + d;
}
console.log(funs(1)+ '外部调用的');


// 解构赋值
let jsonass = {
    a : 'yang',
    b : 'nai',
    c : 'hua'
}
function ass({a,b,c='huahua'}){
    console.log(a);
    console.log(b);
    console.log(c);
}
ass(jsonass);

// 数组的结构赋值
let ars = ['技术','gaibian','shenghuo'];
function arrays(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}
arrays(...ars);



