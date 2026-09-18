export const projectData = {
    resumen: {
        eyebrow: '01 / Vista general',
        title: 'Prácticas académicas, acompañadas de principio a fin.',
        description: 'La UDI centraliza la gestión de prácticas académicas para conectar estudiantes, docentes y directores en un solo lugar.',
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80',
        kpis: [
            { label: 'Prácticas activas', value: '24' },
            { label: 'Estudiantes acompañados', value: '18' },
            { label: 'Seguimiento al día', value: '86%' }
        ]
    },
    equipo: {
        eyebrow: '02 / Actores',
        title: 'Tres actores, una ruta de acompañamiento.',
        description: 'La plataforma de la UDI distribuye responsabilidades y mantiene visible el estado de cada práctica académica.',
        people: [
            { initials: 'ES', name: 'Estudiante', role: 'Ejecuta la práctica', text: 'Registra actividades, avances y evidencias de su experiencia.' },
            { initials: 'DO', name: 'Docente', role: 'Acompaña el proceso', text: 'Revisa entregables, orienta y entrega retroalimentación.' },
            { initials: 'DI', name: 'Director', role: 'Supervisa el programa', text: 'Consulta indicadores y toma decisiones institucionales.' }
        ],
        milestones: [
            { title: 'Asignación de práctica', date: 'Completado · 28 AGO' },
            { title: 'Seguimiento docente', date: 'En curso · 06 SEP' },
            { title: 'Cierre y evaluación', date: 'Siguiente · 18 SEP' }
        ]
    },
    diagnostico: {
        eyebrow: '03 / Diagnóstico',
        title: 'El estudiante necesita una ruta clara.',
        description: 'En la UDI, la gestión actual puede dispersar solicitudes, avances y evaluaciones entre mensajes, hojas de cálculo y documentos.',
        problems: [
            'El estudiante no siempre sabe cuál es su próximo compromiso.',
            'El docente requiere una vista rápida del avance y las alertas.',
            'El director necesita indicadores consolidados para supervisar.'
        ],
        insight: 'Una plataforma compartida reduce la pérdida de información y permite intervenir a tiempo.'
    },
    propuesta: {
        eyebrow: '04 / Propuesta',
        title: 'Un tablero para cada momento de la práctica.',
        description: 'La propuesta organiza asignaciones, seguimiento y evaluación en un flujo sencillo para los tres actores académicos de la UDI.',
        solutions: [
            { number: '01', title: 'Asignación digital', text: 'El estudiante consulta empresa, fechas, objetivos y responsable.' },
            { number: '02', title: 'Bitácora de avances', text: 'El docente revisa actividades y deja retroalimentación oportuna.' },
            { number: '03', title: 'Alertas de seguimiento', text: 'El sistema identifica prácticas atrasadas o sin evidencias.' },
            { number: '04', title: 'Evaluación consolidada', text: 'El director consulta resultados para mejorar el programa.' }
        ]
    },
    evidencias: {
        eyebrow: '05 / Evidencias',
        title: 'Una práctica visible genera mejores decisiones.',
        description: 'El seguimiento reúne evidencias de los tres actores para que la UDI pueda revisar el proceso académico con claridad.',
        items: [
            { title: 'Bitácora del estudiante', type: 'Actividades y evidencias', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=700&q=80' },
            { title: 'Retroalimentación docente', type: 'Acompañamiento académico', image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=700&q=80' },
            { title: 'Panel de dirección', type: 'Indicadores institucionales', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80' }
        ]
    }
};
