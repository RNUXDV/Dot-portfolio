// DOT demo interactions (scoped to the demo area only)
(() => {
  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Demo elements
  const wrap = document.querySelector(".dot-demo-wrap");
  if (!wrap) return;

  const nodes = Array.from(wrap.querySelectorAll(".node"));
  const activeText = document.getElementById("activeNode");

  if (!nodes.length || !activeText) return;

  function setActive(node) {
    nodes.forEach(n => n.classList.remove("active"));
    node.classList.add("active");
    activeText.textContent = node.textContent.trim();
  }

  nodes.forEach(node => {
    node.addEventListener("click", () => setActive(node));
  });

  // Set default
  setActive(nodes[0]);
})();