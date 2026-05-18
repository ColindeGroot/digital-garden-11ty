document.querySelectorAll(".wikis__list__item").forEach((blog) => {
  const colors = [
    "var(--yellow-primary)",
    "var(--green-primary)",
    "var(--blue-primary)",
  ];
  blog.style.setProperty(
    "background-color",
    colors[Math.floor(Math.random() * colors.length)],
  );
});
