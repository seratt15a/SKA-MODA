document.addEventListener('DOMContentLoaded', () => {
    console.log("ModaPay Concepto Cargado");

    const langToggleBtn = document.getElementById('lang-toggle');
    const translations = {
        es: {
            nav_benefits: "Beneficios",
            nav_how: "Cómo Comprar",
            nav_collections: "Colecciones",
            btn_contact: "Contacto",
            hero_title: "Tu estilo,<br>redefinido automáticamente.",
            hero_subtitle: "Una experiencia de compra diseñada para el minimalismo moderno. Telas premium, cortes exactos y entrega inmediata.",
            card_product: "Boxy Red Blasphemy",
            card_desc: "Algodón Premium • Boxy Fit",
            tag_stock: "Stock Disponible",
            tag_shipping: "Envío en 24h",
            tagline_quality: "CALIDAD SUPERIOR",
            features_title: "Una experiencia que crece con tu armario.",
            feat_1_title: "Devoluciones Gratuitas",
            feat_1_desc: "Prueba en casa. Si no es tu talla perfecta, lo recogemos sin costo adicional en 24 horas.",
            feat_2_title: "Materiales Premium",
            feat_2_desc: "Trabajamos únicamente con algodón orgánico y fibras recicladas de alta durabilidad.",
            feat_3_title: "Compra Segura",
            feat_3_desc: "Coordina tu pago directo por WhatsApp con total seguridad y trato humano.",
            tagline_why: "POR QUÉ NOS ELIGEN",
            stats_title: "La marca preferida por los creadores",
            stat_1: "Prendas Vendidas",
            stat_2: "Clientes Satisfechos",
            stat_3: "Tiempo de Entrega",
            tagline_steps: "PASO A PASO",
            steps_title: "Maximiza tu estilo con nuestra colección reservada.",
            step_1_title: "Elige tu Fit",
            step_1_desc: "Mira nuestro catálogo y elige la prenda que mejor va contigo.",
            step_2_title: "Contáctanos",
            step_2_desc: "Escríbenos al WhatsApp para confirmar talla y método de pago.",
            step_3_title: "Recibe y Brilla",
            step_3_desc: "Empaque premium sostenible directo a tu puerta. Listo para usar.",
            tagline_collections: "NUESTRAS COLECCIONES",
            coll_title: "Encuentra lo que te define",
            coll_1_desc: "Una fusión entre ritmo y tela.",
            coll_link_1: "Explorar Catálogo →",
            cta_title: "¿Listo para mejorar tu guardarropa?",
            cta_btn: "Comenzar Ahora"
        },
        en: {
            nav_benefits: "Benefits",
            nav_how: "How to Buy",
            nav_collections: "Collections",
            btn_contact: "Contact",
            hero_title: "Your style,<br>automatically redefined.",
            hero_subtitle: "A shopping experience designed for modern minimalism. Premium fabrics, exact cuts, and immediate delivery.",
            card_product: "Boxy Red Blasphemy",
            card_desc: "Premium Cotton • Boxy Fit",
            tag_stock: "Stock Available",
            tag_shipping: "24h Shipping",
            tagline_quality: "SUPERIOR QUALITY",
            features_title: "An experience that grows with your wardrobe.",
            feat_1_title: "Free Returns",
            feat_1_desc: "Try at home. If it's not the perfect fit, we pick it up at no extra cost within 24 hours.",
            feat_2_title: "Premium Materials",
            feat_2_desc: "We work exclusively with organic cotton and highly durable recycled fibers.",
            feat_3_title: "Secure Purchase",
            feat_3_desc: "Coordinate your payment directly via WhatsApp with total security and human support.",
            tagline_why: "WHY CHOOSE US",
            stats_title: "The preferred brand for creators",
            stat_1: "Items Sold",
            stat_2: "Happy Customers",
            stat_3: "Delivery Time",
            tagline_steps: "STEP BY STEP",
            steps_title: "Maximize your style with our reserved collection.",
            step_1_title: "Choose your Fit",
            step_1_desc: "Browse our catalog and pick the garment that suits you best.",
            step_2_title: "Contact Us",
            step_2_desc: "Write to us on WhatsApp to confirm size and payment method.",
            step_3_title: "Receive & Shine",
            step_3_desc: "Sustainable premium packaging straight to your door. Ready to wear.",
            tagline_collections: "OUR COLLECTIONS",
            coll_title: "Find what defines you",
            coll_1_desc: "A fusion of rhythm and fabric.",
            coll_link_1: "Explore Catalog →",
            cta_title: "Ready to upgrade your wardrobe?",
            cta_btn: "Start Now"
        }
    };

    let currentLang = 'es'; 

    if(langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            currentLang = currentLang === 'es' ? 'en' : 'es';
            langToggleBtn.innerText = currentLang === 'es' ? 'EN' : 'ES';

            const elements = document.querySelectorAll('[data-i18n]');
            elements.forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[currentLang][key]) {
                    if(key === 'hero_title') {
                        el.innerHTML = translations[currentLang][key];
                    } else {
                        el.innerText = translations[currentLang][key];
                    }
                }
            });
        });
    }

    // --- MENÚ HAMBURGUESA (MÓVIL) ---
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const menuLinks = document.querySelectorAll('.menu-link'); 

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('open');
        });
    }

    // Cerrar menú al tocar un enlace
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('open');
        });
    });

    // --- CONTADORES ---
    const counters = document.querySelectorAll('.counter');
    const speed = 200; 

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 20); 
            } else {
                counter.innerText = target + "+";
            }
        };
        updateCount();
    });
});