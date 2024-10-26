'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-project-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");





// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}


 const projects = [
  {
    imgSrc: "./assets/images/projects/airbnbclone_angular.png",
    imgAlt: "AirBnB Clone Angular",
    title: "AirBnB Clone Angular",
    category: "Web",
    categorySlug: "web", 
    tags: ["Angular", "PostgreSQL", "API", "PrimeNG"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque libero risus, sodales vitae consequat mollis, ornare ac mauris. Etiam fringilla faucibus laoreet. Ut in sapien gravida, consequat quam eget, facilisis nulla. Curabitur ut elit odio. Ut malesuada at eros sed accumsan. Pellentesque eu blandit ante. Nullam sem mauris, interdum et.",
  },
  {
    imgSrc: "./assets/images/projects/todo_angular.png",
    imgAlt: "TODO Angular",
    title: "Minimal ToDo Angular",
    category: "Web",
    categorySlug: "web",
    tags: ["Angular", "CRUD"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque libero risus, sodales vitae consequat mollis, ornare ac mauris. Etiam fringilla faucibus laoreet. Ut in sapien gravida, consequat quam eget, facilisis nulla. Curabitur ut elit odio. Ut malesuada at eros sed accumsan. Pellentesque eu blandit ante. Nullam sem mauris, interdum et.",
  },
  {
    imgSrc: "./assets/images/projects/portofolio_next.png",
    imgAlt: "Portofolio Next.js",
    title: "Fresh Porto Website Next.js",
    category: "Web",
    categorySlug: "web",
    tags: ["Next.Js", "TailwindCSS", "Framer Motion"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque libero risus, sodales vitae consequat mollis, ornare ac mauris. Etiam fringilla faucibus laoreet. Ut in sapien gravida, consequat quam eget, facilisis nulla. Curabitur ut elit odio. Ut malesuada at eros sed accumsan. Pellentesque eu blandit ante. Nullam sem mauris, interdum et.",
  },
  {
    imgSrc: "./assets/images/projects/todo_react.png",
    imgAlt: "Todo app react",
    title: "Todo App React.Js",
    category: "Web",
    categorySlug: "web", 
    tags: ["React.Js", "Tailwind"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque libero risus, sodales vitae consequat mollis, ornare ac mauris. Etiam fringilla faucibus laoreet. Ut in sapien gravida, consequat quam eget, facilisis nulla. Curabitur ut elit odio. Ut malesuada at eros sed accumsan. Pellentesque eu blandit ante. Nullam sem mauris, interdum et.",
  },
  {
    imgSrc: "./assets/images/projects/foound_php.png",
    imgAlt: "Found Web",
    title: "Foound Web PHP",
    category: "Web",
    categorySlug: "web",
    tags: ["HTML", "CSS", "PHP", "CRUD"],
    description: "Platform pelaporan dan pencarian barang hilang di POLINES menggunakan HTML, CSS dan PHP. User dapat melaporan kehilangan dan melaporkan penemuan barang hilang di sekitar kawasan POLINES.",
  },
  {
    imgSrc: "./assets/images/projects/spendsmart_aspnet.png",
    imgAlt: "SpendSmart ASP.NET",
    title: "SpendSmart ASP.NET",
    category: "Web",
    categorySlug: "web",
    tags: ["ASP.NET", "EF Core", "LINQ", "CRUD"],
    description: "Aplikasi pencatatan keuangan sederhana, dibuat menggunakan ASP.NET",
  },
  {
    imgSrc: "./assets/images/projects/crud_aspnet.png",
    imgAlt: "Pizza ASP.NET",
    title: "Pizza List CRUD ASP.NET",
    category: "Web",
    categorySlug: "web",
    tags: ["ASP.NET", "EF Core", "CRUD"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque libero risus, sodales vitae consequat mollis, ornare ac mauris. Etiam fringilla faucibus laoreet. Ut in sapien gravida, consequat quam eget, facilisis nulla. Curabitur ut elit odio. Ut malesuada at eros sed accumsan. Pellentesque eu blandit ante. Nullam sem mauris, interdum et.",
  },
  {
    imgSrc: "./assets/images/projects/implement-api_aspnet.png",
    imgAlt: "Implementasi API List Fruit ASP.NET",
    title: "Pizza List CRUD ASP.NET",
    category: "Web",
    categorySlug: "web",
    tags: ["ASP.NET", "API", "CRUD"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque libero risus, sodales vitae consequat mollis, ornare ac mauris. Etiam fringilla faucibus laoreet. Ut in sapien gravida, consequat quam eget, facilisis nulla. Curabitur ut elit odio. Ut malesuada at eros sed accumsan. Pellentesque eu blandit ante. Nullam sem mauris, interdum et.",
  },
  {
    imgSrc: "./assets/images/projects/cozy_flutter.png",
    imgAlt: "Cozy App Flutter",
    title: "Cozy App Flutter",
    category: "Flutter",
    categorySlug: "flutter",
    tags: ["Flutter","UI"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque libero risus, sodales vitae consequat mollis, ornare ac mauris. Etiam fringilla faucibus laoreet. Ut in sapien gravida, consequat quam eget, facilisis nulla. Curabitur ut elit odio. Ut malesuada at eros sed accumsan. Pellentesque eu blandit ante. Nullam sem mauris, interdum et.",
  },
  {
    imgSrc: "./assets/images/projects/project-d.png",
    imgAlt: "HR App Flutter",
    title: "HR App Flutter",
    category: "Flutter",
    categorySlug: "flutter",
    tags: ["Flutter", "BLoC", "RestAPI", "Firebase Notification"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque libero risus, sodales vitae consequat mollis, ornare ac mauris. Etiam fringilla faucibus laoreet. Ut in sapien gravida, consequat quam eget, facilisis nulla. Curabitur ut elit odio. Ut malesuada at eros sed accumsan. Pellentesque eu blandit ante. Nullam sem mauris, interdum et.",
  },
  {
    imgSrc: "./assets/images/projects/jaheet_flutter.png",
    imgAlt: "Jaheet Flutter",
    title: "APlikasi Marketplace Penjahit",
    category: "Flutter",
    categorySlug: "flutter",
    tags: ["Flutter", "Provider", "GMaps API"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque libero risus, sodales vitae consequat mollis, ornare ac mauris. Etiam fringilla faucibus laoreet. Ut in sapien gravida, consequat quam eget, facilisis nulla. Curabitur ut elit odio. Ut malesuada at eros sed accumsan. Pellentesque eu blandit ante. Nullam sem mauris, interdum et.",
  },
  {
    imgSrc: "./assets/images/projects/nutrisee.png",
    imgAlt: "Nutrisee Flutter",
    title: "",
    category: "Flutter",
    categorySlug: "flutter",
    tags: ["Flutter", "Optical Character Recognition", "Gemini API", "AI", "Firebase"],
    description: "Aplikasi Penilai Nutrisi Makanan dan Minuman Kemasan berbasis OCR. Berhasil memenangkan juara 2 sebagai aplikasi inovatif KMIPN 6 2024 dan lolos pendanaan PKM 2024. Menggabungkan teknologi AI kedalam aplikasi Android dengan Flutter untuk menilai kandungan nutrisi produk makanan dan minuman kemasan sebagai tolak ukur konsumsi pelanggan.",
  },
]

const projectListContainer = document.getElementById("project-list");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
  if (modalContainer.classList.contains("active")) {
    document.body.style.overflow = 'hidden';  
  } else {
    document.body.style.overflow = '';  
  }
}

// Fungsi untuk membuka modal ketika item project diklik
const openProjectModal = function (projectItem) {
  modalImg.src = projectItem.querySelector("[data-project-img-src]").src;
  modalImg.alt = projectItem.querySelector("[data-project-img-src]").alt;
  modalTitle.innerHTML = projectItem.querySelector("[data-project-title]").innerHTML;
  modalText.innerHTML = projectItem.querySelector("[data-project-description]").innerHTML;

  testimonialsModalFunc();
};

// Tambahkan click event pada elemen project-item statis
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    openProjectModal(this);
  });
}

// Add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// Tambahkan project-item dinamis dan tambahkan event listener
projects.forEach((project) => {
  const projectItem = document.createElement("li");
  projectItem.classList.add("project-item", "active");
  projectItem.setAttribute("data-filter-item", "");
  projectItem.setAttribute("data-category", project.categorySlug);
  projectItem.setAttribute("data-project-item", "");

  const tagsHtml = project.tags.map(tag => `<p class="tag">${tag}</p>`).join("");

  projectItem.innerHTML = `
    <a href="#">
      <figure class="project-img" data-project-img>
        <div class="project-item-icon-box">
          <ion-icon name="eye-outline"></ion-icon>
        </div>
        <img
          class="img-project"
          src="${project.imgSrc}"
          alt="${project.imgAlt}"
          loading="lazy"
          data-project-img-src
        />
      </figure>
      <h3 class="project-title" data-project-title>${project.title}</h3>
      <p class="project-category" data-project-category>${project.category}</p>
      <p style="display:none;" data-project-description>${project.description}</p>
      <div class="project-tags">${tagsHtml}</div>
    
    </a>
  `;

  // Tambahkan project-item ke dalam container <ul>
  projectListContainer.appendChild(projectItem);

  // Tambahkan event listener ke setiap item project yang baru dibuat
  projectItem.addEventListener("click", function () {
    openProjectModal(this);
  });
});