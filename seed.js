import Project from './src/models/projects.js'

const seedDatabase = async () => {
  try {
    await Project.deleteMany();
    const sampleProjects = [
      {
        title: "Inventary Backend",
        description: "Este proyecto proporciona una API para la gestión de ítems en una tienda online, con funcionalidades de registro e inicio de sesión de usuarios, así como creación, actualización, eliminación y visualización de ítems.",
        technologies: ["JavaScript", "NodeJS", "Express", "MongoDB", "JWT", "BcryptJS", "Winston"],
        link: "https://github.com/SchetoT/inventary",
      },
      {
        title: "Inventary Frontend",
        description: "Este es un proyecto de una plataforma para la administración de productos. Los usuarios pueden crear, editar, ver y eliminar productos. Además, los administradores tienen acceso a funcionalidades adicionales como la gestión de ítems. El proyecto está basado en React para el frontend, con un enfoque en la gestión eficiente de los productos.",
        technologies: ["React", "React Router", "Context API"],
        link: "https://github.com/SotoEzequiel/Front-end-Inventory",
      },
      {
        title: "Control de Stock",
        description: "ControlStock es una aplicación diseñada para gestionar inventarios y controlar el stock de productos de manera eficiente. Este sistema permite a los usuarios realizar un seguimiento de los productos, sus cantidades disponibles y actualizaciones en tiempo real, asegurando una gestión óptima de los recursos. Además, incluye autenticación y autorización mediante Spring Security y JWT (JSON Web Tokens) para garantizar la seguridad de la aplicación.",
        technologies: ["JAVA", "Spring Boot", "Spring Data JPA", "Spring Security", "JWT", "MySQL"],
        link: "https://github.com/SchetoT/controlstock",
      },
      {
        title: "E-commerce",
        description: "Este proyecto es una aplicación CRUD para un sistema de comercio electrónico, desarrollada con Spring Boot y MySQL. La aplicación proporciona una interfaz para gestionar productos, clientes, carritos de compras y facturas. Utiliza Spring Data JPA para la persistencia de la base de datos y Spring Web para crear servicios RESTful.",
        technologies: ["JAVA", "Spring Boot", "Spring Data JPA", "Spring Security","Lombok", "MySQL"],
        link: "https://github.com/SchetoT/ecommerce",
      }
    ];
    await Project.insertMany(sampleProjects);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Seeding error:", error);
  }
};

export default seedDatabase;