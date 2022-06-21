window.addEventListener("load", solve);

function solve() {
  let sendBtn = document.querySelector('#right form button')
  sendBtn.addEventListener('click', sendInfo)
  
  let productTypeEl = document.querySelector('#type-product')
  let descriptionEl = document.querySelector('#description')
  let clientNameEl = document.querySelector('#client-name')
  let clientPhoneEl = document.querySelector('#client-phone')

  let receivedOrdersEl = document.querySelector('#received-orders')
  let completedOrdersEl = document.querySelector('#completed-orders')

  let clearBtn = document.querySelector('#completed-orders button')
  clearBtn.addEventListener('click', clear)

  function sendInfo(e) {
    e.preventDefault()

    let productType = productTypeEl.value
    let description = descriptionEl.value
    let clientName = clientNameEl.value
    let clientPhone = clientPhoneEl.value

    if(description == '' || clientName == '' || clientPhone == ''){
      return
    }
    
    productTypeEl.value == '';
    descriptionEl.value == '';
    clientNameEl.value == '';
    clientPhoneEl.value == '';

    let containerDiv = document.createElement('div')
    containerDiv.classList.add('container')

    let h2 = document.createElement('h2')
    h2.textContent = `Product type for repair: ${productType}`

    let h3 = document.createElement('h3')
    h3.textContent = `Client information: ${clientName}, ${clientPhone}`

    let h4 = document.createElement('h4')
    h4.textContent = `Description of the problem: ${description}`

    let startBtn = document.createElement('button')
    startBtn.classList.add('start-btn')
    startBtn.textContent = 'Start Repair'

    let finishBtn = document.createElement('button')
    finishBtn.classList.add('finish-btn')
    finishBtn.textContent = 'Finish Repair'
    finishBtn.disabled = true;

    startBtn.addEventListener('click', startRepair)
    finishBtn.addEventListener('click', finishRepair)

    containerDiv.appendChild(h2)
    containerDiv.appendChild(h3)
    containerDiv.appendChild(h4)
    containerDiv.appendChild(startBtn)
    containerDiv.appendChild(finishBtn)

    receivedOrdersEl.appendChild(containerDiv)
  }

  function startRepair(e) {
    e.currentTarget.disabled = true;

    e.currentTarget.parentNode.querySelector('.finish-btn').disabled = false;
  }

  function finishRepair(e) {
    let containerDiv = e.currentTarget.parentNode
    e.currentTarget.remove()
    containerDiv.querySelector('.start-btn').remove()

    containerDiv.remove()
    completedOrdersEl.appendChild(containerDiv)
  }

  function clear(e) {
    let allContainers = Array.from(e.currentTarget.parentNode.querySelectorAll('.container'))

    for(let container of allContainers) {
      container.remove()
    }

  }
}
