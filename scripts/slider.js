function Slider(image, btnNext, btnPrev) {
    this.image = image
    this.imagesUrl = []
    this.btnNext = btnNext
    this.btnPrev = btnPrev
    this.imgIndex = 0
    this.initialization = function(element)
    {

        this.image = element.querySelector('.slider-img')
        this.btnNext = element.querySelector('.btn-next')
        this.btnPrev = element.querySelector('.btn-previous')

        this.btnPrev.addEventListener('click', this.onShowPrevBtnClick.bind(this))
        this.btnNext.addEventListener('click', this.onShowNextBtnClick.bind(this))

        this.imagesUrl.push('images/emoji1.png')
        this.imagesUrl.push('images/emoji2.png')
        this.imagesUrl.push('images/emoji3.png')

        this.image.src = this.imagesUrl[this.imgIndex]
        this.btnPrev.disabled = true
    }
    this.onShowPrevBtnClick = function (e) {
        this.imgIndex--
        this.image.src = this.imagesUrl[this.imgIndex]
        this.btnNext.disabled = false
        if (this.imgIndex === 0) {
            this.btnPrev.disabled = true
        }
    }
    this.onShowNextBtnClick = function (e) {
        this.imgIndex++
        this.image.src = this.imagesUrl[this.imgIndex]
        this.btnPrev.disabled = false
        if (this.imgIndex === (this.imagesUrl.length - 1)) {
            this.btnNext.disabled = true
        }
    }

}
