// button togling
const btns = document.querySelectorAll('#allBtns .btn');
btns.forEach(button => {
  // console.log(button)
  button.addEventListener('click', function () {
    btns.forEach(b => {
      b.classList.remove('btn-primary')
      b.classList.add('btn-outline')
    })
    button.classList.add('btn-primary');
    button.classList.remove('btn-outline');
  })
})

// load all issues
const loadAllIssues = () => {
  fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
    .then(res => res.json())
    .then(data => {
      allIssues = data.data;
      displayAllIssues(allIssues); // initial load এ সব দেখাবে
    });
};


// display all issues in main page

const issueCount = document.getElementById('isssue-count'); // issue count ke id diye dhore ana hoise

const displayAllIssues = (allIssues) => {
  // console.log(allIssues)
  const allIssueContainer = document.getElementById('all-issue-container');
  allIssueContainer.innerHTML = '';
  issueCount.textContent = allIssues.length; // issues count er man update kora hoise

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
          <h2 class="text-xl font-semibold mt-3">${issues.status} </h2>
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


// issues filtering
// all button
const allbtn = document.getElementById('all-btn');
allbtn.addEventListener('click', () => {
  displayAllIssues(allIssues);
});
// Open button
const openBtn = document.getElementById('open-btn');
openBtn.addEventListener('click', () => {
  const openIssues = allIssues.filter(
    issue => issue.status.toLowerCase() === 'open',
  );
  displayAllIssues(openIssues); // filtered display
});

// Close button
const closeBtn = document.getElementById('close-btn');
closeBtn.addEventListener('click', () => {
  const closedIssues = allIssues.filter(
    issue => issue.status.toLowerCase() === 'closed',
  );
  displayAllIssues(closedIssues);
});