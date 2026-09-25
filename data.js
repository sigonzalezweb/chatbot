const CONFIG = {
    empresa: "Winner Group",
    nombreCampana: "Ponte las gafas de la diversión",
    logo: "./logos/logo.png",
    mensajeInicial: "Descubre todo lo que tenemos preparado para tu primera visita."
};

const MICROCOPY = [
    "👓 Ajustando las gafas de la diversión...",
    "🎰 Veamos qué encontramos por aquí...",
    "✨ Revelando una sorpresa...",
    "🎉 Excelente elección...",
    "🏆 Sigamos explorando...",
    "💜 Todavía hay más para descubrir...",
    "🎁 Esto se pone interesante..."
];

const MENUS = {
    main: {
        message: "👋 ¡Bienvenido a Academia Winner!\n\n¿Qué deseas aprender hoy?",
        options: [
            { label: "🎲 Tu primera mano en el casino", next: "casino_intro" },
            { label: "🔴 Cómo jugar Ruleta Electrónica", next: "ruleta_intro" },
            { label: "🍀 Cómo jugar 88 Fortunes", next: "fortunes_intro" }
        ]
    },
    casino_intro: {
        image: "./images/primera-mano.jpg",
        message: "🎲 Tu primera mano en el casino\n\nAsí será tu experiencia en mesa.",
        options: [{ label: "Comenzar", next: "casino_1" }]
    },
    ruleta_intro: {
        image: "./images/ruleta-electronica.jpg",
        message: "🔴 ¿Cómo jugar a la Ruleta Electrónica?\n\n¡Así de fácil!",
        options: [{ label: "Comenzar", next: "ruleta_1" }]
    },
    fortunes_intro: {
        image: "./images/88-fortunes.jpg",
        message: "🍀 ¿Cómo jugar a 88 Fortunes?\n\n¡Sigue estos pasos y mucha suerte!",
        options: [{ label: "Comenzar", next: "fortunes_1" }]
    }
};

const FAQ = {
    casino_1: { image: "./images/fichas-academia.jpg", title: "10 Fichas de Academia", content: "Te entregamos 10 fichas de academia para comenzar tu experiencia.", next: "casino_2" },
    casino_2: { image: "./images/dealer.jpg", title: "Explicación breve del Dealer", content: "El dealer te explicará el objetivo del juego, el valor de las cartas y las formas de apostar.", next: "casino_3" },
    casino_3: { image: "./images/manos-practica.jpg", title: "3 manos de práctica", content: "Utiliza tus fichas de academia y disfruta aprendiendo.", next: "casino_4" },
    casino_4: { image: "./images/resultado.jpg", title: "Al finalizar las 3 manos", content: "Si acumulas 20 fichas o más, te felicitaremos y explicaremos tu logro.", next: "casino_5" },
    casino_5: { image: "./images/invitacion.jpg", title: "Siempre hay algo para ti", content: "Todos recibirán una invitación para conocer juegos y promociones.", next: "casino_final" },
    casino_final: { image: "./images/bienvenido.jpg", title: "Aprende, juega y disfruta", content: "Conoce nuestra oferta exclusiva. ¡Bienvenido!", buttons: [{ label: "🏠 Volver al Inicio", next: "main" }] },
    ruleta_1: { image: "./images/ruleta-insertar-dinero.jpg", title: "1. Inserta tu dinero", content: "Inserta tu dinero o ticket en la ranura.", next: "ruleta_2" },
    ruleta_2: { image: "./images/ruleta-apuesta.jpg", title: "2. Haz tu apuesta", content: "Elige el número, color o área y toca para apostar.", next: "ruleta_3" },
    ruleta_3: { image: "./images/ruleta-girando.jpg", title: "3. La ruleta gira", content: "La ruleta gira automáticamente. ¡Mira y disfruta!", next: "ruleta_4" },
    ruleta_4: { image: "./images/ruleta-premio.jpg", title: "4. Descubre tu premio", content: "La pantalla mostrará si ganaste.", next: "ruleta_5" },
    ruleta_5: { image: "./images/ruleta-felicitaciones.jpg", title: "¡Felicitaciones!", content: "Ejemplo: Ganaste $40.000.", next: "ruleta_final" },
    ruleta_final: { image: "./images/recuerda.jpg", title: "Recuerda", content: "Juega con responsabilidad. ¡Diviértete!", buttons: [{ label: "🏠 Volver al Inicio", next: "main" }] },
    fortunes_1: { image: "./images/88-insertar.jpg", title: "1. Inserta tu dinero", content: "Introduce el billete. Se convertirá en créditos.", next: "fortunes_2" },
    fortunes_2: { image: "./images/88-apuesta.jpg", title: "2. Elige tu apuesta", content: "Selecciona el valor de tu apuesta.", next: "fortunes_3" },
    fortunes_3: { image: "./images/88-jugar.jpg", title: "3. Inicia el juego", content: "Presiona JUGAR. Los carretes girarán.", next: "fortunes_4" },
    fortunes_4: { image: "./images/88-premios.jpg", title: "4. Gana premios", content: "Si obtienes combinaciones ganarás créditos.", next: "fortunes_5" },
    fortunes_5: { image: "./images/88-ayuda.jpg", title: "5. Revisa y disfruta", content: "Consulta el menú de ayuda para funciones especiales.", next: "fortunes_resumen" },
    fortunes_resumen: { image: "./images/88-resumen.jpg", title: "Resumen rápido", content: "1. Inserta dinero\n2. Elige apuesta\n3. Inicia juego\n4. Gana premios\n5. Consulta ayuda", next: "fortunes_final" },
    fortunes_final: { image: "./images/88-final.jpg", title: "¿Listo para jugar?", content: "Juega con responsabilidad.\n\nEscanea y comienza.", buttons: [{ label: "🏠 Volver al Inicio", next: "main" }] }
};