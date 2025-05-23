/**
 * Constantes de texto para la aplicación
 * Centralizadas para facilitar la internacionalización y mantenimiento
 */

export const Strings = {
  app: {
    name: 'Boring Template',
  },
  common: {
    loading: 'Cargando datos...',
    next: 'Siguiente',
    skip: 'Saltar',
    start: 'Comenzar',
    login: 'Iniciar sesión',
    register: 'Registrarse',
    submit: 'Enviar',
    cancel: 'Cancelar',
    save: 'Guardar',
    delete: 'Eliminar',
    error: 'Error',
    success: 'Éxito',
  },
  welcome: {
    title: '¡Bienvenido a la app!',
    subtitle: 'Un template base para comenzar tu próximo proyecto móvil.',
  },
  onboarding: {
    screens: [
      {
        title: 'Personalizable y Modular',
        subtitle: 'Utiliza y adapta componentes a tus necesidades específicas.',
      },
      {
        title: 'Temas Claro y Oscuro',
        subtitle: 'Disfruta de una experiencia visual adaptada a tus preferencias.',
      },
      {
        title: 'Navegación Intuitiva',
        subtitle: 'Flujos de usuario optimizados para mejorar la experiencia.',
      },
    ],
  },
  auth: {
    login: {
      title: 'Bienvenido a Boring-Template-Expo',
      emailPlaceholder: 'Correo electrónico',
      passwordPlaceholder: 'Contraseña',
      forgotPassword: '¿Olvidaste tu contraseña?',
      noAccount: '¿Aún no tienes una cuenta?',
      registerAction: 'Regístrate!',
      loginButton: 'Iniciar Sesión',
    },
    register: {
      title: 'Crear una cuenta',
      emailPlaceholder: 'Correo electrónico',
      firstNamePlaceholder: 'Nombre',
      lastNamePlaceholder: 'Apellido',
      passwordPlaceholder: 'Contraseña',
      confirmPasswordPlaceholder: 'Confirmar contraseña',
      hasAccount: '¿Ya tienes una cuenta?',
      loginAction: 'Inicia sesión',
      registerButton: 'Registrarse',
      avatarTitle: 'Foto de perfil',
      avatarText: 'Opcional',
    },
    validation: {
      emailRequired: 'El correo es obligatorio',
      emailInvalid: 'Ingresa un correo electrónico válido',
      passwordRequired: 'La contraseña es obligatoria',
      passwordMin: 'La contraseña debe tener al menos 6 caracteres',
      firstNameRequired: 'El nombre es obligatorio',
      lastNameRequired: 'El apellido es obligatorio',
      confirmPasswordRequired: 'Confirma tu contraseña',
      passwordsNoMatch: 'Las contraseñas no coinciden',
    },
    errors: {
      loginFailed: 'Email o contraseña incorrectos',
      registerFailed: 'Error al registrar usuario',
    },
  },
}; 