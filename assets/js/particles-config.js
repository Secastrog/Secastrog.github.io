document.addEventListener("DOMContentLoaded", function () {
    tsParticles.load("tsparticles", {
        fullScreen: {
            enable: false, // We want it to be contained in the Hero section
            zIndex: -1
        },
        background: {
            color: {
                value: "transparent",
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "grab",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                grab: {
                    distance: 140,
                    links: {
                        opacity: 0.5
                    }
                },
            },
        },
        particles: {
            color: {
                value: "#0ea5e9", // var(--primary-color)
            },
            links: {
                color: "#0ea5e9", // var(--primary-color)
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
            },
            collisions: {
                enable: true,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 60,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 3 },
            },
        },
        detectRetina: true,
    });
});