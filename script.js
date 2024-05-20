    var checked1 = document.getElementById('add-1');
    var checked2 = document.getElementById('add-2');
    var checked3 = document.getElementById('add-3');

    // Добавляем обработчики событий для кнопок checked1 и checked2
    checked1.addEventListener('change', function() {
        if (this.checked) {
            // Если checked1 выбрана, снимаем выбор с checked3
            checked3.checked = false;
        }
    });

    checked2.addEventListener('change', function() {
        if (this.checked) {
            // Если checked2 выбрана, снимаем выбор с checked3
            checked3.checked = false;
        }
    });

    // Добавляем обработчик события для кнопки checked3
    checked3.addEventListener('change', function() {
        if (this.checked) {
            // Если checked3 выбрана, снимаем выбор с checked1 и checked2
            checked1.checked = false;
            checked2.checked = false;
        }
    });

    document.addEventListener("DOMContentLoaded", function() {
        const tourRadios = document.querySelectorAll('input[name="cheked"]');
        const additionalRadios = document.querySelectorAll('input[name^="cheked"]');
        const reserveButton = document.querySelector('.btn_brown');
        const titlePrice = document.querySelector('.title-price');
        const guideOption = document.getElementById('guide-option');
        
        let basePrice = 0; // Начальная цена

        // Функция для обновления цены
        function updatePrice() {
            let totalPrice = basePrice; // Общая цена равна базовой цене
            
            // Добавляем цену выбранных туров
            tourRadios.forEach(radio => {
                if (radio.checked) {
                    totalPrice = parseInt(radio.value) - parseInt(radio.value);
                }
            });

            // Добавляем цену выбранных дополнительных опций
            additionalRadios.forEach(radio => {
                if (radio.checked) {
                    totalPrice += parseInt(radio.value);
                }
            });

            // Обновляем отображение цены
            titlePrice.textContent = `${totalPrice} руб.`;
        }

        // Функция для показа/скрытия опции "Гид"
        function toggleGuideOption() {
            if (document.getElementById('tour-2').checked) {
                guideOption.style.display = 'block';
            } else {
                guideOption.style.display = 'none';
                // Сбрасываем выбор гида, если он был выбран
                document.getElementById('add-2').checked = false;
            }
            updatePrice(); // Пересчитываем цену при изменении видимости опции
        }

        // Сохраняем базовую цену при загрузке страницы
        basePrice = parseInt(titlePrice.textContent.match(/\d+/)[0]);

        // Слушаем изменения в радио-кнопках
        tourRadios.forEach(radio => radio.addEventListener('change', function() {
            toggleGuideOption();
            updatePrice();
        }));

        additionalRadios.forEach(radio => radio.addEventListener('change', updatePrice));

        // Слушаем клик по кнопке "ЗАБРОНИРОВАТЬ"
        reserveButton.addEventListener('click', function() {
            alert(`Вы выбрали на сумму: ${titlePrice.textContent}`);
        });

        // Инициализируем отображение начальной цены и опций
        updatePrice();
        toggleGuideOption();
    });
    

    document.addEventListener("DOMContentLoaded", function() {
        // Находим кнопку "Забронировать" и другие кнопки по id
       
        var otherButton1 = document.querySelector('#otherButton1');
        var otherButton2 = document.querySelector('#otherButton2');
        var otherButton3 = document.querySelector('#otherButton3');
        var otherButton4 = document.querySelector('#otherButton4');
        var otherButton5 = document.querySelector('#otherButton5');
        var otherButton6 = document.querySelector('#btnCatalog');
        

        // Находим элементы, к которым нужно прокрутить страницу по id
        var otherSection1 = document.querySelector('.section-book');
        var otherSection2 = document.querySelector('.section-tour');
        
        

        // Функция для скролла к элементу
        function scrollToElement(element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }

        

        // Добавляем обработчики событий клика на кнопки с id
        otherButton1.addEventListener('click', function(event) {
            event.preventDefault();
            scrollToElement(otherSection1);
        });

        otherButton2.addEventListener('click', function(event) {
            event.preventDefault();
            scrollToElement(otherSection1);
        });

        otherButton3.addEventListener('click', function(event) {
            event.preventDefault();
            scrollToElement(otherSection1);
        });

        otherButton4.addEventListener('click', function(event) {
            event.preventDefault();
            scrollToElement(otherSection1);
        });

        otherButton5.addEventListener('click', function(event) {
            event.preventDefault();
            scrollToElement(otherSection1);
        });

        otherButton6.addEventListener('click', function(event) {
            event.preventDefault();
            scrollToElement(otherSection2);
        });
    });


       
    
    