const toast = (()=>{
    const grnnerateToast = (innerHtml)=>{
        return `
            <div class = "toast">
                <div class='test'>
                    ${innerHtml}
                </div>
            </div>
        `
    }
    return {
        show(msg){
            let toastEL = document.querySelector('.toast')
            if(!toastEL){
                document.body.insertAdjacentHTML('beforeend',grnnerateToast())
                toastEL = document.querySelector('.toast')
            }
            document.querySelector('.test').innerHTML = msg
            toastEL.classList.add('show')
            console.log('test')
            setTimeout(()=>{
                toastEL.classList.remove('show')
            },2000)
        }
    }
})()

const login = () => {
    let username = document.getElementById('user').value;
    let password = document.getElementById('pwd').value;
    if (username === '' && password === '') {
        toast.show('请输入邮箱和密码');
    } else {
        fetch(`http://192.168.31.45:3000/login?username=${username}&password=${password}`)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                if (res.code === 0) {
                    toast.show('登录成功')
                } else {
                    toast.show(res.message)
                }
            })
    }
}

const btn = document.getElementById('btn')
btn.addEventListener('click', login)