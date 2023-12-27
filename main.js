// declaring the main vars
let allSideLines = document.querySelectorAll('.sidebar .line');
let allSideBtns = document.querySelectorAll('.sidebar .line button');
let allSteps = document.querySelectorAll('.step')
let allBackBtns = document.querySelectorAll('.back');
let allNextBtns = document.querySelectorAll('.next');

allSideBtns[0].classList.add('active');
allSteps[0].classList.add('active')

allSideLines.forEach(line => {
    line.addEventListener('click', function() {
        allSideLines.forEach(l => l.querySelector('button').classList.remove('active'))
        this.querySelector('button').classList.add('active')
        allSteps.forEach(step => step.classList.remove('active'))
        allSteps[this.querySelector('button').innerHTML - 1].classList.add('active')
        allSteps[0].classList.remove('show');
    })
})

allBackBtns.forEach((btn, index) => {
    btn.addEventListener('click', function(e) {
        e.preventDefault()
        allSteps.forEach(step => step.classList.remove('active'));
        allSteps[index ].classList.add('active');
        allSideBtns.forEach(btn => btn.classList.remove('active'))
        allSideBtns[index].classList.add('active');
    })
})
allNextBtns.forEach((btn, index) => {
    btn.addEventListener('click', function(e) {
        e.preventDefault()
        allSteps[0].classList.remove('show');
        allSteps.forEach(step => step.classList.remove('active'));
        allSteps[index + 1].classList.add('active');
        allSideBtns.forEach(btn => {
            btn.classList.remove('active')
            allSideBtns[index + 1].classList.add('active'); 
        })
       
    })
})

// preparing first form logic

let allInputs = document.querySelectorAll('.step1 form input')

let firstNextBtn = allNextBtns[0]



firstNextBtn.addEventListener('click', function() {
    allInputs.forEach(input => {
        if(input.value == '') {
            input.style.borderColor = 'red'
            input.parentElement.querySelector('p.error').innerHTML = 'This field is required';
            allSteps.forEach(step => step.classList.remove('active'));
            allSteps[0].classList.add('show');
            allSideBtns.forEach(btn => {
                btn.classList.remove('active')
                allSideBtns[0].classList.add('active'); 
            })
        } else {
            // allSteps[1].classList.add('active');
            // allSideBtns.forEach(btn => {
            //     btn.classList.remove('active')
            //     allSideBtns[1].classList.add('active'); 
                 input.parentElement.querySelector('p.error').innerHTML = '';
            // })
            input.style.borderColor = ''
        }
        
    })
    
})

// second step logic 
let duratationSpans = document.querySelectorAll('.step2 .duration > span')
let radioBtn =  document.getElementById('radioBtn')
let yearlyP = document.querySelectorAll('.plan .price p.yearly')
let allPlans = document.querySelectorAll('.step2 .plan')

duratationSpans.forEach(span => {
    span.addEventListener('click', (e) => {
        if(e.target.classList.contains('yearly')) {
            radioBtn.classList.add('yearly')
            yearlyP.forEach(p => p.classList.add('annual'))
            allPlans.forEach(plan => plan.classList.add('yearly'))
        } else {
            radioBtn.classList.remove('yearly')
            yearlyP.forEach(p => p.classList.remove('annual'))
            allPlans.forEach(plan => plan.classList.remove('yearly'))
            

        }
    })
})

allPlans.forEach(plan => {
    plan.onclick = function() {
        allPlans.forEach(plan => plan.classList.remove('clicked'))
        plan.classList.add('clicked')
    }
})


// step 3 logic
let step3Inputs = document.querySelectorAll('.step3 .input-control')

step3Inputs.forEach(input => {
    input.addEventListener('click', function() {
        input.classList.toggle('checked')
    })
})