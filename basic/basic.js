document.addEventListener('DOMContentLoaded', function() {
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
  
    sidebarLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const contentId = this.getAttribute('data-content');
        const contents = document.querySelectorAll('.content');
  
        contents.forEach(function(content) {
          content.classList.remove('active');
        });
  
        document.getElementById(contentId).classList.add('active');
      });
    });
  });
  