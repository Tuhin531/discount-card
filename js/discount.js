document.getElementById('btn-apply').addEventListener('click', function(){
    const discountPrice = document.getElementById('discount-price');
   const   newDiscountPriceString = discountPrice.innerText;
    const newDiscountPrice = parseFloat(newDiscountPriceString);
    
    const currentDiscountTotal = 1000 * 0.70;
    discountPrice.innerText = currentDiscountTotal;
    



    
    

})