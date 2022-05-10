import './app2.css'
import $ from 'jquery' 
//引入$

const $tabBar = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content')

$tabBar.on('click', 'li', (e)=>{
   const $li = $(e.currentTarget);
   $li
      .addClass('selected')
   //点击li的时候，选中的
      .siblings()
      .removeClass('selected')
      //这样就可以做背景色的切换了
   const index = $li.index()
   //.index可以获取排行老几
   //console.log(index)
   $tabContent
       .children()
       .eq(index)
       .addClass('active') //改成这样的代码
     //.eq(index).css({display:'block'})
   //eq是等于,使得点击哪个，内容就出现哪个,不要用css，不要用show
       .siblings()
       .removeClass('active') //改成这样的代码
     //.siblings().css({display:'none'})
  //找到tabContent子元素，第index个变成block，兄弟就消失,不要用css，不要用hide
}) 
//tabBar是ol的，要监听tabBar的子元素li，
//jquery提供这种写法，可以直接监听li子元素,这就是事件委托，监听副元素
//e.currentTarget就是用户点击的元素,监听的是li元素
//e.target与e.currentTarget哪个不行，就用另外一个

$tabBar.children().eq(0).trigger('click') 
//找到第一个子元素，触发点击事件，一刷新，默认在一