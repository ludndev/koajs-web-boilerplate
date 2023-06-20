const controller = {};

controller.index = async (ctx) => {
    const params = ctx.params;

    await ctx.render('home', {
        message: "Hello World !",
    });
};

module.exports = controller;
