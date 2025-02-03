export const SlideOptions = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    autoplaySpeed: 3000,
    lazyLoad: true,
    responsive: [
        {
            // Pour les ordinateurs et plus (écrans ≥ 10248px)
            breakpoint: 1024,
            settings: {
                slidesToShow: 6, // 6 slides affichées
                slidesToScroll: 1,
            },
        },
        {
            // Pour les tablettes (écrans ≥ 768px)
            breakpoint: 768,
            settings: {
                slidesToShow: 4, // 3 slides affichées
                slidesToScroll: 1,
            },
        },
        {
            // Pour les smartphones (écrans ≤ 768px)
            breakpoint: 480,
            settings: {
                slidesToShow: 2, // 2 slides affichées
                slidesToScroll: 2,
            },
        },
    ]

}