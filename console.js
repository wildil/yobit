let arr = [];
let table = document.querySelectorAll('.balance_box  .balances tbody tr td:first-child');
let tradeMarket = document.querySelectorAll('#trade_market tbody tr');
let tradeMarket2 = document.querySelector('#trade_market tbody tr td:first-child');

// tradeMarket.style.disply = 'none';


table.forEach(item => {

    tradeMarket.forEach(item2 => {
        if(item2.getAttribute('c1n') == item.textContent ) {
        
            let balance = item.closest('tr').querySelector('td:last-child').textContent;
            let price = item2.querySelector('td:nth-child(2)').textContent;
            let trade = item2.querySelector('td:nth-child(3)').textContent;
              console.log(item2.getAttribute('c1n') + ' ' + balance +' '+ price +' '+ trade)  
        item2.getAttribute('c1n').remove;
        }
    })


// console.log(item.textContent)
})
