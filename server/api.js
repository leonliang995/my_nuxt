const router = require('koa-router')({ prefix: "/api" });
const goods = [
  { id: 1, text: "大衣", price: "199" },
  { id: 2, text: "牛仔裤", price: "99" },
];

router.get("/goods", ctx => {
  ctx.body = {
    ok: 1,
    goods
  }
});
router.get("/detail", ctx => {
  ctx.body = {
    ok: 1,
    data: goods.find(good => good.id == ctx.query.id)
  }
});
router.post("/login", ctx => {
  const user = ctx.request.body;
  if (user.username === "leon" && user.password === "123") {
    //存入token
    const token = "a mock token";
    ctx.cookies.set('token', token);
    ctx.body = { ok: 1, token };
  } else {
    ctx.body = { ok: 0 };
  }
});

module.exports = router;