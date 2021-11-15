const formEl = document.querySelector("form");
      const tbodyEl = document.querySelector("tbody");
      const tableEl = document.querySelector("table");
      function onAddWebsite(e) {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const comment = document.getElementById("comment").value;
        tbodyEl.innerHTML += `
            <tr>
                <td>${name}</td>
                <td>${comment}</td>
                <td><button class="btn btn-danger">Delete</button></td>
            </tr>
        `;
      }

      function onDeleteRow(e) {
        if (!e.target.classList.contains("btn-danger")) {
          return;
        }

        const btn = e.target;
        btn.closest("tr").remove();
      }

      formEl.addEventListener("submit", onAddWebsite);
      tableEl.addEventListener("click", onDeleteRow)