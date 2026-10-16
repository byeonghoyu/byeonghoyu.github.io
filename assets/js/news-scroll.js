document.querySelectorAll("[data-news-scroll]").forEach((scroller) => {
  const mobile = window.matchMedia("(max-width: 767.98px)");
  const updateFade = () => {
    scroller.classList.toggle("news-has-more", scroller.scrollHeight - scroller.clientHeight - scroller.scrollTop > 2);
  };
  const updateLayout = () => {
    const rows = scroller.querySelectorAll("tr");
    if (mobile.matches && rows.length > 2) {
      // Show two items and a glimpse of the next one when viewport space permits.
      const height = rows[0].getBoundingClientRect().height + rows[1].getBoundingClientRect().height + 40;
      scroller.style.maxHeight = `${Math.min(height, window.innerHeight * 0.65)}px`;
    } else {
      scroller.style.maxHeight = "60vw";
    }
    updateFade();
  };
  scroller.addEventListener("scroll", updateFade, { passive: true });
  window.addEventListener("resize", updateLayout);
  new ResizeObserver(updateLayout).observe(scroller.querySelector("table"));
  updateLayout();
});
