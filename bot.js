const {Telegraf} = require("telegraf");
const request = require("request");
const token = "6987466691:AAGrDvKgEjbYSye4N-GDwyGNZOeoLsgqYH0";
const bot = new Telegraf(token);


bot.command("start", async (ctx) => {
    await ctx.replyWithHTML("Assalomu aleykum 😊 Iltimos video linkini tashlang 🔗");
});

bot.on("message", async (ctx) => {
    const link = ctx.update.message.text;
    llink = link.split('');
    if (llink[0] === "h", llink[1] === "t", llink[2] === "t", llink[3] === "p", llink[4] === "s", llink[5] === ":", llink[6] === "/", llink[7] === "/", llink[8] === "w", llink[9] === "w", llink[10] === "w", llink[11] === ".", llink[12] === "i", llink[13] === "n", llink[14] === "s", llink[15] === "t", llink[16] === "a", llink[17] === "g", llink[18] === "r", llink[19] === "a", llink[20] === "m") {
        const options = {
            method: 'GET',
            url: 'https://instagram-media-downloader.p.rapidapi.com/rapid/post.php',
            qs: {
                url: link
            },
            headers: {
                'X-RapidAPI-Key': '80bd4853c1msh6e4fa593cc6d8ecp14d94fjsnab40068255be',
                'X-RapidAPI-Host': 'instagram-media-downloader.p.rapidapi.com',
                useQuerystring: true
            }
        };

        request(options, async function (error, response, body) {
            if (error) throw new Error(error);
            const data = JSON.parse(body);
            await ctx.telegram.sendVideo(ctx.chat.id, {url: `${data.video}`}, {caption: 'Shakhzod Izatullaev'})
        });
    } else {
        await ctx.replyWithHTML(`Iltimos linkni qaytib tekshiring😕`)
    }
})
//
bot.launch().then(() => {
    console.log("bot start")
});