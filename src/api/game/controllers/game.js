"use strict";

/**
 * game controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::game.game", ({ strapi }) => ({
  // Method 1: Creating an entirely custom action
  async getGames(ctx) {
    console.log("USER", ctx.state.user);

    let entries = await strapi.entityService.findMany("api::game.game", {
      fields: ["title", "description"],
      filters: { dungeon_master: ctx.state.user.id },
      sort: { schedule: "ASC" },
      populate: {
        dungeon_master: {
          fields: ["username"],
        },
        joiners: {
          fields: ["username"],
        },
        players: {
          fields: ["username"],
        },
      },
    });

    // entries = entries.map((game) => {
    //   game.players = game.players.map((player) => player.username);
    //   return game;
    // });

    return entries;
  },
}));
