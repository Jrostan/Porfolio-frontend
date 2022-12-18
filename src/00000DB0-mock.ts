import { PerfilIBD, ExpIDB, HabIDB, CapIDB } from "src/Int"

export const perfil : PerfilIBD[] = [
       {
           "id": 1,
           "nombre": "Javier Rostan",
            "descripcion": "Desarroyador web fullstack junionr. y proyectista mecanico Recide en Rafaela - Santa Fe - Argentina desde hace mas de 15 anños, Nacido en Santa fe - Argentina en el año 1989",
           "foto": "URL Foto"
       }
    ];

export const experiencia_laboral: ExpIDB[] = [
       {
           "id": 1,
           "puesto": "Proyectista de oficina tecnica y asistente de puesta en marcha y mantenimiento",
           "inicio": "07/2008",
           "final": "02/2010",
           "dec_puesto": "Generacion de planos mecanicos y civiles destinados al mantenimiento de la planta industrial.",
           "empresa": "Grupo Marengo",
           "url_logo": "https://www.marengo.com.ar/images/logo.png"  
       },
       {
           "id": 2,
           "puesto": "Proyectista mecanico de compresores a tornillos",
           "inicio": "02/2010",
           "final": "03/2011",
           "dec_puesto": "ingeniería de detalle y generación de planos mecánicos para el paqueteado de compresores a tornillos avocados a las industrias del petróleo y la refrigeración.",
           "empresa": "VMC Refrigeracion S.A.",
           "url_logo": "https://vmc.com.ar/wp-content/uploads/2019/05/VMC_Home_Logo-1.png"  
       },
       {
           "id": 3,
           "puesto": "Proyectista mecanico de oficina tecnica",
           "inicio": "03/2011",
           "final": "12/2014",
           "dec_puesto": "ingenieria en detalle y generacion de planos de compresores a tornillos, unidades frigorificas compactas, equipos de tratamineto de residuos domesticos, unidades compresoras para la industria p[etroquimica.",
           "empresa": "VMC Refrigeracion S.A.",
           "url_logo": "https://vmc.com.ar/wp-content/uploads/2019/05/VMC_Home_Logo-1.png"  
       },
       {
           "id": 4,
           "puesto": "Proyectista electromecanico de montaje industrial",
           "inicio": "01/2015",
           "final": "08/2021",
           "dec_puesto": "Diseño y optimizacion de instalaciones frigorificas y servicios a fines; Gestion de contratistas y proveedores, generaciond de planos y pliegos tecnicos, Analisis tecnicoeconomico de proyectos de montaje industrial. Co corinacion con ingenieria civil de camaras y salas de maquinas dentro de la industria frigorifica. Diseño de layout de salas de maquinas, vamaras y tuneles de congelado. Cotizacion de mopntajes para servicios auxiliares, Diseño de instalaciones electricas de baja tension para sistemas de refrigeracion industrial.",
           "empresa": "VMC Refrigeracion S.A.",
           "url_logo": "https://vmc.com.ar/wp-content/uploads/2019/05/VMC_Home_Logo-1.png"  
       },
       {
           "id": 5,
           "puesto": "Director de obra",
           "inicio": "01/2015",
           "final": "08/2021",
           "dec_puesto": "Control de calidad de materiales, gestion de contratistas, Liderasgo de equipos de trabajo metal-mecanicos en tareas de preparacion, construccion y montaje de piping, aislaciones termicas y tendidos electricos de baja tension. Toma de decisiones y coordinacion de personal e instalaciones de servicios, en condiciones criticas. interpretacion y relevamaiento de instalaciones frigorificas y servicios auxiliares.",
           "empresa": "VMC Refrigeracion S.A.",
           "url_logo": "https://vmc.com.ar/wp-content/uploads/2019/05/VMC_Home_Logo-1.png"  
       },
       {
           "id": 6,
           "puesto": "Proyectista mecanico",
           "inicio": "03/2022",
           "final": "12/2022",
           "dec_puesto": "Ingenieria y generacion de planos constructivos (mecanicos) para loa fabricacion de equipos dedicados a la industria del la energia (petroleo y gas, minetia, Etc.).",
           "empresa": "Metalurgica SICA S.A.",
           "url_logo": "https://sica.net.ar/wp-content/uploads/2022/03/logo-footer-1.png"  
       }
    ];

export const Habilidades_digitales: HabIDB[] = [
       {
           "id":1,
           "tecnologia": "HTML5",
           "porcentaje": 40,
           "colorBaraFuerte": "rgb(153, 85, 216)",
           "colorBaraDebil": "rgba(153,85,216,0.2)"
       },
       {
           "id":2,
           "tecnologia": "CSS3",
           "porcentaje": 40,
           "colorBaraFuerte": "rgb(216, 159, 85)",
           "colorBaraDebil": "rgba(216, 159, 85,0.2)"
       },
       {
           "id":3,
           "tecnologia": "JavaScript",
           "porcentaje": 30,
           "colorBaraFuerte": "rgb(27, 163, 22)",
           "colorBaraDebil": "rgba(27, 163, 22,0.2)"
       },
       {
           "id":4,
           "tecnologia": "JavaScript",
           "porcentaje": 30,
           "colorBaraFuerte": "rgb(163, 22, 22)",
           "colorBaraDebil": "rgba(163, 22, 22,0.2)"
       }
    ]


export const capacitaciones: CapIDB[] = [
       {
           "id":1,
           "ftitulo": "Tecnico superior en mantenimiento electromecanico",
           "descripcion": "Tecnicatura superior en mantenimiento y montaje de equipos automatizados",
           "url_logo": "https://itecrafaela.edu.ar/static/img/logo.itec.png",
           "formador": "ITec Rafaela"
       },
       {
           "id":2,
           "ftitulo": "Desarrollador web fullstack Jr.",
           "descripcion": "Grupo de tecnologias necesarias para el desarrolo web fullstack",
           "url_logo": "https://argentinaprograma.inti.gob.ar/pluginfile.php/127650/course/overviewfiles/MINIATURA-ARGEPROGR.jpg",
           "formador": "ProgramaNacional Argentina programa"
       },
       {
           "id":3,
           "ftitulo": "Diseño web responsivo (HTML & CSS)",
           "descripcion": "En esta Certificación de Diseño Web Responsivo, aprenderás los lenguajes que los desarrolladores utilizan para construir páginas web: HTML (lenguaje de marcado de hipertexto) para el contenido, y CSS (Hojas de estilo en cascada) para el diseño.",
           "url_logo": "https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png",
           "formador": "FreeCodeCamp"
       }
    ]