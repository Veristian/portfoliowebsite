const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".project, .about .large-copy, .contact .large-copy").forEach((element) => {
  element.classList.add("reveal");
  observer.observe(element);
});
