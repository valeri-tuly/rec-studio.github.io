document.addEventListener("DOMContentLoaded", () => {
  const players = document.querySelectorAll("video[data-src]");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const video = entry.target;
        const config = JSON.parse(video.getAttribute("data-src"));
        videojs(video, config);  // передаем объект, а не строку
        video.removeAttribute("data-src");
        observer.unobserve(video);
      }
    });
  }, { threshold: 0.2 });

  players.forEach(v => observer.observe(v));
});

