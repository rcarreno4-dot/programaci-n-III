# Casos de uso para Astah

## Actores
- Estudiante
- Docente
- Sistema

## Casos de uso

### CU01 - Iniciar sesión
- Actor principal: Docente, Estudiante
- Objetivo: Permitir el acceso al sistema con credenciales válidas.
- Descripción: El usuario ingresa su usuario y contraseña para acceder a la plataforma.
- Precondiciones:
  - El usuario debe estar registrado en el sistema.
- Flujo principal:
  1. El usuario ingresa usuario y contraseña.
  2. El sistema valida las credenciales.
  3. Si son correctas, el sistema muestra el panel correspondiente.
  4. El usuario accede a sus funciones disponibles.
- Flujo alternativo:
  - Si las credenciales son incorrectas, el sistema muestra un mensaje de error y no permite el acceso.
- Postcondiciones:
  - El usuario queda autenticado y puede usar la aplicación según su rol.

### CU02 - Consultar dashboard
- Actor principal: Docente, Estudiante
- Objetivo: Visualizar la información académica relevante del usuario.
- Descripción: El usuario consulta su panel principal con información general del rendimiento, asistencia, observaciones y horas prácticas.
- Precondiciones:
  - El usuario debe haber iniciado sesión.
- Flujo principal:
  1. El usuario accede al dashboard.
  2. El sistema carga la información correspondiente al rol del usuario.
  3. El usuario visualiza indicadores académicos.
- Postcondiciones:
  - El usuario conoce el estado actual de su información académica.

### CU03 - Registrar calificación
- Actor principal: Docente
- Objetivo: Ingresar o actualizar la nota de un estudiante.
- Descripción: El docente registra la calificación obtenida por el estudiante en una evaluación o actividad.
- Precondiciones:
  - El docente debe estar autenticado.
  - El estudiante debe estar registrado en el curso.
- Flujo principal:
  1. El docente selecciona la evaluación.
  2. Elige al estudiante.
  3. Ingresa la calificación.
  4. El sistema guarda la información.
  5. El sistema actualiza el historial académico del estudiante.
- Flujo alternativo:
  - Si la calificación es inválida, el sistema solicita corregir el dato.
- Postcondiciones:
  - La nota queda registrada y visible para el estudiante.

### CU04 - Registrar asistencia
- Actor principal: Docente
- Objetivo: Registrar la presencia o ausencia del estudiante.
- Descripción: El docente marca la asistencia del estudiante en una sesión o actividad.
- Precondiciones:
  - El docente debe estar autenticado.
  - Debe existir una clase o actividad programada.
- Flujo principal:
  1. El docente selecciona la clase o actividad.
  2. Elige al estudiante.
  3. Marca asistencia o falta.
  4. El sistema guarda el registro.
- Flujo alternativo:
  - Si la fecha o la clase no existen, el sistema informa que no se puede registrar.
- Postcondiciones:
  - La asistencia queda registrada correctamente.

### CU05 - Registrar horas de práctica
- Actor principal: Docente
- Objetivo: Registrar las horas realizadas por el estudiante en prácticas.
- Descripción: El docente registra las horas de práctica cumplidas por cada estudiante.
- Precondiciones:
  - El docente debe estar autenticado.
  - Debe existir un registro de práctica asociado al estudiante.
- Flujo principal:
  1. El docente accede al módulo de prácticas.
  2. Selecciona al estudiante.
  3. Ingresa la cantidad de horas realizadas.
  4. Registra la fecha y actividad practicada.
  5. El sistema guarda la información.
- Postcondiciones:
  - Las horas de práctica quedan registradas en el sistema.

### CU06 - Consultar notas
- Actor principal: Estudiante
- Objetivo: Consultar las calificaciones obtenidas.
- Descripción: El estudiante revisa el historial de notas asignadas por el docente.
- Precondiciones:
  - El estudiante debe estar autenticado.
- Flujo principal:
  1. El estudiante accede a la sección de notas.
  2. El sistema muestra sus calificaciones.
  3. El estudiante revisa el detalle por evaluación.
- Postcondiciones:
  - El estudiante conoce su rendimiento académico.

### CU07 - Consultar asistencia y horas
- Actor principal: Estudiante
- Objetivo: Revisar la asistencia y la cantidad de horas de práctica.
- Descripción: El estudiante consulta su registro de asistencia y horas realizadas.
- Precondiciones:
  - El estudiante debe estar autenticado.
- Flujo principal:
  1. El estudiante accede a la sección de asistencia y horas.
  2. El sistema consulta los registros asociados.
  3. Muestra la asistencia y la suma de horas.
- Postcondiciones:
  - El estudiante puede verificar su cumplimiento académico y de prácticas.

### CU08 - Consultar observaciones
- Actor principal: Estudiante
- Objetivo: Revisar comentarios o retroalimentación del docente.
- Descripción: El estudiante accede a las observaciones registradas por el docente sobre su desempeño.
- Precondiciones:
  - El estudiante debe estar autenticado.
- Flujo principal:
  1. El estudiante abre la sección de observaciones.
  2. El sistema muestra los comentarios registrados.
  3. El estudiante revisa las recomendaciones o alertas.
- Postcondiciones:
  - El estudiante conoce la retroalimentación recibida.

### CU09 - Detectar riesgo académico
- Actor principal: Sistema
- Objetivo: Determinar si un estudiante se encuentra en riesgo académico.
- Descripción: El sistema analiza indicadores como notas, asistencia, observaciones y horas de práctica para detectar bajo rendimiento.
- Precondiciones:
  - Deben existir registros académicos del estudiante.
- Flujo principal:
  1. El sistema revisa los datos del estudiante.
  2. Evalúa los indicadores definidos.
  3. Compara los resultados con los límites establecidos.
  4. Si supera el umbral, marca al estudiante como en riesgo.
- Flujo alternativo:
  - Si el estudiante no presenta indicadores críticos, el sistema lo registra como estable.
- Postcondiciones:
  - El sistema genera un estado de riesgo académico para dicho estudiante.

### CU10 - Recibir alerta de riesgo
- Actor principal: Docente
- Objetivo: Notificar al docente cuando un estudiante alcanza un nivel de riesgo académico.
- Descripción: El docente recibe una alerta cuando el sistema determina que un estudiante requiere seguimiento.
- Precondiciones:
  - El estudiante debe haber sido detectado en riesgo por el sistema.
- Flujo principal:
  1. El sistema identifica al estudiante en riesgo.
  2. Envía una alerta al docente responsable.
  3. El docente revisa la información del estudiante.
- Postcondiciones:
  - El docente queda informado y puede realizar seguimiento.

### CU11 - Recibir notificación académica
- Actor principal: Estudiante
- Objetivo: Informar al estudiante sobre novedades académicas.
- Descripción: El sistema notifica al estudiante cuando se registran nuevas notas, observaciones o cambios relevantes.
- Precondiciones:
  - El estudiante debe tener una cuenta activa.
- Flujo principal:
  1. El sistema detecta una nueva actualización académica.
  2. Envía la notificación al estudiante.
  3. El estudiante puede abrir la información asociada.
- Postcondiciones:
  - El estudiante queda informado de la novedad.

### CU12 - Solicitar aclaración de calificación
- Actor principal: Estudiante
- Objetivo: Solicitar explicación o revisión de una calificación.
- Descripción: El estudiante puede pedir una aclaración cuando considera que una nota no refleja su desempeño.
- Precondiciones:
  - El estudiante debe estar autenticado.
  - Debe existir al menos una calificación registrada.
- Flujo principal:
  1. El estudiante selecciona la calificación a consultar.
  2. Envía una solicitud de aclaración.
  3. El docente revisa la solicitud.
  4. El sistema registra la respuesta o la revisión.
- Flujo alternativo:
  - Si el docente no responde, la solicitud permanece pendiente.
- Postcondiciones:
  - La duda del estudiante queda registrada para revisión.

### CU13 - Revisar estudiante en riesgo
- Actor principal: Docente
- Objetivo: Consultar la situación académica del estudiante y hacer seguimiento.
- Descripción: El docente revisa los indicadores del estudiante en riesgo para tomar decisiones sobre acompañamiento o intervención.
- Precondiciones:
  - El estudiante debe estar identificado como en riesgo.
- Flujo principal:
  1. El docente accede al estudiante en riesgo.
  2. Revisa notas, asistencia, observaciones y horas.
  3. Evalúa la situación académica.
  4. Realiza seguimiento o recomienda acciones.
- Postcondiciones:
  - El docente tiene información suficiente para apoyar al estudiante.

## Relaciones sugeridas
- CU09 Detectar riesgo académico incluye: revisión de notas, asistencia, horas prácticas y observaciones.
- CU10 Recibir alerta de riesgo extiende desde CU09.
- CU11 Recibir notificación académica puede extenderse desde CU03, CU08 y CU05.
- CU13 Revisar estudiante en riesgo incluye CU09.
- CU12 Solicitar aclaración de calificación está relacionado con CU03.

## Versión breve para Astah
- CU01 Iniciar sesión
- CU02 Consultar dashboard
- CU03 Registrar calificación
- CU04 Registrar asistencia
- CU05 Registrar horas de práctica
- CU06 Consultar notas
- CU07 Consultar asistencia y horas
- CU08 Consultar observaciones
- CU09 Detectar riesgo académico
- CU10 Recibir alerta de riesgo
- CU11 Recibir notificación académica
- CU12 Solicitar aclaración de calificación
- CU13 Revisar estudiante en riesgo
