// ============================================================
// ✏️ EDIT ONLY THIS PART
// ============================================================
const classInfo = {
  className: "Freelancing class",
  section: "A",
  year: "2026–2027"
};

const teacher = {
  name: "sir zufiqar",
  subject: "Teacher · sir zufiqar",
  message: "Our instructors bring practical knowledge and real-world experience in freelancing and artificial intelligence. They guide students through essential skills, industry tools, and practical projects to help them build confidence and prepare for future opportunities."
};

const students = [
   "masooma ali",
  "masooma batool",
  "rabia",
  "mehdia",
  "sadaf naz",
  "muhaddesa",
  "hamida",
  "fatima",
  "saba",
  "zahra",
];
// ============================================================
// ⛔ Do not change anything below this line
// ============================================================

const $ = id => document.getElementById(id);

["brandName", "className", "footName"].forEach(id => $(id).textContent = classInfo.className);
$("classSection").textContent = classInfo.section;
$("classYear").textContent = classInfo.year;
$("classYear2").textContent = classInfo.year;
$("teacherName").textContent = teacher.name;
$("teacherShort").textContent = teacher.name;
$("teacherSubject").textContent = teacher.subject;
$("teacherMsg").textContent = teacher.message;
$("teacherInitial").textContent = teacher.name.charAt(0).toUpperCase();

$("totalStudents").textContent = students.length;
$("countBadge").textContent = students.length;

const colors = [
  "linear-gradient(135deg,#7c4dff,#b06bff)",
  "linear-gradient(135deg,#ff8fb1,#ffb88c)",
  "linear-gradient(135deg,#5b8def,#7c4dff)",
  "linear-gradient(135deg,#ffb88c,#ff8fb1)",
  "linear-gradient(135deg,#9d6bff,#ff8fb1)"
];

function showStudents(list) {
  $("studentGrid").innerHTML = list.map(({ name, i }) => `
    <div class="card" style="animation-delay:${(i % 8) * 0.05}s">
      <div class="avatar" style="background:${colors[i % colors.length]}">${name.charAt(0).toUpperCase()}</div>
      <h4>${name}</h4>
      <p>Student No. ${i + 1}</p>
    </div>`).join("");
  $("empty").style.display = list.length ? "none" : "block";
}

const allStudents = students.map((name, i) => ({ name, i }));
showStudents(allStudents);

$("search").addEventListener("input", e => {
  const q = e.target.value.toLowerCase().trim();
  showStudents(allStudents.filter(s => s.name.toLowerCase().includes(q)));
});

const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("show"); io.unobserve(e.target); } });
}, { threshold: 0.1 });
document.querySelectorAll(".fade").forEach(el => io.observe(el));

const links = document.querySelectorAll(".sidebar nav a");
links.forEach(l => l.addEventListener("click", () => {
  links.forEach(x => x.classList.remove("active"));
  l.classList.add("active");
}));