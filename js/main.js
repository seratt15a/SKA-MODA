document.addEventListener('DOMContentLoaded', () => {
    console.log("ModaPay Concepto Cargado");

    // ==========================================
    // 1. TRADUCCIONES (ESPAÑOL / INGLÉS)
    // ==========================================
    const langToggleBtn = document.getElementById('lang-toggle');
    
    // Diccionario de textos
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
            coll_link_1: "EXPLORAR CATÁLOGO",
            cta_title: "¿Listo para mejorar tu guardarropa?",
            cta_btn: "Hablar con un asesor"
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
            coll_link_1: "EXPLORE CATALOG",
            cta_title: "Ready to upgrade your wardrobe?",
            cta_btn: "Chat with Advisor"
        }
    };

    let currentLang = 'es'; 

    if(langToggleBtn) {
        langToggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Cambiar idioma
            currentLang = currentLang === 'es' ? 'en' : 'es';
            // Actualizar texto del botón
            langToggleBtn.innerText = currentLang === 'es' ? 'EN' : 'ES';

            // Buscar todos los elementos con etiqueta data-i18n
            const elements = document.querySelectorAll('[data-i18n]');
            
            elements.forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[currentLang][key]) {
                    // Si es el título principal, usamos innerHTML para respetar el <br>
                    if(key === 'hero_title') {
                        el.innerHTML = translations[currentLang][key];
                    } else {
                        el.innerText = translations[currentLang][key];
                    }
                }
            });
        });
    }

    // ==========================================
    // 2. MENÚ HAMBURGUESA (CELULAR)
    // ==========================================
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const menuLinks = document.querySelectorAll('.menu-link'); 

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Animación manual de las 3 rayitas (Spans)
            // Esto es necesario porque tu CSS no usa la clase .open
            const spans = menuToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                // Convertir en X
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                // Volver a normal
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Cerrar menú al tocar un enlace
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                // Restaurar rayitas
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
});