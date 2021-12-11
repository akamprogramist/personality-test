const q = document.querySelectorAll('.q');
const ans = document.querySelectorAll('.q .form-check button');
const form = document.querySelector('.quiz-form');
const end = document.querySelector('.end');
let score = 0;

form.addEventListener('click',(e)=>{
    e.preventDefault();
})

ans.forEach(anseach => {
    anseach.addEventListener('click',function(){
        step();
        let valid = this.getAttribute("valid")
        if (valid == "valid") {
            score+=10;
        }

    })
});

let count = 0;
function step() {
    count+=1;
    for (let i = 0; i < q.length; i++) {
        q[i].className='q';
        if (count<=9) {
            q[count].className='q active';
        }else{
            end.classList.remove('d-none');
            let output = 0;
            const timer = setInterval(()=>{
                end.querySelector('span').textContent=`${output}%`;
                if (output === score) {
                    clearInterval(timer);
                }else{
                    output++;
                }
            },20)
        }
    }
}