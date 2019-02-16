let GameEngine = (function (global) {
    let doc = global.document,
        win = global.window,
        canvas = doc.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        lastTime;


    canvas.width = 1000;
    canvas.height = 600;
    ctx.font = "15px Arial"
    ctx.fillText("SCORE :  " + score.toString(), 700, 100);
    doc.body.appendChild(canvas);

    function main() {
        let now = Date.now(),
            dt = (now - lastTime) / 1000.0;

        update(dt);
        render();

        lastTime = now;
        win.requestAnimationFrame(main);
    }


    function init() {
        reset();
        lastTime = Date.now();
        main();
    }

    function update(dt) {
        updateEntities(dt);
        // checkCollisions();
    }

    function updateEntities(dt) {
        allEnemies.forEach(function (enemy) {
            enemy.update(dt);
        });

        allItem.forEach(function (item) {
            item.update(dt);
        })
        player.update();
        ctx.fillText("SCORE :  " + score.toString(), 700, 100);
    }


    function render() {
        // Before drawing, clear existing canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        renderEntities();
    }

    function renderEntities() {

        allEnemies.forEach(function (enemy) {
            enemy.render();
        });

        allLife.forEach(function (life) {
            life.render();
        })

        allItem.forEach(function (item) {
            item.render();
        })

        // life.render();
        player.render();
        ctx.fillText("SCORE :  " + score.toString(), 700, 100);
    }

    function reset() {
        // noop
    }

    Resources.load([
        'images/f.png',
        'images/heart.png',
        'images/char-horn-girl.png',
        'images/item/chicken.png',
        'images/item/cup-cake.png',
        'images/item/hamburger.png',
        'images/pythonChar.png'
    ]);
    Resources.onReady(init);


    global.ctx = ctx;
})(this);
