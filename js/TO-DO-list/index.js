//监听用户敲击enter键
var input = document.getElementById('text-input')
var list = document.getElementById('list')

// input.onkeyup = function(e){
//     if(e.keyCode == 13){
//         //读取到input中的值
//         console.log(input.value);
//         //生成li结构
//         //将input中的值传给li
//         var todolist = 
//         `        
//             <li>
//                 <input type="checkbox">
//                 <span> ${input.value} </span>
//             </li>
//         `

//         //将li添加到ul中
//         list.insertAdjacentHTML('afterbegin',todolist)
//         input.value = ''
//     }
// }

var todoItem = []
input.onkeyup = function(e){
    if(e.keyCode ===13){
        if(input.value !== ''){
            todoItem.push(input.value)
            makeList()
            console.log(todoItem);
        }
    }
}

function makeList(){
    list.innerHTML = ""
    //循环数组,生成多份li结构添加到ul中
    for(var i = 0;i<todoItem.length;i++){
       var a = 
        `        
            <li>
                <input type="checkbox">
                <span>${todoItem[i]}</span>
            </li>
        `

        //将li添加到ul中
        list.insertAdjacentHTML('afterbegin', a)
        
    }
    input.value = ''
}