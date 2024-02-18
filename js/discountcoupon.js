document.getElementById('btn-submit').addEventListener('click', function () {
    const discountPrice = document.getElementById('input-field');
    const newDiscountPrice = discountPrice.value;
    //  const newDiscountPrice = parseFloat(newDiscountPriceString);
    // console.log(newDiscountPrice); 
    discountPrice.value = '';

    const discountTotalElement = document.getElementById('current-discount-price');
    const DiscountTotalString = discountTotalElement.innerText;
    const DiscountTotal = parseFloat(DiscountTotalString);
  

    if (newDiscountPrice === 'DIS30') {

        const currentDiscountTotal = 1000 * 0.70;
        discountTotalElement.innerText = currentDiscountTotal;
        newDiscountPrice.value ='';
       
    }
    else{
        alert('Your Coupon is invalid.')
    }
    
    

})