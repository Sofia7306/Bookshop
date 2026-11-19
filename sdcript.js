
let cartCount = 0;

function addToCart(bookName) {
    cartCount++;

    document.getElementById("cart").textContent =
        "Кошик: " + cartCount + " товарів";

    alert("Книгу «" + bookName + "» додано до кошика!");
}

// Форма контактів

const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        document.getElementById("formMessage").textContent =
            "Дякуємо! Ваше повідомлення прийнято.";

        form.reset();
    });
}
