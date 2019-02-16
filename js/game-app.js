let Enemy = function (x, y, speed) {
    this.x = 500;
    this.y = 200;
    this.speed = speed;
    this.count = 0;
    this.direction = 0;
    this.sprite = 'images/f.png';
};

Enemy.prototype.update = function (dt) {
    this.speed = 100 + Math.floor(Math.random() * 222);
    if (this.count == changeDir) {
        this.count = 0;
        this.direction = makeRandom(0, 3);
        //왼 위 오 아래
    }

    switch (this.direction) {
        case 0:
            this.x -= this.speed * dt;
            break;
        case 1:
            this.y -= this.speed * dt;
            break;
        case 2:
            this.x += this.speed * dt;
        case 3:
            this.y += this.speed * dt;
        default:
    }

    this.count += 1;

    if (this.x > 1000)
        this.x = 500;
    if (this.x < 0)
        this.x = 500;
    if (this.y < 0)
        this.y = 200;
    if (this.y > 600)
        this.y = 200

    if (player.x < this.x + 80 &&
        player.x + 80 > this.x &&
        player.y < this.y + 60 &&
        60 + player.y > this.y) {
        player.x = 202;
        player.y = 405;

        if (allLife.length > 0) {
            allLife.pop();
        } else {
            window.alert("GAME END")
        }
    }
    ;
};

Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

let Player = function (x, y) {
    this.x = x;
    this.y = y;
    this.player = 'images/pythonChar.png';
};

Player.prototype.update = function (dt) {
};

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.player), this.x, this.y);
};

Player.prototype.handleInput = function (keyPress) {

    if (keyPress == 'left' && this.x > 0)
        this.x -= playerMove//102;

    if (keyPress == 'right' && this.x < 1000)
        this.x += playerMove//102;

    if (keyPress == 'up' && this.y > 0)
        this.y -= playerMove//83;

    if (keyPress == 'down' && this.y < 405)
        this.y += playerMove//83;

    // if (this.y < 0) {
    //     setTimeout(() => {
    //         this.x = 202;
    //         this.y = 405;
    //     }, 800);
    // };
};

let allEnemies = [];
let enemyLocation = [63, 147, 230];
//top       bottom

enemyLocation.forEach(function (locationY) {
    enemy = new Enemy(0, locationY, 200);
    allEnemies.push(enemy);
});

let player = new Player(202, 405);

document.addEventListener('keyup', function (e) {
    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});

let Life = function (x) {
    this.x = x;
    this.y = 10;
    this.sprite = 'images/heart.png';
};

Life.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Life.prototype.update = function () {
}

let allLife = [];
let lifeLocation = [900, 850, 800];

lifeLocation.forEach(function (locationX) {
    life = new Life(locationX);
    allLife.push(life);
});


let ItemImage = [
    'images/item/chicken.png',
    'images/item/cup-cake.png',
    'images/item/hamburger.png'];

let Item = function (x, y, speed, num) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.count = 0;
    this.direction = 0;
    this.sprite = ItemImage[num];
}

Item.prototype.update = function (dt) {
    this.x -= this.speed * dt;

    if (this.count == changeDir) {
        this.count = 0;
        this.direction = makeRandom(0, 3);
        //왼 위 오 아래
    }

    switch (this.direction) {
        case 0:
            this.x -= this.speed * dt;
            break;
        case 1:
            this.y -= this.speed * dt;
            break;
        case 2:
            this.x += this.speed * dt;
        case 3:
            this.y += this.speed * dt;
        default:
        // code block
    }

    this.count += 1;

    if (this.x > 1000)
        this.x = 0;

    if (this.x < 0)
        this.x = 1000;

    if (this.y < 0)
        this.y = 600;

    if (this.y > 600)
        this.y = 0

    if (player.x < this.x + 80 &&
        player.x + 80 > this.x &&
        player.y < this.y + 60 &&
        60 + player.y > this.y) {
        player.x = 202;
        player.y = 405;
        this.x = 1000;
        this.speed = 100 + Math.floor(Math.random() * 222);
        score += 5;
    }
    ;
}

Item.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

let ItemLocation = [30, 80, 130, 180];
let itemImg = [0, 1, 2, 0, 1, 2]
let allItem = []

for (let i = 0; i < ItemLocation.length; ++i) {
    item = new Item(1000, ItemLocation[i], 200, itemImg[i]);
    allItem.push(item);
}

function makeRandom(start, end) {
    return Math.floor(Math.random() * (end + 1)) + start;
}

let score = 0;
let playerMove = 40;
let changeDir = 20;
