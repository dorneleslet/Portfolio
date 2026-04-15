const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Função para trocar o idioma
function changeLang(lang) {
  const isEn = lang === 'en';
  
  // Adiciona ou remove a classe en-mode no body
  document.body.classList.toggle('en-mode', isEn);
  
  // Atualiza o atributo lang do HTML para acessibilidade
  document.documentElement.lang = isEn ? 'en' : 'pt-BR';
  
  localStorage.setItem('preferred-lang', lang);
}

// Verifica o idioma salvo ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  // Se não houver idioma salvo, o padrão será 'pt'
  const savedLang = localStorage.getItem('preferred-lang') || 'pt';
  changeLang(savedLang);
});
