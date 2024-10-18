const text = "Hello, world! This is a typing animation.";
let index = 0;

function type() {
  document.getElementById('text').textContent += text[index++];
  if(index < text.length + 1) setTimeout(type, 100); 
}

type();
