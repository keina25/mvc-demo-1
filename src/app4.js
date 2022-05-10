import './app4.css'
import $ from 'jquery'

const $circle = $('#app4 .circle')

$circle.on('mouseenter', ()=>{
    $circle.addClass('active')
}).on('mouseleave', ()=>{
    $circle.removeClass('active')
})
//监听鼠标点到那个圆