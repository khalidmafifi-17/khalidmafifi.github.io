// ==========================================
// 1. Your Video Projects (Replace videoUrl with your real YouTube/Vimeo links)
// ==========================================
const projectsData = [
  {
    title: "Ramadan Broadcast & Social Campaign",
    category: "broadcast",
    categoryLabel: "Broadcast & Social",
    client: "Rotana Media Group",
    duration: "01:30",
    videoUrl: "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
    thumbnail: "", // Leave empty to auto-fetch YouTube thumbnail
    description: "High-speed multi-channel promo editing and centralized Cloud Media Hub delivery across Khalijia, Drama, and LBC."
  },
  {
    title: "Expo 2020 Pavilion & Performance Campaign",
    category: "motion",
    categoryLabel: "2D Motion & Branding",
    client: "Talabat UAE",
    duration: "00:45",
    videoUrl: "https://vimeo.com/76979871",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80",
    description: "Custom 2D character animation, screen loops, and performance marketing assets driving a 40% engagement lift."
  },
  {
    title: "Financial Documentary & Explainer Feature",
    category: "broadcast",
    categoryLabel: "Broadcast & News",
    client: "Asharq Bloomberg KSA",
    duration: "03:20",
    videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    thumbnail: "",
    description: "Long-form economic storytelling utilizing custom-programmed responsive visual overlay templates."
  },
  {
    title: "Pharmaceutical Product Launch (Kerendia & Eylea)",
    category: "motion",
    categoryLabel: "2D Motion & Branding",
    client: "Bayer Pharma",
    duration: "01:10",
    videoUrl: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80",
    description: "Translating complex medical data into compliant, high-impact scientific motion graphics."
  },
  {
    title: "National Corporate & Government Campaign",
    category: "commercial",
    categoryLabel: "Commercial & Social",
    client: "Paradox Agency – Qatar",
    duration: "01:45",
    videoUrl: "https://vimeo.com/1084537",
    thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80",
    description: "End-to-end creative direction, storyboarding, and multi-platform commercial delivery."
  },
  {
    title: "Breaking News & Scalable Graphics Package",
    category: "broadcast",
    categoryLabel: "Broadcast & News",
    client: "Al-Arabiya TV",
    duration: "02:05",
    videoUrl: "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80",
    description: "Fast-turnaround news packaging and custom lower-third systems boosting interactive engagement by 45%."
  }
];

// ==========================================
// 2. YouTube & Vimeo URL Parser
// ==========================================
function parseVideoUrl(url) {
  const ytMatch = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  if (ytMatch) {
    return {
      platform: "youtube",
      id: ytMatch[1],
      embedUrl: `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0`,
      autoThumb: `https://img.youtube.com/vi/${ytMatch[1]}/hqdefault.jpg`
    };
  }

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
// 3. Render Grid, Filter & Lightbox
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
  videoContainer.innerHTML = "";
  document.body.style.overflow = "";
}

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects(btn.dataset.filter);
  });
});

const showreelBox = document.querySelector(".showreel-wrapper");
if (showreelBox) {
  showreelBox.addEventListener("click", () => {
    openLightbox(
      showreelBox.dataset.videoUrl,
      "Khalid Mohamed Afifi — Official Showreel",
      "Highlights across Broadcast Editing, 2D Motion Graphics, and Commercial Direction."
    );
  });
}

document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
document.getElementById("lightboxBackdrop").addEventListener("click", closeLightbox);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox.classList.contains("open")) {
    closeLightbox();
  }
});

renderProjects();