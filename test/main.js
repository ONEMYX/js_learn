abc = 'Hello, world';
console.log(abc);
size = `多行变量
2
2
2
2`;
console.log(`多行测试
1
2
3`);
console.log(size);

var xiaohong = {
    name: '小红',
    'middle-school': 'No.1 Middle School'
};
a = xiaohong['middle-school']; // 'No.1 Middle School'
console.log(a);
a = xiaohong['name']; // '小红'
console.log(a);
a = xiaohong.name; // '小红'
console.log(a);

// var height = parseFloat(prompt('请输入身高(m):'));
// var weight = parseFloat(prompt('请输入体重(kg):'));
var bmi = 18.5;
if (bmi < 18.5) {
    console.log(1)
} else if (bmi < 25) {
    console.log(2)
}
