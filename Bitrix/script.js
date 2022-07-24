



$('.carousel').slick({
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 2000,
    cssEase:'linear',
    infinite: true,
    focusOnSelect: false,
    responsive: [{
        breakpoint: 768,
        settings: {
            arrows: false,
            slidesToShow: 3
        }
    }, {
        breakpoint: 480,
        settings: {
            arrows: false,
            slidesToShow: 1
        }
    }]
});

$( "#referance-button" ).click(function() {
    $( "#referance-show-id" ).toggle();
  });
  

        (function () {
            const pricingSliders = document.querySelectorAll(".pricing-slider");

            if (pricingSliders.length > 0) {
                for (let i = 0; i < pricingSliders.length; i++) {
                    const pricingSlider = pricingSliders[i];

                    // Build the input object
                    const pricingInput = {
                        el: pricingSlider.querySelector("input")
                    };
                    pricingInput.data = JSON.parse(
                        pricingInput.el.getAttribute("data-price-input")
                    );
                    pricingInput.currentValEl = pricingSlider.querySelector(
                        ".pricing-slider-value"
                    );
                    pricingInput.thumbSize = parseInt(
                        window
                            .getComputedStyle(pricingInput.currentValEl)
                            .getPropertyValue("--thumb-size"),
                        10
                    );

                    // Build the output array
                    const pricingOutputEls = pricingSlider.parentNode.querySelectorAll(
                        ".pricing-item-price"
                    );
                    const pricingOutput = [];
                    for (let i = 0; i < pricingOutputEls.length; i++) {
                        const pricingOutputEl = pricingOutputEls[i];
                        const pricingOutputObj = {};
                        pricingOutputObj.currency = pricingOutputEl.querySelector(
                            ".pricing-item-price-currency"
                        );
                        pricingOutputObj.amount = pricingOutputEl.querySelector(
                            ".pricing-item-price-amount"
                        );
                        pricingOutputObj.after = pricingOutputEl.querySelector(
                            ".pricing-item-price-after"
                        );
                        pricingOutputObj.data = JSON.parse(
                            pricingOutputEl.getAttribute("data-price-output")
                        );
                        pricingOutput.push(pricingOutputObj);
                    }

                    pricingInput.el.setAttribute("min", 0);
                    pricingInput.el.setAttribute(
                        "max",
                        Object.keys(pricingInput.data).length - 1
                    );
                    !pricingInput.el.getAttribute("value") &&
                        pricingInput.el.setAttribute("value", 0);

                    handlePricingSlider(pricingInput, pricingOutput);
                    window.addEventListener("input", function () {
                        handlePricingSlider(pricingInput, pricingOutput);
                    });
                }
            }

            function handlePricingSlider(input, output) {
                // output the current slider value
                if (input.currentValEl)
                    input.currentValEl.innerHTML = input.data[input.el.value];
                // update prices
                for (let i = 0; i < output.length; i++) {
                    const outputObj = output[i];
                    if (outputObj.currency)
                        outputObj.currency.innerHTML = outputObj.data[input.el.value][0];
                    if (outputObj.amount)
                        outputObj.amount.innerHTML = outputObj.data[input.el.value][1];
                    if (outputObj.after)
                        outputObj.after.innerHTML = outputObj.data[input.el.value][2];
                }
            }
        })();
//


$(document).ready(function () {
    $('.picturess').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        dots: false,
        pauseOnHover: false,
    });
});
