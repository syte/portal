"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Posts",
      [
        {
          title: "Understanding the Use Cases for B-Trees",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum nunc, pretium eu porttitor sed, porta at orci. Mauris sed ex in urna fringilla efficitur. Donec vel maximus sapien, et scelerisque eros. Aliquam consectetur ex at condimentum volutpat. Quisque sit amet blandit tellus. Suspendisse vitae felis nec tortor imperdiet pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec euismod risus ut est lobortis cursus.",
          userId: "ce163fa7-55a2-4d23-8411-d28bc55640d5",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Understanding How to Setup a Saltwater Aquarium",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum nunc, pretium eu porttitor sed, porta at orci. Mauris sed ex in urna fringilla efficitur. Donec vel maximus sapien, et scelerisque eros. Aliquam consectetur ex at condimentum volutpat. Quisque sit amet blandit tellus. Suspendisse vitae felis nec tortor imperdiet pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec euismod risus ut est lobortis cursus.",
          userId: "ce163fa7-55a2-4d23-8411-d28bc55640d5",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Zion Williamson to Atlanta Hawks!",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum nunc, pretium eu porttitor sed, porta at orci. Mauris sed ex in urna fringilla efficitur. Donec vel maximus sapien, et scelerisque eros. Aliquam consectetur ex at condimentum volutpat. Quisque sit amet blandit tellus. Suspendisse vitae felis nec tortor imperdiet pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec euismod risus ut est lobortis cursus.",
          userId: "ce163fa7-55a2-4d23-8411-d28bc55640d5",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "What are Bloom Filters?",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum nunc, pretium eu porttitor sed, porta at orci. Mauris sed ex in urna fringilla efficitur. Donec vel maximus sapien, et scelerisque eros. Aliquam consectetur ex at condimentum volutpat. Quisque sit amet blandit tellus. Suspendisse vitae felis nec tortor imperdiet pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec euismod risus ut est lobortis cursus.",
          userId: "ce163fa7-55a2-4d23-8411-d28bc55640d5",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Postgres vs SQL Server Comparison",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum nunc, pretium eu porttitor sed, porta at orci. Mauris sed ex in urna fringilla efficitur. Donec vel maximus sapien, et scelerisque eros. Aliquam consectetur ex at condimentum volutpat. Quisque sit amet blandit tellus. Suspendisse vitae felis nec tortor imperdiet pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec euismod risus ut est lobortis cursus.",
          userId: "ce163fa7-55a2-4d23-8411-d28bc55640d5",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "A Review of Phoenix",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum nunc, pretium eu porttitor sed, porta at orci. Mauris sed ex in urna fringilla efficitur. Donec vel maximus sapien, et scelerisque eros. Aliquam consectetur ex at condimentum volutpat. Quisque sit amet blandit tellus. Suspendisse vitae felis nec tortor imperdiet pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec euismod risus ut est lobortis cursus.",
          userId: "ce163fa7-55a2-4d23-8411-d28bc55640d5",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Floyd Mayweathers Exhibition Match in Japan",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum nunc, pretium eu porttitor sed, porta at orci. Mauris sed ex in urna fringilla efficitur. Donec vel maximus sapien, et scelerisque eros. Aliquam consectetur ex at condimentum volutpat. Quisque sit amet blandit tellus. Suspendisse vitae felis nec tortor imperdiet pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec euismod risus ut est lobortis cursus.",
          userId: "ce163fa7-55a2-4d23-8411-d28bc55640d5",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "New Drake Album Dropping Thursday",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum nunc, pretium eu porttitor sed, porta at orci. Mauris sed ex in urna fringilla efficitur. Donec vel maximus sapien, et scelerisque eros. Aliquam consectetur ex at condimentum volutpat. Quisque sit amet blandit tellus. Suspendisse vitae felis nec tortor imperdiet pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec euismod risus ut est lobortis cursus.",
          userId: "ce163fa7-55a2-4d23-8411-d28bc55640d5",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Discrete Math Introduction",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum nunc, pretium eu porttitor sed, porta at orci. Mauris sed ex in urna fringilla efficitur. Donec vel maximus sapien, et scelerisque eros. Aliquam consectetur ex at condimentum volutpat. Quisque sit amet blandit tellus. Suspendisse vitae felis nec tortor imperdiet pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec euismod risus ut est lobortis cursus.",
          userId: "ce163fa7-55a2-4d23-8411-d28bc55640d5",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Acropora Bleaching in the Carribean due to Global Warming",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum nunc, pretium eu porttitor sed, porta at orci. Mauris sed ex in urna fringilla efficitur. Donec vel maximus sapien, et scelerisque eros. Aliquam consectetur ex at condimentum volutpat. Quisque sit amet blandit tellus. Suspendisse vitae felis nec tortor imperdiet pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec euismod risus ut est lobortis cursus.",
          userId: "ce163fa7-55a2-4d23-8411-d28bc55640d5",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Surviving a bear attack",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum nunc, pretium eu porttitor sed, porta at orci. Mauris sed ex in urna fringilla efficitur. Donec vel maximus sapien, et scelerisque eros. Aliquam consectetur ex at condimentum volutpat. Quisque sit amet blandit tellus. Suspendisse vitae felis nec tortor imperdiet pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec euismod risus ut est lobortis cursus.",
          userId: "ce163fa7-55a2-4d23-8411-d28bc55640d5",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Creating a Multi-tenant application",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum nunc, pretium eu porttitor sed, porta at orci. Mauris sed ex in urna fringilla efficitur. Donec vel maximus sapien, et scelerisque eros. Aliquam consectetur ex at condimentum volutpat. Quisque sit amet blandit tellus. Suspendisse vitae felis nec tortor imperdiet pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec euismod risus ut est lobortis cursus.",
          userId: "77dd3beb-aa0a-4370-9c0d-2bb1dac5b038",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "A review of Brilliant.org",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum nunc, pretium eu porttitor sed, porta at orci. Mauris sed ex in urna fringilla efficitur. Donec vel maximus sapien, et scelerisque eros. Aliquam consectetur ex at condimentum volutpat. Quisque sit amet blandit tellus. Suspendisse vitae felis nec tortor imperdiet pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec euismod risus ut est lobortis cursus.",
          userId: "77dd3beb-aa0a-4370-9c0d-2bb1dac5b038",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title:
            "Why Lance Armstrong Shouldn't be Penalized for Performance Enchancement Drugs",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum nunc, pretium eu porttitor sed, porta at orci. Mauris sed ex in urna fringilla efficitur. Donec vel maximus sapien, et scelerisque eros. Aliquam consectetur ex at condimentum volutpat. Quisque sit amet blandit tellus. Suspendisse vitae felis nec tortor imperdiet pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec euismod risus ut est lobortis cursus.",
          userId: "77dd3beb-aa0a-4370-9c0d-2bb1dac5b038",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "What is the Curiosity Rover up to?",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum nunc, pretium eu porttitor sed, porta at orci. Mauris sed ex in urna fringilla efficitur. Donec vel maximus sapien, et scelerisque eros. Aliquam consectetur ex at condimentum volutpat. Quisque sit amet blandit tellus. Suspendisse vitae felis nec tortor imperdiet pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec euismod risus ut est lobortis cursus.",
          userId: "77dd3beb-aa0a-4370-9c0d-2bb1dac5b038",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Posts", null, {});
  }
};
