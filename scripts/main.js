// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

// Reset contact form fields after successful submission
function resetFields() {
  const fields = ['name', 'email', 'message'];
  fields.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
}

