const loadAllIssues = () => {
  fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
    .then(res => res.json())
    .then(data => displayAllIssues(data.data));
};

const displayAllIssues = allIssues => {
  // console.log(allIssues)
  const allIssueContainer = document.getElementById('all-issue-container');

  //   "title": "Fix navigation menu on mobile devices",
  // "description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
  // "status": "open",
  // "labels": [
  // "bug",
  // "help wanted"
  // ],
  // "priority": "high",
  // "author": "john_doe",
  // "assignee": "jane_smith",
  // "createdAt": "2024-01-15T10:30:00Z",
  // "updatedAt": "2024-01-15T10:30:00Z"
  allIssues.forEach(issues => {
    const div = document.createElement('div');
    div.innerHTML = `<div class="card w-96 h-full bg-base-100 shadow-sm">
        <div class="card-body">
          <div class="flex justify-between items-center">
            <div>
              <img src="assets/Open-Status.png" alt="">
            </div>
            <div class="">
              <span class="badge badge-md badge-warning text-[#EF4444] bg-[#FEECEC]">${issues.priority}</span>
            </div>
          </div>

          <h2 class="text-xl font-semibold mt-3">${issues.title} </h2>
          <h4 class="text- font-medium mb-3 line-clamp-2 text-[#64748B]">${issues.description}</h4>

          <div class="flex gap-2">
          <button class="flex items-center bg-[#FECACA] text-[#EF4444] py-2 px-3 rounded-3xl font-semibold"> ${issues.labels[0]}</button>
          <button class=" bg-[#FDE68A] text-[#D97706] px-3 py-2 rounded-3xl font-semibold flex items-center gap-1">${issues.labels[1]}</button>
          </div>

          <hr class="w-full my-5">

          <div class="text-[#64748B]">
            <p>${issues.author}</p>
            <p>${issues.createdAt}</p>
          </div>

        </div>
      </div>`;

    allIssueContainer.appendChild(div);
  });
};

loadAllIssues();
