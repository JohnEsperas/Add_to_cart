let cart = {};
if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
    // added code to remove amounts after the website is refreshed
}else {
    localStorage.setItem("cart", JSON.stringify({}));
    }
    
    window.addEventListener("beforeunload", function() {
    localStorage.setItem("cart", JSON.stringify({}));
    });
    //----

let tbody = document.getElementById("tbody");

let total_price = 0;
let total_qty = 0;

for (let id in cart) {
    let item = cart[id];

    let tr = document.createElement('tr')

    let title_td = document.createElement('td')
    title_td.textContent = item.title
    tr.appendChild(title_td)


    let price_td = document.createElement("td");
    price_td.textContent = item.price;
    tr.appendChild(price_td);

    let qty_td = document.createElement("td");
    qty_td.textContent = item.qty;
    tr.appendChild(qty_td);

    tbody.appendChild(tr)

    // for total price and quantity
    total_price += item.price * item.qty;
    total_qty += item.qty;
}

// Display the total price and quantity
let total_price_element = document.createElement("td");
total_price_element.textContent = total_price;
let total_qty_element = document.createElement("td");
total_qty_element.textContent = total_qty;

let tr = document.createElement("tr");
let td_element = document.createElement("td");
td_element.textContent = "Total";

tr.appendChild(td_element);
tr.appendChild(total_price_element);
tr.appendChild(total_qty_element);

tbody.appendChild(tr);
