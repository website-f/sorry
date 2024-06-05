onload = () => {
    const c = setTimeout(() => {
      document.querySelector(".body-flower").classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };