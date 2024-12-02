// scripts.js
let cart = [];

// إضافة المنتجات إلى السلة
const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        const productName = e.target.dataset.name;
        const productPrice = parseFloat(e.target.dataset.price);
        
        // إضافة المنتج إلى السلة
        cart.push({ name: productName, price: productPrice });

        // تحديث واجهة السلة
        updateCart();
    });
});

// تحديث السلة
function updateCart() {
    const cartCount = document.getElementById("cart-count");
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");

    // عرض المنتجات في السلة
    cartItems.innerHTML = "";
    cart.forEach(item => {
        cartItems.innerHTML += `<p>${item.name} - ${item.price} ريال سعودي</p>`;
    });

    // عرض العدد الإجمالي
    cartCount.textContent = cart.length;

    // حساب المجموع الكلي
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    totalPrice.textContent = total.toFixed(2);
}

// إتمام الشراء
document.getElementById("checkout-button").addEventListener("click", () => {
    if (cart.length > 0) {
        alert("تم إتمام الشراء بنجاح!");
        cart = []; // تفريغ السلة
        updateCart(); // تحديث واجهة السلة بعد الشراء
    } else {
        alert("سلة المشتريات فارغة!");
    }
});
