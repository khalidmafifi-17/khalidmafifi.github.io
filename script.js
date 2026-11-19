// ==========================================
// 1. بيانات مشاريعك (عدّل هذه القائمة بأعمالك)
// ==========================================
const projectsData = [
  {
    title: "إعلان إطلاق تطبيق توصيل ذكي",
    category: "ads",
    categoryLabel: "إعلانات تجارية",
    client: "شركة توصيل",
    duration: "01:15",
    videoUrl: "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
    // اترك thumbnail فارغاً ليتم جلب صورة يوتيوب تلقائياً، أو ضع رابط صورة مخصصة
    thumbnail: "",
    description: "مونتاج إيقاعي سريع وتصحيح ألوان سينمائي لإعلان الحملة الصيفية."
  },
  {
    title: "فيديو موشن جرافيك تعريفي لمنصة تقنية",
    category: "motion",
    categoryLabel: "موشن جرافيك",
    client: "TechCorp",
    duration: "00:55",
    videoUrl: "https://vimeo.com/76979871",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80",
    description: "تصميم الشخصيات والمشاهد وتحريكها بالكامل باستخدام After Effects."
  },
  {
    title: "وثائقي قصير: صناعة القهوة المختصة",
    category: "editing",
    categoryLabel: "مونتاج",
    client: "Roastery Co.",
    duration: "03:40",
    videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    thumbnail: "",
    description: "مونتاج قصصي، هندسة صوتية، ومكساج موسيقي لإبراز تفاصيل التحميص."
  },
  {
    title: "هوية بصرية متحركة لقناة رياضية",
    category: "motion",
    categoryLabel: "موشن جرافيك",
    client: "Sport TV",
    duration: "00:30",
    videoUrl: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80",
    description: "باقة انترو وفواصل شاشة ثلاثية الأبعاد وثنائية الأبعاد."
  },
  {
    title: "تغطية مؤتمر الابتكار الطبي",
    category: "editing",
    categoryLabel: "مونتاج",
    client: "Global Summit",
    duration: "02:10",
    videoUrl: "https://vimeo.com/1084537",
    thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80",
    description: "ملخص فعاليات المؤتمر ومقابلات المتحدثين الرئيسيين."
  },
  {
    title: "إعلان سوشيال ميديا لعلامة أزياء",
    category: "ads",
    categoryLabel: "إعلانات تجارية",
    client: "Urban Style",
    duration: "00:45",
    videoUrl: "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80",
    description: "انتقالات بصرية سلسة ومؤثرات صوتية مخصصة لمنصات إنستغرام وتيك توك."
  }
];

// ==========================================
// 2. دوال معالجة روابط YouTube و Vimeo
// ==========================================
function parseVideoUrl(url) {
  // دعم YouTube بجميع صيغ روابطه
  const ytMatch = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  if (ytMatch) {
    return {
      platform: "youtube",
      id: ytMatch[1],
      embedUrl: `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0`,
      autoThumb: `https://img.youtube.com/vi/${ytMatch[1]}/hqdefault.jpg`
    };
  }

  // دعم Vimeo
  const vimeoMatch = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeoMatch) {
    return {
      platform: "vimeo",
      id: vimeoMatch[1],
      embedUrl: `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`,
      autoThumb: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=900&q=80"
    };
  }

  return null;
}

// ==========================================
// 3. عرض المشاريع وتشغيل الفلترة والـ Lightbox
// ==========================================
const projectsGrid = document.getElementById("projectsGrid");
const filterButtons = document.querySelectorAll(".filter-btn");
const lightbox = document.getElementById("videoLightbox");
const videoContainer = document.getElementById("videoContainer");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxDesc = document.getElementById("lightboxDesc");

function renderProjects(filter = "all") {
  projectsGrid.innerHTML = "";

  const filtered = filter === "all"
    ? projectsData
    : projectsData.filter(item => item.category === filter);

  filtered.forEach(project => {
    const parsed = parseVideoUrl(project.videoUrl);
    const thumbSrc = project.thumbnail || (parsed ? parsed.autoThumb : "");

    const card = document.createElement("article");
    card.className = "project-card";
    card.innerHTML = `
      <div class="thumbnail-box">
        <img src="${thumbSrc}" alt="${project.title}" loading="lazy" />
        <div class="play-icon-small">▶</div>
        <span class="duration-tag">${project.duration}</span>
      </div>
      <div class="card-body">
        <div class="card-meta">
          <span>${project.categoryLabel}</span>
          <span class="client-name">${project.client}</span>
        </div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      </div>
    `;

    card.addEventListener("click", () => {
      openLightbox(project.videoUrl, project.title, project.description);
    });

    projectsGrid.appendChild(card);
  });
}

function openLightbox(url, title, description) {
  const parsed = parseVideoUrl(url);
  if (!parsed) return;

  videoContainer.innerHTML = `
    <iframe
      src="${parsed.embedUrl}"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen>
    </iframe>
  `;
  lightboxTitle.textContent = title;
  lightboxDesc.textContent = description;
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("open");
  videoContainer.innerHTML = ""; // إيقاف الفيديو فوراً عند الإغلاق
  document.body.style.overflow = "";
}

// أحداث أزرار الفلترة
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects(btn.dataset.filter);
  });
});

// تشغيل الشوريل الرئيسي في Lightbox
const showreelBox = document.querySelector(".showreel-wrapper");
if (showreelBox) {
  showreelBox.addEventListener("click", () => {
    openLightbox(
      showreelBox.dataset.videoUrl,
      "Showreel 2026 - ملخص الأعمال",
      "مجموعة مختارة من أبرز مشاريع المونتاج والموشن جرافيك والإعلانات."
    );
  });
}

// إغلاق Lightbox عند الضغط على زر الإغلاق أو الخلفية أو زر Esc
document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
document.getElementById("lightboxBackdrop").addEventListener("click", closeLightbox);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox.classList.contains("open")) {
    closeLightbox();
  }
});

// التشغيل الأولي عند فتح الصفحة
renderProjects();
