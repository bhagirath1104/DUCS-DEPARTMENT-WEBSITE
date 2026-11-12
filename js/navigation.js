document.addEventListener("DOMContentLoaded", () => {
    const navigation = document.querySelector("#main-navigation");
    const toggle = document.querySelector(".nav-toggle");
    const menu = document.querySelector("#primary-menu");

    if (!navigation || !toggle || !menu) {
        return;
    }

    toggle.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("menu-open");
        toggle.setAttribute("aria-expanded", String(isOpen));
    });

    menu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navigation.classList.remove("menu-open");
            toggle.setAttribute("aria-expanded", "false");
        });
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            navigation.classList.remove("menu-open");
            toggle.setAttribute("aria-expanded", "false");
            toggle.focus();
            navigation.querySelectorAll(".dropdown[open]").forEach((dropdown) => {
                dropdown.open = false;
            });
        }
    });
});
