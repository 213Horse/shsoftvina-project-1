(() => {
  const tab = document.querySelectorAll(".tabJS");
  if (tab) {
    tab.forEach((t) => {
      const tBtn = t.querySelectorAll(".tabBtn");
      const tPanelList = t.querySelectorAll(".tabPanelList");
      tPanelList.forEach((ele, index) => {
        const tPanel = ele.querySelectorAll(".tabPanel");
        if (tBtn.length !== 0 && tPanel.length === tBtn.length) {
          if (!t.classList.contains("tab-not")) {
            tBtn[0].classList.add("active");
            tPanel[0].classList.add("open");
          }

          for (let i = 0; i < tBtn.length; i++) {
            tBtn[i].addEventListener("click", showPanel);

            function showPanel(e) {
              e.preventDefault();
              for (let a = 0; a < tBtn.length; a++) {
                tBtn[a].classList.remove("active");
                tPanel[a].classList.remove("open");
              }
              tBtn[i].classList.add("active");
              tPanel[i].classList.add("open");
            }
          }
        }
      });
    });
  }
})();
