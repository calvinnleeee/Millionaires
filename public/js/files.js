document.getElementById('toggleSwitch').addEventListener('click', function() {
  const toggleCircle = document.getElementById('toggleCircle');
  toggleCircle.classList.toggle('toggle-active');
  toggleCircle.classList.toggle('bg-stone-700');
  toggleCircle.classList.toggle('bg-white');
});