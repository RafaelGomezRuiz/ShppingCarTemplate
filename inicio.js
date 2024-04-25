const cardContainer=document.getElementById('card-container');

const displayCards=()=>{
    for (let index = 0; index < 14; index++) {
        cardContainer.innerHTML+=`
        <div class="products-card">
                <img src="https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="product-img" class="product-img">
                <div class='product-info'>
                <div>
                    <p>$121,00</p>
                    <p>Bike</p>
                </div>
                <div>
                    <figure>
                        <img src="./icons/bt_add_to_cart.svg" alt="icon-add">
                        </figure>
                </div>
                </div>
            </div>`
    }
}
addEventListener('DOMContentLoaded',displayCards);