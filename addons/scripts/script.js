const sliders = document.querySelectorAll('.div-slider');

sliders.forEach(function(sliderDiv){
    const slidesWrapper = sliderDiv.querySelector('.slides-wrapper')
    const slides = slidesWrapper.querySelectorAll('.slider')
    const container = sliderDiv.closest('section');
    const menuSlider = container.querySelector('.menu-slider')
    const seletores = container.querySelectorAll('.seletor-slider');
    const botaoEsquerda = container.querySelector('.seta-esquerda-slider');
    const botaoDireita = container.querySelector('.seta-direita-slider');
    const botaoInicio = container.querySelector('.botao-slider-inicio')
    const totalSlides = slides.length

    let sliderAtual = 0

    function atualizarSeletores(){
        seletores.forEach((seletor, idx) =>{
            if (idx === sliderAtual){
                seletor.classList.add('seletor-slider-ativo')
            } else {
                seletor.classList.remove("seletor-slider-ativo")
            }
        })
    }

    function atualizarSlider(){
        const deslocamento = -(100 / totalSlides) * sliderAtual;
        sliderDiv.style.transform = `translateX(${deslocamento}%)`;
        atualizarSeletores()

        if (menuSlider) {
            if (sliderAtual > 0) {
                menuSlider.classList.add('menu-slider-visivel')
            } else {
                menuSlider.classList.remove('menu-slider-visivel')
            }
        }
    }

    if (botaoDireita) {
        botaoDireita.addEventListener('click', () => {
            if (sliderAtual < totalSlides - 1){
                sliderAtual++;
                atualizarSlider()
            }
        })
    }

    if (botaoEsquerda){
        botaoEsquerda.addEventListener('click', () => {
            if (sliderAtual > 0){
                sliderAtual--;
                atualizarSlider()
            }
        })
    }

    seletores.forEach((seletor, idx) => {
        seletor.addEventListener('click', () => {
            sliderAtual = idx;
            atualizarSlider();

        })
    })

    if (botaoInicio){
        botaoInicio.addEventListener('click', () => {
            sliderAtual++
            atualizarSlider()
        })
    }



    atualizarSeletores()
})