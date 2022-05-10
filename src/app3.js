import './app3.css'
import $ from 'jquery'

const $square = $('#app3 .square')
$square.on('click', ()=>{
   $square.toggleClass('active')
})//当你点击第一次的时候，点击第二次的时候
  //页面图形就可以，当你点击的时候，它往右边移动，
  //当你再点击它的时候，它往左边移动，形成一个来回移动的动画
