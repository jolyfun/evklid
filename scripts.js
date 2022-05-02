(function () {
  function menuBurger() {
    const burger = document.querySelector(".header__burger-btn");
    const burgerLine1 = document.querySelector(".burger-line-1");
    const burgerLine2 = document.querySelector(".burger-line-2");
    const burgerLine3 = document.querySelector(".burger-line-3");
    const burgerMenu = document.querySelector(".header__burger-menu");
    const burgerMenuListItemArray = document.querySelector(
      ".header__burger-menu-list"
    ).childNodes;
    const burgerMenuListItemTrueArray = [];

    for (let key in burgerMenuListItemArray) {
      if (
        burgerMenuListItemArray[key].className === "header__burger-menu-item"
      ) {
        burgerMenuListItemTrueArray.push(burgerMenuListItemArray[key]);
      }
    }

    function burgerControlHeight() {
      const displayHeight = window.screen.height;
      const displayWidth = window.screen.width;
      console.log(displayHeight);
      if (displayWidth < 1295) {
        if (displayHeight < 769 && displayHeight > 400) {
          burgerMenu.style.paddingTop = "140px";
          burgerMenu.style.paddingBottom = "150px";
          burgerMenu.style.height = `${displayHeight}px`;
        } else if (displayHeight < 400) {
          burgerMenu.style.paddingTop = "70px";
          burgerMenu.style.paddingBottom = "50px";
          burgerMenu.style.height = `${displayHeight}px`;
          for (let key in burgerMenuListItemTrueArray) {
            key = Number(key);
            if (key !== burgerMenuListItemTrueArray.length - 1) {
              burgerMenuListItemTrueArray[key].style.marginBottom = "15px";
            }
          }
        }
      }
    }

    burgerControlHeight();

    if (document.body.clientWidth > 500) {
      burgerMenu.style.left = `-${burgerMenu.offsetWidth}px`;
      burgerMenu.style.maxWidth = `420px`;
    } else {
      burgerMenu.style.left = `-${document.body.clientWidth}px`;
      burgerMenu.style.maxWidth = `${document.body.clientWidth}px`;
    }
    console.log(burgerMenu.style.left);
    console.log(burgerMenu.offsetWidth);

    let burgerStatus = "close";

    window.addEventListener("resize", function (event) {
      event.preventDefault();
      burgerControlHeight();

      if (burgerStatus === "close") {
        if (document.body.clientWidth > 500) {
          burgerMenu.style.left = `-${burgerMenu.offsetWidth}px`;
          burgerMenu.style.maxWidth = `420px`;
        } else {
          burgerMenu.style.left = `-${document.body.clientWidth}px`;
          burgerMenu.style.maxWidth = `${document.body.clientWidth}px`;
        }
        console.log(burgerMenu.style.left);
        console.log(burgerMenu.offsetWidth);
      } else {
        if (document.body.clientWidth > 500) {
          burgerMenu.style.left = `0px`;
          burgerMenu.style.maxWidth = `420px`;
        } else {
          burgerMenu.style.left = `0px`;
          burgerMenu.style.maxWidth = `${document.body.clientWidth}px`;
        }
        console.log(burgerMenu.style.left);
        console.log(burgerMenu.offsetWidth);
      }
    });

    burger.addEventListener("click", function () {
      if (burgerStatus === "close") {
        burger.setAttribute("aria-label", "кнопка закрыть меню меню");
        burgerMenu.style.display = "inline-flex";
        burgerMenu.style.left = `-${burgerMenu.offsetWidth}px`;

        function burgerMenuOpenFunc() {
          burgerMenu.style.left = `-${burgerMenu.offsetWidth}px`;
          let burgerMenuLeft = -burgerMenu.offsetWidth;
          let burgerMenuOpen = setInterval(() => {
            burgerMenuLeft += 5;
            burgerMenu.style.left = `${burgerMenuLeft}px`;
            if (burgerMenuLeft >= 0) {
              clearInterval(burgerMenuOpen);
            }
          }, 5);
        }
        burgerMenuOpenFunc();

        function burgerOpenLine1Func() {
          let top = 5;
          let burgerOpenLine1Top = setInterval(() => {
            top++;
            burgerLine1.style.top = `${top}px`;
            if (top >= 15) {
              clearInterval(burgerOpenLine1Top);
              let rotate = 0;
              let burgerOpenLine1Rotate = setInterval(() => {
                ++rotate;
                burgerLine1.style.transform = `rotate(${rotate}deg)`;
                if (rotate >= 45) {
                  clearInterval(burgerOpenLine1Rotate);
                }
              }, 5);
            }
          }, 22);
        }
        burgerOpenLine1Func();

        function burgerOpenLine2Func() {
          let left = 5;
          let opacity = 1;
          let burgerOpenLine2Opacity = setInterval(() => {
            opacity -= 0.1;
            if (opacity <= 0) {
              clearInterval(burgerOpenLine2Opacity);
            }
            burgerLine2.style.opacity = `${opacity}`;
          }, 22);
          let burgerOpenLine2Left = setInterval(() => {
            --left;
            if (left <= -15) {
              clearInterval(burgerOpenLine2Left);
            }
            burgerLine2.style.left = `${left}px`;
          }, 22);
        }
        burgerOpenLine2Func();

        function burgerOpenLine3Func() {
          let top = 25;
          let burgerOpenLine3Top = setInterval(() => {
            top--;
            burgerLine3.style.top = `${top}px`;
            if (top <= 15) {
              clearInterval(burgerOpenLine3Top);
              let rotate = 0;
              let burgerOpenLine3Rotate = setInterval(() => {
                --rotate;
                burgerLine3.style.transform = `rotate(${rotate}deg)`;
                if (rotate <= -45) {
                  burgerStatus = "open";
                  clearInterval(burgerOpenLine3Rotate);
                }
              }, 5);
            }
          }, 22);
        }
        burgerOpenLine3Func();
        console.log(burgerStatus);
      }

      if (burgerStatus === "open") {
        burger.setAttribute("aria-label", "кнопка открыть меню");

        function burgerMenuCloseFunc() {
          const burgerMenuCloseLeft = -burgerMenu.offsetWidth;
          console.log(burgerMenuCloseLeft);
          burgerMenu.style.left = `0px`;
          let burgerMenuLeft = 0;
          let burgerMenuClose = setInterval(() => {
            console.log(burgerMenuLeft);
            burgerMenuLeft -= 5;
            burgerMenu.style.left = `${burgerMenuLeft}px`;
            if (burgerMenuLeft <= burgerMenuCloseLeft) {
              clearInterval(burgerMenuClose);
              burgerMenu.style.display = "none";
            }
          }, 5);
        }
        burgerMenuCloseFunc();

        function burgerCloseLine1Func() {
          let rotate = 45;
          let burgerCloseLine1 = setInterval(() => {
            --rotate;
            burgerLine1.style.transform = `rotate(${rotate}deg)`;
            if (rotate <= 0) {
              clearInterval(burgerCloseLine1);
              let top = 15;
              let burgerCloseLine1Top = setInterval(() => {
                top--;
                burgerLine1.style.top = `${top}px`;
                if (top <= 5) {
                  clearInterval(burgerCloseLine1Top);
                }
              }, 22);
            }
          }, 5);
        }
        burgerCloseLine1Func();

        function burgerCloseLine2Func() {
          let left = -15;
          let opacity = 0;
          let burgerOpenLine2Opacity = setInterval(() => {
            opacity += 0.1;
            if (opacity >= 1) {
              clearInterval(burgerOpenLine2Opacity);
            }
            burgerLine2.style.opacity = `${opacity}`;
          }, 22);
          let burgerOpenLine2Left = setInterval(() => {
            ++left;
            if (left >= 5) {
              burgerStatus = "close";
              clearInterval(burgerOpenLine2Left);
            }
            burgerLine2.style.left = `${left}px`;
          }, 22);
        }
        burgerCloseLine2Func();

        function burgerCloseLine3Func() {
          let rotate = -45;
          let burgerOpenLine3Rotate = setInterval(() => {
            ++rotate;
            burgerLine3.style.transform = `rotate(${rotate}deg)`;
            if (rotate >= 0) {
              // burgerMenu.style.display = "none";
              clearInterval(burgerOpenLine3Rotate);
              let top = 15;
              let burgerCloseLine3Top = setInterval(() => {
                top++;
                burgerLine3.style.top = `${top}px`;
                if (top >= 25) {
                  clearInterval(burgerCloseLine3Top);
                }
              }, 22);
            }
          }, 5);
        }
        burgerCloseLine3Func();

        console.log(burgerStatus);
      }
    });
  }

  function getWindowWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.body.clientWidth,
      document.documentElement.clientWidth
    );
  }

  function searchFormHeader() {
    const searchForm = document.querySelector(".header-form-search");
    const searchBtnHeader = document.querySelector(".header__btn-search");
    const searchBtnHeaderMobile = document.querySelector(
      ".header__btn-search-mobile"
    );
    console.log(searchBtnHeaderMobile);
    const searchFormClose = document.querySelector(
      ".header-form-search__btn-close"
    );
    const displayWidth = document.body.clientWidth;

    let searchBtnHeaderAnimation = function searchBtnHeaderAnimationFunc(
      event
    ) {
      event.preventDefault();
      searchForm.style.display = "flex";
      let searchFormTop = 0;
      console.log(searchForm.style.top);
      let searchFormOpen = setInterval(() => {
        searchFormTop += 2;
        searchForm.style.top = String(searchFormTop) + "px";
        if (searchForm.style.top == "150px") {
          clearInterval(searchFormOpen);
        }
      }, 5);
    };

    let searchBtnHeaderMobileSecondAnimation =
      function searchBtnHeaderMobileSecondAnimationFunc(event) {
        event.preventDefault();
        let top;
        if (
          document.body.clientWidth <= 921 &&
          document.body.clientWidth > 635
        ) {
          top = "100px";
        } else {
          top = "150px";
        }
        searchForm.style.display = "flex";
        let searchFormTop = 0;
        console.log(searchForm.style.top);
        let searchFormOpen = setInterval(() => {
          searchFormTop += 2;
          searchForm.style.top = String(searchFormTop) + "px";
          if (searchForm.style.top == top) {
            clearInterval(searchFormOpen);
          }
        }, 5);
      };

    let searchFormCloseAnimation = function searchFormCloseAnimationFunc(
      event
    ) {
      event.preventDefault();
      let searchFormTop = Number(
        searchForm.style.top.split("").slice(0, 3).join("")
      );
      let searchFormClose = setInterval(() => {
        searchFormTop -= 2;
        searchForm.style.top = String(searchFormTop) + "px";
        if (searchForm.style.top == "0px") {
          searchForm.style.display = "none";
          clearInterval(searchFormClose);
        }
      }, 5);
    };

    let searchBtnHeaderMobileAnimation =
      function searchBtnHeaderMobileAnimationFunc(event) {
        console.log(3);
        let top = 0;
        event.preventDefault();
        searchForm.style.display = "flex";
        let searchFormTop = -69;
        let searchFormOpen = setInterval(() => {
          searchFormTop += 2;
          searchForm.style.top = String(searchFormTop) + "px";
          if (searchFormTop >= top) {
            clearInterval(searchFormOpen);
          }
        }, 5);
      };

    let searchFormCloseMobileAnimation =
      function searchFormCloseMobileAnimationFunc(event) {
        console.log(5);
        event.preventDefault();
        let searchFormTop = 0;
        let searchFormClose = setInterval(() => {
          searchFormTop -= 2;
          searchForm.style.top = String(searchFormTop) + "px";
          if (searchFormTop <= -69) {
            searchForm.style.display = "none";
            clearInterval(searchFormClose);
          }
        }, 5);
      };

    function searchHeaderAnimation() {
      searchBtnHeader.addEventListener("click", searchBtnHeaderAnimation);
      searchBtnHeaderMobile.addEventListener(
        "click",
        searchBtnHeaderMobileSecondAnimation
      );
      searchFormClose.addEventListener("click", searchFormCloseAnimation);
    }

    function searchHeaderAnimationMobile() {
      searchBtnHeaderMobile.addEventListener(
        "click",
        searchBtnHeaderMobileAnimation
      );
      searchFormClose.addEventListener("click", searchFormCloseMobileAnimation);
    }

    console.log(displayWidth <= 921 && displayWidth > 635);

    window.addEventListener("resize", function () {
      const windowSize = getWindowWidth();
      console.log(windowSize);
      searchBtnHeader.removeEventListener("click", searchBtnHeaderAnimation);
      searchBtnHeaderMobile.removeEventListener(
        "click",
        searchBtnHeaderMobileSecondAnimation
      );
      searchFormClose.removeEventListener("click", searchFormCloseAnimation);

      searchBtnHeaderMobile.removeEventListener(
        "click",
        searchBtnHeaderMobileAnimation
      );
      searchFormClose.removeEventListener(
        "click",
        searchFormCloseMobileAnimation
      );

      if (windowSize <= 921 && windowSize > 635) {
        searchHeaderAnimation();
      } else if (windowSize <= 635) {
        searchHeaderAnimationMobile();
      } else {
        searchHeaderAnimation();
      }
    });

    if (displayWidth <= 921 && displayWidth > 635) {
      searchHeaderAnimation();
    } else if (displayWidth <= 635) {
      searchHeaderAnimationMobile();
    } else {
      searchHeaderAnimation();
    }
  }

  function swiperAnimation() {
    const swiper = new Swiper(".swiper", {
      slidesPerView: 1,
      loop: true,

      pagination: {
        clickable: true,
        el: ".swiper-pagination",
      },

      a11y: {
        enabled: true,
        containerMessage: "",
        containerRoleDescriptionMessage: "",
        itemRoleDescriptionMessage: "",
        // nextSlideMessage: "следущий слайд",
        // lastSlideMessage: "переключиться на первый слайд?",
        paginationBulletMessage: "переключиться на слайд {{index}}",
      },
    });
  }

  function planAnimation() {
    const planList = document.querySelector(".section-plan__list");
    const stepList = document.querySelector(".section-plan__step-list");

    // создаем массивы для того, чтобы потом было проще
    // для чего я это сделал:
    // дело в том, что в коде ниже нужно будет в событии
    // клика проходить по stepList внутри цилка planList
    // и у каждого stepItem отключать display, и делать
    // это по номеру i в for для planList, то бишь делать
    // сравнение i в planList и i2 в stepList, и если
    // i !== i2, то stepList.childNodes[i2] отключать
    // display, и так как первый элемент в stepList.childNodes
    // подходит под условие, то у него запрашивается свойство
    // style, которого нет потому, что первый элемент это
    // текстовая нода. Поэтому я решил создать отдельные
    // массивы и наполнить их только узлами-элементами
    let planListArray = [];
    let stepListArray = [];
    // использую один цикл, так как количество нод в
    // planList и stepList одинаково
    for (let i = 0; i < planList.childNodes.length; i++) {
      if (planList.childNodes[i].className) {
        planListArray.push(planList.childNodes[i]);
        stepListArray.push(stepList.childNodes[i]);
      }
    }

    for (let key in planListArray) {
      key = Number(key);
      const planItem = planListArray[key];
      const stepItem = stepListArray[key];
      if (key === 1 || key === 2 || key === 3) {
        stepItem.style.display = "none";
      }
      if (key === 0) {
        planItem.style.color = "#e1670e";
      }
      planItem.addEventListener("click", function (event) {
        event.preventDefault();
        stepItem.style.display = "flex";
        planItem.style.color = "#e1670e";
        for (let key2 in stepListArray) {
          key2 = Number(key2);
          if (key !== key2) {
            planListArray[key2].style.color = "#333333";
            stepListArray[key2].style.display = "none";
          }
        }
      });
    }
  }

  function questionsSpanAnimation() {
    const questionsList = document.querySelector(".section-questions__list");

    let questionsItemStatus = "close";

    questionsList.addEventListener("click", function (event) {
      event.preventDefault();
      const targetClass = event.target.className.split(" ")[0];
      if (
        targetClass === "section-questions__item-title" ||
        event.target.className === "section-questions__item" ||
        event.target.className === "section-questions__item-toggle"
      ) {
        const questionsItemSpan = event.target.childNodes[1];
        console.log(questionsItemSpan);
        if (questionsItemStatus === "close") {
          questionsItemSpan.style.transform = "translateY(-50%) rotate(45deg)";
          questionsItemStatus = "open";
        } else {
          questionsItemSpan.style.transform = "translateY(-50%) rotate(0deg)";
          questionsItemStatus = "close";
        }
      }
    });

    document.addEventListener("DOMContentLoaded", function () {
      $(".js-accordion").accordion({
        collapsible: true,
        active: false,
        icons: false,
        heightStyle: "section-questions__content",
      });
    });
  }

  function app() {
    menuBurger();
    searchFormHeader();
    swiperAnimation();
    planAnimation();
    questionsSpanAnimation();
  }

  app();
})();
