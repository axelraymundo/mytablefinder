"use strict";

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/games/getGames",
      handler: "game.getGames",
    },
  ],
};
