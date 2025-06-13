const billAmount=document.querySelector('#bill');
const tipBtns=document.querySelectorAll('.discount')
const customTip=document.querySelector('.custom-input');
const people=document.querySelector('.people');
const generateBill=document.querySelector('.generate-bill');
const tipAmount=document.querySelector('.amount');
const totalAmount=document.querySelector('.total-amount');
const eachPersonAmount=document.querySelector('.each-person');
let numOfPeople;
let totalBill;
let discount;
function removeButtonClass(){
        tipBtns.forEach((z)=>{
        z.classList.remove('selected');
    })
}
function removeclass(obj,name){
    obj.classList.remove(name);
}
function addButtonClass(x){
    x.classList.add('selected');
}
function removeAttribute(obj,name){
    obj.removeAttribute(name);
}
billAmount.addEventListener('change',(e)=>{
    totalBill=+e.target.value;
    tipBtns.forEach((x)=>{
        removeclass(x,'not-allowed');
        removeAttribute(x,'disabled');
    })
    removeclass(customTip,'not-allowed');
    removeclass(people,'not-allowed');
})

tipBtns.forEach((x)=>{
    x.addEventListener('click',(totalBill)=>{
        removeButtonClass();
        addButtonClass(x);
        discount=parseInt(x.getAttribute('discount'));
        discountApplied=true;
        if(numOfPeople){
        removeclass(generateBill,'not-allowed');
        removeAttribute(generateBill,'disabled');
        }
    })
})
customTip.addEventListener('input',(e)=>{
    removeButtonClass();
    discount=+e.target.value;
    discountApplied=true;
    if(numOfPeople){
        removeclass(generateBill,'not-allowed');
        removeAttribute(generateBill,'disabled');
    }
})
people.addEventListener('input',(e)=>{
    numOfPeople=+e.target.value;
    if(discount){
        removeclass(generateBill,'not-allowed');
        removeAttribute(generateBill,'disabled');
    }
})
generateBill.addEventListener('click',()=>{
    let totaltip=totalBill*discount/100;
    tipAmount.innerText= '₹'+totaltip;
    let totalBillAmount=totalBill+totaltip
    totalAmount.innerText='₹'+totalBillAmount;
    eachPersonAmount.innerText='₹'+(totalBillAmount/numOfPeople);
})