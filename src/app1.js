import './app1.css'
import $ from 'jquery'

const $button1 = $('#add1')
const $button2 = $('#minus1')
const $button3 = $('#mul2')
const $button4 = $('#divide2')
const $number = $('#number')
const n = localStorage.getItem('n')
$number.text(n || 100) 
//初始化的n的值就不一定是100 ||没有n，就等于100
//有数据存储功能的简易的计算器

$button1.on('click', ()=>{
    let n = parseInt($number.text()
    )
    n += 1
    localStorage.setItem('n',n)
    $number.text(n) //把数字放回去
})
//绑定事件，当点击按钮1的时候，100变成101（箭头函数）;
//parseInt把文本内容变成数字

$button2.on('click', ()=>{
    let n = parseInt($number.text()
    )
    n -= 1 
    localStorage.setItem('n',n)
    $number.text(n) //把数字放回去
})

$button3.on('click', ()=>{
    let n = parseInt($number.text()
    )
    n *= 2
    localStorage.setItem('n',n)
    $number.text(n) //把数字放回去
})

$button4.on('click', ()=>{
    let n = parseInt($number.text()
    )
    n /= 2
    localStorage.setItem('n',n)
    $number.text(n) //把数字放回去
})
