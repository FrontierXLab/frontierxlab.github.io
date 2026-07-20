// ===========================
// Scroll Reveal Animation
// ===========================

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;

        const revealTop = section.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

window.addEventListener("load", revealSections);


// ===========================
// Statistics Counter
// ===========================

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function startCounter() {

    if (counterStarted) return;

    const statsSection = document.querySelector(".statistics");

    if (!statsSection) return;

    const sectionTop = statsSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 120) {

        counterStarted = true;

        counters.forEach(counter => {

            const target = Number(counter.dataset.target);

            let count = 0;

            const increment = Math.max(1, Math.ceil(target / 60));

            function updateCounter() {

                count += increment;

                if (count >= target) {

                    counter.textContent = target + "+";

                } else {

                    counter.textContent = count;

                    requestAnimationFrame(updateCounter);

                }

            }

            updateCounter();

        });

    }

}

window.addEventListener("scroll", startCounter);

window.addEventListener("load", startCounter);
