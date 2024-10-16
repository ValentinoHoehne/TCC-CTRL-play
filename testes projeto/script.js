const themeToggleBtn = document.getElementsById('theme-toggle');
const body = document.body;

// Verifica o tema salvo no localStorage ao carregar a página
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
}

// Alterna o tema ao clicar no botão
themeToggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  
  // Salva a preferência no localStorage
  const currentTheme = body.classList.contains('dark-theme') ? 'dark-theme' : '';
  localStorage.setItem('theme', currentTheme);
});
