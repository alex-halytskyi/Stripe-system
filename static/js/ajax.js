// START buy from Stripe
document.getElementsByClassName('button--buy')[0].addEventListener('click', () => {
    // get added services in cart
    const ServiceData = [];
    const allServices = document.getElementById("chat-cart-content").querySelectorAll('.chat-cart__purchase');
    allServices.forEach((Service) => {
        ServiceData.push({
            'id': Service.id,
            'name': Service.firstElementChild.innerText,
            'price': Service.lastElementChild.dataset.price * 100,
            'quantity': Service.lastElementChild.firstElementChild.firstElementChild.nextElementSibling.value,
        })
    });
    const data = {
        'services': JSON.stringify(ServiceData),
        'total_price': document.getElementsByClassName("price")[0].innerText,
        'user_email': document.getElementById("saved-email").innerText,
        'csrfmiddlewaretoken': $("input[name=csrfmiddlewaretoken]").val(),
    }
    console.log(data);
    // generate stripe url for pay
    $.ajax({
        url: '/stripe_pay/',
        type: 'POST',
        data: data,
        success: function (data) {
            const stripe = Stripe(data.public_key);
            return stripe.redirectToCheckout({ sessionId: data.session_id });
        },
        error: function(error) {
            console.log('ajax add to cart', error);
        }
    });
});
// END buy from Stripe