# SENDAS - SISTEMA DE GESTION 
## **FRONTEND**

### **Repositorio**
[https://github.com/dgcabanillas/sendas-sg-client](https://github.com/dgcabanillas/sendas-sg-client)

### **Ramas**
- **feature/[ task-id ~ task-name ]**
    - Se crearan ramas a partir de ``develop`` para resolver las tareas asignadas.
    - Estas ramas se mezclarán con ``develop`` a través de un ``pull request``.
    - Se borrará después de haber resuelto el ``task``.
- **bug/[ bug-id ~ bug-name ]**
    - Cuando ocurra un ``bug`` se creará una tarea de tipo bug para resolverlo.
    - Se crearan ramas a partir de ``develop`` para resolver los errores encontrados.
    - Estas ramas se mezclarán con ``develop`` a través de un ``pull request``.
    - Se borrará después de haber resuelto el ``bug``.
- **develop**
    - Esta rama es de desarrollo. 
    - Se usará para hacer las pruebas con el frontend antes de subirlas a producción.
    - github:
        ```
        # Se actualiza con pull request desde las ramas feature/* y bug/*
        ```
- **main** (default)
    - Esta rama es de producción.
    - Esta rama sólo la actualiza el TPO.
    - github:
        ```
        # Se actualiza con pull request desde develop
        ```
    - deploy:
        ```
        # from github
        ```
---
### **Arranque**
```
# version recomendada de node v15.12.0 
# si tienes otra versión puedes usar NVM para administrar las versiones de node
npm install
npm run dev
```

### **Diseño ejemplo**
```
# example
# https://www.enpp.edu.pe/

# dashbaord
# https://www.sgi.7arbides.com/classes 
#   [admin: admin/admin] 
#   [profesor: beys/123456] 
#   [padre: segundo/12345]
#   [estudiante: segundo/1234]

# theme
# https://demos.creative-tim.com/soft-ui-dashboard-pro/pages/dashboards/default.html

# visor pdf
# http://mipartitura.com/makecode/vista-previa-pdf-js/
# https://www.youtube.com/watch?v=IXF64qjCwoU&ab_channel=makeCode
```