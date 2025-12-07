// Header Mobile
const menuBurgerBtn = document.querySelector(".menu-burger__btn");
const headerTop = document.querySelector(".header-top");

menuBurgerBtn.addEventListener("click", function () {
    menuBurgerBtn.children[0].classList.toggle("active");
    headerTop.classList.toggle("header-top--mobile");
    document.body.classList.toggle("lock");
});

// Маска телефона
mask("[data-tel-input]");

// Удаляем '+' если больше ничего не введено, чтобы показать placeholder
const phoneInputs = document.querySelectorAll("[data-tel-input]");
phoneInputs.forEach((input) => {
    input.addEventListener("input", () => {
        if (input.value == "+") input.value = "";
    });
    input.addEventListener("blur", () => {
        if (input.value == "+") input.value = "";
    });
});

// Yandex map
ymaps.ready(function () {
    var map = new ymaps.Map(
            "map",
            {
                center: [59.943543, 30.338928],
                zoom: 16,
            },
            {
                searchControlProvider: "yandex#search",
            }
        ),
        myPlacemark = new ymaps.Placemark(
            map.getCenter(),
            {
                hintContent: "LoftHouse",
                balloonContent: `
                    <div class="balloon">
                        <div class="balloon__address">Наб. реки Фонтанки 10-15</div>
                        <div class="balloon__contacts">
                            <a href="tel:+78121234567">+8 (812) 123-45-67</a>
                        </div>
                    </div>
            `,
            },
            {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: "default#image",
                // Своё изображение иконки метки.
                iconImageHref: "./../img/map/location-pin.svg",
                // Размеры метки.
                iconImageSize: [40, 40],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-20, -40],
            }
        );

    map.controls.remove("geolocationControl"); // удаляем геолокацию
    map.controls.remove("searchControl"); // удаляем поиск
    map.controls.remove("trafficControl"); // удаляем контроль трафика
    map.controls.remove("typeSelector"); // удаляем тип

    // map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove("rulerControl"); // удаляем контрол правил
    map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)
    map.geoObjects.add(myPlacemark);
    myPlacemark.balloon.open();
});
