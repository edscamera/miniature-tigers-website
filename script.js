const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

$$(".flip-card").forEach(card => {
    const img = card.querySelector(".flip-card-inner img");
    if (img) img.addEventListener("click", () => {
        card.classList.toggle("flipped");
    });
});
$$(".video").forEach(video => {
    const thumbnail = video.querySelector("img");
    if (thumbnail) thumbnail.addEventListener("click", () => {
        const iframe = document.createElement("iframe");
        const videoId = thumbnail.src.split("/").slice(-2)[0];
        iframe.setAttribute("allowfullscreen", "");
        iframe.setAttribute("allow", "autoplay");
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        thumbnail.parentElement.appendChild(iframe);
        thumbnail.remove();
    });
});
