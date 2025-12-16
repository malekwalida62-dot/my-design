// Simple interactive behaviors for Midtown site

// Open project details modal with content
const projModal = document.getElementById('projModal');
const projTitle = document.getElementById('projTitle');
const projContent = document.getElementById('projContent');

const projectData = {
  p1:{
    title:'بوليفارد ريزيدنس',
    content:`<p>مجمع سكني فاخر بمساحات خضراء، حمامات سباحة ومناطق لعب للأطفال. موقع استراتيجي وقرب من الخدمات.</p>
             <ul><li>عدد الوحدات: 320</li><li>المساحات: 120-300 م²</li><li>مواعيد التسليم: 2026</li></ul>`
  },
  p2:{
    title:'بلازا التجاري',
    content:`<p>مركز تجاري متعدد الطوابق بمكاتب ومناطق ترفيه. تصميم حديث ومساحات قابلة للتأجير الفوري.</p>
             <ul><li>محلات ومطاعم</li><li>مواقف ذكية</li><li>إدارة عقارية متاحة</li></ul>`
  },
  p3:{
    title:'فلل الذكاء',
    content:`<p>فلل مجهزة بأنظمة ذكية للتحكم والإضاءة والتكييف، مع مساحات خارجية خاصة لكل فيلا.</p>
             <ul><li>أنظمة ذكية متكاملة</li><li>تجهيزات عالية الجودة</li><li>خدمات صيانة شاملة</li></ul>`
  }
};

function openProject(id){
  const p = projectData[id];
  if(!p) return;
  projTitle.textContent = p.title;
  projContent.innerHTML = p.content;
  projModal.classList.add('show');
  projModal.setAttribute('aria-hidden','false');
}

function closeProj(){
  projModal.classList.remove('show');
  projModal.setAttribute('aria-hidden','true');
}

// Smooth scroll helper for map button
function scrollToMap(){
  document.getElementById('contact').scrollIntoView({behavior:'smooth'});
}

// WhatsApp quick contact helper
function openContactWith(message){
  const text = encodeURIComponent(message + '\nالاسم: \nالهاتف: ');
  window.open(`https://wa.me/19965?text=${text}`, '_blank');
}

// Ensure modal close on ESC
document.addEventListener('keyup', (e)=>{
  if(e.key === 'Escape'){
    closeProj();
  }
});

// small UX: animate nav on scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', ()=>{
  if(window.scrollY > 30) nav.style.backdropFilter = 'blur(8px)';
  else nav.style.backdropFilter = 'blur(6px)';
});
