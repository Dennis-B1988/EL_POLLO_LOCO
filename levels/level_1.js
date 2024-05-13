const level_1 = new Level(
    [
        new Chicken(), 
        new Chicken(), 
        new Chicken(), 
    ],
    [
        new SmallChicken(),
        new SmallChicken(),
        new SmallChicken(),
        new SmallChicken(),
    ],
    [
        new Endboss()
    ],
    [
        new Cloud()
    ],
    [
        new BackgroundObject('./assets/img/5_background/layers/air.png', -719),
        new BackgroundObject('./assets/img/5_background/layers/3_third_layer/2.png', -719),
        new BackgroundObject('./assets/img/5_background/layers/2_second_layer/2.png', -719),
        new BackgroundObject('./assets/img/5_background/layers/1_first_layer/2.png', -719),

        new BackgroundObject('./assets/img/5_background/layers/air.png', 0),
        new BackgroundObject('./assets/img/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('./assets/img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('./assets/img/5_background/layers/1_first_layer/1.png', 0),

        new BackgroundObject('./assets/img/5_background/layers/air.png', 719),
        new BackgroundObject('./assets/img/5_background/layers/3_third_layer/2.png', 719),
        new BackgroundObject('./assets/img/5_background/layers/2_second_layer/2.png', 719),
        new BackgroundObject('./assets/img/5_background/layers/1_first_layer/2.png', 719),

        new BackgroundObject('./assets/img/5_background/layers/air.png', 719 * 2),
        new BackgroundObject('./assets/img/5_background/layers/3_third_layer/1.png', 719 * 2),
        new BackgroundObject('./assets/img/5_background/layers/2_second_layer/1.png', 719 * 2),
        new BackgroundObject('./assets/img/5_background/layers/1_first_layer/1.png', 719 * 2),

        new BackgroundObject('./assets/img/5_background/layers/air.png', 719 * 3),
        new BackgroundObject('./assets/img/5_background/layers/3_third_layer/2.png', 719 * 3),
        new BackgroundObject('./assets/img/5_background/layers/2_second_layer/2.png', 719 * 3),
        new BackgroundObject('./assets/img/5_background/layers/1_first_layer/2.png', 719  * 3),

        new BackgroundObject('./assets/img/5_background/layers/air.png', 719 * 4),
        new BackgroundObject('./assets/img/5_background/layers/3_third_layer/1.png', 719 * 4),
        new BackgroundObject('./assets/img/5_background/layers/2_second_layer/1.png', 719 * 4),
        new BackgroundObject('./assets/img/5_background/layers/1_first_layer/1.png', 719 * 4),

        new BackgroundObject('./assets/img/5_background/layers/air.png', 719 * 5),
        new BackgroundObject('./assets/img/5_background/layers/3_third_layer/2.png', 719 * 5),
        new BackgroundObject('./assets/img/5_background/layers/2_second_layer/2.png', 719 * 5),
        new BackgroundObject('./assets/img/5_background/layers/1_first_layer/2.png', 719 * 5),

        new BackgroundObject('./assets/img/5_background/layers/air.png', 719 * 6),
        new BackgroundObject('./assets/img/5_background/layers/3_third_layer/1.png', 719 * 6),
        new BackgroundObject('./assets/img/5_background/layers/2_second_layer/1.png', 719 * 6),
        new BackgroundObject('./assets/img/5_background/layers/1_first_layer/1.png', 719 * 6),
    ],
    [
        new Bottles('./assets/img/6_salsa_bottle/salsa_bottle.png', 200, 100),
        new Bottles('./assets/img/6_salsa_bottle/salsa_bottle.png', 250, 100),
        new Bottles('./assets/img/6_salsa_bottle/salsa_bottle.png', 300, 100),
        new Bottles('./assets/img/6_salsa_bottle/salsa_bottle.png', 350, 100),
        new Bottles('./assets/img/6_salsa_bottle/salsa_bottle.png', 400, 100),
        new Bottles('./assets/img/6_salsa_bottle/salsa_bottle.png', 450, 100),
    ],
    [
        new Coins('./assets/img/8_coin/coin_2.png', 250, 340),
        new Coins('./assets/img/8_coin/coin_2.png', 290, 300),
        new Coins('./assets/img/8_coin/coin_2.png', 330, 260),
        new Coins('./assets/img/8_coin/coin_2.png', 370, 220),
        new Coins('./assets/img/8_coin/coin_2.png', 410, 180),
        new Coins('./assets/img/8_coin/coin_2.png', 450, 180),
        new Coins('./assets/img/8_coin/coin_2.png', 490, 220),
        new Coins('./assets/img/8_coin/coin_2.png', 530, 260),
        new Coins('./assets/img/8_coin/coin_2.png', 570, 300),
        new Coins('./assets/img/8_coin/coin_2.png', 610, 340),
    ]
);