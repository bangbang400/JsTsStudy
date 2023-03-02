// ES6・・・上書き禁止はconst、それ以外はlet
// let name = 'Tom';
// const age = 19; // 定数
// console.log('hello' + name);

// 関数
// const returnValue = hello('Tom',19);
// console.log(returnValue);

// function hello(name, age) {    
//     return name + age;
// }

// 無名関数は変数に代入しているから、先に関数を定義しないとエラーになる
// const returnValue2 = hello2('Flutter',30)
// console.log(returnValue2);

// 無名関数
// const hello2 = function(name, age){
//     return name + 'は' + age + '歳です。';
// }

// const returnValue2 = hello2('Flutter',30)
// console.log(returnValue2);

// プロパティとメソッド
// let hello = 'hello world';
// console.log(hello.length);
// console.log(hello.toUpperCase());
// console.log(hello.substring(0,5));
// console.log(hello.slice(0,5)); // 上と同じ

// 配列
// const array = new Array(1,2,3);
// const array = [1,2,3];
// array.push('ddd'); // 追加

// array.unshift('はじめに追加'); //先頭に追加する
// console.log(array);
// console.log(array[0]);

// const val = array.pop(); // 後ろの値を削除する
// console.log(array);
// console.log(val);

// const val2 = array.shift(); // 先頭の値を削除する
// console.log(array);
// console.log(val2);


// オブジェクト
// const person = {
//     // プロパティ
//     name: ['Taro','Momo'],
//     age: 32,
//     gender: 'male',
//     interests: {
//         num1: 'motercycle',
//         num2: 'poker',
//     }, //カンマを忘れない
//     // メソッド
//     getName: function() {
//         console.log(this.name[0] + this.age);
//     }
// };
// person.name = 'Code';
// console.log(person.name);
// console.log(person.name[0]);
// console.log(person.interests.num1);

// person.age = 19; // オブジェクトの中身は変更可能
// console.log(person.age);
// person.getName();

// ループ
// const testArray = ['Taro', 'Honda', 'Yamada'];
// for (let i = 0; i < testArray.length; i++) {    
//     console.log(testArray[i]);
// }

// // 他言語との違い 中身を取得するならinでなくofを使う
// for(let i in testArray){
//     console.log(i); //要素番号
//     console.log(testArray[i]);
// }

// of：中身を取得 値が渡ってくるため変数はvにしている
// for(let v of testArray){
//     console.log(v);    
// }

// CDを買ったかどうか
const artists = [
    {
        id: 1,
        title: 'AAA',
        purchased: true,
    },
    {
        id: 2,
        title: 'DU PUMP',
        purchased: true,
    },
    {
        id: 3,
        title: 'EXILE',
        purchased: false,
    },
]

for (let i = 0; i < artists.length; i++) {
    console.log(artists[i].title);
}