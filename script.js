<script>
    const scrollContainer = document.querySelector('.scroll-container');

    function scrollImages(scrollAmount) {
      scrollContainer.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  </script>