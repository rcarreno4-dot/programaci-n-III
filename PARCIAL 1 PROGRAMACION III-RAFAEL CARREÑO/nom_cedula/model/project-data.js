export const projectData = {
    resumen: {
        eyebrow: '01 / Vista general',
        title: 'Una idea clara se convierte en avance visible.',
        description: 'nom_cedula centraliza el trabajo del proyecto integrador para conectar el diagnóstico, las personas y las evidencias en un solo lugar.',
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80',
        kpis: [
            { label: 'Avance del proyecto', value: '68%' },
            { label: 'Entregables activos', value: '04' },
            { label: 'Próxima revisión', value: '12 SEP' }
        ]
    },
    equipo: {
        eyebrow: '02 / Personas',
        title: 'Un equipo pequeño, una dirección compartida.',
        description: 'Cada rol aporta una mirada distinta para convertir la necesidad detectada en una respuesta útil y verificable.',
        people: [
            { initials: 'RC', name: 'Rafael Carreño', role: 'Coordinación', text: 'Organiza el rumbo, los acuerdos y la entrega final.' },
            { initials: 'ML', name: 'María López', role: 'Investigación', text: 'Convierte las conversaciones en hallazgos accionables.' },
            { initials: 'JS', name: 'Juan Silva', role: 'Desarrollo', text: 'Construye y prueba la solución con el equipo.' }
        ],
        milestones: [
            { title: 'Definición del reto', date: 'Completado · 28 AGO' },
            { title: 'Prototipo funcional', date: 'En curso · 06 SEP' },
            { title: 'Presentación final', date: 'Siguiente · 18 SEP' }
        ]
    },
    diagnostico: {
        eyebrow: '03 / Diagnóstico',
        title: 'El problema antes que la solución.',
        description: 'La primera etapa del proyecto permite entender dónde se pierde tiempo, qué información falta y qué oportunidad merece atención.',
        problems: [
            'La información del proyecto está dispersa en diferentes archivos.',
            'El avance real no se distingue con rapidez.',
            'Las evidencias no están conectadas con cada entregable.'
        ],
        insight: 'Cuando el equipo puede ver el mismo contexto, las decisiones dejan de depender de suposiciones.'
    },
    propuesta: {
        eyebrow: '04 / Propuesta',
        title: 'Un tablero que convierte contexto en acción.',
        description: 'La propuesta combina una navegación simple, estados visibles y un registro de evidencias para acompañar el proyecto desde la idea hasta la entrega.',
        solutions: [
            { number: '01', title: 'Resumen accionable', text: 'Indicadores breves para saber qué está pasando ahora.' },
            { number: '02', title: 'Roles visibles', text: 'Responsabilidades claras para que cada tarea tenga una persona.' },
            { number: '03', title: 'Ruta de trabajo', text: 'Hitos ordenados que muestran el siguiente movimiento.' },
            { number: '04', title: 'Evidencia conectada', text: 'Resultados y recursos disponibles junto a cada avance.' }
        ]
    },
    evidencias: {
        eyebrow: '05 / Evidencias',
        title: 'Lo que se puede mostrar, se puede mejorar.',
        description: 'Estas referencias visuales representan los momentos que sostienen la propuesta: observar, ordenar y probar.',
        items: [
            { title: 'Sesión de exploración', type: 'Observación de contexto', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=700&q=80' },
            { title: 'Mapa de hallazgos', type: 'Síntesis del diagnóstico', image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=700&q=80' },
            { title: 'Prueba de propuesta', type: 'Validación con usuarios', image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=700&q=80' }
        ]
    }
};
