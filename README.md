# Task Manager Application

## Descripción

Esta es una aplicación de gestión de tareas que permite a los usuarios crear, actualizar, eliminar y listar tareas. Es una aplicación web construida con React para el frontend y una API RESTful para el backend.

## Tecnologías Utilizadas

- **Frontend**: React, react-hook-form, react-router-dom, react-hot-toast
- **Backend**: Django
- **Base de Datos**: SQLite (por defecto de Django)
- **HTTP Client**: Axios

## Características

- Crear nuevas tareas
- Actualizar tareas existentes
- Eliminar tareas
- Listar todas las tareas

## Instalación y Uso

### Prerrequisitos

- Node.js y npm instalados en tu máquina
- Python y pip instalados en tu máquina

### Clonar el repositorio

```bash
git clone https://github.com/Eghost1/TaskApp.git
cd TaskApp
```

### Configuración del Backend

1. Navega al directorio del backend:

   el directorio del backend es el directorio raiz

2. Crea y activa un entorno virtual:

```bash
python -m venv env
source env/bin/activate  #Para Linux
#En Windows usa `env\Scripts\activate`
```

3. Instala las dependencias:

```bash
pip install -r requirements.txt
```

4. Realiza las migraciones de la base de datos:

```bash
python manage.py migrate
```

5. Inicia el servidor de desarrollo de Django:

```bash
python manage.py runserver 8001
```

### Configuración del Frontend

1. Navega al directorio del frontend:

```bash
cd client
```

2. Instala las dependencias:

```bash
npm install
```

3. Inicia la aplicación de React:

```bash
npm start
```

### Uso

1. Abre tu navegador y navega a `http://localhost:5174` para ver la aplicación en funcionamiento.
2. Usa la interfaz para crear, actualizar, eliminar y listar tareas.
