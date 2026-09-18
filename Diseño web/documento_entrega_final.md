# Documento de entrega final

## 1. Título
Sistema de gestión académica y control de horas de práctica

## 2. Objetivo
El objetivo del sistema es permitir a docentes y estudiantes gestionar la información académica, registrar asistencia, controlar horas de práctica, detectar estudiantes en riesgo académico y enviar alertas o notificaciones relevantes.

## 3. Actores del sistema
- Estudiante
- Docente
- Sistema

## 4. Casos de uso principales

### CU01 - Iniciar sesión
**Actor principal:** Docente, Estudiante  
**Descripción:** Permite ingresar al sistema mediante credenciales válidas.

### CU02 - Consultar dashboard
**Actor principal:** Docente, Estudiante  
**Descripción:** Permite visualizar información académica relevante según el rol del usuario.

### CU03 - Registrar calificación
**Actor principal:** Docente  
**Descripción:** Permite registrar o actualizar la nota de un estudiante.

### CU04 - Registrar asistencia
**Actor principal:** Docente  
**Descripción:** Permite registrar la asistencia del estudiante.

### CU05 - Registrar horas de práctica
**Actor principal:** Docente  
**Descripción:** Permite registrar las horas realizadas por el estudiante en prácticas.

### CU06 - Consultar notas, asistencia y horas
**Actor principal:** Estudiante  
**Descripción:** Permite consultar la información académica del estudiante.

### CU07 - Consultar observaciones
**Actor principal:** Estudiante  
**Descripción:** Permite revisar la retroalimentación o comentarios del docente.

### CU08 - Detectar riesgo académico
**Actor principal:** Sistema  
**Descripción:** Evalúa indicadores académicos y detecta estudiantes en riesgo.

### CU09 - Recibir notificación o alerta
**Actor principal:** Docente, Estudiante  
**Descripción:** El sistema informa sobre novedades relevantes, como riesgo académico o actualizaciones académicas.

### CU10 - Solicitar aclaración de calificación
**Actor principal:** Estudiante  
**Descripción:** Permite al estudiante solicitar revisión o explicación sobre una calificación.

### CU11 - Revisar estudiante en riesgo
**Actor principal:** Docente  
**Descripción:** Permite consultar el historial y seguimiento del estudiante en riesgo.

## 5. Requisitos funcionales simplificados

### RF01 - Inicio de sesión
El sistema debe permitir que el docente y el estudiante ingresen con credenciales válidas.

### RF02 - Consultar dashboard
El sistema debe mostrar un panel con la información académica relevante según el rol del usuario.

### RF03 - Registrar calificaciones
El docente debe poder registrar y actualizar las calificaciones de los estudiantes.

### RF04 - Registrar asistencia
El docente debe poder registrar la asistencia de los estudiantes.

### RF05 - Registrar horas de práctica
El docente debe poder registrar las horas de práctica realizadas por cada estudiante.

### RF06 - Consultar información académica
El estudiante debe poder consultar sus notas, asistencia, horas de práctica y observaciones.

### RF07 - Detectar riesgo académico
El sistema debe evaluar indicadores académicos y detectar a los estudiantes en riesgo.

### RF08 - Notificar alertas
El sistema debe enviar notificaciones al docente o al estudiante cuando exista una situación relevante, como riesgo académico o actualización académica.

### RF09 - Solicitar aclaración de calificación
El estudiante debe poder solicitar revisión o aclaración sobre una calificación.

### RF10 - Seguimiento de estudiantes en riesgo
El docente debe poder revisar la información de los estudiantes en riesgo y realizar seguimiento.

## 6. Relaciones entre casos de uso
- CU08 (Detectar riesgo académico) incluye la revisión de notas, asistencia, horas de práctica y observaciones.
- CU09 (Recibir notificación o alerta) está asociado a los cambios importantes del sistema.
- CU11 (Revisar estudiante en riesgo) incluye el análisis de la información del estudiante.
- CU10 (Solicitar aclaración de calificación) está relacionado con CU03.

## 7. Conclusión
La propuesta del sistema permite gestionar de manera ordenada la información académica y el control de horas de práctica. Se enfoca en los procesos principales del docente y del estudiante, asegurando la trazabilidad del rendimiento académico, la asistencia, la práctica profesional y el seguimiento de estudiantes en riesgo. La versión simplificada de los requisitos funcionales resulta más clara, entendible y adecuada para la documentación de entrega.
