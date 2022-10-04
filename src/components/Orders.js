import React, { useState, useEffect } from "react"; 

function Orders () {
    useEffect(() => {
        const dropdowns = document.querySelectorAll('.dropdown');
            dropdowns.forEach(dropdown => {

                const select = dropdown.querySelector('.dropdown-select');
                const caret = dropdown.querySelector('.dropdown-caret');
                const menu = dropdown.querySelector('.dropdown-menu');
                const options = dropdown.querySelectorAll('.dropdown-menu li');
                const selected = dropdown.querySelector('.dropdown-selected');

                select.addEventListener('click', () => {
                    select.classList.toggle('dropdown-select-clicked');
                    caret.classList.toggle('dropdown-caret-rotate');
                    menu.classList.toggle('dropdown-menu-open');
                });

            options.forEach(option => {
                option.addEventListener('click', () => {
                    selected.innerText = option.innerText;
                    select.classList.remove('dropdown-select-clicked');
                    caret.classList.remove('dropdown-caret-rotate');
                    menu.classList.remove('dropdown-menu-open');
                    options.forEach(option => {
                        option.classList.remove('active');
                    })
                    option.classList.add('active');
                });
            });
        });
    }, [])

    return (
        <div className="order-page">
            <nav className="side-nav-bar">
                <ul className="side-bar-ul">
                    <li className="side-bar-li">
                        <a className="side-bar-link">
                            <img className="list-icon" alt="list" src="https://cdn-icons-png.flaticon.com/512/507/507205.png"/>
                        </a>
                    </li>
                    <li className="side-bar-li">
                        <a className="side-bar-link">
                            <img className="list-icon" alt="home" src="https://cdn.pixabay.com/photo/2013/07/12/12/56/home-146585_1280.png"/>
                            <span class="side-bar-text">home</span>
                        </a>
                    </li>
                    <li className="side-bar-li">
                        <a className="side-bar-link">
                            <img className="list-icon" alt="orders" src="https://cdn-icons-png.flaticon.com/512/6948/6948578.png"/>
                            <span class="side-bar-text">orders</span>
                        </a>
                    </li>
                    <li className="side-bar-li">
                        <a className="side-bar-link">
                            <img className="list-icon" alt="contact" src="https://cdn-icons-png.flaticon.com/512/597/597177.png"/>
                            <span class="side-bar-text">contact</span>
                        </a>
                    </li>
                    <li className="side-bar-li">
                        <a className="side-bar-link">
                            <img className="list-icon" alt="about" src="https://cdn-icons-png.flaticon.com/512/1/1176.png"/>
                            <span class="side-bar-text">about</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="main-column">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam neque nisl, consequat vitae molestie vitae, dapibus commodo lacus. Nunc mauris nibh, scelerisque vel turpis non, dignissim commodo enim. Phasellus diam dui, tristique non semper et, rutrum sit amet orci. Donec quis metus quis augue ornare faucibus vel et odio. Nulla facilisi. Curabitur et purus nec est luctus dictum vel in odio. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi sapien, fermentum vel mattis in, finibus non dolor. Sed mattis nisl at ante aliquam, vitae viverra lectus ullamcorper. Nunc rutrum et tellus non fringilla. Suspendisse id nisl pretium, euismod ante id, malesuada urna. Suspendisse et egestas nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam neque nisl, consequat vitae molestie vitae, dapibus commodo lacus. Nunc mauris nibh, scelerisque vel turpis non, dignissim commodo enim. Phasellus diam dui, tristique non semper et, rutrum sit amet orci. Donec quis metus quis augue ornare faucibus vel et odio. Nulla facilisi. Curabitur et purus nec est luctus dictum vel in odio. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi sapien, fermentum vel mattis in, finibus non dolor. Sed mattis nisl at ante aliquam, vitae viverra lectus ullamcorper. Nunc rutrum et tellus non fringilla. Suspendisse id nisl pretium, euismod ante id, malesuada urna. Suspendisse et egestas nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam neque nisl, consequat vitae molestie vitae, dapibus commodo lacus. Nunc mauris nibh, scelerisque vel turpis non, dignissim commodo enim. Phasellus diam dui, tristique non semper et, rutrum sit amet orci. Donec quis metus quis augue ornare faucibus vel et odio. Nulla facilisi. Curabitur et purus nec est luctus dictum vel in odio. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi sapien, fermentum vel mattis in, finibus non dolor. Sed mattis nisl at ante aliquam, vitae viverra lectus ullamcorper. Nunc rutrum et tellus non fringilla. Suspendisse id nisl pretium, euismod ante id, malesuada urna. Suspendisse et egestas nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam neque nisl, consequat vitae molestie vitae, dapibus commodo lacus. Nunc mauris nibh, scelerisque vel turpis non, dignissim commodo enim. Phasellus diam dui, tristique non semper et, rutrum sit amet orci. Donec quis metus quis augue ornare faucibus vel et odio. Nulla facilisi. Curabitur et purus nec est luctus dictum vel in odio. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi sapien, fermentum vel mattis in, finibus non dolor. Sed mattis nisl at ante aliquam, vitae viverra lectus ullamcorper. Nunc rutrum et tellus non fringilla. Suspendisse id nisl pretium, euismod ante id, malesuada urna. Suspendisse et egestas nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam neque nisl, consequat vitae molestie vitae, dapibus commodo lacus. Nunc mauris nibh, scelerisque vel turpis non, dignissim commodo enim. Phasellus diam dui, tristique non semper et, rutrum sit amet orci. Donec quis metus quis augue ornare faucibus vel et odio. Nulla facilisi. Curabitur et purus nec est luctus dictum vel in odio. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi sapien, fermentum vel mattis in, finibus non dolor. Sed mattis nisl at ante aliquam, vitae viverra lectus ullamcorper. Nunc rutrum et tellus non fringilla. Suspendisse id nisl pretium, euismod ante id, malesuada urna. Suspendisse et egestas nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam neque nisl, consequat vitae molestie vitae, dapibus commodo lacus. Nunc mauris nibh, scelerisque vel turpis non, dignissim commodo enim. Phasellus diam dui, tristique non semper et, rutrum sit amet orci. Donec quis metus quis augue ornare faucibus vel et odio. Nulla facilisi. Curabitur et purus nec est luctus dictum vel in odio. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi sapien, fermentum vel mattis in, finibus non dolor. Sed mattis nisl at ante aliquam, vitae viverra lectus ullamcorper. Nunc rutrum et tellus non fringilla. Suspendisse id nisl pretium, euismod ante id, malesuada urna. Suspendisse et egestas nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam neque nisl, consequat vitae molestie vitae, dapibus commodo lacus. Nunc mauris nibh, scelerisque vel turpis non, dignissim commodo enim. Phasellus diam dui, tristique non semper et, rutrum sit amet orci. Donec quis metus quis augue ornare faucibus vel et odio. Nulla facilisi. Curabitur et purus nec est luctus dictum vel in odio. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi sapien, fermentum vel mattis in, finibus non dolor. Sed mattis nisl at ante aliquam, vitae viverra lectus ullamcorper. Nunc rutrum et tellus non fringilla. Suspendisse id nisl pretium, euismod ante id, malesuada urna. Suspendisse et egestas nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam neque nisl, consequat vitae molestie vitae, dapibus commodo lacus. Nunc mauris nibh, scelerisque vel turpis non, dignissim commodo enim. Phasellus diam dui, tristique non semper et, rutrum sit amet orci. Donec quis metus quis augue ornare faucibus vel et odio. Nulla facilisi. Curabitur et purus nec est luctus dictum vel in odio. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi sapien, fermentum vel mattis in, finibus non dolor. Sed mattis nisl at ante aliquam, vitae viverra lectus ullamcorper. Nunc rutrum et tellus non fringilla. Suspendisse id nisl pretium, euismod ante id, malesuada urna. Suspendisse et egestas nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam neque nisl, consequat vitae molestie vitae, dapibus commodo lacus. Nunc mauris nibh, scelerisque vel turpis non, dignissim commodo enim. Phasellus diam dui, tristique non semper et, rutrum sit amet orci. Donec quis metus quis augue ornare faucibus vel et odio. Nulla facilisi. Curabitur et purus nec est luctus dictum vel in odio. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi sapien, fermentum vel mattis in, finibus non dolor. Sed mattis nisl at ante aliquam, vitae viverra lectus ullamcorper. Nunc rutrum et tellus non fringilla. Suspendisse id nisl pretium, euismod ante id, malesuada urna. Suspendisse et egestas nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam neque nisl, consequat vitae molestie vitae, dapibus commodo lacus. Nunc mauris nibh, scelerisque vel turpis non, dignissim commodo enim. Phasellus diam dui, tristique non semper et, rutrum sit amet orci. Donec quis metus quis augue ornare faucibus vel et odio. Nulla facilisi. Curabitur et purus nec est luctus dictum vel in odio. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi sapien, fermentum vel mattis in, finibus non dolor. Sed mattis nisl at ante aliquam, vitae viverra lectus ullamcorper. Nunc rutrum et tellus non fringilla. Suspendisse id nisl pretium, euismod ante id, malesuada urna. Suspendisse et egestas nibh.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam neque nisl, consequat vitae molestie vitae, dapibus commodo lacus. Nunc mauris nibh, scelerisque vel turpis non, dignissim commodo enim. Phasellus diam dui, tristique non semper et, rutrum sit amet orci. Donec quis metus quis augue ornare faucibus vel et odio. Nulla facilisi. Curabitur et purus nec est luctus dictum vel in odio. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi sapien, fermentum vel mattis in, finibus non dolor. Sed mattis nisl at ante aliquam, vitae viverra lectus ullamcorper. Nunc rutrum et tellus non fringilla. Suspendisse id nisl pretium, euismod ante id, malesuada urna. Suspendisse et egestas nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam neque nisl, consequat vitae molestie vitae, dapibus commodo lacus. Nunc mauris nibh, scelerisque vel turpis non, dignissim commodo enim. Phasellus diam dui, tristique non semper et, rutrum sit amet orci. Donec quis metus quis augue ornare faucibus vel et odio. Nulla facilisi. Curabitur et purus nec est luctus dictum vel in odio. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi sapien, fermentum vel mattis in, finibus non dolor. Sed mattis nisl at ante aliquam, vitae viverra lectus ullamcorper. Nunc rutrum et tellus non fringilla. Suspendisse id nisl pretium, euismod ante id, malesuada urna. Suspendisse et egestas nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam neque nisl, consequat vitae molestie vitae, dapibus commodo lacus. Nunc mauris nibh, scelerisque vel turpis non, dignissim commodo enim. Phasellus diam dui, tristique non semper et, rutrum sit amet orci. Donec quis metus quis augue ornare faucibus vel et odio. Nulla facilisi. Curabitur et purus nec est luctus dictum vel in odio. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi sapien, fermentum vel mattis in, finibus non dolor. Sed mattis nisl at ante aliquam, vitae viverra lectus ullamcorper. Nunc rutrum et tellus non fringilla. Suspendisse id nisl pretium, euismod ante id, malesuada urna. Suspendisse et egestas nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam neque nisl, consequat vitae molestie vitae, dapibus commodo lacus. Nunc mauris nibh, scelerisque vel turpis non, dignissim commodo enim. Phasellus diam dui, tristique non semper et, rutrum sit amet orci. Donec quis metus quis augue ornare faucibus vel et odio. Nulla facilisi. Curabitur et purus nec est luctus dictum vel in odio. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi sapien, fermentum vel mattis in, finibus non dolor. Sed mattis nisl at ante aliquam, vitae viverra lectus ullamcorper. Nunc rutrum et tellus non fringilla. Suspendisse id nisl pretium, euismod ante id, malesuada urna. Suspendisse et egestas nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam neque nisl, consequat vitae molestie vitae, dapibus commodo lacus. Nunc mauris nibh, scelerisque vel turpis non, dignissim commodo enim. Phasellus diam dui, tristique non semper et, rutrum sit amet orci. Donec quis metus quis augue ornare faucibus vel et odio. Nulla facilisi. Curabitur et purus nec est luctus dictum vel in odio. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi sapien, fermentum vel mattis in, finibus non dolor. Sed mattis nisl at ante aliquam, vitae viverra lectus ullamcorper. Nunc rutrum et tellus non fringilla. Suspendisse id nisl pretium, euismod ante id, malesuada urna. Suspendisse et egestas nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam neque nisl, consequat vitae molestie vitae, dapibus commodo lacus. Nunc mauris nibh, scelerisque vel turpis non, dignissim commodo enim. Phasellus diam dui, tristique non semper et, rutrum sit amet orci. Donec quis metus quis augue ornare faucibus vel et odio. Nulla facilisi. Curabitur et purus nec est luctus dictum vel in odio. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi sapien, fermentum vel mattis in, finibus non dolor. Sed mattis nisl at ante aliquam, vitae viverra lectus ullamcorper. Nunc rutrum et tellus non fringilla. Suspendisse id nisl pretium, euismod ante id, malesuada urna. Suspendisse et egestas nibh
                </p>
            </div>
            <div className="order-column">
                <h3>My Order:</h3>
                <div className="order-column-top">
                    <p>Deliver to:</p>
                    <div className="dropdown">
                        <div className="dropdown-select">
                            <span className="dropdown-selected">Chosen</span>
                            <div className="dropdown-caret"></div>
                        </div>
                        <ul className="dropdown-menu">
                            <li>Option 1</li>
                            <li>Option 2</li>
                            <li className="active">Chosen</li>
                            <li>Option 3</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders;