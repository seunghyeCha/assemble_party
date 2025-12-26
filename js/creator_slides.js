document.addEventListener("DOMContentLoaded", function () {
    const track = document.getElementById("creators");
    const cards = document.querySelectorAll(".creator");

    const gap = 55;
    const cardWidth = cards[0].offsetWidth + gap;

    // 첫 카드 복제
    const firstClone = cards[0].cloneNode(true);
    track.appendChild(firstClone);

    let index = 0;
    const totalSlides = cards.length + 1;

    function moveSlide() {
        index++;
        track.style.transition = "transform 0.6s ease";
        track.style.transform = `translateX(-${index * cardWidth}px)`;

        // 복제 슬라이드 도착 시
        if (index === cards.length) {
            setTimeout(() => {
                track.style.transition = "none";
                index = 0;
                track.style.transform = `translateX(0)`;
            }, 600);
        }
    }

    setInterval(moveSlide, 10000);
});