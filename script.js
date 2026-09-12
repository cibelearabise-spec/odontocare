function doctorCardHTML(doc) {
  return `
    <a href="appointment.html" class="doctor-card">
      <div class="doctor-avatar">${initials(doc.name)}</div>
      <div style="flex:1;">
        <p class="doctor-name">${doc.name}</p>
        <p class="doctor-place">${doc.place}</p>
        <div class="doctor-tags">
          <span class="tag tag-exp">${doc.specialty}</span>
          <span class="tag tag-available">Verificado</span>
        </div>
      </div>
    </a>
  `;
}

function renderDoctorList(container, doctors) {
  if (!container) return;
  if (doctors.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <p>Nenhum dentista encontrado</p>
        <span>Tente buscar por outro nome ou especialidade</span>
      </div>
    `;
    return;
  }
  container.innerHTML = doctors.map(doctorCardHTML).join('');
}

function setupSearch(inputEl, container, allDoctors, defaultList) {
  if (!inputEl) return;
  inputEl.addEventListener('input', () => {
    const term = inputEl.value.trim().toLowerCase();
    if (term === '') {
      renderDoctorList(container, defaultList);
      return;
    }
    const results = allDoctors.filter(
      (d) =>
        d.name.toLowerCase().includes(term) ||
        d.specialty.toLowerCase().includes(term) ||
        d.place.toLowerCase().includes(term)
    );
    renderDoctorList(container, results);
  });
}
