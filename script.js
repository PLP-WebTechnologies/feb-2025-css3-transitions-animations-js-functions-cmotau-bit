document.addEventListener('DOMContentLoaded', () => {
    const fontSizeBtn = document.getElementById('toggle-font');
    const showBtn = document.getElementById('show-articles');
    const container = document.getElementById('articles-container');
    const body = document.body;
    const form = document.getElementById('subscribe-form');
  
    // Load font size preference
    const savedSize = localStorage.getItem('textSize');
    if (savedSize === 'large') {
      body.classList.add('large-text');
    }
  
    // Toggle font size
    fontSizeBtn.addEventListener('click', () => {
      body.classList.toggle('large-text');
      const size = body.classList.contains('large-text') ? 'large' : 'normal';
      localStorage.setItem('textSize', size);
    });
  
    // Show articles with animation
    showBtn.addEventListener('click', () => {
      container.classList.remove('hidden');
      const cards = container.querySelectorAll('.card');
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('fade-in');
        }, index * 200);
      });
    });
  
    // Newsletter form handler
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      alert(`Thanks for subscribing, ${email}!`);
      form.reset();
    });
  });
  